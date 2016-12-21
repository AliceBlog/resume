import React from 'react'
import {connect} from 'react-redux'
import DocumentTitle from 'react-document-title'
import {push} from 'redux-router'
import styles from "./SetIndex.less"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
      return (
      <div className={styles.root}>
      index
      </div>

    )
  }

}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
     
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
