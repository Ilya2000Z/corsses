import react from 'react'
import classes from "./tiles.css"
import Square from '../Square/Square'

export default function Tiles (props,polygon, onclikhendler){
    var style = null
    if(props.polygon.length===9){
        style= classes.border
    } else if(props.polygon.length>=25) {
        style= classes.border25
    }
    return(
      <div className={style}>
        {
            props.polygon.map((item,a)=>(
                <Square key={a} polygon={props.polygon} item={item} onclikhendler={()=>{props.click(a)}} />
            ))
        }
    </div>
    )
} 