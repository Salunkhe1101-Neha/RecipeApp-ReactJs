import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => res.json())
            .then(data => setRandom(data.meals))
            .catch(error => console.error('Error fetching random meal:', error));
    }, []);

    return (
        <div className='heroDiv'>
            {random.map(item => (
                <section key={item.idMeal} className='heroSection'>
                    <div className='heroContent'>
                        <div className='heroText'>
                            <h3>Today's Special:</h3>
                            <h3 className='mealName'>{item.strMeal}</h3>
                            <h3 className='mealCategory'>{item.strCategory}</h3>
                        </div>
                        <div>

                        <img className='mealImage' src={item.strMealThumb} alt={item.strMeal} />

                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Hero;
