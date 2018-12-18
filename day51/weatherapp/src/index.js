import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import WeatherCard from './Weather';


function Clock(props) {
	return (
		<div>
			<h1>Hello world</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}

function tick() {
	React
}


setInterval(tick, 1000)


serviceWorker.unregister();
