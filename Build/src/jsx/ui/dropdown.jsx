export function DropdownList({name}){
    function SendMessage(value, name){
        gameInstance.SendMessage("WaveLine", "Set" + name + "FromWeb", value);
    }

    return(
        <>
            <label htmlFor={name}>{name + ':'}</label>
            <select id={name}
                    onChange={e => SendMessage(e.target.value, {name})}/>
        </>
    )
}