function InputForm({ type, placeHolder, value, onChange, onBlur }) {
    return (
        <input name={type} type={type} placeholder={placeHolder} className="block w-full md:w-[40%] border-b-2 py-1.5 pl-2 pr-10 text-blue-800 text-xl font-light outline-none placeholder:text-gray-400 placeholder:text-lg placeholder:tracking-wide placeholder:font-light focus:border-b-2 focus:border-indigo-600 focus:outline-none focus:font-light focus:font-xl" required autoComplete="nope" onChange={onChange} onBlur={onBlur} value={value} />
    );
}

export default InputForm;