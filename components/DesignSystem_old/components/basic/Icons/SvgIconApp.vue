<script lang="ts" setup>
// type IColor = "dark" | "light" | "primary" | "secondary" | "tertiary";
// const library = {
//   dark: "text-gray-900",
//   light: "text-white",
//   primary: "primary-500",
//   secondary: "text-secondary",
//   tertiary: "text-tertiary",
// };
// defineProps({
//   color: {
//     type: String as () => IColor,
//     default: "primary",
//   },
//   size: String,
// });
</script>

<template>
	<svg
		fill="none"
		height="24"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="main-icon"
			d="M11 6H6V11H11V6Z"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.4"
		/>
		<path
			class="main-icon"
			d="M18 6H13V11H18V6Z"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.4"
		/>
		<path
			class="main-icon"
			d="M18 13H13V18H18V13Z"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.4"
		/>
		<path
			class="main-icon"
			d="M11 13H6V18H11V13Z"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.4"
		/></svg>
</template>
