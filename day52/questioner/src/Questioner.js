import React, {Component} from 'react';
import DisplayQuestion from './Question';


class Questioner extends Component {
	constructor(props) {
		super(props);
	}

	promptQuestion() {
		prompt("Tell us your answer.");
	}

	render() {
		return (
			<div>
				<p>
					<DisplayQuestion question="Who are you"></DisplayQuestion>
				</p>

				<button onClick={this.promptQuestion}>Ask Question</button>
			</div>
		)
	}
}

export default Questioner