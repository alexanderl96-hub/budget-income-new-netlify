import Form from "../Components/BudgetNewForm"

export default function New({addBudget}) {
    return (
        <div className="page">
           <h1 className="newtrans">New Transaction</h1> 
           <Form addBudget={addBudget}/>
        </div>
    )
}