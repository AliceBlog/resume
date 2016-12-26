import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Basics.less"
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
      <div className={`basics`}>
       <div>
          <h3>基本资料</h3>
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
                  <tbody>
                    <tr>
                      <td>姓名：</td>
                      <td>吴梦竹</td>
                    </tr>
                    <tr>
                      <td>性别：</td>
                      <td>女</td>
                    </tr>
                    <tr>
                      <td>英文名：</td>
                      <td>Alice</td>
                    </tr>
                    <tr>
                      <td>出生日期：</td>
                      <td>1993.5.23</td>
                    </tr>
                    <tr>
                      <td>婚姻状况：</td>
                      <td>未婚</td>
                    </tr>
                    <tr>
                      <td>毕业院校：</td>
                      <td>南京城市职业学院</td>
                    </tr>
                    <tr>
                      <td>学历：</td>
                      <td>大专</td>
                    </tr>
                    <tr>
                      <td>居住地：</td>
                      <td>南京光华路</td>
                    </tr>
                    <tr>
                      <td>民族：</td>
                      <td>汉</td>
                    </tr>
                  </tbody>
                </table>
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
