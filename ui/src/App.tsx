import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Nui } from "softjunk-ui";

import { nuiShowness } from "./store/atoms";

const App: FC = () => {
    const [show, setShow] = useRecoilState<boolean>(nuiShowness);

    useEffect(() => {
        setShow(true);
    }, [setShow]);

    return <Nui show={show}>ReactJS Boilerplate</Nui>;
};

export default App;
