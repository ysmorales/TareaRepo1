export default {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },

  beforeUnmount: (el: any) => {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
