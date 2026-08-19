# Elpriskollen

En liten Vue-app som visar dagens timpriser på el för Kraftlys kunder. Två buggar är rapporterade.

Repot används i labben **PR-flödet på riktigt** i kursen Avancerad frontendutveckling.

## Kom igång

```bash
npm install
npm run dev
```

Appen körs på http://localhost:5173. Ingen backend behövs — datan ligger statiskt i `src/App.vue`.

## Labben

Ni är två. Det finns två ärenden, och ni ska göra dem **åt båda hållen** — så att var och en får både skriva kod och granska kod.

| Varv | Vem kodar | Vem granskar | Ticket |
|---|---|---|---|
| 1 | Person A | Person B | [TICKET-1](docs/TICKET-1.md) |
| 2 | Person B | Person A | [TICKET-2](docs/TICKET-2.md) |
| Bonus | tillsammans | tillsammans | [TICKET-3](docs/TICKET-3-bonus.md) |

Ticketen rör olika filer, så ni kan börja parallellt utan att krocka.

## Innan ni börjar

1. Skapa ett eget repo från den här templaten (**Use this template** → *Create a new repository*), välj **publikt**
2. Bjud in varandra: `Settings` → `Collaborators`
3. Skydda `main`: `Settings` → `Rulesets` → `New ruleset` → `New branch ruleset`
   - Enforcement status: **Active** (den står på *Disabled* från början)
   - Bypass list: lämna tom
   - Target branches: `Add target` → `Include default branch`
   - Kryssa i **Require a pull request before merging** och sätt **Required approvals: 1**
4. Fyll i era användarnamn i `.github/CODEOWNERS`

## Varvet, steg för steg

```bash
git switch main
git pull
git switch -c fix/beskrivande-namn
# ... koda ...
git add .
git commit -m "fix: kort beskrivning i presens"
git push -u origin fix/beskrivande-namn
```

Öppna sedan en pull request på GitHub, fyll i mallen, låt din kollega granska, och gör **squash merge**. Radera grenen efteråt.

Lokalt efter merge:

```bash
git switch main
git pull
git branch -d fix/beskrivande-namn
```

## Spelregler för reviewn

- Kommentera koden, aldrig personen
- Föreslå och fråga — beordra inte
- **Minst en fråga eller ett förslag per PR.** Slentrian-approve räknas inte som en granskning
- Som författare: svara på allt, och tacka för hittade buggar
