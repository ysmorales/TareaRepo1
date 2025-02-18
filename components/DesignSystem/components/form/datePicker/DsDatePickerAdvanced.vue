<script lang='ts' setup>
import {onBeforeMount, ref} from 'vue';
import {useUuid} from '../../../utils/useUuid';
import {useDate} from '../../../utils/useDate';

/**
 * ------------------------------------------
 *    Components
 * ------------------------------------------
 */

import DsInput from '../input/DsInput.vue';
import DsIcon from '../../basic/icon/DsIcon.vue';

/**
 * ------------------------------------------
 *    Types
 * ------------------------------------------
 */
import type {IDateMonth} from '../../../utils/useDate';
import type {IFormElementProp} from '../../../interfaces/props';

type IDatePickerMode = 'simple';

type IModelValue = Date | null;

interface IProp extends /* @vue-ignore */ IFormElementProp {
    id?: string;
    mode?: IDatePickerMode;
}

interface IEmit {
    (e: 'datepicker-popup', status: boolean): void;
}

interface IDayCard {
    date: Date | null;
    selected?: boolean;
    disabled?: boolean;
}

/**
 * ------------------------------------------
 *    Utils
 * ------------------------------------------
 */

const modelValue = defineModel<IModelValue>({default: null});

const $props = withDefaults(defineProps<IProp>(), {
    mode: 'simple',
});

const $emit = defineEmits<IEmit>();

const {uuid} = useUuid();
const {getDaysInMonth, getStartMonthDate, months: DatePickerMonths} = useDate();

/**
 * ------------------------------------------
 *    Data
 * ------------------------------------------
 */

const calendar = ref<IDayCard[]>([]);
const selectedDate = ref<Date>(new Date());
const popup = ref<boolean>(false);

/**
 * ------------------------------------------
 *    Methods
 * ------------------------------------------
 */

/**
 * generateEmptyCalendar
 */
function generateEmptyCalendar() {
    calendar.value = [];

    for (let i = 0; i < 35; i++) {
        calendar.value.push({
            date: null,
            disabled: true,
            selected: false,
        });
    }
}

/**
 * getCurrentDate
 */
function getCurrentDate() {
    const currentMonth = selectedDate.value.getMonth() + 1;
    const currentYear = selectedDate.value.getFullYear();

    return {
        currentMonth, currentYear,
    };
}

/**
 * getCurrentMonth
 */
function getCurrentMonth(): IDateMonth | undefined {
    const currentMonth = selectedDate.value.getMonth();

    return DatePickerMonths.findLast(m => m.monthNumber === currentMonth + 1);
}

/**
 * handleNextMonth
 */
function handleNextMonth() {
    const {currentMonth, currentYear} = getCurrentDate();

    if (currentMonth < 12) {
        selectedDate.value.setMonth(currentMonth, 1);
    } else {
        selectedDate.value.setFullYear(currentYear + 1);
        selectedDate.value.setMonth(0, 1);
    }

    setupCalendar(selectedDate.value);
}

/**
 * handlePrevMonth
 */
function handlePrevMonth() {
    const {currentMonth, currentYear} = getCurrentDate();

    if (currentMonth > 0) {
        selectedDate.value.setMonth(currentMonth - 2, 1);
    } else {
        selectedDate.value.setFullYear(currentYear - 1);
        selectedDate.value.setMonth(11, 1);
    }
    setupCalendar(selectedDate.value);
}

/**
 * handleNextYear
 */
function handleNextYear() {
    const {currentYear} = getCurrentDate();

    selectedDate.value?.setFullYear(currentYear + 1);
    setupCalendar(selectedDate.value);
}

/**
 * selectItem
 * @param item
 */
function selectItem(item: IDayCard) {
    calendar.value.forEach((c) => {
        if (!c.disabled && c.date === item.date)
            c.selected = true;
        else
            c.selected = false;
    });
    if (item.date)
        selectedDate.value = item.date;

    // UPDATE MODEL
    modelValue.value = item.date;

    togglePopup();
}

/**
 * setupCalendar
 * @param date
 */
