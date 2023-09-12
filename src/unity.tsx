import {Fragment, useState, useEffect, useCallback} from "react";
import {Unity, UnityConfig, useUnityContext} from "react-unity-webgl";

const unityConfig = {
    loaderUrl: "build/unity.loader.js",
    dataUrl: "build/unity.data",
    frameworkUrl: "build/unity.framework.js",
    codeUrl: "build/unity.wasm",
};

export function Canvas(){
    const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState();
    const [score, setScore] = useState();

    const { unityProvider,
            isLoaded, sendMessage,
            loadingProgression,
            addEventListener,
            removeEventListener } = useUnityContext(unityConfig as UnityConfig);

    const handleGameOver = useCallback((userName, score) => {
        setIsGameOver(true);
        setUserName(userName);
        setScore(score);
    }, []);

    const loadingPercentage = Math.round(loadingProgression * 100);

    useEffect(() => {
        addEventListener("GameOver", handleGameOver);
        return () => {
            removeEventListener("GameOver", handleGameOver);
        };
    }, [addEventListener, removeEventListener, handleGameOver]);

    return (
        <Fragment>
            <Unity className="unity" unityProvider={unityProvider} />
            {!isLoaded && (
                <div className="loading-overlay">
                    <p>Loading... ({loadingPercentage}%)</p>
                </div>
            )}
            {isGameOver && (
                <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
            )}
        </Fragment>
    );
}