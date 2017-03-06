import React, { Component } from 'react';
import './list.css';

class List extends Component {

	render() {
		if (!this.props.isActive) {
			return null;
		}

		return (
			<div>
			{this.props.items.length > 0 ? (
			<ul className="List">
				{this.props.items.map(item => <li className="List-Item" key={item.uuid} onClick={this.props.onItemClick.bind(null, item)}>{item.name}</li>)}
			</ul>
			) : (
			 <p className="no-result">No Results</p>
			)}
			</div>
	);
	}
}

export default List;
