export function Slider({name, min, max}){
    function SendMessage(value, name){
        gameInstance.SendMessage("WaveLine", "Set" + name + "FromWeb", value);
    }

    return(
        <>
            <label htmlFor={name}>
                {name + ":"} <output>180</output>
            </label>
            <input type="range" id={name} min={min} max={max}
                   onChange={e => SendMessage(e.target.value, {name})}/>
        </>
    )
}