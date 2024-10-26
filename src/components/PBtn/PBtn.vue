<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * background color of the button
     */
    backgroundColor?: string
  }>(),
  { primary: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'petra-button': true,
  'petra-button-primary': props.primary,
  'petra-button-secondary': !props.primary,
  [`petra-button-${props.size || 'medium'}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))

const onClick = () => {
  emit('click', 1)
}
</script>

<style lang="scss" scoped>
.petra-button {
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
}

.petra-button-primary {
  color: white;
  background-color: #1ea7fd;
}

.petra-button-secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgb(0 0 0 / 15%) 0 0 0 1px inset;
}

.petra-button-small {
  padding: 10px 16px;
  font-size: 12px;
}

.petra-button-medium {
  padding: 11px 20px;
  font-size: 14px;
}

.petra-button-large {
  padding: 12px 24px;
  font-size: 16px;
}
</style>
