import React from "react";
const PopulateOption = (props:any)=>{
    const {options,projectId}=props;
    console.log(props);
    return (
        options.map((option:any)=>{
            if(!projectId || (projectId && option.countryId === projectId)|| (projectId && option.subId === projectId)|| (projectId && option.actId === projectId))
            return(<option key={option.id} value={option.id} >
                {option.name}
        </option>)
            else
            return null;
        })
        
    )
}
export default PopulateOption;