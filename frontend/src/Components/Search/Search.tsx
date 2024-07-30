import React, {ChangeEvent, MouseEvent, useState} from 'react';

interface SearchProps {
    // Define your props here
}

const Search: React.FC<SearchProps> = (props : SearchProps):JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        setSearch(e.target.value);

    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e);

    };

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e) } />
            <button  onClick={(e) => handleClick(e)}>Search</button>
        </div>
    );
}

export default Search;