import React,{Component} from 'react';
import { render } from 'react-dom';

//路由
import { Router, Route, Link, hashHistory,IndexRoute,IndexLink,Redirect} from 'react-router';

import Reset from './common/reset.css';
import Mainstyle from './main.css';
import Header from './components/header/header';
import Shouye from './pages/shouye/shouye';
import Xiaoxi from './pages/xiaoxi/xiaoxi';
import Faxian from './pages/faxian/faxian';
import Wo from './pages/wo/wo';

class Main extends Component{
  render(){
    return(
      <div>
        <div className={ Mainstyle. }>
          <Header />
          <ul>
            <li><Link to="/shouye">首页</Link></li>
            <li><Link to="/xiaoxi">消息</Link></li>
            <li><Link to="/faxian">发现</Link></li>
            <li><Link to="/wo">我</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

let router =
<Router history={hashHistory}>
  <Redirect from="/" to="/shouye" />
  <Route path="/" component={Main}>
    <Route path="/shouye" component={Shouye}/>
    <Route path="/xiaoxi" component={Xiaoxi}/>
    <Route path="/faxian" component={Faxian}/>
    <Route path="/wo" component={Wo}/>
  </Route>
</Router>

render((
router
), document.getElementById('root'))
