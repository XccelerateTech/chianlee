import React from 'react';
import faker from 'faker';

interface IMyProps {
	author: string;
	comment: string;
	date: string;
	comment: string;
	children?: JSX.Element[] | JSX.Element;
}


const CommentCard : React.SFC<IMProps> = (props) => {
	let style = {
		maxWidth: '18rem'
	}

	return (
		<div className="card text-white bg-primary mb-3" style={style}>
			<div className="card-header"><img src={faker.image.avatar()}></img></div>
			<div className="card-title"><h3>{props.author}</h3></div>
			<div className="card-body">
				<p className="card-text">Today at {props.date}</p>
				<p className="card-text">{props.comment}</p>
			</div>
		</div>
	)
}

export default CommentCard;