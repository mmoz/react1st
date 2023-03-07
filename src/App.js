import './App.css'
import Transaction from './components/Transection';
import ExampleComponent from './components/Example';
import FormComp from './components/FormComp';
import { useEffect, useReducer, useState } from 'react';
import DataContext from './Data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
const History = ()=> <p>History</p>


function App() {
 

  const initsate = [
    {id:1,title:"Ticket",amount:-2000},
    {id:2,title:"Football",amount:+2000},
    {id:3,title:"Rent",amount:+25000},
    {id:4,title:"Basketball",amount:-3000},  
  ]

   const [items,setitems] = useState(initsate)

   const [ReportRecieve,setReportRecieve] = useState(0)
   const [ReportPay,setReportPay] = useState(0)

  const onAddNewitem = (newItem) => {
    setitems((prevItems) => {
      return [newItem, ...prevItems]
    })

  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const Recieve = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const Pay = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1

    setReportRecieve(Recieve)
    setReportPay(Pay)

  },[items,ReportRecieve,ReportPay])

  
  return (
    <DataContext.Provider value={{Recieve:ReportRecieve, Pay:ReportPay }}>
      <div>

        <div className="container">
          <ExampleComponent/>
          <Router>
          <div>
            <ul className='horizontial-menu'>
              <li>
                <Link to ="/">Details</Link>
                </li>
                <li>
                <Link to ="/insert">Insert</Link>
                </li>
            </ul>
            <Routes>
            <Route path='/' element={<ReportComponent/>}>
            </Route>
            <Route path='/insert' element={<><FormComp onAdditem={onAddNewitem}/> <Transaction Items = {items}/> </>}></Route>
            </Routes>
          </div>
          </Router>
          <div className='btnshow'>
          
          </div>
         
        

   

        </div>
      </div>
    </DataContext.Provider>
    
 

  );
  }


export default App;
