export const numberArray = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
];
export const textSizeClassesString = [
	's0',
	's1',
	's2',
	's3',
	's4',
	's5',
	's6',
	's7',
	's8',
	's9',
];
export const textWeightClassesString = [
	'w1',
	'w2',
	'w3',
	'w4',
	'w5',
	'w6',
	'w7',
	'w8',
	'w9',
];

export const stringNumber = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10';

const BASE_INDENT = 2;

export const commonArgText = {
	textSize: {
		control: {
			type: 'select',
		},
		description: 'Classes para el tamaño del texto',
		options: textSizeClassesString,
	},
	textWeight: {
		control: {
			type: 'select',
		},
		description: 'Classes para el peso del texto',
		options: textWeightClassesString,
	},
};

export const commonArgTypes = {
	'modelValue': { table: { disable: true } },
	'update:modelValue': { table: { disable: true } },

	'class': {
		control: 'text',
		description:
			'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
	},
};

export const commonInputArgTypes = {
	size: {
		description: 'Input text size',
		control: { type: 'select' },
		options: ['small', 'normal', 'medium', 'large', 'full'],
	},
	id: {
		description:
			'The id property uniquely identifies the check component within the application.',
	},
	focus: {
		control: 'boolean',
		description: 'If enabled, set input focus to this component.',
	},
	helpMessage: {
		control: 'text',
		description: 'Help message text for the component',
	},
	label: {
		control: 'text',
		description:
			'Label for the component. Is optional, and it shows over the component.',
	},

	disabled: {
		control: 'boolean',
		description:
			'Enabled/disabled state. When disabled, shows a visual \'disabled\' state and the textbox is read-only.',
	},

	required: {
		control: 'boolean',
		description:
			'Enabled/disabled required state. This state is used to validate when submitting a form.',
	},

	error: {
		control: 'text',
		description:
			'If assigned, shows this message under the component, with error styling.',
	},
};

function _buildCode(code: any): string {
	let result = '';

	if (code.setup) {
		result = `
<script setup lang="ts">
${_indentCode(code.setup)}
</script>`;
	}

	result += `

<template>
${_indentCode(code.template)}
</template>`;

	return result;
}

function _indentCode(code: string): string {
	if (code.trim().length === 0) {
		return '';
	}

	let lines = code.split('\n');

	lines = _trimEmptyLinesAtStartOrEnd(lines);

	if (lines.length === 0) {
		return '';
	}

	if (lines.length === 1) {
		return ' '.repeat(BASE_INDENT) + lines[0].trim();
	}

	const indent = _calculateIndent(lines[0]);

	return lines
		.map((line: string) => ' '.repeat(BASE_INDENT) + line.substring(indent))
		.join('\n');
}

function _trimEmptyLinesAtStartOrEnd(lines: string[]): string[] {
	return _trimEmptyLinesAtEnd(_trimEmptyLinesAtStart(lines));
}

function _trimEmptyLinesAtStart(lines: string[]): string[] {
	let result = [...lines];

	while (result[0].trim().length === 0) {
		result = result.slice(1);
	}

	return result;
}

function _trimEmptyLinesAtEnd(lines: string[]): string[] {
	let result = [...lines];

	while (result[result.length - 1].trim().length === 0) {
		result = result.slice(0, result.length - 1);
	}

	return result;
}

function _calculateIndent(line: string): number {
	let result = 0;

	while (line[result] === ' ') {
		result++;
	}

	return result;
}

type StoryOptions = {
	name?: string;
	components: Object;
	setup?: Function;
	methods?: Object;
	code: StoryCodeOption;
	viewport?: ViewportOptions;
};

type StoryCodeOption = {
	setup?: string;
	template: string;
};

type Story = {
	name?: string;
	components: Object;
	setup?: Function;
	methods?: Object;
	template: string;
};

type ViewportOptions = {
	height?: number;
	offset?: number;
};

function _buildTemplate(options: StoryOptions): string {
	if (!(options.viewport?.height || options.viewport?.offset)) {
		return options.code.template;
	}

	const viewportStyle = _buildViewportStyle(options.viewport);

	return `
  <div style="${viewportStyle}">
    ${options.code.template}
  </div>
  `;
}

function _buildViewportStyle(viewport: ViewportOptions): string {
	let result = '';

	if (viewport.height) {
		result += ` height: ${viewport.height}px;`;
	}

	if (viewport.offset) {
		result += ` padding-top: ${viewport.offset}px;`;
	}

	return result;
}

export function buildStory(options: StoryOptions): Story {
	const tplFunct = () => {
		return {
			name: options.name ?? null,
			components: options.components,
			setup: options.setup ?? null,
			methods: options.methods ?? null,
			template: _buildTemplate(options),
		};
	};

	const result: any = tplFunct.bind({});
	result.args = {};
	result.parameters = {
		docs: {
			source: {
				code: _buildCode(options.code),
			},
		},
	};

	return result;
}

export function buildSimpleStory(components: Object, template: string): Story {
	return buildStory({
		components,

		code: {
			template,
		},
	});
}
