<template>
  <div class="app">
    <h1>Elpriskollen</h1>
    <p class="subtitle">Timpriser för {{ today }}, prisområde SE3.</p>

    <div class="card stats">
      <div>
        <div class="stat-label">Snittpris</div>
        <div class="stat-value">{{ average.toFixed(2) }} kr</div>
      </div>
      <div>
        <div class="stat-label">Högsta pris</div>
        <div class="stat-value">{{ peak.toFixed(2) }} kr</div>
      </div>
      <div>
        <div class="stat-label">Dyra timmar</div>
        <div class="stat-value">{{ expensive.length }} st</div>
      </div>
    </div>

    <div class="card">
      <PriceFilter v-model="threshold" />
    </div>

    <div class="card">
      <PriceTable :hours="hours" :threshold="threshold" :average="average" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PriceFilter from './components/PriceFilter.vue'
import PriceTable from './components/PriceTable.vue'
import { averagePrice, peakPrice, expensiveHours } from './utils/prices'

const today = '19 augusti 2026'

// Statisk data så appen kan köras utan API.
const hours = ref([
  { hour: 0, price: 0.42 },
  { hour: 1, price: 0.38 },
  { hour: 2, price: 0.35 },
  { hour: 3, price: 0.34 },
  { hour: 4, price: 0.36 },
  { hour: 5, price: 0.51 },
  { hour: 6, price: 0.88 },
  { hour: 7, price: 1.62 },
  { hour: 8, price: 1.74 },
  { hour: 9, price: 1.31 },
  { hour: 10, price: 1.0 },
  { hour: 11, price: 0.92 },
  { hour: 12, price: 0.87 },
  { hour: 13, price: 0.85 },
  { hour: 14, price: 0.9 },
  { hour: 15, price: 1.12 },
  { hour: 16, price: 1.48 },
  { hour: 17, price: 1.95 },
  { hour: 18, price: 2.11 },
  { hour: 19, price: 1.83 },
  { hour: 20, price: 1.29 },
  { hour: 21, price: 0.96 },
])

const threshold = ref(1.0)

const average = computed(() => averagePrice(hours.value))
const peak = computed(() => peakPrice(hours.value))
const expensive = computed(() => expensiveHours(hours.value, threshold.value))
</script>
