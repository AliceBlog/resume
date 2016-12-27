import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./Project.less"
import { bindActionCreators } from 'redux'
import moment from 'moment'
import Bg from "./../assets/image/6.jpg"
import hamlays from "./../assets/image/hamlays.png"
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
      <div className={`project`}>
       <div>
           <h1>Aliceの个人简历</h1>
          <h3>github:<a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></h3>
         
          <div className="container">
            <div className="col-3">
              <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"projectExperience")}>
              项目经验
             {this.state.type=="projectExperience"?<div></div>:null} 
              </div>
               <div className={`templatemo_link greenBlue`} onClick={this.changeType.bind(this,"projectShow")}>
              项目展示
              {this.state.type=="projectShow"?<div></div>:null}
              </div>
              <div className={`templatemo_link blue`} onClick={this.goHome.bind(this)}>
              回到主页
              </div>
            </div>
             
            <div className="col-3">
              <div className={`templatemo_linkall text`}>
             {this.state.type=="projectExperience"?<div>
              <div className="liu">
               <div className="begin"></div>
               <p>tuso后台管理系统</p>
               <p>后台管理系统为APP和前台页面服务，包含活动、滤镜、心情色，每日设置，数据统计、用户管理等等，主要负责项目的搭建、活动、每日设置、用户管理等模块，
            主要采用的技术有react，webpack，redux，采用模块化进行团队开发</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>tuso轻博客开发</p>
               <p>该项目的目的将tusoApp转为网页版，通过按时间划分瀑布流的形式让用户看见自己的生活记录，页面分为手机端和pc端，用户可以通过上传照片，封面，音乐，轻松管理自己的tuso轻博客
                ，主要负责瀑布流的手机端开发以及接口的对接。主要采用的技术有react，webpack，redux，采用模块化进行团队开发</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>hamleys活动开发</p>
               <p>该项目为hamleys开业开发，将tusoapp的功能转为网页版融入活动中，包含照片瀑布流，拍照，选择滤镜抽奖的功能。主要负责
            页面的所有开发和接口的对接。主要采用的技术有react，webpack，redux，采用模块化进行团队开发</p>
               </div>
               <div className="liu">
               <div className="begin"></div>
               <p>hamleys后台管理系统</p>
               <p>后台管理系统为hamleys活动准备，包含图片管理、图片打印、获奖管理、数据统计等等，主要整个项目的搭建，图片管理，打印生成明信片，
            主要采用的技术有react，webpack，redux，采用模块化进行团队开发</p>
               </div>
              
               <div className="liu">
               <div className="begin"></div>
               <p>微信公众平台活动</p>
               <p>一些活动页面，接入微信开发者平台的数据，所用技术大多为jquery，偶尔写写后台的java，然后通过jsp接入数据</p>
               </div>
                <div className="liu">
               <div className="begin"></div>
               <p>“一家”APP内的H5页面</p>
               <p>APP中的页面大多为活动页面或者列表，活动大概包含抽奖，文案，小游戏等等，所用技术为jquery或者angularjs</p>
               </div>
                <div className="liu">
               <div className="begin"></div>
               <p>“一家”后台管理系统的页面开发和维护</p>
               <p>前端页面开发，嵌入jsp的数据对接，所用技术为jquery和jquery easyui</p>
               </div></div>:<div>
               <ul>
               <li><h4>小区场景编辑器</h4><p><a target="view_window" href="www.witdor.com/AliceDemo/content_editor">www.witdor.com/AliceDemo/content_editor</a></p></li>
               <li><h4>Windows主题</h4><a target="view_window" href="http://www.witdor.com/AliceDemo/metro/">http://www.witdor.com/AliceDemo/metro/</a></li>
                <li><h4>Tuso轻博客</h4><a target="view_window" href="http://tuso.dev.tusoapp.com/login.html#/?_k=o050jy">http://tuso.web.tusoapp.com/login.html#/?_k=o050jy</a></li>                
                <li><h4>Tuso主页</h4><a target="view_window" href="http://website.dev.tusoapp.com/">http://website.web.tusoapp.com/</a></li>                
                 <li><h4>Tuso商家版</h4><a target="view_window" href="http://tusomerchants.web.tusoapp.com/">http://tusomerchants.web.tusoapp.com/</a></li>                
               <li><h4>Alice小窝</h4><a target="view_window" href="http://www.witdor.com/aliceBlog/dist">http://www.witdor.com/aliceBlog/dist</a></li>
               <li><h4>hamleys活动</h4><img src={hamlays} style={{width:200}}/></li>
                <li><h4>更多项目请移步github</h4><a target="view_window" href="https://github.com/AlicePrincess">https://github.com/AlicePrincess</a></li>
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
