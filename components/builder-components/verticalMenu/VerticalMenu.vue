<script lang="ts" setup>

import DsSideMenu from "~/components/DesignSystem/components/navigation/sideMenu/DsSideMenu.vue";
import DsImage from "../../DesignSystem/components/media/images/imagesHtml/DsImages.vue";
import {menuItemsVerticalMenu} from "~/components/builder-components/verticalMenu/data";
</script>

<template>
  <div class="w-[350px] border-r border-gray-300 h-full p-3 pl-0">
    <DsImage src="images/back-office/creador-logotipo.jpg"/>
    <DsSideMenu :data-side-menu="menuItemsVerticalMenu"/>
  </div>
  <!--  <div class="column is-2 is-bordered-right">-->
  <!--    <div class="main-menu">-->

  <!--      <NuxtLink class="is-block img-logo is-radius has-text-centered mt-4 mb-6" to="/">-->
  <!--        <img alt=""-->
  <!--             class="img-logo"-->
  <!--             src="/images/back-office/creador-logotipo.jpg">-->
  <!--      </NuxtLink>-->
  <!--      <nav>-->
  <!--        <ul class="menu-list">-->
  <!--          <li>-->
  <!--            <a class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left"-->
  <!--            >-->
  <!--              <i class="las la-clock mr-2"></i> Mis prototipos-->
  <!--            </a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left"-->
  <!--            >-->
  <!--              <i class="las la-tag mr-2"></i> Categorías-->
  <!--            </a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left">-->
  <!--              <i class="las la-bars  mr-2"></i> Menús-->
  <!--            </a>-->
  <!--          </li>-->
  <!--          &lt;!&ndash;-->
  <!--          <li>-->
  <!--              <a aria-label="Archivos" href="archivos.php" class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left">-->
  <!--                  <i class="las la-file  mr-2"></i> Archivos-->
  <!--              </a>-->
  <!--          </li> &ndash;&gt;-->
  <!--          <li>-->
  <!--            <div class="collapse is-collapsed">-->
  <!--              <button-->
  <!--                  aria-controls="dropComple"-->
  <!--                  aria-expanded="false"-->
  <!--                  class=" BtnMenuCambio button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left collapse-button">-->
  <!--                <i class="las la-puzzle-piece mr-2"></i> Complementos-->
  <!--              </button>-->
  <!--              <div id="dropComple" class="collapse-content">-->
  <!--                <ul>-->
  <!--                  <li>-->
  <!--                    <div class="collapse is-collapsed">-->
  <!--                      <button-->
  <!--                          aria-controls="dropGallery"-->
  <!--                          aria-expanded="false"-->
  <!--                          class="BtnMenuCambio has-background-transparent has-background-menu button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left collapse-button">-->
  <!--                        <i class="las la-angle-right mr-2"></i> Galerías-->
  <!--                      </button>-->
  <!--                      <div id="dropGallery" class="collapse-content">-->
  <!--                        <ul>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left" title="Ir a la sección"><i-->
  <!--                                class="las la-angle-right mr-2"></i> Listado</a>-->
  <!--                          </li>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left"-->
  <!--                               title="Ir a la sección"><i class="las la-angle-right mr-2"></i> Categorías</a>-->
  <!--                          </li>-->
  <!--                        </ul>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                  </li>-->
  <!--                  <li>-->
  <!--                    <div class="collapse is-collapsed">-->
  <!--                      <button-->
  <!--                          aria-controls="dropDocs"-->
  <!--                          aria-expanded="false"-->
  <!--                          class="BtnMenuCambio has-background-transparent has-background-menu button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left collapse-button">-->
  <!--                        <i class="las la-angle-right mr-2"></i> Documentos-->
  <!--                      </button>-->
  <!--                      <div id="dropDocs" class="collapse-content">-->
  <!--                        <ul>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left"-->
  <!--                               title="Ir a la sección"><i class="las la-angle-right mr-2"></i> Listado</a>-->
  <!--                          </li>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left"-->
  <!--                               title="Ir a la sección"><i class="las la-angle-right mr-2"></i> Categorías</a>-->
  <!--                          </li>-->
  <!--                        </ul>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                  </li>-->
  <!--                  <li>-->
  <!--                    <div class="collapse is-collapsed">-->
  <!--                      <button-->
  <!--                          aria-controls="dropApp"-->
  <!--                          aria-expanded="false"-->
  <!--                          class="BtnMenuCambio has-background-transparent has-background-menu button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left collapse-button">-->
  <!--                        <i class="las la-angle-right mr-2"></i> Aplicaciones-->
  <!--                      </button>-->
  <!--                      <div id="dropApp" class="collapse-content">-->
  <!--                        <ul>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left"-->
  <!--                               title="Ir a la sección"><i class="las la-angle-right mr-2"></i> Listados</a>-->
  <!--                          </li>-->
  <!--                          <li>-->
  <!--                            <a class="py-4 button has-text-left"-->
  <!--                               title="Ir a la sección"><i class="las la-angle-right mr-2"></i> Instituciones</a>-->
  <!--                          </li>-->
  <!--                        </ul>-->
  <!--                      </div>-->
  <!--                    </div>-->
  <!--                  </li>-->
  <!--                </ul>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <a class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left">-->
  <!--              <i class="las la-icons mr-2"></i> Widgets-->
  <!--            </a>-->
  <!--          </li>-->
  <!--          &lt;!&ndash;-->
  <!--        <li>-->
  <!--            <a  aria-label="Diseño" href="diseno.php" class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left">-->
  <!--                <i class="las la-brush mr-2"></i> Diseño-->
  <!--            </a>-->
  <!--        </li>&ndash;&gt;-->
  <!--          <li>-->
  <!--            <a class="button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left">-->
  <!--              <i class="las la-project-diagram mr-2"></i> Subsitios-->
  <!--            </a>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <div class="collapse is-collapsed">-->
  <!--              <button-->
  <!--                  aria-controls="dropUser"-->
  <!--                  aria-expanded="false"-->
  <!--                  class=" BtnMenuCambio button p-4 py-4 is-inlineblock is-size-6 is-fullwidth has-text-left collapse-button">-->
  <!--                <i class="las la-user-friends mr-2"></i> Equipo-->
  <!--              </button>-->
  <!--              <div id="dropUser" class="collapse-content">-->
  <!--                <ul>-->
  <!--                  <li>-->
  <!--                    <a class="py-4 button has-text-left" title="Ir a la sección"><i-->
  <!--                        class="las la-angle-right mr-2"></i> Roles</a>-->
  <!--                  </li>-->
  <!--                  <li>-->
  <!--                    <a class="py-4 button has-text-left" title="Ir a la sección"><i-->
  <!--                        class="las la-angle-right mr-2"></i> Miembros</a>-->
  <!--                  </li>-->
  <!--                </ul>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </div>-->

</template>

<style scoped>

</style>