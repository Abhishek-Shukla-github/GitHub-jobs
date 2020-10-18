import React from 'react';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";


export default function SearchForm({params,onParamChange}) {
    return (
        <>
            <form>
                <TextField style={{margin:"30px"}} label="Positon" type="text" onChange={onParamChange} value={params.description} name="description"/>
                <TextField style={{margin:"30px"}} label="Location" type="text" onChange={onParamChange} value={params.location} name="location"/>
                <span style={{margin:"30px"}}> Only Full-time :-
                    <Checkbox style={{margin:"45px",marginLeft:"0px"}} onChange={onParamChange} value={params.full_time} id="full_time" name="full_time" />
                </span>
            </form>
       </>
    )
}
