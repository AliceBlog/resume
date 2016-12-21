import React from 'react'
import {connect} from 'react-redux'
import DocumentTitle from 'react-document-title'
import {push} from 'redux-router'
import styles from "./AppContainer.less";
import {bindActionCreators} from 'redux'


export function AppContainer(Component){
const ManageContainer = React.createClass({

	getInitialState() {
    return {
     
    };
  },
  componentWillMount(){
    
},
	render: function() {
	
      return (

        <DocumentTitle title="ManageContainer">
       <Component handleloading={this.handleloading}></Component>
        </DocumentTitle>

      )
    
	}
})

function mapStateToProps(state) {
		return {
  
		}
	}

function mapDispatchToProps(dispatch) {
	return {
    push: bindActionCreators(push, dispatch),
    //  logout: bindActionCreators(logout, dispatch),
	}
}

return connect(mapStateToProps, mapDispatchToProps)(ManageContainer)
}
