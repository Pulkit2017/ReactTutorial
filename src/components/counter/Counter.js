import react, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super()
        this.state =
        {
            counter: 0,

        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment(by) {
        //console.log(`increment - ${by}`)
        this.setState(
           (prevState)=>{
           return {counter: (prevState.counter + by)}
            } 
        );
    }
    decrement(dec) {
        //console.log(`increment - ${by}`)
        this.setState(
           (prevState)=>{
           return {counter: (prevState.counter - dec)}
            }
        );
    }
    reset() {
        //console.log(`increment - ${by}`)
        this.setState(
           (prevState)=>{
           return {counter: 0}
            }
        );
    }
    render() {
        return (


            <div className="counter1">
                <CounterButton by={1} dec={1}  incrementMethod={this.increment} decrementMethod={this.decrement} ></CounterButton>
                <CounterButton by={5} dec={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={2} dec={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div> <button className="button1" onClick={this.reset}>RESET</button> </div>
            </div>

        );

    }
}


class CounterButton extends Component {
    constructor() {
        super()
        this.state =
        {
            counter: 0,

        }
      
    }
   
    render() {

        return (


            <div className="counter">
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrementMethod(this.props.dec)}>-{this.props.dec}</button>
                {/* <span className="count">{this.state.counter}</span> */}


            </div>

        )

    }

}

//CounterButton.defaultProps = {by : 1}

// CounterButton.propTypes = {
//     by : PropTypes.number
// }
export default Counter

