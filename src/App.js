import React, { Component } from 'react';
import uuid from 'node-uuid';

import Animate from './Animate'
import Select from './Select'

import style from './styles.css'

export class App extends Component {
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
      ],
      animationEnter: 'bounceIn',
      animationLeave: 'bounceOut',
      durationEnter: 1000,
      durationLeave: 1000,
    };
  }

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

  onChangeProp(prop, newValue) {
    var stateToSet = {};
    stateToSet[prop] = newValue;
    this.setState(stateToSet);
  }

  render() {
    const { items, ...others } = this.state;

    return (
        <div className="container">
          <Select onChange={this.onChangeProp.bind(this)} {...others}/>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
                type="text"
                placeholder="create item"
                ref="input"
            />
          </form>
          <Animate component="ul" {...others}>

            {items.map(item => this.renderItem(item))}

          </Animate>
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