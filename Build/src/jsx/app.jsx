import { useEffect, useState } from "react"
import React from "react"
import { Unity, useUnityContext } from "react-unity-webgl";
import { UI } from "./ui/control_panel"
import { UnityScene } from "./unity/unity_scene"
import "../css/styles.css"

export default function App() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/src/js/unity.loader.js",
        dataUrl: "Build/src/unity_data/unity.data",
        frameworkUrl: "Build/src/js/unity.framework.js",
        codeUrl: "Build/src/unity_data/unity.wasm",
    });

    return (
        <>
            <UI/>
            <UnityScene/>
            <Unity unityProvider={unityProvider} />
        </>
    )
}