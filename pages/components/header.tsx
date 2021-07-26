import React from "react"
import Image from "next/image"
import { SearchBar } from "./searchBar"

export const Header = (): JSX.Element => {
    return (
        <div className="w-full">
            <div className="flex">
            <div className="p-16">
                <Image
                    src='/logo.png'
                    width={150}
                    height={60}
                />
            </div>
            <div className="w-full align-middle mt-14 ml-20 "> 
                <SearchBar/>
            </div>
           
            </div>
        </div>
    )
}
