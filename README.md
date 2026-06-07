# SAES Tierarzt-Akten

Ein browserbasiertes Webtool für GTA-RP-Tierärzte, um Tierakten, Behandlungen und Impfausweise direkt im Browser zu verwalten.

## Funktionen

- Panel mit den Bereichen **Tier suchen** und **Tier anlegen**.
- Live-Suche nach Name, Besitzer, Tierart, Telefonnummer, Behandlungsnummer, Behandlungen und Impfungen.
- Groß- und Kleinschreibung wird bei der Suche ignoriert.
- Neue Tiere erhalten automatisch eine individuelle Behandlungsnummer im Format `SAES-JAHR-NUMMER`.
- Pro Tierakte können Behandlungen und Impfungen gespeichert werden.
- Der Impfausweis kann über die Druckfunktion der Seite ausgegeben werden.
- Alle Daten werden lokal im Browser per `localStorage` gespeichert.

## Nutzung

Öffne `index.html` in einem Browser. Es ist kein Build-Schritt notwendig.
