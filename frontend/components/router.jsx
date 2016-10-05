import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SearchContainer from './search_container';
import HouseFormContainer from './house_form_container';
import HouseShowContainer from './house_show_container';
import LandingPageContainer from './landing_page_container';
import HouseApp from './house_app';
import SessionFormContainer from './session_form_container';
//

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ LandingPageContainer }/>
          <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="houses" component={ HouseApp }>
            <Route path="search" component={ SearchContainer } />
            <Route path="new" component={ HouseFormContainer } onEnter={ this._ensureLoggedIn } />
            <Route path=":houseId" component={ HouseShowContainer } />
          </Route>
        </Route>
      </Router>
    )
  }
  //
  // render(){
  //   return(
  //     <Router history={ hashHistory }>
  //       <Route path="/" component={ App }>
  //         <IndexRoute component={ SearchContainer } />
  //         <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
  //         <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
  //         <Route path="/houses/new" component={ HouseFormContainer } onEnter={ this._ensureLoggedIn } />
  //         <Route path="/houses/:houseId" component={ HouseShowContainer } />
  //     </Route>
  //     </Router>
  //   )
  // }
}

export default AppRouter;
// class AppRouter extends React.Component{
//   constructor(props){
//     super(props);
//     this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
//     this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
//   }
//
//   _ensureLoggedIn(nextState, replace){
//     const currentState = this.context.store.getState();
//     const currentUser = currentState.session.currentUser;
//     if (!currentUser) {
//       replace('/login');
//     }
//   }
//
//   _redirectIfLoggedIn(nextState, replace){
//     const currentState = this.context.store.getState();
//     const currentUser = currentState.session.currentUser;
//     if (currentUser) {
//       replace('/');
//     }
//   }
//
//   render(){
//     return(
//       <Router history={ hashHistory }>
//         <Route path="/" component={ App }>
//           <IndexRoute component={ SearchContainer } />
//           <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
//           <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
//           <Route path="/benches/new" component={ BenchFormContainer } onEnter={ this._ensureLoggedIn }/>
//           <Route path="/benches/:benchId" component={ BenchShowContainer} >
//             <Route path="review" component={ ReviewFormContainer } onEnter={ this._ensureLoggedIn }/>
//           </Route>
//         </Route>
//       </Router>
//     );
//   }
// }
//
// AppRouter.contextTypes = {
//   store: React.PropTypes.object.isRequired
// };
//
