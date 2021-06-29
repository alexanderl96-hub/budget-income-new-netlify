import { useState } from "react";
import { useParams } from "react-router-dom";
import Logsapi from "../Components/Logsapi.js";

function Show({ deleteBudget, budge}) {
  let { index } = useParams();
  const [ budget ] = useState(budge[index]);
  return (
    <div className="Show">
      <h2 className="Show2">Show</h2>
      <section>
        <Logsapi
          budget={budget}
          index={index}
          deleteBudget={deleteBudget} 
        />
        
      </section>
    </div>
  );
}

export default Show;