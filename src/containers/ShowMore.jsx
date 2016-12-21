import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { push } from 'redux-router'
import styles from "./ShowMore.less"
import {bindActionCreators} from 'redux'

let clientStart = {}
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
prePage(){
  this.props.push("/chat")
}
homePage(){
    this.props.push("/setIndex")
}
  render() {
    return (
      <div className={styles.root}>
      
       <div className="blackBord">
        <header>出租自己</header>
        <ul>
        <li>身高三围<span>（基础信息）</span> </li>
        <li>人生旅程<span>（工作经验）</span></li>
        <li>大脑容量<span>（项目经验）</span></li>
        <li>展望未来<span>（期望工作）</span></li>
        <li>免费福利<span>（github主页）</span></li>
        <li>特殊喜好<span>（Aliceの博客）</span></li>
        <li>请联系我<span>（QQ/weChat/TEL）</span></li>
        </ul>
        <div className="bottom">
        <button>全部展开</button>
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
