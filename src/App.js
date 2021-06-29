import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {apiURL} from "./Back-end/apiURl.js";


//Pages to represent the info in the browser
import Navbar from "./Components/Navbar.js"
import Home from "./Pages/Home"
import Index from "./Pages/Index.js";
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import Four0Four from "./Pages/Four0Four"

const API_BASE = apiURL()

function App() {
  const [budget, setBudget] = useState([])
  
  // "Another way to doit in large web app": Myra concept 
  const addBudget = (newBudget)=>{
   
    axios.post(`${API_BASE}/transactions`, newBudget).then((res)=>{
      return axios.get(`${API_BASE}/transactions`)
    }).then((res)=>{
      setBudget(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  // "Another way to doit in short web app": 
  // => [ const addBudget = (newBudget)=>{
  //      axios.post(`${API_BASE}/transactions`, newBudget).then((res)=>{
  //      setBudget([...budget, newBudget])
  //      }, (error)=> console.error(error)
  //      ).catch((e)=>{})
  //      }
  //     ]
  const deleteBudget = (index)=>{
    axios.delete(`${API_BASE}/transactions/${index}`).then(
      (res)=>{
        const del = [...budget]
        del.splice(index, 1)
        setBudget(del)
      },
      (err)=>{console.log(err)})
  }
  const updateBudget = (updateBudget, index)=>{
    console.log(API_BASE)
    axios.put(`${API_BASE}/transactions/${index}`, updateBudget).then(
      //success
      (res)=>{
        console.log(res.data)
        const update = [...budget]
        update[index]= updateBudget
        setBudget(update)
      },
      //error
      (error)=>
        console.log(error)
    )
    .catch((c)=> console.warn("cacth", c))
  }

  useEffect(()=> {
    axios.get(`${API_BASE}/transactions`).then((res)=>{
      const {data} = res
      setBudget(data)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
               <Index budget={budget}/>
            </Route>
            <Route path="/transactions/new">
               <New addBudget={addBudget} />
            </Route>
            <Route exact path="/transactions/:index">
               <Show budge={budget} deleteBudget={deleteBudget}/>
            </Route>
            <Route path="/transactions/:index/edit">
               <Edit budge={budget} updateBudget={updateBudget}/>
            </Route>
            <Route path="*">
               <Four0Four />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;