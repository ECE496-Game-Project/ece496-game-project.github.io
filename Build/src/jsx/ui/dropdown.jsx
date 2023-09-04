export function DropdownList({name, options}){
    function SendMessage(value, name){
        gameInstance.SendMessage("WaveLine", "Set" + name + "FromWeb", value);
    }

    return(
        <>
            <label htmlFor={name}>{name + ':'}</label>
            <select id={name}
                    onChange={e => SendMessage(e.target.value, {name})}>
                {Object.keys({options}).map(optionKey => (
                    <option key={optionKey} value={options[optionKey]}>
                        {options[optionKey]}
                    </option>
                ))}
            </select>
        </>
    )
}