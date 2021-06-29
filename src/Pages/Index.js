import Filters from "../Components/Filters"

export default function Datalogs({budget}) {
    
    // { budget.map((total)=> {
    //     const todo = parseInt([total.car]) + [total.taxes] + [total.retirement] + [total.save] + [total.creditcard] + [total.market] + [total.internet] + [total.pet] + [total.insurrance] + [total.additional]
    //         let obj = todo
    //         let count = 0;
    //         for (let i = 0; i < obj.length ; i++){
    //             console.log(obj)
    //             count += parseInt(obj[i])
    //             return count
    //         }
    //         console.log(count)

    //         return count
            
    //     })}
   
        // for (let i = 0; i < todo.length ; i++){
        //     count += todo[i]
        //     return count
        // }
       
    return (
        <div>
            <h2 className="indexinfo">Index </h2>
            <Filters budget={budget} />

        </div>
    )
}