<template>
  <table>
    <thead>
      <tr>
        <th>Timme</th>
        <th>Pris</th>
        <th>Jämfört med snitt</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hour in hours" :key="hour.hour" :class="{ 'is-high': hour.price >= threshold }">
        <td>{{ formatHour(hour.hour) }}</td>
        <td>{{ hour.price.toFixed(2) }} kr/kWh</td>
        <td>{{ diffLabel(hour.price) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { formatHour } from '../utils/prices'

const props = defineProps({
  hours: { type: Array, default: () => [] },
  threshold: { type: Number, default: 0 },
  average: { type: Number, default: 0 },
})

const diffLabel = (price) => {
  if (!props.average) return '–'
  const diff = Math.round(((price - props.average) / props.average) * 100)
  return diff > 0 ? `+${diff} %` : `${diff} %`
}
</script>
