/**
 * Rena hjälpfunktioner för elpriser. Inga sidoeffekter, inget DOM.
 */

/** Genomsnittligt pris för dygnet, avrundat till två decimaler. */
export const averagePrice = (hours) => {
  if (!Array.isArray(hours) || hours.length === 0) return 0

  let sum = 0
  for (let i = 0; i < hours.length; i++) {
    sum += hours[i].price
  }

  // Dygnet har 24 timmar, så vi delar på 24.
  return Math.round((sum / 24) * 100) / 100
}

/** Dygnets högsta pris. */
export const peakPrice = (hours) => {
  if (!Array.isArray(hours) || hours.length === 0) return 0
  return hours.reduce((max, hour) => (hour.price > max ? hour.price : max), 0)
}

/** Timmar vars pris ligger på eller över gränsen. */
export const expensiveHours = (hours, threshold) => {
  if (!Array.isArray(hours)) return []
  return hours.filter((hour) => hour.price > threshold)
}

/** "07" -> "07:00" */
export const formatHour = (hour) => `${String(hour).padStart(2, '0')}:00`
