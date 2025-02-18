<script lang="ts" setup>
import { DsTag } from "~/components/DesignSystem";
import { useAuthStore } from "~/store/auth";
import { expireInDays } from "~/utils/date";
import { numDaysIgnore, pending } from "~/utils/constants";
import { isNotEmpty } from "~/utils/notEmpty";
import type { IMap } from "~/global-interface/interfaces";
import type { IDsTagType } from "~/components/DesignSystem/components/basic/tag/types";
import { sanatizeText } from "~/utils/text";
import { styleStatus, styleStatusTagOutline } from "./library";

const authStore = useAuthStore();
const user = authStore.getUser;

const props = defineProps<{
  status?: string;
  date?: string;
  system_changes?: string;
  onlyView?: boolean;
  currentStyleStatusTagOutline?: any;
}>();

const theStatus = computed(() => {
  let currentStatus = props?.status;
  if (props?.onlyView) {
    return currentStatus;
  }
  const existOriginalState = (currentStatus as string) in styleStatus;
  if (existOriginalState) {
    return currentStatus;
  }
  if (currentStatus === pending) {
    const isUpperDay = expireInDays(numDaysIgnore, props?.date);
    currentStatus = isUpperDay ? forExpire : currentStatus;
  } else {
    if (canAccess(user.roles, [OPERATOR])) {
      if (isNotEmpty(props?.system_changes)) {
        currentStatus = confirms;
      }
    }
  }

  return currentStatus;
});

const isOutLine = computed(() =>
  (props.currentStyleStatusTagOutline ?? styleStatusTagOutline).find(
    (d) => d === theStatus.value
  )
);
</script>

<template>
  <DsTag
    :outline="!!isOutLine"
    :color="(styleStatus as IMap)[theStatus as string] as unknown as IDsTagType"
    :text="sanatizeText(theStatus || '')"
  />
</template>
