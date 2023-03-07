import DataContext from "../Data/DataContext";
import { useContext } from "react";
import './ReportComponent.css'


const ReportComponent =()=>{
    const{Recieve,Pay} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <div>
        <div className="amrcontainer">
            <h4 className="amount">Amount:</h4>         
            <h2 className="fontrec">${formatNumber(Recieve-Pay)}</h2>
         </div>
            <div className="Recievepay-Container">
                <div>
                    <h4 className="Reciver">Reciver</h4>
                    <p className="report-recieve">${formatNumber(Recieve)}</p>
                </div>
                <div>
                    <h4 className="pay">Pay</h4>
                    <p className="report-pay">${formatNumber(Pay)}</p>
                </div>
                    
                    

                
                

                

            </div>
      
        </div>



    );
}
export default ReportComponent
