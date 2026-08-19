# TICKET-1 · Snittpriset stämmer inte

**Typ:** bugg · **Fil:** `src/utils/prices.js` · **Uppskattad tid:** 10–15 min

## Vad kunden rapporterar

> "Snittpriset i appen ligger alltid lägre än det jag räknar ut för hand. Idag visar ni 0,97 kr men jag får det till 1,05."

## Så återskapar du

1. Kör appen: `npm install && npm run dev`
2. Titta på rutan **Snittpris** högst upp
3. Räkna själv: summan av alla timpriser delat med **antalet timmar som faktiskt finns i listan**

## Vad som är fel

Funktionen `averagePrice` i `src/utils/prices.js` delar summan med `24`, eftersom "dygnet har 24 timmar".

Men datan innehåller inte alltid 24 timmar. Just nu ligger 22 timmar i listan — de sista timmarna publiceras först senare på dygnet. Då blir snittet för lågt.

## Klar när

- [ ] `averagePrice` delar med antalet timmar som faktiskt finns i listan
- [ ] Snittpriset i appen stämmer med en handräkning
- [ ] Funktionen returnerar fortfarande `0` för en tom lista
- [ ] Kommentaren i koden är uppdaterad eller borttagen — den beskriver ju det gamla, felaktiga antagandet

## Föreslaget commit-meddelande

```
fix: räkna snittpris på antalet timmar som finns
```

## Att tänka på i reviewn

Fråga dig om lösningen fortfarande hanterar tom lista. Det är den vanligaste följdbuggen när man byter ut en hårdkodad siffra mot en längd.
