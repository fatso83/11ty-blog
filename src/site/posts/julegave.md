---
foodate: Last Modified
date: 2023-11-12
tags: 
    - clean
    - architecture
title: "Julians julegave"
---

> Julian ønsket seg en liten samling av lenker
til jul som han heller kunne se gjennom i steden for
å søke gjennom dev-kanalen vår. Så da ble det laging
av blogg på søndag 🤓

Disse tre videoene (og tilhørende lenket materiale) er innhold med langt "shelf life" og vil være relevant om ti år også, så det er bare å ta tiden til hjelp. Det som er litt artig er at selv om de handler om helt forskjellige ting går det en rød tråd gjennom alle og de berører mye av de samme tingene. God design er universelt, antar jeg :)

## Functional Core, Imperative Shell
> En Hacker News-favoritt 

_Episk imponerende_ Gary Bernhard er mannen bak klassikerne ["Wat"](https://www.destroyallsoftware.com/talks) og "The Birth and Death of Javascript", de eneste programmerings-standupshowene jeg kommer på om Javascript 😃.

I [denne screencasten](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) introduserer og viser han hvordan man i praksis kan implementere et konsept som er funksjonelt i natur i en verden fylt med tilstand, gjennom bruk av et objektorientert språk (en bastard han kaller Faux OO 😄)

<figure>
<img src="https://kennethlange.com/wp-content/uploads/2021/03/functional_core_imperative_shell.png" />
<figcaption>Kenneth Langes illustrasjon</figcaption>
</figure>
Handler om hvordan du kan flytte bieffektene (nettverkskall, websockets, SSE, service workers og annen I/O) i applikasjonen din til utkantene av applikasjonen din, 
mens du holder applikasjonslogikken/forretningsregler 
i en trivielt testbar, funksjonell kjerne. 

Det er i bunn og grunn en av de mange arkitekturene
som ligger tett opp til Uncle Bob's "Clean Architecture"
([blogg](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 
& [bok](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)),
som Ports and Adapters/Hexagonal Architecture, etc, men
er for meg veldig mye enklere å forstå og omsette
til kode, ettersom han faktisk viser koden til en Twitter-klient i screencasten, og greier å implementere FP i høyst _tilstandsfulle_ domener som opptegning på skjerm. Monader i praksis, uten akademikerhatten.

### Andre ressurser
- [En god introartikkel av Kenneth Lange](https://kennethlange.com/functional-core-imperative-shell/)
- Min ["Clean Architecture"-liste](https://github.com/stars/fatso83/lists/clean-architecture) med GitHub repoer som viser prinsipper fra Clean og lignende arkitektur _i praksis_.

## Millisecond Full Stack Acceptance Tests
> [Aslak Hellesøy på GOTO 2019-konferansen](https://www.youtube.com/watch?v=sUclXYMDI94)

Aslak Hellesøy er mannen bak Cucumber, et rammeverk for mer brukerhistoriesentrert testing som jeg _helt klart misforstod_ poenget med i første omgang. I likhet med nesten alle andre, virker det som, men dette foredrag åpnet øynene mine for hva han _egentlig_ forsøkte på.

<div class="yt-container">
<iframe class="yt-video" src="https://www.youtube.com/embed/sUclXYMDI94?si=sQ6G3hEH9gzbDwSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Veldig inspirerende foredrag som viser fleksibiliteten i hva som kan oppnås gjennom lagdeling og klare grensesnitt i koden. 

Som en kommentar skrev

> To put simply - if you decoupled your business logic from UI and DB you can just write unit tests against it and get high confidence about your business logic.

Det er vel den gjennomgående tråden her - gjennom lagdeling kan man relativt friksjonsfritt oppnå superraske testsuiter uten masse mocks og tunge oppsett.

## 🚀 TDD, Where Did It All Go Wrong 

Ian Cooper tar opp alle misforståelsene som har forkvaklet Kent Becks budskap i [TDD-boka fra 2002](https://www.adlibris.com/no/bok/test-driven-development-9780321146533) i årene siden den ble utgitt. Her dukker også både Clean og Ports & Adapters opp underveis, så alt henger sammen med alt :-)

<div class="yt-container">
<iframe class="yt-video" s
src="https://www.youtube.com/embed/EZ05e7EMOLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
