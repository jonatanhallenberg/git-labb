# TICKET-2 · "Rensa" rensar inte

**Typ:** bugg · **Fil:** `src/components/PriceFilter.vue` · **Uppskattad tid:** 10–15 min

## Vad kunden rapporterar

> "Jag sätter gränsen till 1,50 och trycker Använd. Sen trycker jag Rensa — fältet blir tomt, men tabellen fortsätter markera samma timmar som förut."

## Så återskapar du

1. Kör appen: `npm install && npm run dev`
2. Skriv `1.5` i fältet och klicka **Använd** — färre rader markeras i rött
3. Klicka **Rensa** — fältet nollställs, men de röda raderna är kvar
4. Rutan **Dyra timmar** uppdateras inte heller

## Vad som är fel

`reset()` i `src/components/PriceFilter.vue` sätter det lokala värdet till `0`, men skickar aldrig vidare det till föräldern. `apply()` gör det, via `emit('update:modelValue', …)`.

Resultatet är att komponentens egen state och appens state glider isär — fältet säger en sak, tabellen en annan.

## Klar när

- [ ] Klick på **Rensa** nollställer både fältet och markeringen i tabellen
- [ ] Rutan **Dyra timmar** uppdateras samtidigt
- [ ] **Använd** fungerar precis som förut

## Föreslaget commit-meddelande

```
fix: låt Rensa nollställa filtret, inte bara fältet
```

## Att tänka på i reviewn

Fråga om det finns fler ställen där lokalt state och `modelValue` kan glida isär. Vad händer till exempel om föräldern ändrar värdet utifrån?
