import './Transection.css'
import PropTypes from 'prop-types'; // ES6
import './item.css'
function Item  (props){
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
    const{title,amount} = props
    const status = amount<0 ? "Pay":"Recieve"
    const symbol = amount<0 ? "":"+"
  
    return(
    <>
< li className ={status}>{title}<span>{symbol}{formatNumber(amount)}</span></li>
    </>
    );
    }

    Item.propTypes={
        title:PropTypes.string.isRequired,
        amount:PropTypes.number.isRequired
    }
    export default Item;


