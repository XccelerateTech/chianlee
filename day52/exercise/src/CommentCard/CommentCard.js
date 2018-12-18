import React from 'react';

interface IMyProps {
	title: string;
	body: string;
}

const CommentCard : React.SFC<IMyProps> = (props) => {
	return (
		<div>
			<h3>Title of Comment</h3>
			<h2>{props.title}</h2>


			<div>
				<h4>Body of Comment</h4>
				<p>{props.body}</p>
			</div>
		</div>
	)
}

export default CommentCard;