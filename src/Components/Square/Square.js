import React from "react";
import classes from "./Square.css"

export default function Square(props){
    var sizetiles = null
    if(props.polygon.length===9){
        sizetiles=classes.Square
    } else if(props.polygon.length===25){
        sizetiles=classes.Square25
    }
     else if(props.polygon.length===100){
        sizetiles=classes.Square100
    }
    return(
        <button className={sizetiles}  onClick={props.onclikhendler}>{props.item}</button>
    )
}