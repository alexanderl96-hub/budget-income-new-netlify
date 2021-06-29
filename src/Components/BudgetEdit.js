import { useState , useEffect} from "react";
import { useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl.js"

const API_BASE = apiURL()

function BudgetEdit(props) {

    let { index } = useParams() 
    let history = useHistory()
    const [val, setVal]= useState([])

    const [budget, setBudget] = useState({
        date: '',
        taxes: '',
        retirement: '',
        save: '',
        creditcard: '',
        market: '',
        internet: '',
        pet: '',
        car: '',
        insurrance: '',
        additional: '',
        made: false,
    })
    const HandleInput =(e)=>{
        const {value} = e.target
        setBudget({...budget, [e.target.id]: value})
    }
    const HandleCheck =()=>{
        setBudget({...budget, made: !budget.made})
    }
    
    useEffect(()=>{
        axios.get(`${API_BASE}/transactions/${index}`).then((res)=>{
            const { data} = res
            setVal(data)
        }).catch((e)=>{
         history.push('/not-found')
     })
    }, [ index, history ])
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        const {taxes, retirement, save, creditcard, market, internet, pet, car, insurrance, additional} = budget
        const numbers = {
            taxes : parseInt(taxes),
            retirement: parseInt(retirement), 
            save: parseInt(save),
            creditcard: parseInt(creditcard),
            market: parseInt(market),
            internet: parseInt(internet),
            pet: parseInt(pet),
            car: parseInt(car),
            insurrance: parseInt(insurrance),
            additional:parseInt(additional),
    
        }
        const convien = {...budget, ...numbers}
        props.updateBudget(convien, index);
        history.push(`/transactions/`);
    };
   
    return (
        <div>
            <form onSubmit={HandleSubmit} className="form">
                <label htmlFor="date">Date:</label>
                <input
                id="date"
                value={budget.date}
                type="text"
                onChange={HandleInput}
                placeholder={val.date}
                required/>
                <label htmlFor="taxes">Taxes:</label>
                <input
                id="taxes"
                value={budget.taxes}
                type="number"
                onChange={HandleInput}
                placeholder={val.taxes}
                required/>
                <label htmlFor="retirement">Retirement:</label>
                <input
                id="retirement"
                value={budget.retirement}
                type="number"
                onChange={HandleInput}
                placeholder={val.retirement}
                required/>
                <label htmlFor="save">Save:</label>
                <input
                id="save"
                value={budget.save}
                type="number"
                onChange={HandleInput}
                placeholder={val.save}
                required/>
                <label htmlFor="creditcard">CreditCard:</label>
                <input
                id="creditcard"
                value={budget.creditcard}
                type="number"
                onChange={HandleInput}
                placeholder={val.creditcard}
                required/>
                <label htmlFor="market">Market:</label>
                <input
                id="market"
                value={budget.market}
                type="number"
                onChange={HandleInput}
                placeholder={val.market}
                required/>
                <label htmlFor="internet">Internet:</label>
                <input
                id="internet"
                value={budget.internet}
                type="number"
                onChange={HandleInput}
                placeholder={val.internet}
                required/>
                <label htmlFor="pet">Pet:</label>
                <input
                id="pet"
                value={budget.pet}
                type="number"
                onChange={HandleInput}
                placeholder={val.pet}
                required/>
                <label htmlFor="car">Car:</label>
                <input
                id="car"
                value={budget.car}
                type="number"
                onChange={HandleInput}
                placeholder={val.car}
                required/>
                <label htmlFor="insurrance">Insurrance:</label>
                <input
                id="insurrance"
                value={budget.insurrance}
                type="number"
                onChange={HandleInput}
                placeholder={val.insurrance}
                required/> 
                <label htmlFor="additional">Additional:</label>
                <input
                id="additional"
                value={budget.additional}
                type="number"
                onChange={HandleInput}
                placeholder={val.additional}
                required/>
                <label htmlFor="made">Made:</label>
                <input
                id="made"
                value={budget.made}
                />
                Checkbox <input
                id="made"
                type="checkbox"
                onChange={HandleCheck}
                checked={budget.made}
                className ="checkbox"
                /> 
                <button type='submit' className="btnform">Submit Budget</button>
            </form>
           
        
        </div>
    )
}
export default withRouter(BudgetEdit)