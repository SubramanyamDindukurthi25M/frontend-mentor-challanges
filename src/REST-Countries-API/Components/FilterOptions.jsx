import { useState } from "react";
import { DisplayData } from "./DisplayData";

export const FilterOptions = ({darkMode}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div className="formOptions py-3" style={{backgroundColor:darkMode?'#858585':'white'}}>
            <form autoComplete="off">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control-sm"
                        value={inputValue}
                        onChange={handleInputValue}
                        placeholder='Search for a country...'
                    />
                </div>
            </form>
            <DisplayData
                inputValue={inputValue}
            />
        </div>
    )
}