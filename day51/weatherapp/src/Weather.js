import React from 'react';
import sunnyImg from './images/sun.png';


const WeatherCard = (props) => {
	let style = {
		width: '18rem'
	}
	return (
		<div className="card" style={style}>
		  
		  <div className="card-body">

		    <p className="card-text">Today temperate maximum: {props.temp[0]} minimum: {props.temp[1]}</p>
		    <img className="card-img-top" src={sunnyImg} alt="Card image cap" style={style}/>
		  </div>
		  <div>The date is {props.date}</div>
		</div>
	)
}

export default WeatherCard;