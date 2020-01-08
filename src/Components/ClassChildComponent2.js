import React, {Component} from 'react'


class ClassChildComponent2 extends Component{
  constructor(){
    super()
    this.state = {
      inputMovie: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
    
  }
  addMovie(){
    console.log('addMovie')
    this.props.addMovieFn(this.state.inputMovie)
    this.setState({inputMovie: ''})
  }
  // deleteMovie(){}

  render(){
    return(
      <div>
        <input placeholder="Add Movie" name="inputMovie" value={this.state.inputMovie} onChange={e => this.handleChange(e)}/>
        <button
        onClick={() => {this.addMovie()}}>Add Movie</button>
        {/* <input/>
        <button>Delete Movie</button> */}
      </div>
    )
  }
}

export default ClassChildComponent2