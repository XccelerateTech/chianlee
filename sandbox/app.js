class WordProblem {

	constructor(question) {
		question.replace('What is', '');
		debugger;
		this.instructions = question.match(/(\-?\d+|\w+)/g);
		this.knownOps = ['plus', 'minus', 'multiplied', 'divided'];	
	}

	answer() {
		let operations = [];

		for(let i = 0, len = this.instructions.length; i < len; i += 1 ) {
			let instruction = this.instructions[i];
			if(parseInt(instruction) && operations.length == 0) {
				operations.push(parseInt(instruction));
			} else if(parseInt(instruction)) {
				operations = this.performOperation(instruction, operations);
			} else if(this.knownOps.includes(instruction)){
				operations.push(instruction);
			} else {
				throw new ArgumentError();
			}
		}
		return operations[0];
	}

	performOperation(instruction, operations) {
		let operandA = operations[0];
		let operator = operations[1];
		let result;

		if (operator === 'plus') {
			result = operandA + parseInt(instruction);
		} else if (operator === 'minus') {
			result = operandA - parseInt(instruction);
		} else if (operator === 'multiplied') {
			result = operandA * parseInt(instruction);
		} else if (operator === 'divided') {
			result = operandA / parseInt(instruction);
		}

		return [result];
	}
}
