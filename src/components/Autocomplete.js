import React, { Component } from 'react';
import Input from './Input';
import List from './List.js';

class Autocomplete extends Component {
	constructor() {
		super();

		this.state = {
			selected: null,
			isActive: false,
			items: [],
			value: ''
		}
	}

	handleKeyUp(e) {
		let self = this;

		if (e.target.value.length === 1) {
			this.setState({items: []});
		}

		if (e.target.value.length < 3) {
			return;
		}

		fetch(`https://athena.blacklane.com/locations/autocomplete?input=${e.target.value}`)
			.then(function(response) {
				return response.json();
			})
			.then(function(items) {
				self.setState({items: items.results});
			});
	}

	handleFocus(e) {
		this.setState({isActive: true});
	}

	handleBlur(e) {
		this.setState({isActive: false});
	}

	handleItemClick(item) {
		this.setState({value: item.name});
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return (
			<div className={`Autocomplete ${this.props.className}`}>
				<Input
					name={this.props.name}
					placeholder={this.props.placeholder}
					autoComplete="off"
					type="text"
					onKeyUp={this.handleKeyUp.bind(this)}
					onFocus={this.handleFocus.bind(this)}
					onChange={this.handleChange.bind(this)}
					value={this.state.value}
			/>
			<div className="Autocomplete-Result" />
				<List
					items={this.state.items}
					isActive={this.state.isActive}
					selected={this.state.selected}
					onItemClick={this.handleItemClick.bind(this)}
				/>
			</div>
	);
	}
}

export default Autocomplete;
