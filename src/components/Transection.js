import Item from "./Item";
import './Transection.css'
import DataContext from "../Data/DataContext";
import { useContext } from "react";
const Transaction = (props)=>{
    const {Items} = props
    return(
        <>
    <ul className="item-list">
        {Items.map(element=>{
            return <Item {...element} key = {element.id}/>
        })}
        
    </ul>


    </>
    );
  }
  export default Transaction;