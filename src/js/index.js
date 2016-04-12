// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import cookie from 'js-cookie';
import Icon from './icon';
import UserList from './user_list';
import UserData from './user_data';
import UserDetails from './user_details';
import FormData from './form_data';


render((
 <Router history={hashHistory}>
 	<Route path="/" component={UserList}/>
 	<Route path="/UserDetails" component={UserDetails}/>
 	<Route path="/FormData" component={FormData}/>
 </Router>
 ), document.querySelector('.app'));



