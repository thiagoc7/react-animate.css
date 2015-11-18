import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import animations from './animations'
import 'animate.css/animate.css'

export default class extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    animationEnter: PropTypes.string.isRequired,
    animationLeave: PropTypes.string.isRequired,
    durationEnter: PropTypes.number.isRequired,
    durationLeave: PropTypes.number.isRequired,
  };

  render() {
    const { children, animationEnter, animationLeave, durationEnter, durationLeave, ...others} = this.props;

    return (
        <div>

          <style dangerouslySetInnerHTML={{__html: this.renderStyle(animationEnter, animationLeave, durationEnter, durationLeave)}} />

          <ReactCSSTransitionGroup
              component="ul"
              transitionName={ {
                enter: 'default-enter',
                enterActive: animationEnter,
                leave: 'default-leave',
                leaveActive: animationLeave,
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
    const animationEnterObj = animations.find(item => item.name == animationEnter);
    const animationLeaveObj = animations.find(item => item.name == animationLeave);

    return (
        `
        .default-enter {
          ${animationEnterObj.enterStyle}
        }

        .default-enter.${animationEnter} {
          animation-duration: ${durationEnter / 1000}s;
          animation-fill-mode: both;
        }

        .default-leave {
          ${animationLeaveObj.leaveStyle}
        }

        .default-leave.${animationLeave} {
          animation-duration: ${durationLeave / 1000}s;
          animation-fill-mode: both;
        }
        `
    )
  }
}