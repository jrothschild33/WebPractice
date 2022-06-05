import React, { Component, Fragment } from 'react'
// import Demo from './components/1_setState'
// import Demo from './components/2_lazyLoad'
// import Demo from './components/3_hooks'
// import Demo from './components/4_Fragment'
// import Demo from './components/5_Context'
// import Demo from './components/6_optimize'
// import Demo from './components/7_renderProps'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Demo />
      </Fragment>
    )
  }
}
