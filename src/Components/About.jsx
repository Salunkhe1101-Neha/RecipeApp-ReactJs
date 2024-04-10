import { useEffect, useState } from 'react'
import './About.css'

import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  const location = useLocation()
  const specificFood = location.state.item

  const navigate=useNavigate()

  

  const [meal, setMeals] = useState([])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`)
      .then(res => res.json())
      .then(d => setMeals(d.meals))
  }, [])


 
  return meal.length==0 ? (<p>Choose Food</p>) : (
    <div className='About'>
      <section className='aboutSec'>
        <h2>About</h2>
        <img src={specificFood.strCategoryThumb} alt="" />
        <h3>{specificFood.strCategory}</h3>
        <p id='des'>{specificFood.strCategoryDescription}</p>
      </section>


      <section>
        <h2>Categories</h2>
        <div style={{marginTop:'50px', marginLeft:'30px'}} className='homeSection'>
          {meal.map((item) => {
            return (
              <div key={item.idMeal}>
                <img src={item.strMealThumb} alt="" height={'200px'} onClick={() => navigate('/aboutMeals', { state: { item } })}/>
                <p className='itemName'>{item.strMeal}</p>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default About