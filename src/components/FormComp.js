import './FormComp.css'
import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';


const FormComp = (props)=>{

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormvalid] = useState(false)


    
    
    const inputTitle=(event)=>{
        setTitle(event.target.value)
    }
    const inputAmount =(event)=>{
        const amountInput = event.target.value;
        if (amountInput === '' || amountInput === '-' || !isNaN(amountInput)) {
            setAmount(amountInput);
          }
    }
    const saveItem =(event) =>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAdditem(itemData)
        setTitle('')
        setAmount('0')
    }

    useEffect(()=>{
        const checkData = title.trim().length > 0 && amount !== null && amount !== '' && amount !== 0;
        setFormvalid(checkData);
        }
    ,[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" placeholder="Name" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" placeholder="(+ Receive,- Pay)" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <center><button type="submit" className='btn-form' disabled={!formValid}>Save</button></center>
                </div>
            </form>
        </div> 
    );
}
export default FormComp