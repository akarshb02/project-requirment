import {Component} from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import page from './pages/page';
import UserPage from './pages/users';

class App extends Component {
  render(){
    return <Router>
          <Switch>
              <Route exact path='/' component={page} />
              <Route exact path='/component' component={UserPage}/>
          </Switch>

    </Router>
  }
}

export default App;
