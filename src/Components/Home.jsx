import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from './Hero'
import './Home.css'
const Home = ({search}) => {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(d => setData(d.categories))
  }, [data])


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then(res => res.json())
      .then(d => setData2(d.meals))
  }, [data2])

  const navigate = useNavigate()

  return (
    <div className='home'>
      <Hero></Hero>
      <div className='div2'>

        <section className='section1'>
          <h2 style={{padding:'30px'}}>Categories</h2>
          <div className='homeSection'>
            {data.map((item) => {
              return (
                <div key={item.idCategory}>
                  <img src={item.strCategoryThumb} alt="" onClick={() => navigate('/about', { state: { item } })} />
                  <p className='itemName'>{item.strCategory}</p>
                </div>
              )
            })}
          </div>
        </section>



        <section className='section2'>
          <h2 style={{marginBottom:'30px'}}>Meals</h2>
          <div className='homeSection' style={{marginTop:'50px'}}>
            {data2.map((item) => {
              return (
                <div key={item.idMeal}>
                  <img src={item.strMealThumb} alt="" onClick={() => navigate('/aboutMeals', { state: { item } })} height={'200px'} style={{borderRadius:'50%'}} />
                  <p className='itemName'>{item.strMeal}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>

    </div>

  )
}

export default Home