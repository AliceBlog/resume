import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Skill.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/7.jpg"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        type:"projectExperience"
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
      <div className={`skill`}>
       <div>
           <h1>Aliceの个人简历</h1>
          <h3>github:<a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></h3>
         
          <div className="container">
            <div className="col-3">
              <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"projectExperience")}>
              语言类
             {this.state.type=="projectExperience"?<div></div>:null} 
              </div>
               <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"projectShow")}>
              工具类
              {this.state.type=="projectShow"?<div></div>:null}
              </div>
              <div className={`templatemo_link blue`} onClick={this.goHome.bind(this)}>
              回到主页
              </div>
            </div>
             
            <div className="col-3">
              <div className={`templatemo_linkall text`}>
             {this.state.type=="projectExperience"?<div>
              <ul>
             <li>HTML（精通）</li>
             <li>CSS（精通）</li>
             <li>Javascript（精通）</li>
             <li>angularJs（精通）</li>
             <li>angular2（精通）</li>
             <li>react（精通）</li>
             <li>jquery以及各大库（精通）</li>
             <li>bootstrap（包含和各个框架结合）（精通）</li>
             <li>webpack（精通）</li>
             <li>typeScript（熟悉）</li>
             <li>reactNative（熟悉）</li>
             <li>ionic（熟悉）</li>
             <li>vue（熟悉）</li>
             <li>jsp(熟悉)</li>
             <li>java（了解）</li>
             <li>mysql（了解）</li>
             </ul>
             </div>:<div>
               <ul>
               <li>Adobe Illustrator(AI)</li>
               <li>photoShop(ps)</li>
               <li>vs code</li>
               <li> sublime Text</li>
               <li>Atom</li>
               <li>eclipse</li>
               </ul>
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
