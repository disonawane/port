import "./Heroimg2style.css"
import React from 'react'

class Heroimg2 extends React.Component  {
    render(){
        return (
            <div className="hero-img">
               <div className="heading">
                 <h1>{this.props.heading}</h1>
                 <p>{this.props.text}</p>
                </div> 
            
            </div>
          )
    }
  
}

export default Heroimg2