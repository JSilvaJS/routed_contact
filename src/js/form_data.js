
import React, { Component } from 'react';
import SSF from 'react-simple-serial-form';
import Icon from './icon';
import Dropzone from 'react-dropzone';
import { hashHistory } from 'react-router';
import UserData from './user_data';

export default class FormData extends Component {

		constructor() {
		super();
		this.state = {
			preview: 'http://www.colorhexa.com/0f4c85.png'
		}
	}

	dataHandler(newUser) {
		UserData.push(newUser);
		hashHistory.push('/');
	}

	dropHandler([file]) {
		this.setState({preview: file.preview});
	}

	render() {
		return (
			<div className="form-view">
				<div className="form_header_div">
				<h1 className="form_header">Add Peep</h1>
				</div>
				<SSF onData={::this.dataHandler}>
					<div className="form_input_div">
						<Dropzone onDrop={::this.dropHandler}>
							<span className="drop-span">Drop Something Here</span>
							<input type="hidden" value={this.state.preview} name="newUser"/>
							<img className="dropzone-img" src={this.state.preview}/>
						</Dropzone>
						</div>
						<div className="form_input_div">
						<label>
							Fullname:
						<input type="text" name="newUser"/>
						</label> 
						</div>
						<div className="form_input_div">
						<label>
							Email:
						<input type="email" name="newUser"/>
						</label> 
						</div>
						<div className="form_input_div">
						<label>
							Phone:
						<input type="tel" name="newUser"/>
						</label> 
						</div>
						<div className="form_input_div">
						<label>
							Location:
						<input type="text" name="newUser"/>
						</label> 
					</div>
					<button className="add_peeps_btn"><Icon type="save"/></button>
				</SSF>
			</div> 
		);
	}
}