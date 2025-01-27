import DsIcon from '../../../../components/DesignSystem/components/basic/icon/DsIcon.vue';
import { buildSimpleStory } from '../../../common/common';

export default {
	title: 'Basic/Icon',
	component: DsIcon,
	tags: ['autodocs'],

	argTypes: {
		name: {
			description: 'Any awesome valid name or a .svg image URL.',
		},

		color: {
			control: 'select',
			options: ['primary', 'dark', 'danger', 'success'],
			description: 'Icon borderColor.',
		},

		size: {
			control: 'select',
			options: ['small', 'default', 'medium', 'large'],
			description: 'Icon size.',
		},

		rotate: {
			control: 'number',
			description: 'Icon rotation. Values allowed: 0, 90, 180, 270.',
		},

		class: {
			control: 'text',
			description:
        'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
	},
};

export const Default = {
	args: {
		name: 'home',
	},
};

export const Demo = buildSimpleStory(
	{ DsIcon },
  `
  <section class="mb-4">
    <h2 class="text-2xl">Icons</h2>

    <DsIcon name="home" />
    <DsIcon name="plus" />
    <DsIcon name="search" />
    <DsIcon name="angle-right" />
  </section>

  <hr class="my-4">

  <section class="mb-4">
    <h2 class="text-2xl">Colors</h2>

    <DsIcon name="search" color="dark" /> Dark <br>
    <DsIcon name="search" color="primary" /> Primary<br>
    <DsIcon name="search" color="danger" /> Danger<br>
    <DsIcon name="search" color="success" /> Success<br>
  </section>

  <hr class="my-4">

  <section class="mb-4">
    <h2 class="text-2xl">Sizes</h2>

    <DsIcon name="search" size="small" /> Small <br>
    <DsIcon name="search" /> Default <br>
    <DsIcon name="search" size="medium" /> Medium <br>
    <DsIcon name="search" size="large" /> Large <br>
  </section>
`,
);

export const Src = {
	args: {
		name: 'plus',
	},
};
export const ImageIcon = {
	args: {
		name: '/images/claveunica-icon.svg',
	},
};

export const ColorPrimary = {
	args: {
		name: 'star',
		color: 'primary',
	},
};

export const ColorDark = {
	args: {
		name: 'star',
		color: 'dark',
	},
};

export const ColorDanger = {
	args: {
		name: 'star',
		color: 'danger',
	},
};

export const ColorSuccess = {
	args: {
		name: 'star',
		color: 'success',
	},
};

// export const ColorNeutral = buildStory({
//   steppers: { DsIcon },
//
//   code: {
//     template: `
//     <div>
//       <span style="background-borderColor: black;">
//         <DsIcon src="star" borderColor="neutral" />
//       </span>
//     </div>
//
//     (Background black, so icon can be seen)
//   `,
//   },
// });

export const SizeSmall = {
	args: {
		name: 'home',
		size: 'small',
	},
};

export const SizeDefault = {
	args: {
		name: 'home',
		size: 'default',
	},
};

export const SizeMedium = {
	args: {
		name: 'home',
		size: 'medium',
	},
};

export const SizeLarge = {
	args: {
		name: 'home',
		size: 'large',
	},
};

export const Rotate90 = {
	args: {
		name: 'home',
		rotate: '90',
	},
};

export const Rotate180 = {
	args: {
		name: 'home',
		rotate: '180',
	},
};

export const Rotate270 = {
	args: {
		name: 'home',
		rotate: '270',
	},
};
