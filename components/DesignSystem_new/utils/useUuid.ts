import { ref, onBeforeMount } from 'vue';
import generateUniqueId from './generateUniqueId';

export function useUuid() {
	const uuid = ref<string>();

	onBeforeMount(() => {
		uuid.value = generateUniqueId();
	});

	return {
		uuid,
	};
}
