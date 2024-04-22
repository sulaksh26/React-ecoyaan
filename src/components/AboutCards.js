import React, { Component } from 'react'

export class AboutCards extends Component {
  render() {
    let {title,description,imageUrl} = this.props
    return (
      <div>
        <div className="card">
            
  <img className="card-img-top" width={`260px`} height={`260px`} src={imageUrl} alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{title}</h3>
    <p className="card-text"><big>{description}</big></p>
    
  </div>
</div>
      </div>
    )
  }
}

export default AboutCards
