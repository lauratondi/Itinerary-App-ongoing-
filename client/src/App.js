import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Cities from './components/Cities';
import Footer from './components/Footer';
import Itineraries from './components/Itineraries';
import Login from './components/Login';
import User from './components/User';
import Comments from './components/Comments';
import CommentsPost from './components/CommentsPost';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
            <Route path='/itineraries/:city' component={Itineraries} />
            <Route path='/itineraries/:id' component={Comments} />
            <Route path='/itineraries/:id' component={CommentsPost} />
            <Route path='/login' component={Login} />
            <Route path='/user' component={User} />
            <Route exact path='/' component={Footer} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}


export default App;
