import React, { Component } from 'react'

import AboutCards from './AboutCards'
import { json } from 'react-router-dom'
export class Home extends Component {
  
articles4=[
  {
    title:'Join our community in creating a more sustainable future for everyone',
    description:"At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.Consider us your partner for all things sustainable.",
    imageUrl:'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png',
  },
  {
    title: 'Carefully curated Eco-friendly products',
    description:"We believe that every purchase you make can have a positive impact on the planet and the future.Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits." ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
  {
    title: 'For businesses that care deeply about sustainability',
    description:"Do you run a business that is committed to sustainability in every aspect of your work?Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?If yes, then you are the perfect fit for our platform." ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
  
]
  render(){
    return (
    <div>
      <div className="container my-3">
        <h1 className>Buy Less,Buy Better</h1>
        <div className="row my-3">
          <p>
            <big>
              At Ecoyaan, we are more than just a platform. Our goal is to build
              a community of eco-conscious people who share a common vision and
              passion for a more sustainable world.
            </big>
          </p>
        </div>
      </div>
    

<h1></h1>
<div className='container my-3'>
<div className='row my-4'>
<h1>For You</h1>
    {this.articles4.map((element)=>{
            return <div className='col-md-4' key={element.imageUrl}>
            <AboutCards title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.imageUrl} />
            </div>
        })}
        
</div>

</div>
<div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-dark" onClick="">Contact Us</button>
            <button type="button" className="btn btn-dark"  onClick="">About Us</button>
        </div>
    </div>

  )


}
}

export default Home
