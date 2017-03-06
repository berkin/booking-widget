import React, { Component } from 'react';

class Input extends Component {

	render() {
		return	(
			<div className={this.props.className} >
				<input {...this.props} className="Input" ref={input => this.textInput = input} />
			</div>
		)
	}
}

export default Input;
