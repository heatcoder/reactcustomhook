
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useFetchData} from "./UseFetchData";
import Details from './Details';
import Home from './Home';
import Menu from './Menu'
import Idmeal from'./Idmeal'
import ErrorHandling from './ErrorHandling';
function App() {

const {fetchD, error}=useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?f=a")

if(!fetchD) {
return <h1>Meals preparing..</h1>
}

if(error) {
  return <h1>Meals not available.</h1>
}
console.log(fetchD)
const Iam = "I am maindom"

  return (
    <Home >
      <Menu />
      <Routes>
    
       <Route path = "/" element = {<Home Iam={Iam} />}/>
        <Route path = "/Details" element = {<Details fetchD={fetchD} />}/>
        <Route path = "/:idMeal" element = {<Idmeal fetchD={fetchD} />}/>
        <Route path = "*" element = {<ErrorHandling/>}/> 



    
    </Routes>

    </Home>
   
  );
}

export default App;





