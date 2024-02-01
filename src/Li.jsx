import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DelIcon from '@material-ui/icons/Delete';
import "./index.css"

const Li=(props)=>{
    return(
        <>
        <div className="toDo">
            <li>{props.text}</li>
            <Tooltip title="Remove Item">
                <IconButton onClick={()=>{
                    props.onSelect(props.id);
                }}>
                     <DelIcon className="cross"/>
                </IconButton>
            </Tooltip>
        </div>
        </>
    );
};

export default Li;