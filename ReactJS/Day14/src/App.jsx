import { useEffect, useState } from "react"
import WeatherApp from "./components/WeatherApp";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  
  /* useEffect Template
  useEffect(() => {
    //first -> Side Effect Function
  
    return () => {
      //Second -> Clean-Up Function
    }
  }, [])  //Third -> comma separated Dependency List
  
*/

//Variation of UseEffect-->
//variation 1: This will run on every render
/*
useEffect (() => {
  alert("I will run on every render");
}) 
*/

//variation 2: This will only runs on First Render
/*
useEffect(() => {
 alert("Only runs on First ");

}, [])
*/

//variation 3: This will render everytime when dependecy will updated
// It render on first time bcz count me '0' value dali gyi h so this is also consider as updated.
/*
useEffect(() => {
  alert("I will run when count is updated");
}, [count])
*/

//variation 4 : 
//multiple dependency : taking count and total as a dependency
//it will run when count or total will upddated
/*
useEffect(() => {
   alert("I will run when count or total is updated");
}, [count, total])
*/

//variation 5 :
//useEffect with clean up function

/*
useEffect(() => {
  alert("I will run when count is updated"); 

  //this is clean up function and this will run when count is unmounted
  return () => {
   alert("I will run when count is unmounted"); 
  }
}, [count])
*/

/*
function handelClick(){
  setCount(count+1);
}

function handleTotal() {
  setTotal(total+1);
}

*/

  return (
    <>
      <div>
        {/*<button onClick={handelClick}>Click Me</button>
        <p>Count is : {count}</p>
        <br />
        <button onClick={handleTotal}>Click for Total</button>
        <p>Total is : {total}</p>*/}

        <WeatherApp />
      </div>
         
    </>
  )
}

export default App
