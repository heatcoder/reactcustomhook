
import { useParams } from "react-router"


const Idmeal=({fetchD})=>{

    const {idMeal} = useParams()


    const meal = fetchD.meals.find((meal)=>idMeal===meal.idMeal)

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(ingredient);
      }
    }

    return(
        <>
       <h1>{meal?.strMeal}</h1>
       <ul>
       {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        {/* <li>{meal?.strIngredient1.trim() && meal.strIngredient1}</li>
        <li>{meal?.strIngredient2.trim() && meal.strIngredient2}</li>
        <li>{meal?.strIngredient3.trim() && meal.strIngredient3}</li>
        <li>{meal?.strIngredient4.trim() && meal.strIngredient4}</li>
        <li>{meal?.strIngredient5.trim() && meal.strIngredient5}</li>
        <li>{meal?.strIngredient6.trim() && meal.strIngredient6}</li>
        <li>{meal?.strIngredient7.trim() && meal.strIngredient7}</li>
        <li>{meal?.strIngredient8.trim() && meal.strIngredient8}</li>
        <li>{meal?.strIngredient9.trim() && meal.strIngredient9}</li>
        <li>{meal?.strIngredient11.trim() && meal.strIngredient11}</li>
        <li>{meal?.strIngredient12.trim() && meal.strIngredient12}</li>
        <li>{meal?.strIngredient13.trim() && meal.strIngredient13}</li>
        <li>{meal?.strIngredient14.trim() && meal.strIngredient14}</li>
        <li>{meal?.strIngredient15.trim() && meal.strIngredient15}</li>
        <li>{meal?.strIngredient16.trim() && meal.strIngredient16}</li>
        <li>{meal?.strIngredient17.trim() && meal.strIngredient17}</li>
        <li>{meal?.strIngredient18.trim() && meal.strIngredient18}</li>
        <li>{meal?.strIngredient19.trim() && meal.strIngredient19}</li>
        <li>{meal?.strIngredient20.trim() && meal.strIngredient20}</li> */}
       </ul>
       <p>{meal?.strInstructions}</p>
       <img src={meal?.strMealThumb} alt="" width="250px" />
       <ul>
        <li>{meal?.strMeasure1}</li>
        <li>{meal?.strMeasure2}</li>
        <li>{meal?.strMeasure3}</li>
        <li>{meal?.strMeasure4}</li>
        <li>{meal?.strMeasure5}</li>
        <li>{meal?.strMeasure6}</li>
        <li>{meal?.strMeasure7}</li>
        <li>{meal?.strMeasure8}</li>

       </ul>
      
    <iframe 
    width="560" 
    height="315" 
    src={meal?.strYoutube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
      

       </>
    )
}

export default Idmeal