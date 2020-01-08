import React, {Component} from 'react'


class Practice extends Component{
  constructor(){
    super()
    this.state = {
      inputValue: '',
      firstName: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleClick = () => {
    this.setState({firstName: this.state.inputValue})
    this.setState({inputValue: ''})
  }

  render(){
    return(
      <div>
        <input value={this.state.inputValue}
        name="inputValue"
        placeholder="Enter First Name"
        onChange={e => {
          this.handleChange(e)
        }}/>
        <button
        onClick={() => {this.handleClick()}}>Submit</button>
        <div>{this.state.firstName}</div>
      </div>
    )
  }
}

export default Practice