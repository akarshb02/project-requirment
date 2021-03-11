import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import content from './content';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';



ReactDOM.render( <div>
    <Router>
    <Switch>
   
            <Route exact path = "/" component = { App }/>
            <Route exact path = "/content" component = { content }/> 
              
    </Switch>  
    </Router> 
    </div>,

    document.getElementById('root')
);
