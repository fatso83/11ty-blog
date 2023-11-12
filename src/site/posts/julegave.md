---
date: Last Modified
tags: 
    - clean
    - architecture
title: "Julians julegave"
---

Jeg har postet litt mange greier på Slack-kanalen
vår, og Julian ønsket seg en liten samling av lenker
til jul som han heller kunne se gjennom i steden for
å søke gjennom team-kanalen vår. Så da ble det laging
av blogg på søndag :)

## Functional Core, Imperative Shell
Klassisk screencast om et konsept som jeg først
og fremst mener er navngitt og popularisert av 
_episk imponerende_ Gary Bernhard.

Handler om hvordan du kan flytte bi-effektene i 
applikasjonen din til utkantene av applikasjonen din, 
mens du holder applikasjonslogikken/forretningsregler 
i en trivielt testbar, funksjonell kjerne. 

Det er i bunn og grunn en av de mange arkitekturene
som ligger tett opp til Uncle Bob's "Clean Architecture"
([blogg](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 
& [bok](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)),
som Ports and Adapters/Hexagonal Architecture, etc, men
er for meg veldig mye enklere å forstå og omsette
til kode, ettersom han faktisk viser koden til en Twitter-klient i screencasten.

