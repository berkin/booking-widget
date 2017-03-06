import React, { Component } from 'react';

class Form extends Component {

	constructor() {
		super();

		this.state = {
			isValid: false,
			error: ''
		}
	}
	handleSubmit(e) {
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} {...this.props}>
			{this.state.isValid ? null : <div className="error">{this.state.error}</div>}
			{this.props.children}
			</form>
		);
	}
}

export default Form;
