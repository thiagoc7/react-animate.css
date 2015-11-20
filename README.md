# css animations ready for ReactCSSTransitionGroup

[![npm package](https://img.shields.io/npm/v/react-animate.css.svg?style=flat-square)](https://www.npmjs.com/package/react-animate.css)

#### [Demo](https://thiagoc7.github.io/react-animate.css)

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-animate.css
    $ npm install --save animate.css

## Notes

You need to install and require animate.css yourself.

This way you may have a small css build, importing just the animations you need.

Or you can create your own animations, use another library... This is a very small package, you should take a look at source.


## Usage

```js
import Animate from 'react-animate.css';

import 'animate.css/animate.css';  // you need to require the css somewhere

<Animate
    animationEnter="bounceIn"
    animationLeave="bounceOut"
    durationEnter={1000}
    durationLeave={1000}
    component="ul" >

  {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}

</Animate>

// use a unique ID, not index
```

