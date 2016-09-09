import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {

  static propTypes = {
    //children: PropTypes.any.isRequired,
    animationEnter: PropTypes.string.isRequired,
    animationLeave: PropTypes.string.isRequired,
    durationEnter: PropTypes.number.isRequired,
    durationLeave: PropTypes.number.isRequired
  };

  render() {
    const { children, animationEnter, animationLeave, durationEnter, durationLeave, ...others } = this.props

    return (
        <div>

          <style dangerouslySetInnerHTML={ { __html: this.renderStyle(animationEnter, animationLeave, durationEnter, durationLeave) } } />

          <ReactCSSTransitionGroup
              component="ul"
              transitionName={ {
                enter: 'default-enter',
                enterActive: animationEnter,
                leave: 'default-leave',
                leaveActive: animationLeave
              } }
              transitionEnterTimeout={durationEnter}
              transitionLeaveTimeout={durationLeave}
              {...others}>

            {children}

          </ReactCSSTransitionGroup>

        </div>
    )
  }

  renderStyle(animationEnter, animationLeave, durationEnter, durationLeave) {

    return (
        `
        .default-enter {
          opacity: 0;
        }

        .default-enter.${animationEnter} {
          animation-duration: ${durationEnter / 1000}s;
          animation-fill-mode: both;
          opacity: 1;
        }

        .default-leave {
          opacity: 1;
        }

        .default-leave.${animationLeave} {
          animation-duration: ${durationLeave / 1000}s;
          animation-fill-mode: both;
        }
        `
    )
  }
}
