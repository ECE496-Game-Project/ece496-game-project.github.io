export function Button({ name, click }){
    return(
        <>
            <button onClick={() => click}>{name}</button>
        </>
    )
}

export function CameraButton(){
    function camera(name){
        console.log('Click Button ' + name);
        gameInstance?.SendMessage('Main Camera', 'RotateToAxis' + name);
    }

    return(
        <>
            <Button name={"X"} click={() => camera('X')}/>
            <Button name={"Y"} click={() => camera('Y')}/>
            <Button name={"Z"} click={() => camera('Z')}/>
        </>
    )
}


