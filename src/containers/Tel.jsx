import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Tel.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/bg.jpg"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    if (!this.IsPC()) {
      this.props.push('/setIndex')
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
  goHome(){
    this.props.push("/indexpc")
  }
  render() {
    return (
      <div className={`tel`}>
       <div>
           <h1>Aliceの个人简历</h1>
          <h3>github:<a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></h3>
         
          <div className="container">
            <div className="col-3">
              <div className={`templatemo_link1 yellow`}>
              <img className="bgImg" src={Bg}/></div>
              <div className={`templatemo_link blue`} onClick={this.goHome.bind(this)}>
              回到主页
              </div>
            </div>
             
            <div className="col-3">
              <div className={`templatemo_linkall yellow`}>
               <div>
               <input type="text" placeholder="公司名称"/>
               <input type="text" placeholder="您的称呼"/>
               <input type="text" placeholder="公司地址"/>
               <input type="text" placeholder="联系电话"/>
               <textarea placeholder="职位描述"></textarea>
               <button>发送</button>
               </div>
                </div>
            </div>
            <div className="col-3">
             <div className={`templatemo_linkall text yellow`}>
              <div> 
               <h2>更多方式</h2>
               <p>QQ:706654794</p>
               <p>TEL:18151667997</p>
               <p>Email:alice@witdor.com</p>
               <div className="message">您的联系，我的动力</div>
                </div>
                </div>
              
            </div>
            
            
          </div>
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
