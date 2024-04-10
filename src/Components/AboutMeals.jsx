import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation, useNavigate } from 'react-router-dom'
const AboutMeals = ({search}) => {
    const location = useLocation()
    const specificMeals = location.state.item
    console.log("Hii")
    console.log(specificMeals);

    const navigate = useNavigate()
    const [data2, setData2] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f="+search)
            .then(res => res.json())
            .then(d => setData2(d.meals))
    },[])
    console.log("Hello")
    console.log(data2)
    return (
        <div style={{ marginTop: '80px' }}>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <div>
                    <img src={specificMeals.strMealThumb} alt="" height={'280px'} style={{ borderRadius: '10px' }} />
                </div>
                <div style={{ width: '60%' }}>
                    <h1 > <span style={{ color: 'red' }}>Name: </span><span>{specificMeals.strMeal} </span></h1>
                    <div> <span style={{ color: 'red' }}>Category: </span><span>{specificMeals.strCategory}</span></div>
                    <div> <span style={{ color: 'red' }}>Area: </span> <span>{specificMeals.strArea}</span></div>
                    <div><span style={{ color: 'red' }}>Recipe: </span>{specificMeals.strInstructions}</div>
                    <span></span>
                </div>
            </section>
            <div style={{marginTop:'20px'}}>
                <center><ReactPlayer url={specificMeals.strYoutube} controls width={'90%'}/></center>
            </div>
            <section className='section1'>
                <h2 style={{ marginBottom: '30px' }}>Meals</h2>
                <div className='homeSection' style={{ marginTop: '50px' }}>
                    {data2.map((item) => {
                        return (
                            <div key={item.idMeal}>
                                <img src={item.strMealThumb} alt="" onClick={() => navigate('/aboutMeals', { state: { item } })} height={'200px'} style={{ borderRadius: '50%' }} />
                                <p className='itemName'>{item.strMeal}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default AboutMeals