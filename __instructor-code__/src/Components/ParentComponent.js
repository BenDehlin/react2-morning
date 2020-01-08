import React, {Component} from 'react';
import ChildComponent from './ChildComponent';
import ClassChildComponent from './ClassChildComponent';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            car: {make: 'Geo', model: 'Metro'},
            movies: ['Star Wars', 'Lord of the Rings', 'Elf', 'Tron', 'Tron Legacy']
        }
        //this.newCar = this.newCar.bind(this)
    }

    newCar = () => {
        this.setState({car: {make: 'Chevy', model: 'Corvette'}})
    }

    render(){
        let mappedList = this.state.movies.map((movie, i) => {
            return (
                <ChildComponent 
                    key={i}
                    movie={movie}/>
            )
        })
        return (
            <div>
                {/* <ChildComponent name='Matt'/> */}
                <ClassChildComponent 
                    car={this.state.car}
                    newCarFn={this.newCar}/>
                {mappedList}
            </div>
        )
    }
}

export default ParentComponent;