function setupCalendar(date: Date) {
    const {currentMonth, currentYear} = getCurrentDate();

    generateEmptyCalendar();

    enum CycleMode {
        NO_STARTED = 0,
        STARTED = 1,
        ENDED = 2,
    }

    const startDate = getStartMonthDate(date);
    const startDay = startDate.getDay();
    let cycleMode: CycleMode = CycleMode.NO_STARTED;
    let cycleDate = 1;
    let nextDate: Date = new Date(`${currentYear}-${currentMonth}-${cycleDate}`);
    let nextDateCard: IDayCard = {
        date: nextDate,
        disabled: false,
        selected: false,
    };

    calendar.value.forEach((c, index) => {
        if (index === startDay)
            cycleMode = CycleMode.STARTED;

        if (cycleMode === CycleMode.STARTED) {
            c.date = nextDateCard.date;
            c.disabled = nextDateCard.disabled;
            c.selected = nextDateCard.selected;

            // Still on current month
            if (cycleDate < getDaysInMonth(nextDate)) {
                cycleDate++;
                nextDate = new Date(`${currentYear}-${currentMonth}-${cycleDate}`);
                nextDateCard = {
                    date: nextDate,
                    disabled: false,
                    selected: false,
                };
            }
            // Start new month
            else {
                cycleMode = CycleMode.ENDED;
                cycleDate = 0;
            }
        }

        // Add DISABLED cards
        if (cycleMode === CycleMode.ENDED) {
            cycleDate++;
            nextDate = new Date(`${currentYear}-${currentMonth + 1}-${cycleDate}`);
            nextDateCard = {
                date: nextDate,
                disabled: true,
                selected: false,
            };
        }
    });
}

/**
 * togglePopup
 */
function togglePopup() {
    popup.value = !popup.value;
    $emit('datepicker-popup', popup.value);
}

/**
 * ------------------------------------------
 *    Lifecycle
 * ------------------------------------------
 */

onBeforeMount(() => {
    const now = new Date();
    selectedDate.value = now;
    setupCalendar(now);
});
</script>
<template>
    <div
        :id="id ?? uuid"
        class="text-xs"
    >
        <div
            class="cursor-pointer relative"
            @click="togglePopup"
        >
            <DsInput
                :model-value="modelValue?.toLocaleDateString('en-GB')"
                placeholder="dd/mm/yyyy"
                read-only
                v-bind="$props"
            />
        </div>

        <!-- Popup Calendar -->
        <div
            v-if="popup"
            class="popup-container fixed top-16 z-10 right-0 shadow-md p-2 bg-white rounded-md"
        >
            <div
                class="grid grid-cols-7"
                style="gap: 0.3rem;"
            >
                <div class="cursor-pointer border p-2 flex items-center justify-center">
                    <DsIcon
                        name="backward"
                        size="small"
                    />
                </div>
                <div
                    class="cursor-pointer border p-2 flex items-center justify-center"
                    @click="handlePrevMonth"
                >
                    <DsIcon
                        name="fast-backward"
                        size="small"
                    />
                </div>
                <div class="cursor-pointer  col-span-3 border p-2 flex items-center justify-center">
                    {{
                        `${getCurrentMonth()?.shortName}
					${getCurrentDate().currentYear}`
                    }}
                </div>
                <div
                    class="cursor-pointer  border p-2 flex items-center justify-center"
                    @click="handleNextMonth"
                >
                    <DsIcon
                        name="fast-forward"
                        size="small"
                    />
                </div>
                <div
                    class="cursor-pointer  border p-2 flex items-center justify-center"
                    @click="handleNextYear"
                >
                    <DsIcon
                        name="fast-forward"
                        size="small"
                    />
                </div>
                <div
                    v-for="(date, dateKey) in calendar"
                    :key="`date-${dateKey}`"
                    :class="['cursor-pointer border p-2 flex items-center justify-center', date.disabled ? 'bg-slate-300' : '', date.selected ? 'bg-primary-500 text-white' : '']"
                    @click="() => selectItem(date)"
                >
                    {{ date.date ? date.date.getDate() : '&nbsp;' }}
                </div>
            </div>
        </div>
        <!-- / Popup Calendar -->
    </div>
</template>


<style scoped>
.popup-container {
    width: 17.5rem;
}
</style>
