<template>
  <div class="filter">
    <label for="threshold">Markera timmar dyrare än</label>
    <input id="threshold" v-model.number="local" type="number" step="0.1" min="0" />
    <span>kr/kWh</span>
    <button @click="apply">Använd</button>
    <button class="secondary" @click="reset">Rensa</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 1.0 },
})

const emit = defineEmits(['update:modelValue'])

const local = ref(props.modelValue)

const apply = () => {
  emit('update:modelValue', local.value)
}

const reset = () => {
  // Nollställer fältet.
  local.value = 0
}
</script>
