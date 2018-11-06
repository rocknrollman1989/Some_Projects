import React, {Component} from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from './counter.actions'

class Counter extends Component {

  static getInitialProps({store}) {

    return store
  }

  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount())
  }

  decrement = () => {
    const {dispatch} = this.props
    dispatch(decrementCount())
  }

  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }

  render () {
    // console.log(this.props , 'props in counter')
    const { count } = this.props
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state, 'state in counter')
  const {count} = state.counter
  return {count}
}

export default connect(mapStateToProps)(Counter)
