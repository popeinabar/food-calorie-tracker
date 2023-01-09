import './App.css';
import React, { Component } from "react";
import FoodBox from "./components/FoodBox.js";
import Search from './components/Search';
import FoodData from "./components/FoodData"

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      searchTerm:"",
    }
  }


handleSearch = (e)=>{
  this.setState({
    searchTerm:e.target.value
  })
}


render(){
  return(
    <div>

      <Search handleSearch={this.handleSearch}/>

      {// eslint-disable-next-line
        FoodData.filter((val)=>{
          if(this.state.searchTerm===""){
            return val;
          }
          else if(val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
            return val;
          }
        }).map(footItem=>{
          return(
            <div key={footItem.id} className="gap">
              <FoodBox food={footItem} totalCost={this.totalCost} />
            </div>
          )
        })
      }
    </div>
    )
  }
}