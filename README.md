# Mijn eerste Typescript project
#####Al is dit mijn eerste Typescript project, dit project heb ik met oog op hoog kwaliteit ontwikkeld. 

Voor dit project kreeg ik de opdracht om te experimenteren met typescript typing en dit aan de front-end mee te geven voor mogelijke verwerking. Hiervoor gebruikte ik muziek van een rockband als datavoorbeeld, omdat een rockband verschillende types aan muziek heeft (live, studio, remaster etc.). 

##Werking
Na het downloaden van de repo is het direct bruikbaar. Als er zich eventuele CORS problemen voorkomen, dan is dit op te lossen door een lokale Node server.

`Tracks- en Albums.ts` bestaan uit albums en bijbehorende tracks die gebaseerd zijn op de classes van `Album- en TrackClasses.ts`. Deze zijn weer op basis van de gedefinieerde `interfaces.ts`. 

Vervolgens komt bij `state.ts` alles samen. Dit houdt de collectie aan data bij elkaar en biedt methods aan om deze data aan te vullen en te bewerken. 

Met behulp van filters kan er een specifiek soort album of track gekozen worden. 