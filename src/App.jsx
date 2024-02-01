import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import './index.css'
import Li from "./Li";

const App=()=>{
    const [item,setItem]=useState('');
    const [listt,setListt]=useState([]);

    const chng=(e)=>{
        return (
            setItem(e.target.value)
        );  
    };

    const addCon=()=>{
          setListt((oldliitem)=>{
            return [...oldliitem,item]
          });
          setItem("");  
    }

    const removeItem=(id)=>{
      setListt((oldliitem)=>{
        return oldliitem.filter((arrelem,index)=>{
          return id!==index;
        });
      });
    }

  return(
    <>
        <div className="main_div" >
            <div className="center_div">
              <br></br>
               <h1>To do List</h1>
              <br></br>
                <input type='text' placeholder="Enter the name of items" onChange={chng} value={item}>
                </input>
                <Tooltip title="Add Item">
                <IconButton onClick={addCon}>
                     {<AddIcon className="add" /> }
                </IconButton>
                </Tooltip>
                <ol>
                    {
                      listt.map((listval,index)=>{
                         return <Li text={listval} key={index} id={index} onSelect={removeItem}/>
                      })
                    }
                </ol>
            </div>
        </div>
    </>
  )
};

export default App;