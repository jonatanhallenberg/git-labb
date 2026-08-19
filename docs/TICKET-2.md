# TICKET-2 · "Återställ" återställer inte

**Typ:** bugg · **Fil:** `src/components/PriceFilter.vue` · **Uppskattad tid:** 10–15 min

## Vad kunden rapporterar

> "Jag sätter gränsen till 1,50 och trycker Använd. Sen trycker jag Återställ — siffran i fältet hoppar tillbaka till 1,00, men tabellen fortsätter markera samma timmar som förut."

## Så återskapar du

1. Kör appen: `npm install && npm run dev`
2. Skriv `1.5` i fältet och klicka **Använd** — färre rader markeras i rött (5 st)
3. Klicka **Återställ** — fältet visar `1`, men de fem röda raderna är kvar
4. Rutan **Dyra timmar** står också kvar på 5

## Vad som är fel

`reset()` i `src/components/PriceFilter.vue` sätter det lokala värdet tillbaka till standardgränsen, men skickar aldrig vidare det till föräldern. `apply()` gör det, via `emit('update:modelValue', …)`.

Resultatet är att komponentens egen state och appens state glider isär — fältet säger en sak, tabellen en annan.

## Klar när

- [ ] Klick på **Återställ** ger samma vy som när appen precis laddats: fältet visar `1` och tio rader är markerade
- [ ] Rutan **Dyra timmar** uppdateras samtidigt
- [ ] **Använd** fungerar precis som förut

## Föreslaget commit-meddelande

```
fix: låt Återställ uppdatera filtret, inte bara fältet
```

## Att tänka på i reviewn

Fråga om det finns fler ställen där lokalt state och `modelValue` kan glida isär. Vad händer till exempel om föräldern ändrar värdet utifrån?
