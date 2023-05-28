
import './App.css';
import {useFetchData} from "./UseFetchData";
function App() {

const {fetchD, error}=useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?f=a")

if(!fetchD) {
return <h1>Meals preparing..</h1>
}

if(error) {
  return <h1>Meals not available.</h1>
}
console.log(fetchD)
git 

  return (
    <div className="App">
    
{
  fetchD?.meals?.map((meal, index)=>{
    return (
    <>
    <img src={meal?.strMealThumb} alt="" /> 
    <h1 key={index}>{meal?.strMeal}</h1>
    </>
    )
  })
}
    </div>
  );
}

export default App;
