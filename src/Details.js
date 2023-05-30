import {Link} from "react-router-dom"

const Details = ({ fetchD }) => {
    return (
    <>
      <h1>This is the details page</h1>
      {fetchD?.meals?.map((meal) => (
        <div key={meal?.idMeal}>
          {/* <Link to={`/detail/${meal?.idMeal}`} /> */}
          <img src={meal?.strMealThumb} alt="" />
          <h1><Link to={`/${meal?.idMeal}`} >{meal?.strMeal}</Link> </h1>
          
        </div>
      ))}
    </>
    )
  };

export default Details

