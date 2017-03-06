import React, { Component } from 'react';
import Form from './components/Form.js';
import Input from './components/Input';
import Autocomplete from './components/Autocomplete';
import './App.css';

class App extends Component {

	render() {
		return (
			<main>
				<h1>Blacklane</h1>
				<Form className="booking-form" name="booking_request_form" id="new_booking_request" action="https://www.blacklane.com/en/booking_requests/transfers/new" acceptCharset="UTF-8" method="get">
					<input name="utf8" type="hidden" value="✓" />
					<div id="first-leg" className="pure-g form-group">
						<Autocomplete className="pure-u-1 pure-u-md-1-2" placeholder="From: address, airport, hotel, ..." name="booking_request[pickup]" />
						<Autocomplete className="pure-u-1 pure-u-md-1-2" placeholder="To: address, airport, hotel, ..." name="booking_request[dropoff]" />
						<Input className="pure-u-1-2" type="date" name="booking_request[at_date]" />
						<Input className="pure-u-1-2" type="time" name="booking_request[at_time]" />
					</div>
					<div id="second-leg" className="pure-g form-group">
						<Autocomplete className="pure-u-1-2" placeholder="From: address, airport, hotel, ..." name="booking_request[return_pickup]" />
						<Autocomplete className="pure-u-1-2" placeholder="To: address, airport, hotel, ..." name="booking_request[return_dropoff]" />
						<Input className="pure-u-1-2" type="date" name="booking_request[return_at_date]" />
						<Input className="pure-u-1-2" type="time" name="booking_request[return_at_time]" />
					</div>
					<div className="pure-g">
						<div className="pure-u-1">
							<button className="button">Book a ride</button>
						</div>
					</div>
					</Form>
			</main>
	);
	}
}

export default App;
