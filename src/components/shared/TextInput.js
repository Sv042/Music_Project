const TextInput = ({label,placeholder,className,value,setValue,labelClassName}) =>{
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className={`font-sans ${labelClassName}`}>
                {label}
            </label>
            <input type="text" 
            placeholder={placeholder} className="p-2 border border-gray-600 border-solid rounded placeholder-gray-500"
            id={label} 
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
                }}></input>
        </div>
        
    ); 
};

export default TextInput;