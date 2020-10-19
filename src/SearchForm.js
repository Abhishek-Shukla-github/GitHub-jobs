import React, { useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeContext } from "./contexts/ThemeContext";


export default function SearchForm({params,onParamChange}) {
    const { isDarkMode } = useContext(ThemeContext);
    const style = {
        margin: "30px",
        backgroundColor: isDarkMode? "white" : "white",
    }
    return (
        <>
            <form>
                <div>
                <TextField style={{margin:"30px"}} label="Positon" type="text" onChange={onParamChange} value={params.description} name="description"/>
                <TextField style={{margin:"30px"}} label="Location" type="text" onChange={onParamChange} value={params.location} name="location"/>
                <label> Only Full-time :-
                    <Checkbox style={{margin:"45px",marginLeft:"0px"}} onChange={onParamChange} value={params.full_time} id="full_time" name="full_time" />
                </label>
                </div>
            </form>
       </>
    )
}
