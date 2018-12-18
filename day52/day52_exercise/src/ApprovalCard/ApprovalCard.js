import React from 'react'

const ApprovalCard = (props) => {
	return (
		<div>
			{props.children}
			<button type="button">Accept</button>
			<button type="button">Reject</button>
		</div>
	)
}

export default ApprovalCard;