import './FoodBox.css';
import React, { Component } from 'react';
import Calories from "./Calories";

export default class Foodbox extends Component{
  constructor(props){
    super(props)

    this.state = {
      counter:0,
      id:-1,
      totalCal:0,
    }

  }


  handleChange =(e,id)=>{
    this.setState({
      counter:e,
      id:id,
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      totalCal:(this.props.food.cal*this.state.counter),
    })
  }

  handleReset = (e)=>{
    e.preventDefault();
    this.setState({
      counter:0,
      id:-1,
      totalCal:0
    })

  }



  render(){
    return(
      <div className='flex'>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="imageis-64x64">
                <img src={this.props.food.img} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.cal}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="fieldhas-addons">
                <div className="control">
                  <input className="input" type="number" placeholder='Enter a number here' onChange={e=>this.handleChange(e.target.value,this.props.food.id)} />
                </div>
                <div className="control">
                  <button onClick={this.handleSubmit} className="buttonis-info">
                    +
                  </button>
                  </div>
              </div>
            </div>
          </article>
      </div>
      <Calories name={this.props.food.name} totalCal={this.state.totalCal} count={this.state.counter}/>
      <button className="button-reset" onClick={this.handleReset}>reset</button>
    </div>
    )
  }
}