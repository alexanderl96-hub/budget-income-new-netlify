import { Link } from "react-router-dom";


export default function MapingLogs({neto, index}) {
    
   const income = neto.car + neto.taxes + neto.retirement + neto.save + neto.creditcard + neto.market + neto.internet + neto.pet + neto.insurrance + neto.additional
    
    return (
        <div className="table">
            <tr className="color">
                <td  className="box" >
                    <p className="income" >
                    { neto.made ? (<span>⭐️</span> ) 
                    : 
                    (<span>&nbsp; &nbsp; &nbsp;</span>)
                    }
                    </p>
                </td>
                <td  className="box" >
                    <p className="income" >
                    { neto.name ?  neto.name :  neto.date}
                    </p>
                </td>
                <td className="box" >
                    <Link to={`/transactions/${index}`} className="income" >Income</Link>
                </td>
                <td className="box" >
                    <p className="income"><strong> $ {income}</strong></p>
                </td>
            </tr>
        </div>
       
       
    )
}