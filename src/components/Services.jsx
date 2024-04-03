import React from 'react'
import Card from './Card'
import robo1 from "../assets/images/mini.jpg"
import robo2 from "../assets/images/robo2.jpg"
import robo3 from "../assets/images/robo3.jpg"
const Services = () => {
  return (
    <>
        <div id='services' className='text-center mx-10 my-10 bg-blue-300'>
            <h3 className='text-lg font-semibold'>Services</h3>

            <div className='flex flex-wrap justify-center'>
                <Card title="Personalized Product Recommendations"
        description=" Utilizing AI algorithms to analyze past purchase history, browsing behavior, and demographic data to provide personalized product recommendations to users."
        imageUrl={robo1}/>
                <Card title="Smart Shopping Lists"
        description=" AI-powered shopping list features that automatically suggest items based on users' past purchases, current inventory, and meal preferences."
        imageUrl={robo2}/>
                <Card title="Recipe Suggestions"
        description=" Providing recipe suggestions and meal planning assistance based on available ingredients, dietary preferences, and nutritional goals."
        imageUrl={robo3}/>
            </div>
        </div>
    </>
  )
}

export default Services