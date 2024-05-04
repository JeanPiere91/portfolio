function UnorderedList({ list }) {
    return (
        <ul className="px-28 text-blue-950/80 font-normal list-disc">
            {list.map((item) => 
                <li key={item.id} className="">{item.description}</li>
            )}
        </ul>
    );
}

export default UnorderedList;