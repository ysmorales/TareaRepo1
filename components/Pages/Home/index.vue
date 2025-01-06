<script lang="ts" setup>
import { DsGenericCard, DsTypography, DsTag } from "~/components/DesignSystem";
import TableWrapper from "~/components/Pages/tableWrapper.vue";
import type { ITableColumnData } from "~/components/DesignSystem/components/basic/table/interface";
import service, { type ITrainingEditRequest } from "~/api-services/creator";

import TitleBlock from "./TitleBlock.vue";

const handlerSelect = () => {
  navigateTo("/builder");
};

const url = useRequestURL();
const route = useRoute();

const query = computed(() => route.query);

const {
  status,
  data: detail,
  error,
} = await service().request.getAll(
  `list`,
  [query],
  false,
  { ...route.query },
  true
);

const seeDetail = ({ id }: Partial<ITrainingEditRequest>) =>
  goToPath(`${url.pathname}/solicitud-${id}`);

const othersProps = {
  deleteAllButtonHide: false,
  addButtonLabel: "Nuevo prototipo",
  hideCheckBox: true,
  deleteAllButtonHide: true,
  multiActionsRender: {
    some: "",
  },
};

const eventsProps = {
  view: seeDetail,
  addRow: handlerSelect,
};

const tableColumn: ITableColumnData[] = [
  { title: "Nº", key: "id", size: "w-[5%]" },

  {
    title: "Nombre",
    key: "name",
    size: "w-[12%]",
  },
  {
    title: "Última modificación",
    key: "lastChange",
    size: "w-[15%]",
  },
  { title: "Autor(a)", key: "username", size: "w-[12%]" },
  { title: "Correo electrónico", key: "email", size: "w-[10%]" },
  { title: "Permisos", key: "permissions", size: "w-[12%]" },
  {
    title: "Acciones",
    key: "actions",
    size: "w-[15%]",
    actions: {
      view: true,
      type: "link",
      labels: { view: "Ver solicitud" },
    },
  },
];
</script>

<template>
  <article>
    <TitleBlock />
    <div class="grid md:grid-cols-4 gap-2">
      <DsGenericCard class="bg-slate-50 border-slate-300" v-for="ii in 4">
        <template #header>
          <div class="flex">
            <div class="flex-none">
              <DsTypography variant="h4">Landing</DsTypography>
            </div>
            <div class="ml-auto">
              <DsButton
                color="tertiary"
                size="large"
                @click="() => handlerSelect()"
                >></DsButton
              >
            </div>
          </div>
        </template>

        <template #body> Plantilla varias columnas </template>

        <template #footer>
          <div class="flex flex-wrap gap-2">
            <DsTag text="Templates" class="text-primary-500" />
            <DsTag text="Garelly" class="text-primary-500" />
            <DsTag text="Templates" class="text-primary-500" />
          </div>
        </template>
      </DsGenericCard>
    </div>
  </article>
  <article class="mt-2">
    <TitleBlock
      title="Últimos prototipos"
      sub-title="Revisa y gestiona tus prototipos más recientes."
    />
    <TableWrapper
      :columns="tableColumn"
      :data="detail as any"
      :loading="status === 'pending'"
      :others-props="othersProps"
      :events-props="eventsProps"
      :error="error"
      :getData="getList"
      :getPaginator="getPaginator"
    />
  </article>
</template>
