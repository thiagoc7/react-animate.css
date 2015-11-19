import React, { Component, PropTypes } from 'react';

export default class extends Component {

  render() {
    return (
      <pre>
        <code>
          {this.renderCode()}
        </code>
      </pre>
    )
  }

  renderCode() {
    return (
        `
import Animate from 'react-animate.css'

import 'animate.css/animate.css'  // you need to require the css somewhere

<Animate
    animationEnter="bounceIn"
    animationLeave="bounceOut"
    durationEnter={1000}
    durationLeave={1000}
    component="ul" >

  {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}

</Animate>

** use a unique ID, not index
        `
    )
  }
}