# A typical eval workflow

## Transcript

In diesem Video werden wir alle diese Schritte durchgehen,

die von einem typischen Prompt-Evaluierungs-Workflow implementiert werden, bevor Sie

einen dieser Schritte durchlaufen. Ich mÃ¶chte aber, dass Sie

zwei wichtige Dinge verstehen.

Erstens gibt es viele verschiedene MÃ¶glichkeiten, einen Workflow zusammenzustellen.

Es gibt keine in Stein gemeiÃŸelte Standardmethodik, die in der gesamten

Branche Ã¼blich ist.

Das zweite, was Sie verstehen mÃ¼ssen, ist, dass es viele verschiedene Open-

Source-Pakete und sogar kostenpflichtige Optionen online gibt, die Ihnen helfen,

Ihre eigenen Workflows zu implementieren.

In diesem Video und diesem Modul werden wir nun damit beginnen,

unseren eigenen benutzerdefinierten Workflow von Grund auf in einem Jupyter-Notebook zu implementieren.

Der Grund, warum wir das tun, ist natÃ¼rlich, Ihnen zu helfen,

zu verstehen, wie sich diese Workflows verhalten, aber auch, Ihnen zu helfen,

zu verstehen, dass Sie keine wirklich schwergewichtige LÃ¶sung benÃ¶tigen,

um Prompt-Evals durchzufÃ¼hren.

Sie kÃ¶nnen klein anfangen, nur um loszulegen und ein GefÃ¼hl dafÃ¼r zu bekommen, wie

alles funktioniert, und dann von dort aus skalieren.

Okay, legen wir los. Schritt eins einer typischen Prompt-Eval.

Schritt eins: Wir schreiben einen ersten Prompt-Entwurf, damit Sie und

ich uns zusammensetzen und einfach eine Art Prompt schreiben, die wir

in irgendeiner Weise verbessern wollen.

FÃ¼r dieses Beispiel haben wir einen sehr einfachen Prompt, der einfach

sagt: Bitte beantworten Sie die Frage des Benutzers, und dann werden wir

einige Benutzereingaben interpolieren. Also eine Frage, die vom Benutzer gestellt wird.

In Schritt zwei erstellen wir ein Evaluierungsdatensatz. Diese Daten

Satz wird eine Reihe von mÃ¶glichen Eingaben enthalten, die wir

in unseren Prompt einfÃ¼gen mÃ¶chten.

FÃ¼r uns hat unser Prompt also nur eine Eingabe, eine Frage, die vom Benutzer gestellt wird.

FÃ¼r unseren Eval-Datensatz haben wir also eine Liste mit verschiedenen mÃ¶glichen

Fragen, die wir in unseren Prompt einfÃ¼gen mÃ¶chten.

Mein Datensatz wird nur drei verschiedene Fragen enthalten,

aber in realen Evals kÃ¶nnen Sie Zehntausende, Hunderte oder sogar

Tausende von verschiedenen DatensÃ¤tzen in Ihrem Datensatz haben.

Sie kÃ¶nnen diese DatensÃ¤tze von Hand zusammenstellen oder natÃ¼rlich auch

Claude verwenden, um sie fÃ¼r Sie zu generieren.

Sobald wir unseren Eval-Datensatz haben, werden wir jede dieser

verschiedenen Fragen in unseren Prompt einfÃ¼gen. Wir erhalten also einen vollstÃ¤ndig ausgearbeiteten

Prompt, den wir dann in Claude einspeisen kÃ¶nnen.

Wir kÃ¶nnten also Prompt eins hier haben, wo wir bitte die

Frage des Benutzers beantworten und dann eine Beispielfrage aus unserem Datensatz,

wie was ist zwei plus zwei, und dann wiederholen wir das fÃ¼r alle anderen

DatensÃ¤tze in unserem Datensatz. Hier sind zwei und drei.

Wir werden dann jeden davon in Claude einspeisen und eine tatsÃ¤chliche Antwort

