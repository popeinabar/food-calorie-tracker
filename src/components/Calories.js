import React, { Component } from "react";
import './Calories.css'

export default class Calories extends Component{
  render(){
    return(
      <div className="flex2">
        <h3>{`${this.props.count}  ${this.props.name} = ${this.props.totalCal} calories`}</h3>
      </div>
    )
  }
}