import React from 'react';

const Questioner = (props) => {
	return (
		<div>
			{props.children}
			<button>Answer</button>
			<p>this is your question</p>
		</div>
	)
}