von Claude erhalten. FÃ¼r den ersten kÃ¶nnten wir also eine Antwort

wie zwei plus zwei ist vier und dann etwas darÃ¼ber, wie man

Haferflocken zubereitet und dann etwas Ã¼ber die Entfernung zum Mond.

Sobald wir diese tatsÃ¤chlichen Antworten von Claude erhalten haben, werden wir sie

in irgendeiner Weise bewerten.

WÃ¤hrend dieses Bewertungsschritts werden wir jede der Fragen

aus unserem Datensatz und die Antworten, die wir von Claude erhalten haben, nehmen.

Wir werden sie alle zusammenpaaren und sie einzeln in einen Bewerter

einspeisen. Es gibt viele verschiedene MÃ¶glichkeiten, diesen

Bewerter zu implementieren. Wir werden uns einige der verschiedenen Methoden

etwas spÃ¤ter ansehen.

Der Bewerter gibt uns dann eine Punktzahl, vielleicht von eins bis 10, basierend

auf der QualitÃ¤t der Antwort, die von Claude gegeben wurde. Eine 10

wÃ¼rde bedeuten, dass wir eine perfekte Antwort erhalten haben und es wirklich keine MÃ¶glichkeit gibt,

sie zu verbessern.

Es kann etwas wie eine Vier sein, was darauf hindeutet, dass es definitiv

Raum fÃ¼r Verbesserungen gibt. Wie Sie sich vorstellen kÃ¶nnen, gibt es hier eine

Menge versteckter KomplexitÃ¤t mit einem Bewerter, weil Sie wahrscheinlich

neugierig sind oder sich fragen, wie wir diese Punktzahlen Ã¼berhaupt

bekommen. Keine Sorge, wir werden diese Bewerter-Dinge in

viel grÃ¶ÃŸerem Detail in KÃ¼rze behandeln.

Nachdem wir diese Punktzahlen erhalten haben, werden wir sie alle

zusammenmitteln. In diesem Fall wÃ¼rde ich die Punktzahlen zusammenzÃ¤hlen, durch

drei teilen und eine Durchschnittspunktzahl von 7,66 erhalten.

Ich habe jetzt eine Art objektive MÃ¶glichkeit, zu beschreiben, wie gut unser

ursprÃ¼nglicher Prompt funktioniert hat.

Nachdem wir diese Punktzahl haben, kÃ¶nnen wir unseren Prompt in irgendeiner

Weise Ã¤ndern und diesen gesamten Prozess wiederholen.

Wenn ich meine Punktzahl verbessern mÃ¶chte, kÃ¶nnte ich versuchen, ein wenig

mehr Details zum Prompt hinzuzufÃ¼gen, um Claude hoffentlich etwas mehr zu fÃ¼hren

und zu helfen, zu verstehen, welche Art von Ausgabe wir wollen.

Vielleicht wÃ¼rde ich am Ende des Prompts etwas wie

die Frage mit ausreichend Details beantworten hinzufÃ¼gen.

Sobald ich die zweite Version meines Prompts habe, wÃ¼rde ich sie

wieder durch diese gesamte Pipeline laufen lassen.

Ich hÃ¤tte dann eine Punktzahl fÃ¼r Prompt-Version 1 und Prompt-Version 2. Ich

kÃ¶nnte dann diese beiden Punktzahlen vergleichen, und welche Punktzahl grÃ¶ÃŸer oder

hÃ¶her ist.

Es ist eine Art objektives Zeichen, besser als nichts, das mir sagt, dass

Prompt V2 in diesem Fall vielleicht die bessere Version unseres Prompts ist.

Nachdem wir nun einen allgemeinen Ãœberblick Ã¼ber diesen gesamten Prozess haben, werden wir, wie

ich bereits erwÃ¤hnt habe, damit beginnen, unser eigenes benutzerdefiniertes Eval-

Framework in einem Jupyter-Notebook zu implementieren.

Beginnen wir also mit einer Implementierung im nÃ¤chsten Video.
