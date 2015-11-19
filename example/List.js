import React, { Component, PropTypes } from 'react';
import uuid from 'node-uuid';

import Animate from 'react-animate.css'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: uuid.v4(),
          name: 'item 1'
        },
        {
          id: uuid.v4(),
          name: 'item 2'
        },
        {
          id: uuid.v4(),
          name: 'item 3'
        }
      ]
    };
  }

  static propTypes = {
    animationEnter: PropTypes.string.isRequired,
    animationLeave: PropTypes.string.isRequired,
    durationEnter: PropTypes.number.isRequired,
    durationLeave: PropTypes.number.isRequired,
  };

  removeItem(id) {
    const items = this.state.items
    const index = items.findIndex(item => item.id == id)
    this.setState({
      items: [
        ...items.slice(0, index),
        ...items.slice(index + 1)
      ],
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const ref = this.refs.input

    this.setState({
      items: [
        {
          id: uuid.v4(),
          name: ref.value
        },
        ...this.state.items
      ]
    }, ref.value = '')
  }

  render() {
    return (
        <div className="row">
          <div className="row" style={{marginTop: 50}}>
            <form onSubmit={this.onSubmit.bind(this)}>
              <input
                  type="text"
                  placeholder="create item"
                  ref="input"
              />
            </form>
            <Animate component="ul" {...this.props}>
              {this.state.items.map(item => this.renderItem(item))}
            </Animate>
          </div>
        </div>
    );
  }

  renderItem(item) {
    return (
        <li key={item.id}>
          {item.name}
          <span style={{cursor: 'pointer'}} onClick={() => this.removeItem(item.id)}>  &times;</span>
        </li>
    )
  }
}