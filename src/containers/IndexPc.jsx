import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./IndexPc.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/bg.jpg"
import Bg1 from "./../assets/image/1.jpg"
import Bg2 from "./../assets/image/2.jpg"
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
  goBasics(url){
    this.props.push("/"+url)
  }
  render() {
    return (
      <div className={`indexPc`}>
        <div>
          <h1>Aliceの个人简历</h1>
          <h3>github:<a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></h3>
          <div className="container">
            <div className="col-3">
              <div className={`templatemo_link templatemo_mainservice`} onClick={this.goBasics.bind(this,"basics")}>
              基本资料
              </div>
              <div className={`templatemo_link1 yellow`}>
              <img className="bgImg" src={Bg}/></div>
            </div>
            <div className="col-3">
              <div className={`templatemo_link greenBlue`}>
              
              <img className="bgImg" src={Bg1}/>
              </div>
              <div className={`templatemo_link pink`} onClick={this.goBasics.bind(this,"experience")}>
              工作教育经验
              </div>
              <div className={`templatemo_link greenBlue`} onClick={this.goBasics.bind(this,"project")}>
              项目经验
              </div>
            </div>
            <div className="col-3">
              <div className={`templatemo_link blue`} onClick={this.goBasics.bind(this,"skill")}>
              拥有技能
              </div>
              <div className={`templatemo_link1 yellow`}>
              <img className="bgImg" src={Bg2}/>
              </div>
            </div>
            <div className="col-3">
              <div className={`templatemo_link yellow`}  onClick={this.goBasics.bind(this,"hope")}>
              期望工作
              </div>
              <a className="templatemoBlock" href="http://alice.witdor.com" target="view_window"><div className={`templatemo_link red`}>
              博客
              </div></a>
              <div className={`templatemo_link green`} onClick={this.goBasics.bind(this,"tel")}>
              联系我
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
