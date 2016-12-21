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

    }
  }
handleLooMore(){
  this.props.push("/showMore")
}
  render() {
    return (
      <div className={styles.root}>
        <header>Alice</header>
        <div className="content">
          <div className="alice">
            <img src={userHeader} />
            <div className="send">
              alice的话术在这里
              <div className="arrow"></div>
            </div>
          </div>
          <div className="hr">
            <div className="send">
              Hr的话术在这里，每一行有最大的宽度，做一个多一点字的测试，呵呵
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
            <div className="alice">
            <img src={userHeader} />
            <div className="send">
              alice的话术在这里
              <div className="arrow"></div>
            </div>
          </div>
          <div className="hr">
            <div className="send">
              Hr的话术在这里，每一行有最大的宽度，做一个多一点字的测试，呵呵
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
            <div className="alice">
            <img src={userHeader} />
            <div className="send">
              alice的话术在这里
              <div className="arrow"></div>
            </div>
          </div>
           <div className="alice">
            <img src={userHeader} />
            <div className="send">
              士大夫的身高多少个地方规划的双方各单方事故是对方公司的风格
              <div className="arrow"></div>
            </div>
          </div>
          <div className="hr">
            <div className="send">
              Hr的话术在这里，每一行有最大的宽度，做一个多一点字的测试，呵呵
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
           <div className="hr">
            <div className="send">
              Hr的话术在这里，每一行有最大的宽度，做一个多一点字的测试，呵呵
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
           <div className="hr">
            <div className="send">
              Hr的话术在这里，每一行有最大的宽度，做一个多一点字的测试，呵呵
              <div className="arrow"></div>
            </div>
            <img src={HR} />
          </div>
          <div className="alice">
            <img src={userHeader} />
            <div className="send">
              <a onClick={this.handleLooMore.bind(this)}>查看更多</a>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="bottom"> 
        <input disabled type="text"/>
        <button>发送</button>
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
