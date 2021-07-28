import { FC } from "react"

interface SearchBarType {
    setSearch: FunctionConstructor
}

export const SearchBar: FC<SearchBarType> = ({ setSearch }): JSX.Element => {
    return <div>
        <input 
        className=" text-center rounded-2xl outline-none w-4/5 bg-[#f2f2f2] h-16" 
        placeholder="Search Properties"/>
    </div>
}