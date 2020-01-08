import React, {Component} from 'react'

class ClassChildComponent extends Component{
  constructor(){
    super()
    this.state = {
      inputValue: '',
      inputMake: '',
      inputModel: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  // addItem = (name, value) => {
  //   this.props.add(name, value)
  //   this.setState({[name]: ''})
  // }

  addName = () => {
    this.props.addNameFn(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  addMake = () => {
    this.props.addMakeFn(this.state.inputMake)
    this.setState({inputMake: ''})
  }

  addModel = () => {
    this.props.addModelFn(this.state.inputModel)
    this.setState({inputModel: ''})
  }

  render(){

    return(
      <div>
        <div>
          <input placeholder="Enter Stuff" value={this.state.inputValue} name='inputValue'
          onChange={e => {this.handleChange(e)}}/>
          <button onClick={() => {this.addName()}}>Submit Name</button>
        </div>
        <div>
          <input placeholder="New Make" value={this.state.inputMake} name='inputMake'
          onChange={e => {this.handleChange(e)}}/>
          <button onClick={() => { this.addMake()}}>Submit Make</button>
        </div>
        <div>
          <input placeholder="New Model" value={this.state.inputModel} name='inputModel'
          onChange={e => {this.handleChange(e)}}/>
          <button 
          onClick={() => {this.addModel()}}>Submit Model</button>
        </div>

      </div>
    )
  }
}

export default ClassChildComponent