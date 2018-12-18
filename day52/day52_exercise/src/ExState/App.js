import React, {Component} from 'react'
import DisplayList2 from './DisplayList2'
import CommentCard from '../ApprovalCard/CommentCard'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'jyoti',
			list: [
				{id: 1, item: <CommentCard author='Putin' date={new Date().toLocaleString()} comment='This is who you are'/>},
				{id: 2, item: <CommentCard author='Trump' date={new Date().toLocaleString()} comment='This is who I am'/>}
			]
		}
	}

	render() {
		return (
			<div>
				<DisplayList2 name={this.state.name} list={this.state.list}></DisplayList2>
			</div>
		)
	}
}

export default App;