import React from 'react'
// import {connect} from 'react-redux'
import {connect} from '../libs/react-redux'

import {increment, decrement, addMsg} from '../redux/actions'
import Counter from '../components/counter'

export default connect(
  state => ({count: state.count, msgs: state.msgs}),
  {increment, decrement, addMsg}
)(Counter)