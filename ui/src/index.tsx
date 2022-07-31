import { Resolutions, ThemeProvider } from "@softjunk/ui";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";

import App from "./App";

const element = document.getElementById("root") as HTMLElement;
const root = createRoot(element);

root.render(
    <ThemeProvider>
        <RecoilRoot>
            <Resolutions />
            <App />
        </RecoilRoot>
    </ThemeProvider>,
);
