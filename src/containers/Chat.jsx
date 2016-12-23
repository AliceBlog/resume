import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Chat.less"
import userHeader from "./../assets/image/userHeader.jpg"
import HR from "./../assets/image/hr.jpg"
import {bindActionCreators} from 'redux'
let clientStart = {}
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       message:0
    }
  }
handleLooMore(){
  this.props.push("/showMore")
}
handleMessage(){
  let hasMessage=false;
  if(this.state.message==5){
this.setState({message:this.props.massage.length-1})
  }
this.props.massage.map((item,index)=>{
  if(index>(this.state.message+1)&&item.user=="hr"&&!hasMessage){
   
    hasMessage=true
    this.setState({message:index-1})
  }
})
}
componentDidUpdate(){
    if(this.refs.content){
    this.refs.content.scrollTop=this.refs.content.scrollHeight+this.refs.content.clientHeight;
    }
}
  render() {

    
    return (
      <div className={styles.root}>
        <header>Alice</header>
        <div className="content" ref="content">
        {this.props.massage.map((item,index)=>{
        if(index<=this.state.message){
          
           if(item.user=="alice"){
             
            return <div key={index} className="alice">
            <img src={userHeader} />
            <div className="send" onClick={item.text=="查看详情"?this.handleLooMore.bind(this):null}>
              {item.text=="查看详情"?<a>{item.text}</a>:item.text}
              <div className="arrow"></div>
            </div>
          </div>
          }else if(item.user=="hr"){
           return <div key={index} className="hr">
            <div className="send">
              {item.text}
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
          }
        }
        })}
          
          
           
       
        </div>
        <div className="bottom"> 
        <input disabled type="text" value={this.props.massage[this.state.message+1]?this.props.massage[this.state.message+1].text:""}/>
    <button onClick={this.handleMessage.bind(this)}>发送</button>
        </div>
      </div>


    )
  }

}

function mapStateToProps(state) {
  return {
    massage:[
      {"user":"alice","text":"Hi,我希望应聘前端"},
      {"user":"hr","text":"Hi,Alic,很高心接到你的应聘，可以简单自我介绍一下吗？"},
      {"user":"alice","text":"年龄24，性别女，做前端两年啦~手机端，pc端都可以搞定哦，对代码有着特殊的爱好，我的梦想是做黑客..."},
      {"user":"hr","text":"那你会哪些技术呢？"},
      {"user":"alice","text":"恩~最基本的html,css,js肯定没问题啦，jquery也是玩的很转，webpack打包的会哦，js框架的话，angular1、angular2、react都会，vue了解过"},
      {"user":"alice","text":"哦，对，java会一丢丢，mysql会一丢丢，然后的话ps，ai都ok啦，我有设计师的证..."},
      {"user":"hr","text":"我大概了解啦~那你可以给我一份详细的简历吗？"},
       {"user":"alice","text":"没问题～"},
        {"user":"alice","text":"查看详情"},
    ]
  }
}

function mapDispatchToProps(dispatch) {
  return {
 push: bindActionCreators(push, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
