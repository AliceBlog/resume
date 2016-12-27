import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Experience.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/5.jpg"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        type:"work"
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
  changeType(type){
    this.setState({type:type})
  }
  render() {
    return (
      <div className={`experience`}>
       <div>
           <h1>Aliceの个人简历</h1>
          <h3>github:<a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></h3>
         
          <div className="container">
            <div className="col-3">
               <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"work")}>
              工作经验
             {this.state.type=="work"?<div></div>:null} 
              </div>
               <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"study")}>
              教育经验
              {this.state.type=="study"?<div></div>:null}
              </div>
              <div className={`templatemo_link blue`} onClick={this.goHome.bind(this)}>
              回到主页
              </div>
            </div>
             
            <div className="col-3">
              <div className={`templatemo_linkall text`}>
              {this.state.type=="work"?<div>
              <div className="liu">
               <div className="begin"></div>
               <p>2016.3~至今</p>
               <p>南京负空间科技有限公司</p>
               <p>前端开发工程师</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>2015.3~2016.3</p>
               <p>南京聚比特信息科技有限公司<span>(苏宁环球子公司)</span></p>
               <p>前端开发工程师</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p><a onClick={this.changeType.bind(this,"study")}>寒窗苦读中</a></p>
               </div>
              </div>:
            <div>
            <div className="liu">
               <div className="begin"></div>
               <p><a onClick={this.changeType.bind(this,"study")}>成猿历练中</a></p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>2014.9~2015.3</p>
               <p>南京新华电脑学院</p>
               <p>软件开发</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>2011.9~2014.6</p>
               <p>南京城市职业学院</p>
               <p>社区管理与服务</p>
               </div>
                <div className="liu">
               <div className="begin"></div>
               <p>2005.9~2011.6</p>
               <p>南京行知实验中学</p>
               <p>初中+高中</p>
               </div>
            </div>}
              
               
              </div>
            </div>
            <div className="col-3">
             <div className={`templatemo_linkall`}>
             <img className="bgImg" src={Bg}/>
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
