# TICKET-3 · Antalet dyra timmar stämmer inte med tabellen *(bonus)*

**Typ:** bugg · **Filer:** `src/utils/prices.js` **och** `src/components/PriceTable.vue`

> **Den här är till för er som blir klara tidigt.** Den rör *två* filer — och om båda i paret tar den samtidigt kommer ni få en merge conflict. Det är meningen. Lös den tillsammans.

## Vad kunden rapporterar

> "Det står att nio timmar är dyra, men jag räknar till tio röda rader i tabellen."

## Vad som är fel

Två ställen bestämmer vad "dyr" betyder, och de är oense:

- `expensiveHours` i `src/utils/prices.js` använder `price > threshold`
- Radmarkeringen i `src/components/PriceTable.vue` använder `price >= threshold`

Klockan 10 kostar exakt 1,00 kr — precis på gränsen. Den timmen räknas i tabellen men inte i siffran.

## Klar när

- [ ] Siffran och antalet röda rader stämmer överens
- [ ] Ni har bestämt er för vilken tolkning som är rätt — och skrivit varför i PR-beskrivningen
- [ ] Regeln finns på **ett** ställe, inte två

## Att tänka på i reviewn

Den här buggen är egentligen ett designproblem, inte ett stavfel: samma regel var dubblerad. Fråga hur man undviker att det uppstår igen.
