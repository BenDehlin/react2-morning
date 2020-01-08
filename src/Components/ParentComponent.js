import React, {Component} from 'react'
import ChildComponent from './ChildComponent'
import ClassChildComponent from './ClassChildComponent'
import ClassChildComponent2 from './ClassChildComponent2'


class ParentComponent extends Component{
  constructor(){
    super()
    this.state = {
      name: 'Ben',
      car: {make: 'Honda', model: 'Accord'},
      movies: ['movie 1', 'movie 2', 'movie 3']
    }
    this.handleAddName = this.handleAddName.bind(this)
    this.handleAddMake = this.handleAddMake.bind(this)
    this.handleAddModel = this.handleAddModel.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
    // this.handleAdd = this.handleAdd.bind(this)
  }

  // handleAdd(name, val){
  //   this.setState({car: {[name]: val}})
  // }

  handleAddName(val){
    this.setState({name: val})
  }

  handleAddMake(val){
    console.log(val)
    let car = this.state.car
    car.make = val
    this.setState({car: car})
  }

  handleAddModel(val){
    console.log(val)
    let car = this.state.car
    car.model = val
    this.setState({car: car})
  }

  handleAddMovie(val){
    let movies = this.state.movies
    movies.push(val)
    console.log(movies)
    this.setState({movies: movies})
  }

  render(){
    return(
      <div className="main">
        <div className="center">
        <ClassChildComponent addNameFn={this.handleAddName} addModelFn={this.handleAddModel} addMakeFn={this.handleAddMake}/>
        <ClassChildComponent2 addMovieFn={this.handleAddMovie}/>
        </div>
        <div className="center">
        <ChildComponent name={this.state.name} car={this.state.car} movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default ParentComponent