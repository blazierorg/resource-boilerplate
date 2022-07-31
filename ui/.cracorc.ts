import path from "path";
import scope from "react-dev-utils/ModuleScopePlugin";

export default {
    webpack: {
        alias: {
            "@resource/types": path.resolve(__dirname, "../types"),
            "@resource/shared": path.resolve(__dirname, "../shared"),
            "@resource/config": path.resolve(__dirname, "../config"),
        },
        configure: webpackConfig => {
            if (
                webpackConfig.mode === "development" &&
                process.env.IN_GAME_DEV
            ) {
                webpackConfig.devtool = "eval-source-map";
                webpackConfig.output.path = path.join(__dirname, "build");
            }

            return webpackConfig;
        },
    },

    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins =
                        webpackConfig.resolve.plugins.filter(
                            plugin => !(plugin instanceof scope),
                        );

                    return webpackConfig;
                },
            },
        },
    ],

    devServer: devServerConfig => {
        if (process.env.IN_GAME_DEV) {
            devServerConfig.devMiddleware.writeToDisk = true;
        }

        return devServerConfig;
    },
};
