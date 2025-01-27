export const data = [
	{ text: 'Item 1', icon: 'home' },
	{ text: 'Item 2', icon: 'star' },
	{
		text: 'Item 3',
		icon: 'asterisk',
		items: [
			{ text: 'Item 3.1' },
			{ text: 'Item 3.2' },
			{ text: 'Item 3.3', items: [{ text: 'Item 3.3.1' }, { text: 'Item 3.3.2' }, { text: 'Item 3.3.3' }] },
		],
	},
	{ text: 'Item 4' },
	{
		text: 'Item 5',
		items: [
			{
				text: 'Item 5.1',
				items: [{ text: 'Item 5.1.1' }, { text: 'Item 5.1.2' }, { text: 'Item 5.1.3' }],
			},
			{ text: 'Item 5.2' },
			{ text: 'Item 5.3' },
			{ text: 'Item 5.4', items: [{ text: 'Item 5.4.1' }, { text: 'Item 5.4.2' }, { text: 'Item 5.4.3' }] },
			{ text: 'Item 5.5' }],

	}];
