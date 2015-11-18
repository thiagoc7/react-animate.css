import React, { Component, PropTypes } from 'react';

import animations from './animations'

export default class Select extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    animationEnter: PropTypes.string.isRequired,
    animationLeave: PropTypes.string.isRequired,
    durationEnter: PropTypes.number.isRequired,
    durationLeave: PropTypes.number.isRequired,
  };

  render() {
    return (
        <div className="row">
          <div className="three columns">
            <label htmlFor="animationEnter">Animation Enter</label>
            <select
                name="animationEnter"
                value={this.props.animationEnter}
                onChange={e => this.props.onChange('animationEnter', e.target.value)}>

              {animations.map(animation => <option key={animation.name} value={animation.name}>{animation.name}</option>)}

            </select>
          </div>

          <div className="three columns">
            <label htmlFor="animationLeave">Animation Leave</label>
            <select
                name="animationLeave"
                value={this.props.animationLeave}
                onChange={e => this.props.onChange('animationLeave', e.target.value)}>

              {animations.map(animation => <option key={animation.name} value={animation.name}>{animation.name}</option>)}

            </select>
          </div>

          <div className="three columns">
            <label htmlFor="durationEnter">Duration Enter</label>
            <input
                type="text"
                value={this.props.durationEnter}
                onChange={e => this.props.onChange('durationEnter', parseInt(e.target.value == '' ? 0 : e.target.value))}
            />
          </div>

          <div className="three columns">
            <label htmlFor="durationLeave">Duration Leave</label>
            <input
                type="text"
                value={this.props.durationLeave}
                onChange={e => this.props.onChange('durationLeave', parseInt(e.target.value == '' ? 0 : e.target.value))}
            />
          </div>

        </div>
    )
  }

  handleChange(e, prop) {
    alert(e.target.value)
    let result = {};
    result[prop] = e.target.value;
    this.props.onChange(result);
  }
}