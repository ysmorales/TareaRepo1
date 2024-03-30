export function scrollToSection(target: string = "validator-panel") {
  const element = document.getElementById(target);
  element?.scrollIntoView({ behavior: "smooth" });
  element?.focus();
}
