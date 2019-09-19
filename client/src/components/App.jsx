import React from 'react'
import axios from 'axios'

import Increment from './Increment'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentText: '',
      error: false
    }
  }

  async componentDidMount() {
    const result = await axios.get('http://localhost:1234/hello')
    this.setState({ currentText: result.data, error: false })
  }

  render() {
    return (
    <div className="main">
      <div>The server says: {this.state.currentText}</div>
      <Increment />
    </div>)
  }
}