import React, {Component} from 'react';

interface IMyProps {
	name: string;
}

const ShoppingList3 : React.SFC<IMyProps> = (props) => {
	return (
		<div>
			<h1> {props.name}'s Shopping List</h1>
			<h1> {this.props.date}
		</div>
	)
}

export default ShoppingList3;