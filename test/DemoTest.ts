///<reference types="mocha"/>
import Demo from '../src/Demo';

describe('Calculator', () => {
	let subject: Demo;

	beforeEach(function () {
		subject = new Demo();
	});

	describe('#add', () => {

		it('should add two numbers together', () => {
			let result: number = subject.add(2, 3);
			if (result !== 5) {
				throw new Error('Expected 2 + 3 = 5 but was ' + result);
			}
		});

	});
});
