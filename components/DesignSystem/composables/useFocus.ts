import { ref, watch, onMounted, nextTick } from 'vue';
import type { Ref } from 'vue';

export default function useFocus(
	initialState: () => boolean,
	errorState?: () => string | Ref<string> | undefined | null,
) {
	const elementRef = ref<HTMLTextAreaElement | null>(null);

	const setFocus = () => {
		if (elementRef.value) {
			elementRef.value.focus();
		}
	};

	watch(
		initialState,
		(hasFocus) => {
			if (hasFocus) {
				setFocus();
			}
		},
		{ immediate: true },
	);

	if (errorState) {
		watch(
			errorState,
			(hasError) => {
				if (hasError && initialState()) {
					setFocus();
				}
			},
			{ immediate: true },
		);
	}

	onMounted(async () => {
		await nextTick(() => {
			if (initialState()) {
				setFocus();
			}
		});
	});

	return {
		elementRef,
	};
}
