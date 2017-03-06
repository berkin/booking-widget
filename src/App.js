import React, { Component } from 'react';
import Input from './components/Input';
import Autocomplete from './components/Autocomplete';
import './App.css';

class App extends Component {
	render() {
		return (
			<main>
				<h1>Blacklane</h1>
				<form className="booking-form" name="booking_request_form" id="new_booking_request" action="https://www.blacklane.com/en/booking_requests/transfers/new" acceptCharset="UTF-8" method="get">
					<input name="utf8" type="hidden" value="✓" />
					<div id="first-leg" className="pure-g">
						<Autocomplete className="pure-u-1-2" type="address" placeholder="From: address, airport, hotel, ..." name="booking_request[pickup]" />
						<Autocomplete className="pure-u-1-2" type="address" placeholder="To: address, airport, hotel, ..." name="booking_request[dropoff]" />
						<Input type="date" name="booking_request[at_date]" />
						<Input type="time" name="booking_request[at_time]" />
					</div>
					<div id="second-leg">
						<Autocomplete type="address" placeholder="From: address, airport, hotel, ..." name="booking_request[return_pickup]" />
						<Autocomplete type="address" placeholder="To: address, airport, hotel, ..." name="booking_request[return_dropoff]" />
						<Input type="date" name="booking_request[return_at_date]" />
						<Input type="time" name="booking_request[return_at_time]" />
					</div>
				<button>Book a ride</button>
				</form>
			</main>
	);
	}
}

export default App;
