export function InputField({name}){
    function SendMessage(value, name){
        gameInstance.SendMessage("WaveLine", "Set" + name + "FromWeb", value);
    }

    return(
        <>
            <label htmlFor={name}>{name + ':'}</label>
            <input type="number" id={name}
                   onChange={e => SendMessage(e.target.value, {name})}/>
        </>
    )
}