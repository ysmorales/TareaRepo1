export function useScroll() {

	return {
		scrollTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		},
	}
}