describe('Demo Test', () => {
	let $link;

	beforeEach(() => {
		loadFixtures('demo.html');

		$link = $('.demolink');
	});

	it('exists', () => {
		expect($link.length).toEqual(1);
	});

	it('initial name is foo', () => {
		expect($link.text()).toEqual('Foo');
	});

	it('changes name to bar after click', () => {
		$link.trigger('click');
		expect($link.text()).toEqual('Bar');
	});
});
