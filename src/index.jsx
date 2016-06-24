'use strict'

import React from 'react'
import { render } from 'react-dom'

var remote = require('electron').remote
var fs = remote.require('fs')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      filePath: 'data.json',
      fileText: ''
    }
  }
  componentDidMount () {
    fs.exists(this.state.filePath, (exists) => {
      if (!exists) return
      fs.readFile(this.state.filePath, (err, data) => {
        if (err) throw err
        this.setState({ fileText: JSON.parse(data).fileText })
      })
    })
  }
  handleTextChange (event) {
    this.setState({ fileText: event.target.value }, () => {
      fs.writeFile(this.state.filePath, JSON.stringify(this.state))
    })
  }
  render () {
    return (
      <textarea
        value={this.state.fileText}
        onChange={(event) => this.handleTextChange(event)}
      />
    )
  }
}

let appNode = document.createElement('div')
document.body.appendChild(appNode)

render(<App />, appNode)
