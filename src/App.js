import React, { Component } from 'react'
import './App.css'

const MULTIPLY = 'X'
const DIVISION = '/'
const PLUS = '+'
const MINUS = '-'
const BACKSPACE = 'BACKSPACE'
const CLEAR = 'AC'
const CALC = '='
const DOT = '.'

class App extends Component {
  state = {
    screenValue: 0,
    screenPrev: null
  }

  HandleRun = () => {
    this.setState({
      screenPrev: this.state.screenValue,
      screenValue: 0,
      type: null
    })
  }

  componen

  handleInput = (value) => {

    if (Number.isNaN(parseFloat(value.innerHTML))) {

      // console.log('NAN : ' + value.innerHTML)

      switch (value.innerHTML) {
        case MULTIPLY:
          this.HandleRun()
          this.setState({ type: MULTIPLY })
          console.log('Умножить')

          break;

        case DIVISION:
          console.log('Делить')
          this.HandleRun()
          this.setState({ type: DIVISION })
          break;

        case PLUS:
          this.HandleRun()
          this.setState({ type: PLUS })
          console.log('Прибавить')
          break;

        case MINUS:
          this.HandleRun()
          this.setState({ type: MINUS })
          console.log('Минус')
          break;

        case BACKSPACE:
          if (this.state.screenValue.length > 0 && this.state.screenValue !== 0) {
            this.state.screenValue.length === 1
              ? this.setState({ screenValue: 0 })
              : this.setState({ screenValue: this.state.screenValue.slice(0, -1) })
          }
          break;

        case CLEAR:
          this.setState({
            screenValue: 0,
            screenPrev: null,
            type: null
          })
          break;
        case DOT:
          this.setState({ screenValue: this.state.screenValue + '.' })
          break;

        case CALC:
          const a = this.state.screenPrev
          const b = this.state.screenValue
          switch (this.state.type) {

            case PLUS:
              this.setState({
                screenValue: Number.parseFloat(a) + Number.parseFloat(b),
                screenPrev: null,
                type: null
              })
              break;
            case DIVISION:
              this.setState({
                screenValue: Number.parseFloat(a) / Number.parseFloat(b),
                screenPrev: null,
                type: null
              })
              break;
            case MINUS:
              this.setState({
                screenValue: Number.parseFloat(a) - Number.parseFloat(b),
                screenPrev: null,
                type: null
              })
              break;
            case MULTIPLY:
              this.setState({
                screenValue: Number.parseFloat(a) * Number.parseFloat(b),
                screenPrev: null,
                type: null
              })
              break;
            default:
              break;
          }
          break;

        default:
          break;
      }


    } else {
      this.state.screenValue !== 0
        ? this.setState({ screenValue: this.state.screenValue + value.innerHTML })
        : this.setState({ screenValue: value.innerHTML })
    }
  }

  render() {
    return (
      <div className='calculator'>

        <div className='screen'>
          <small>{this.state.screenPrev}</small>
          <span>{this.state.screenValue}</span>
        </div>
        <div className='keyboard'>
          <div className='row'>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {CLEAR}
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {BACKSPACE}
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {DIVISION}
            </div>
          </div>
          <div className='row'>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              7
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              8
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              9
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {MULTIPLY}
            </div>

          </div>
          <div className='row'>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              6
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              5
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              4
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {MINUS}
            </div>

          </div>
          <div className='row'>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              3
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)} >
              2
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              1
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {PLUS}
            </div>

          </div>
          <div className='row'>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              0
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {DOT}
            </div>
            <div className='btn' onClick={event => this.handleInput(event.target)}>
              {CALC}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App