import Topo from "@/components/Topo";
import DisplayState from "@/components/DisplayState";

import { useState } from "react";

export default function Usestate() {
    const [cont, setCont] = useState<number>(0);

    return (
        <>
            <Topo />
            <div className="m-5">
                <DisplayState valor={cont} fvalor={setCont}></DisplayState>
            </div>
        </>
    );
};
