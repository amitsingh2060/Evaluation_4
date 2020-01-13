import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Add from './component/Add';
import View from './component/View';
import Comment from './component/Comment'
import ExtraComment from './component/ExtraComment';
import ExtraView from './component/ExtraView';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
           <Route  exact path="/" render={props => <Login {...props}/>}/>
           <Route  path="/dashboard" render={props => <Dashboard {...props}/>}/>  
           <Route  path="/add" render={props => <Add {...props}/>}/>   
           <Route  path="/view" render={props => <View {...props}/>}/>  
           <Route  path="/comment/:id" render={props => <Comment {...props}/>}/> 
           <Route  path="/extra" render={props => <ExtraComment {...props}/>}/>
           <Route  path="/extraview" render={props => <ExtraView {...props}/>}/>
           
        </BrowserRouter>
    </div>
  );
}

export default App;
