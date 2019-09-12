import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentText: '',
      error: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:1234/hello').then(
      result => {
        console.log(result)
        this.setState({ currentText: result.data, error: false })
      },
      error => {
        this.setState({ currentText: '', error: error })
      }
    )
  }

  render() {
    console.log(this.state.currentText)
    return <div>The server says: {this.state.currentText}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
