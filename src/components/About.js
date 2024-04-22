import React, { Component } from 'react'

import AboutCards from './AboutCards'
import { json } from 'react-router-dom'
export class About extends Component {
  articles=[
    {
      title:'Trust',
      description:"We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.",
      imageUrl:'https://th.bing.com/th/id/OIP.TAXWMHCK6_2W5Nvezc-xNwHaHa?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Authenticity',
      description:"We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability." ,
      imageUrl:"https://th.bing.com/th/id/OIP.uUy3_iu8jMLELJHQEKFxngHaE8?rs=1&pid=ImgDetMain",
    },
    {
      title: 'Impact',
      description:"We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others." ,
      imageUrl:"https://th.bing.com/th/id/OIP.cblAmNiyK3iJR5TRTyY-RwHaEo?rs=1&pid=ImgDetMain",
    },
    {
      title: 'Fun And Engaging',
      description:"Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services." ,
      imageUrl:"https://th.bing.com/th/id/R.087c24b5e5d1cfad089db1821ff0ab32?rik=T%2f7fZM7FJjdXBg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cR%2fL8z%2f9cRL8zq7i.png&ehk=ydZmigPb0LyOnZxbBdkmh66HFAOoG%2bWB%2fbh8%2frFzatw%3d&risl=&pid=ImgRaw&r=0",
    }
]
articles1=[
  {
    title:'Founder 1',
    description:"Connect with Founder 1",
    imageUrl:'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png',
  },
  {
    title: 'Founder 2',
    description:"Connect with Founder 2" ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
]

articles2=[
  {
    title:'Member 1',
    description:"Connect with Member 1",
    imageUrl:'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png',
  },
  {
    title: 'Member 2',
    description:"Connect with Member 2" ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
  {
    title: 'Member 3',
    description:"Connect with Member 3" ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
  {
    title: 'Member 4',
    description:"Connect with Member 4" ,
    imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3215351/user-square-icon-sm.png",
  },
]
  render(){
    return (
    <div>
      <div className='container my-3'>
      <h1 className>About EcoYaan</h1>
      <div className="row my-3">
      <p><big>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.


We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
<ul>
<li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
<li>Videos, posts, and quizzes on climate change and sustainability</li>
<li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
</ul>


</big></p>
</div>

    
</div>
<h1></h1>
<div className='container my-4'>
<div className='row my-4'>
<h1>Our Values</h1>
    {this.articles.map((element)=>{
            return <div className='col-md-3' key={element.imageUrl}>
            <AboutCards title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.imageUrl} />
            </div>
        })}
        
</div>
</div>
<h1></h1>   
<div className='container my-3'>
<div className='row my-4'>
<h1>Meet the Founders</h1>
    {this.articles1.map((element)=>{
            return <div className='col-md-3' key={element.imageUrl}>
            <AboutCards title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.imageUrl} />
            </div>
        })}
        
</div>
<h1></h1>
      <h1 className>Our Story</h1>
      <div className="row my-3">
      <p><big>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.


Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.


We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.


As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
</big></p>
</div>
</div>
<h1></h1>
<div className='container my-3'>
<div className='row my-4'>
<h1>Meet the Team</h1>
    {this.articles2.map((element)=>{
            return <div className='col-md-3' key={element.imageUrl}>
            <AboutCards title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.imageUrl} />
            </div>
        })}
        
</div>
</div>
    
    </div>

  )
}
}

export default About
