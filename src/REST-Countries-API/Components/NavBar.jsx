import { useState } from "react";
import { FilterOptions } from "./FilterOptions";
import { MoonIcon } from "./MoonIcon";

export const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(true);
    }
    return (
        <>
            <header className="navHeader p-3 d-flex justify-content-between align-items-center">
                <h4>
                    Where in the world?
                </h4>
                <MoonIcon
                    onClick = {handleDarkMode}
                />
            </header>
            <FilterOptions
                darkMode={darkMode}
            />
        </>
    )
}