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
				<h1 className="form_header"></h1>
				</div>
				<SSF onData={this.dataHandler}>
					<div className="form_input_div">
						<Dropzone className="drop-area" onDrop={::this.dropHandler}>
							<span className="drop-span">Drop Something Here</span>
							<input type="hidden" value={this.state.preview} name="photo"/>
							<img className="dropzone-img" src={this.state.preview}/>
						</Dropzone>
						</div>
						<div className="form_input_div-fields">
						<label>
							Fullname:
						<input type="text" name="name"/>
						</label> 
						</div>
						<div className="form_input_div-fields">
						<label>
							Email:
						<input type="email" name="email"/>
						</label> 
						</div>
						<div className="form_input_div-fields">
						<label>
							Phone:
						<input type="tel" name="phone"/>
						</label> 
						</div>
						<div className="form_input_div-fields">
						<label>
							Location:
						<input type="text" name="location"/>
						</label> 
					</div>
					<button className="add_peeps_btn"><Icon type="save"/></button>
				</SSF>
			</div> 
		);
	}
}