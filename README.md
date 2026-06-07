# SAES Tierarzt-Akten

Ein browserbasiertes Webtool für moderne Tierarztpraxen, um Tierakten, Sammelbehandlungen, Teamdaten, Preise und Impfausweise direkt im Browser zu verwalten.

## Funktionen

- Panel mit den Bereichen **Tier suchen**, **Tier anlegen** und **Einstellungen**.
- Live-Suche nach Name, Besitzer, Tierart, Telefonnummer, Aktennummer, Behandlungen und Impfungen.
- Groß- und Kleinschreibung wird bei der Suche ignoriert.
- Neue Tiere erhalten automatisch eine individuelle Aktennummer im Format `SAES-NUMMER`.
- Pro Tierakte können mehrere Behandlungen in einer Sammelbehandlung hinterlegt und gemeinsam abgeschlossen werden.
- Nach Abschluss einer Behandlung wird ein druckbares PDF-Dokument mit Positionen und Preisen geöffnet.
- Der Impfausweis wird ebenfalls als druckbares PDF-Dokument inklusive Impfdetails und Preis geöffnet.
- Behandlungen, Preise, Tierärzte und Tierpfleger können auf der Einstellungsseite verwaltet werden.
- Alle Daten werden lokal im Browser per `localStorage` gespeichert.

## Nutzung

Öffne `index.html` in einem Browser. Es ist kein Build-Schritt notwendig.
