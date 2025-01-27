import DsNavbar from '../../../../components/DesignSystem/components/navigation/navbar/DsNavbar.vue';
import DsIconNavigationResponsive from '../../../../components/DesignSystem/components/navigation/user-menu/DsUserMenu.vue';

import DsButtonAvatar from '../../../../components/DesignSystem/components/basic/button-avatar/DsButtonAvatar.vue';
import DsLink from '../../../../components/DesignSystem/components/navigation/link/DsLink.vue';
import DsIcon from '../../../../components/DesignSystem/components/basic/icon/DsIcon.vue';

export default {
	components: { DsLink, DsIcon, DsIconNavigationResponsive, DsButtonAvatar },
	title: 'Navigation/Navbar',
	component: DsNavbar,
	tags: ['autodocs'],
	argTypes: {
		height: {
			description:
        'Height of the navbar. This prop accepts a string that represents the CSS height value. For example, \'h-[65px]\'.',
		},
		logo: {
			description:
        'Logo of the navbar. This prop accepts a string that represents the path to the image file. For example, \'/images/logo-unidoos.svg\'.',
		},
	},
};

export const Default = {
	args: {},
};

const NavBarTemplate = args => ({
	components: { DsNavbar, DsLink, DsIcon, DsButtonAvatar },
	setup() {
		return { args };
	},
	template: `
        <DsNavbar>

            <div class="mx-auto max-w-[650px] hidden md:flex">
                <div class="flex  w-full flex-wrap justify-between   ">
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none">
                        <DsIcon class="mr-1" name="home"/>
                        Intranet
                    </DsLink>
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none"
                        href="/conectados/usuarios"
                    >
                        <DsIcon class="mr-1" name="th"/>
                        Conectados
                    </DsLink>
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none"
                        href="/aplicaciones/cambio-hora">
                        <DsIcon class="mr-1" name="folder"/>
                        Aplicaciones
                    </DsLink>
                </div>
            </div>
            <div class=" h-[65px] w-auto lg:w-1/3">
                <div class=" flex justify-end items-center">

                    <DsButtonAvatar/>
                </div>
            </div>
        </DsNavbar>
    `,
});
export const SlotUse = NavBarTemplate.bind({});
SlotUse.parameters = {
	docs: {
		description: {
			story: `
## Usage
First, you need to import the \`DsNavbar\` component into the component where you want to use it.

\`\`\`typescript
import DsNavbar from "./components/DesignSystem/components/navigation/navbar/DsNavbar.vue";
\`\`\`

Then, you can use the \`DsNavbar\` component in your template. Inside the \`DsNavbar\` component, you can use the default slot to insert the content you want.

\`\`\`html
< DsNavbar>
  <!-- Here goes the content you want to display in the Navbar -->
</DsNavbar>
\`\`\`

For example, if you want to display several links in the Navbar, you can do it as follows:

\`\`\`html
<DsNavbar>
  <DsLink href="/route1">Link 1</DsLink>
  <DsLink href="/route2">Link 2</DsLink>
  <DsLink href="/route3">Link 3</DsLink>
</DsNavbar>
\`\`\`

In this case, the \`DsLink\` components will be displayed in the Navbar. You can replace these components with any other content you want to display in the Navbar. 
See the example below for more details.
`,
		},
		source: {
			code: `
<template>
    <DsNavbar>
            <div class="mx-auto max-w-[650px] hidden md:flex">
                <div class="flex  w-full flex-wrap justify-between   ">
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none">
                        <DsIcon class="mr-1" name="home"/>
                        Intranet
                    </DsLink>
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none"
                        href="/conectados/usuarios"
                    >
                        <DsIcon class="mr-1" name="th"/>
                        Conectados
                    </DsLink>
                    <DsLink
                        class="flex items-center btn btn-secondary no-underline px-1 lg:px-2 mb-1 bg-white text-[0.82em] lg:text-[0.9em] mx-1 rounded-none"
                        href="/aplicaciones/cambio-hora">
                        <DsIcon class="mr-1" name="folder"/>
                        Aplicaciones
                    </DsLink>
                </div>
            </div>
            <div class=" h-[65px] w-auto lg:w-1/3">
                <div class=" flex justify-end items-center">

                    <DsButtonAvatar/>
                </div>
            </div>
        </DsNavbar>
</template>
`,
		},
	},
};
