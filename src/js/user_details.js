import React, { Component, PropTypes } from 'react';
import UserData from './user_data';
import Icon from './icon';

export default class UserDetails extends Component {

	render () {
		let { user_name } = this.props.params;
		let user = UserData.find(currentUser => currentUser.name === user_name);

		return (
			<div className="user-details">
				<div className="avatar">
					<img className="ud_img" src={user.photo} alt={user.name}/>
				</div>
				<ul className="info">
					<li className="ud_li"><Icon type="user"/>{user.name}</li>
					<li className="ud_li"><Icon type="envelope"/>{user.email}</li>
					<li className="ud_li"><Icon type="mobile"/>{user.phone}</li>
					<li className="ud_li"><Icon type="globe"/>{user.location}</li>
				</ul>
			</div>
		);
	}
}

