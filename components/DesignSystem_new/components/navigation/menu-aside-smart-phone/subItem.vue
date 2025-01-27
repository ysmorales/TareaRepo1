<script lang="ts" setup>
import DsLink from "../link/DsLink.vue";

// not finish yeat

defineProps<{
    item?: any;
}>();
</script>

<template>
    <li>
        <a class="btn-menu-mobile btn-menu-mobile-l1" href="#">
            Submenú
            <svg
                viewBox="0 0 26 26"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
            >
                <polygon class="st0" points="18,10.5 13,15.5 8,10.5 "/>
            </svg>
        </a>
    </li>
    <li>
        <a class="btn-menu-mobile open" href="#">
            Submenú abierto
            <svg
                viewBox="0 0 26 26"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
            >
                <polygon class="st0" points="18,10.5 13,15.5 8,10.5 "/>
            </svg>
        </a>
        <ul>
            <li>
                <a class="btn-menu-mobile btn-menu-mobile-l2" href="#">
                    <span> <i class="las la-arrow-right mr-4"></i> Submenú lvl 2 </span>
                    <svg
                        id="svg1"
                        viewBox="0 0 26 26"
                        x="0px"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0px"
                    >
                        <polygon class="st0" points="18,10.5 13,15.5 8,10.5 "/>
                    </svg>
                </a>
            </li>
            <li>
                <a class="btn-menu-mobile btn-menu-mobile-l2 active" href="#">
          <span>
            <i class="las la-arrow-right mr-4"></i> Submenú lvl 2 (active)
          </span>
                </a>
            </li>
            <li>
                <a class="btn-menu-mobile btn-menu-mobile-l2 open" href="#">
          <span>
            <i class="las la-arrow-right mr-4"></i> Submenú lvl 2 abierto
          </span>
                    <svg
                        id="svg1"
                        viewBox="0 0 26 26"
                        x="0px"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0px"
                    >
                        <polygon class="st0" points="18,10.5 13,15.5 8,10.5 "/>
                    </svg>
                </a>
                <ul>
                    <li>
                        <a class="btn-menu-mobile btn-menu-mobile-l3" href="#">
              <span>
                <svg
                    id="Capa_1"
                    viewBox="0 0 26 26"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                >
                  <path class="st0" d="M17.3,13H8.7V8.7"/>
                  <path class="st0" d="M14.1,8.7l4.3,4.3l-4.3,4.3"/>
                </svg>
                Submenú lvl 3
              </span>
                        </a>
                    </li>
                    <li>
                        <a class="btn-menu-mobile btn-menu-mobile-l3 active" href="#">
              <span>
                <svg
                    id="Capa_1"
                    viewBox="0 0 26 26"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                >
                  <path class="st0" d="M17.3,13H8.7V8.7"/>
                  <path class="st0" d="M14.1,8.7l4.3,4.3l-4.3,4.3"/>
                </svg>
                Submenú lvl 3 (active)
              </span>
                        </a>
                    </li>
                    <li>
                        <a class="btn-menu-mobile btn-menu-mobile-l3" href="#">
              <span>
                <svg
                    id="Capa_1"
                    viewBox="0 0 26 26"
                    x="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
                >
                  <path class="st0" d="M17.3,13H8.7V8.7"/>
                  <path class="st0" d="M14.1,8.7l4.3,4.3l-4.3,4.3"/>
                </svg>
                Submenú lvl 3
              </span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</template>
