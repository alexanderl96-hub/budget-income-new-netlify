import BudgetEdit from "../Components/BudgetEdit"

export default function Edit({budget, updateBudget}) {

    return (
        <div>
           <h1 className="newtrans">Edit</h1> 
           <BudgetEdit budge={budget} updateBudget={updateBudget}/>
        </div>
    )
}