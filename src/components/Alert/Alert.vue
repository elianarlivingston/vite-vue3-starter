<template>
  <transition>
    <div role="alert" class="at-alert" :style="color" v-if="visible">
      <div class="at-alert__wrapper">
        <i aria-hidden :class="icon" class="at-alert__icon"></i>

        <div class="at-alert__message">
          <slot></slot>
        </div>

        <button
          v-if="closable"
          aria-label="close alert"
          class="at-alert__close"
          @click="handlerClick"
        >
          <i class="bx bx-x bx-sm"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { VariantsColors, VariantsIcons } from "./Alert";

export default defineComponent({
  name: "Alert",
  props: {
    variant: {
      type: String,
      required: false,
      default: "default",
    },
    closable: {
      type: Boolean,
      required: false,
      default: true,
    }
  },

  setup(props, { attrs, slots, emit }) {
    const visible = ref(true)

    const handlerClick = () => {
      if (props.closable) {
        visible.value = false
        emit("close");
      }
    };

    const icon = computed(() => {
      const key: string = props.variant;
      return "bx-sm bx bx-" + VariantsIcons[key] || VariantsIcons["default"];
    });

    const color = computed(() => {
      const key: string = props.variant;
      const color: string = VariantsColors[key] || VariantsColors["default"];
      return `--color-base-hsl: ${color};`;
    });

    return {
      icon,
      color,
      visible,
      handlerClick,
    };
  },
});
</script>

<style scoped>
.at-alert {
  --color-light: hsl(var(--color-base-hsl), 50%, 75%);
  --color-dark: hsl(var(--color-base-hsl), 50%, 35%);

  font-size: 0.85rem; /* cambiar por variable */
  border-radius: 4px; /* cambiar por variable */
  overflow: hidden;
  background-color: var(--color-light);
  display: flex;
  color: #212121; /* cambiar por variable */
}

.at-alert::before {
  content: "";
  display: flex;
  width: 5px; /* cambiar por variable */
  height: auto;
  background-color: var(--color-dark);
}

.at-alert__wrapper {
  padding: 0.85rem; /* cambiar por variable */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.at-alert__icon {
  color: var(--color-dark);
  font-size: 1rem;
}

.at-alert__message {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
}

.at-alert__message p,
.at-alert__message h3 {
  /* reset */
  margin: 0;
  padding: 0;
  /* ... */
}

.at-alert__close {
  /* reset */
  background-color: transparent;
  border: none;
  /* ... */

  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  color: inherit;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.at-alert__close:active {
  background-color: var(--color-dark);
  transition: background 0.3s ease-in-out;
}
</style>