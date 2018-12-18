import React, {Component} from 'react';

interface IMyProps {
	name: string;
	date: string;
}

const ShoppingList3 : React.SFC<IMyProps> = (props) => {
	return (
		<div>
			<h1> {props.name}'s Shopping List</h1>
			<h2> {props.date}' Date</h2>
		</div>
	)
}

export default ShoppingList3;