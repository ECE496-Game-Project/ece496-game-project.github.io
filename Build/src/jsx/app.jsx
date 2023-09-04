import { useEffect, useState } from "react"
import { UI } from "./ui/control_panel"
import { UnityScene } from "./unity/unity_scene"
import "../css/styles.css"

export default function App() {
    return (
        <>
            <h1 className="header">Polarizer</h1>
            <UI/>
            <UnityScene/>
        </>
    )
}