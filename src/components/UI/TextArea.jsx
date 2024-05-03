function TextArea({ name, value, onChange, onBlur}) {
    return (
        <textarea name={name} id="" cols="45" rows="6" placeholder="Message" className="block w-full md:w-[40%] rounded-md border-2 py-1.5 pl-2 pr-1.5 text-blue-800 text-xl font-light outline-none placeholder:text-gray-400 placeholder:text-lg placeholder:tracking-wide placeholder:font-light focus:border-2 focus:border-blue-700/90 focus:outline-none resize-none focus:font-light" required onChange={onChange} value={value} onBlur={onBlur}></textarea>
    );
}

export default TextArea