import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Hope.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/1.jpg"
import Bg1 from "./../assets/image/2.jpg"
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
      <div className={`hope`}>
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
              <table>
                  <tbody className="second">
                    <tr>
                      <td>工作期望</td>
                    </tr>
                    <tr>
                      <td>对于个人发展来说希望找两类的工作，第一是游戏公司，第二是带前端团队，并且公司的开发部前后端分离或者是未来有打算分离，用Angular2或者有打算用的优先考虑~</td>
                    </tr>
                    <tr>
                      <td>薪资期望</td>
                    </tr>
                    <tr>
                      <td>15K左右，满足第一条的工资可以谈~</td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
            <div className="col-3">
             <div className={`templatemo_linkall`}>
             <img className="bgImg" src={Bg1}/>
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
