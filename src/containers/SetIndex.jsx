import React from 'react'
import {connect} from 'react-redux'
import DocumentTitle from 'react-document-title'
import {push} from 'redux-router'
import styles from "./SetIndex.less"
import Bg from "./../assets/image/bg.jpg"
import {bindActionCreators} from 'redux'
import moment from 'moment'
import userHeader from "./../assets/image/userHeader.jpg"

let clientStart={}
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    bottonStyle:{}
    }
  }
  	handleTouchStart(e) {
		e.preventDefault();
		e.stopPropagation();
		clientStart = {
y:e.touches[0].clientY,
x:e.touches[0].clientX
    };
	}
  handleTouchMove(e){
    e.preventDefault();    
    if(this.refs.bottonTouch.offsetLeft>=this.refs.bottonBox.clientWidth){
     this.setState({bottonStyle:{left:this.refs.bottonBox.clientWidth+20}})  
     this.props.push("/chat")
    }
else if(e.touches[0].clientX>clientStart.x){
  this.setState({bottonStyle:{left:e.touches[0].clientX-30}})  
}

  }
  handleTouchEnd(e){
      e.preventDefault();  
if(this.refs.bottonTouch.offsetLeft<this.refs.bottonBox.clientWidth){
     this.setState({bottonStyle:{left:"9vh"}})  
    }
  }
  componentDidMount(){
    if(this.IsPC()){
this.props.push('/indexPc')
    }
  }
   IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
  render() {
      return (
      <div className={styles.root} style={{backgroundImage:"url("+Bg+")"}}>
       <header>
       <div>
       {moment(new Date()).format('HH:mm')}
       </div>
       {moment(new Date()).format('YYYY-MM-DD')}
       </header>
       <div className="message">
       <img src={userHeader}/>
       <div>Alice</div>
       <div>收到一份新简历！</div>
       </div>
       <div className="bottom" onTouchMove={this.handleTouchMove.bind(this)}>
       <div className="button" ref="bottonTouch" onTouchEnd={this.handleTouchEnd.bind(this)} onTouchStart={this.handleTouchStart.bind(this)} style={this.state.bottonStyle}></div>
       <div className="text" ref="bottonBox">滑动解锁</div>
       </div>
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
      push: bindActionCreators(push, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
