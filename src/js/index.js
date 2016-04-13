// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import cookie from 'js-cookie';
import Icon from './icon';
import UserList from './user_list';
import UserData from './user_data';
import UserDetails from './user_details';
import FormData from './form_data';
import Main from './main';


render((
 <Router history={hashHistory}>
 	<Route path="/" component={Main}>
	 	<IndexRoute component={UserList}/>
	 	<Route path="/UserDetails/:user_name" component={UserDetails}/>
	 	<Route path="/FormData" component={FormData}/>
 	</Route>
 </Router>
 ), document.querySelector('.app'));



