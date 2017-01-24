export default class Demo {
	constructor() {
		console.log('Demo constructor()');
	}

	test($element: JQuery): void {
		$element
			.html('TypeScript Plugin loaded')
			.css('backgroundColor', 'lightcoral')
			.on('click', () => {
				console.log('clicked element');
				$element.css('backgroundColor', 'green');
			});
	}
}
