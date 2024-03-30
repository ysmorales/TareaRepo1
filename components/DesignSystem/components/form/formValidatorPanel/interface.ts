import type { Ref } from "vue";

export interface errorPanelInterface {
  id: string;
  details: string;
  errorMessage?: string | Ref<string>;
}
