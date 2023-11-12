---
foodate: Last Modified
date: 2023-11-12
tags: 
    - clean
    - architecture
title: "Julians julegave"
---

Julian ønsket seg en liten samling av lenker
til jul som han heller kunne se gjennom i steden for
å søke gjennom dev-kanalen vår. Så da ble det laging
av blogg på søndag 🤓

## Functional Core, Imperative Shell
[Denne klassisk screencasten](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) handler om et konsept som jeg først
og fremst er navngitt og popularisert av 
_episk imponerende_ Gary Bernhard (du har sett ["Wat"](https://www.destroyallsoftware.com/talks) eller "The Birth and Death of Javascript" - en av altfor få programmerings-standuper om javascript, ikke sant?)

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
til kode, ettersom han faktisk viser koden til en Twitter-klient i screencasten.

### Andre ressurser
- [En god introartikkel av Kenneth Lange](https://kennethlange.com/functional-core-imperative-shell/)
- Min ["Clean Architecture"-liste](https://github.com/stars/fatso83/lists/clean-architecture) med GitHub repoer som viser prinsipper fra Clean og lignende arkitektur _i praksis_.

## Millisecond Full Stack Acceptance Tests
> [Conference talk by Aslak Hellesøy • GOTO 2019](https://www.youtube.com/watch?v=sUclXYMDI94)

<div class="yt-container">
<iframe class="yt-video" src="https://www.youtube.com/embed/sUclXYMDI94?si=sQ6G3hEH9gzbDwSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Veldig inspirerende foredrag som viser fleksibiliteten i hva som kan oppnås gjennom lagdeling og klare grensesnitt i koden. 

Som en kommentar skrev

> To put simply - if you decoupled your business logic from UI and DB you can just write unit tests against it and get high confidence about your business logic.

Det er vel den gjennomgående tråden her - gjennom lagdeling kan man relativt friksjonsfritt oppnå superraske testsuiter uten masse mocks og tunge oppsett.
