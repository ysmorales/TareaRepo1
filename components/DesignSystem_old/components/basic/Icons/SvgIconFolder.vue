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
			d="M19 16.6667C19 17.0203 18.8525 17.3594 18.5899 17.6095C18.3274 17.8595 17.9713 18 17.6 18H6.4C6.0287 18 5.6726 17.8595 5.41005 17.6095C5.1475 17.3594 5 17.0203 5 16.6667V7.33333C5 6.97971 5.1475 6.64057 5.41005 6.39052C5.6726 6.14048 6.0287 6 6.4 6H9.9L11.3 8H17.6C17.9713 8 18.3274 8.14048 18.5899 8.39052C18.8525 8.64057 19 8.97971 19 9.33333V16.6667Z"
			stroke="#000"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.4"
		/>
	</svg>
</template>
