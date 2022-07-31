const { build } = require("esbuild");
const colors = require("colors");
const config = require("../.build.json");
const options = config.options;

const isWatch = process.argv.findIndex((argItem) => argItem === "--watch") >= 0;

function runBuild(config) {
    build({
        ...config,
        watch: isWatch
            ? {
                  onRebuild: function (err, res) {
                      if (err) {
                          return console.error(
                              `[${colors.red("BUILDER")}]: Error on listening`,
                              err
                          );
                      }

                      console.log(
                          `[${colors.green("BUILDER")}]: Listened to changes.`
                      );
                  },
              }
            : false,
    });
}

if (isWatch) {
    console.log(`[${colors.green("BUILDER")}]: Started listening to changes.`);
}

if (Array.isArray(options)) {
    options.map(function (c) {
        runBuild(c);
    });
} else {
    runBuild(options);
}
