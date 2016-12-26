import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./ShowMore.less"
import { bindActionCreators } from 'redux'

let clientStart = {}
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lable0: false,
      lable1: false,
      lable2: false,
      lable3: false,
      lable4: false,
      lable5: false,
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
  prePage() {
    this.props.push("/chat")
  }
  homePage() {
    this.props.push("/setIndex")
  }
  handlePanle0() {
    this.setState({ lable0: !this.state.lable0 })
  }
  handlePanle1() {
    this.setState({ lable1: !this.state.lable1 })
  }
  handlePanle2() {
    this.setState({ lable2: !this.state.lable2 })
  }
  handlePanle3() {
    this.setState({ lable3: !this.state.lable3 })
  }
  handlePanle4() {
    this.setState({ lable4: !this.state.lable4 })
  }
  handlePanle5() {
    this.setState({ lable5: !this.state.lable5 })
  }
  handleShow(){
    if(this.state.lable0&&this.state.lable1&&this.state.lable2&&this.state.lable3&&this.state.lable4&&this.state.lable5){
      this.setState({ lable0: false ,lable1: false ,lable2: false ,lable3: false ,lable4: false,lable5: false  })
    }else{
      this.setState({ lable0: true ,lable1: true ,lable2: true ,lable3: true ,lable4: true,lable5: true  })
    }
  }
  render() {
    return (
      <div className={styles.root}>

        <div className="blackBord">
          <header>出租自己</header>
          <ul>
            <li onClick={this.handlePanle0.bind(this)}>
              <div className="title">身高三围<span>（基础信息）</span> </div>
              {this.state.lable0 ? <div className="content">
                <table className="first">
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
                      <td>居住所在地：</td>
                      <td>南京光华路</td>
                    </tr>
                    <tr>
                      <td>民族：</td>
                      <td>汉</td>
                    </tr>
                  </tbody>
                </table>
              </div> : null}
            </li>
            <li onClick={this.handlePanle1.bind(this)}>
              <div className="title">人生旅程<span>（入行经验）</span></div>
              {this.state.lable1 ? <div className="content">
                <table>
                  <tbody className="second">
                    <tr><td>2011.9~2014.6</td><td>南京城市职业学院</td></tr>
                    <tr><td colSpan="2" className="moudle">社区管理于服务专业</td></tr>
                    <tr><td>2014.9~2015.3</td><td>南京新华电脑学院</td></tr>
                    <tr><td colSpan="2" className="moudle">软件开发（一狠心一咬牙踏入猿生）</td></tr>
                    <tr><td>2015.3~2016.3</td><td>南京聚比特信息科技有限公司（苏宁环球子公司）</td></tr>
                    <tr><td colSpan="2" className="moudle">前端开发工程师</td></tr>
                    <tr><td>2016.3~至今</td><td>南京负空间科技有限公司</td></tr>
                    <tr><td colSpan="2">前端开发工程师</td></tr>
                  </tbody>
                </table>
              </div> : null}
            </li>
            <li onClick={this.handlePanle2.bind(this)}> <div className="title">大脑容量<span>（项目经验）</span></div>
              {this.state.lable2 ? <div className="content">
                <table>
                  <tbody className="second">
                    <tr><td>“一家”后台管理系统的页面开发和维护</td></tr>
                    <tr><td className="moudle">前端页面开发，嵌入jsp的数据对接，所用技术为jquery和jquery easyui</td></tr>
                    <tr><td>“一家”APP内的H5页面</td></tr>
                    <tr><td className="moudle">APP中的页面大多为活动页面或者列表，活动大概包含抽奖，文案，小游戏等等，所用技术为jquery或者angularjs</td></tr>
                    <tr><td>微信公众平台活动</td></tr>
                    <tr><td className="moudle">一些活动页面，接入微信开发者平台的数据，所用技术大多为jquery，偶尔写写后台的java，然后通过jsp接入数据</td></tr>
                    <tr><td>tuso后台管理系统</td></tr>
                    <tr><td className="moudle">后台管理系统为APP和前台页面服务，包含活动、滤镜、心情色，每日设置，数据统计、用户管理等等，主要负责项目的搭建、活动、每日设置、用户管理等模块，
            主要采用的技术有react，webpack，redux，采用模块化进行团队开发
            </td></tr>
                    <tr><td>hamleys后台管理系统</td></tr>
                    <tr><td className="moudle">后台管理系统为hamleys活动准备，包含图片管理、图片打印、获奖管理、数据统计等等，主要整个项目的搭建，图片管理，打印生成明信片，
            主要采用的技术有react，webpack，redux，采用模块化进行团队开发
            </td></tr>
                    <tr><td>hamleys活动开发</td></tr>
                    <tr><td className="moudle">
                      该项目为hamleys开业开发，将tusoapp的功能转为网页版融入活动中，包含照片瀑布流，拍照，选择滤镜抽奖的功能。主要负责
            页面的所有开发和接口的对接。主要采用的技术有react，webpack，redux，采用模块化进行团队开发
            </td></tr>
                    <tr><td>tuso轻博客开发</td></tr>
                    <tr><td>
                      该项目的目的将tusoApp转为网页版，通过按时间划分瀑布流的形式让用户看见自己的生活记录，页面分为手机端和pc端，用户可以通过上传照片，封面，音乐，轻松管理自己的tuso轻博客
            ，主要负责瀑布流的手机端开发以及接口的对接。主要采用的技术有react，webpack，redux，采用模块化进行团队开发
            </td></tr>
                  </tbody>
                </table>
              </div> : null}
            </li>
            <li onClick={this.handlePanle3.bind(this)}><div className="title">技能展示<span>（开发技能）</span></div>
              {this.state.lable3 ? <div className="content">
                <table className="third">
                  <tbody>
                    <tr>
                      <td className="moudle">语言类：</td>
                      <td className="moudle">HTML（精通）、CSS（精通）、Javascript（精通）、angularJs（精通）、angular2（精通）、react（精通）、jquery以及各大库（精通）、bootstrap（包含和各个框架结合）（精通）、webpack（精通）、typeScript（熟悉）、reactNative（熟悉）、ionic（熟悉）、vue（熟悉）、java（了解）、mysql（了解）</td>
                    </tr >
                    <tr>
                      <td>工具类：</td>
                      <td>Adobe Illustrator(AI)、photoShop(ps)、vs code、 sublime Text、Atom、eclipse</td>
                    </tr>
                  </tbody>
                </table>
              </div> : null}
            </li>
            <li onClick={this.handlePanle4.bind(this)}><div className="title">展望未来<span>（期望工作）</span></div>
              {this.state.lable4 ? <div className="content">
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
              </div> : null}</li>
            <li><a href="https://github.com/AlicePrincess" target="view_window">免费福利</a><span>（github主页）</span></li>
            <li><a href="http://alice.witdor.com" target="view_window">特殊喜好</a><span>（Aliceの博客）</span></li>
            <li onClick={this.handlePanle5.bind(this)}>请联系我<span>（QQ/weChat/TEL）</span>
              {this.state.lable5 ? <div className="content">
                <table className="third">
                  <tbody className="second">
                    <tr>
                      <td>QQ：706654794</td>
                    </tr >
                    <tr>
                      <td>E-mail：alice@witdor.com</td>
                    </tr>
                    <tr>
                      <td>Tel：<a href="tel:18151667997">18151667997</a></td>
                    </tr>
                  </tbody>
                </table>
              </div> : null}
            </li>
          </ul>
          <div className="bottom">
          {
            this.state.lable1&&this.state.lable2&&this.state.lable3&&this.state.lable4&&this.state.lable5?<button onClick={this.handleShow.bind(this)}>全部关闭</button>:<button onClick={this.handleShow.bind(this)}>全部展开</button>
          }
            
            <button onClick={this.homePage.bind(this)}>返回主页</button>
            <button onClick={this.prePage.bind(this)}>回上一页</button>
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
