# Implementing a hook

## Transcript

Lass uns unseren Custom Hook zusammenstellen. Denk daran, das gesamte

Ziel ist es, zu verhindern, dass Claude jemals den Inhalt

der .env-Datei liest. Im letzten Video haben wir

viele der verschiedenen Konfigurationsoptionen besprochen, die wir einstellen mÃ¼ssen.

In diesem Video konzentrieren wir uns hauptsÃ¤chlich auf die Implementierung.

Um loszulegen, Ã¶ffne ich im . Claude-Verzeichnis

die Datei settings.local.json.

Denk daran, dass wir hier eine Liste von Pre-Tool-Use-Hooks

und Post-Tool-Use-Hooks haben.

Wie wir gerade besprochen haben, mÃ¶chten wir einen Pre-Tool-Use-Hook

erstellen, damit wir verhindern kÃ¶nnen, dass Claude jemals den Inhalt

dieser speziellen Datei liest. Ich habe hier bereits einen kleinen

Konfigurationsabschnitt eingefÃ¼gt, nur um uns ein wenig Tipparbeit zu

ersparen. Alles, was wir tun mÃ¼ssen, ist

den Matcher und den Befehl auszufÃ¼llen. Zuerst

der Matcher. Der Matcher sind die Tools, auf die wir achten wollen.

In unserem Fall, wie wir besprochen haben, wollen wir auf Aufrufe der

`read` und `grep` Tools achten. Ich

werde diese beiden Toolnamen mit einem Pipe-Symbol trennen.

Das ist also keine L oder ein groÃŸes I. Es ist

ein Symbol direkt Ã¼ber der Enter-Taste auf deiner Tastatur. Dann,

als NÃ¤chstes mÃ¼ssen wir einen Befehl angeben, der ausgefÃ¼hrt wird, wenn

Claude versucht, diese beiden Tools aufzurufen. Wir

kÃ¶nnen hier jeden beliebigen Befehl eingeben, es kann also ein CLI,

ein Aufruf eines Shell-Skripts, absolut alles sein.

Um dem Muster zu folgen, das ich im Rest

dieser Datei bereits etabliert habe, rufe ich ein Node.js-Skript

auf, das ich im Voraus im Hooks-Verzeichnis

dieses Projekts platziert habe. Also im Hooks-Verzeichnis habe ich

eine Datei namens `read_hook.js` fÃ¼r uns zusammengestellt.

Dies ist die Datei, die ich ausfÃ¼hren mÃ¶chte, wenn

Claude versucht, eines dieser beiden Tools aufzurufen.

Um das aufzurufen, ersetze ich hier das `true`, das

derzeit nur ein Platzhalter ist, durch `node`

`./hooks/`

`read_hook.js`. Ich

speichere diese Datei, und das ist alles, was wir hier tun mÃ¼ssen. Als NÃ¤chstes

mÃ¼ssen wir den Befehl tatsÃ¤chlich implementieren, der ausgefÃ¼hrt wird,

jedes Mal, wenn Claude versucht, die `read`- oder `grep`-Tools aufzurufen.

Das wird also die Datei `read_hook.js` sein. Am Anfang dieser Datei habe ich Code,

der aus der Standardeingabe liest und die Daten als JSON parst.

Dieses `toolArgs`-Objekt hier ist das groÃŸe JSON-Objekt, das ich Ihnen

hier in dieser Abbildung gezeigt habe. Es wird also Eigenschaften

wie Session ID, Tool-Name, Tool-Input

und so weiter haben. Alles, was wir wirklich tun mÃ¼ssen, ist,

den Dateipfad dort zu betrachten und zu entscheiden, ob

er versucht, die `.env`-Datei zu lesen. Wenn

ja, dann wollen wir sicherstellen, dass wir unser Programm oder unseren Befehl hier

mit dem Exit-Code 2 beenden und hoffentlich auch eine Information an Claude

melden, die besagt: â€žEntschuldigung, aber du kannst diese Datei nicht lesen.â€œ

Sie werden feststellen, dass ich hier bereits Code habe, der diesen

Dateipfad liest. Sie werden auch feststellen, dass es einen

Fallback gibt, um `toolInput.path` hier zu betrachten. Ich sage Ihnen gleich, warum das

eingefÃ¼gt wurde. Implementieren wir also jetzt die TODO-Anweisung.

Wir sagen: Wenn `readPath` `.env` enthÃ¤lt,

bedeutet das, dass Claude die `.env`-Datei lesen muss.

Und wenn das der Fall ist, dann mÃ¶chte ich sicherstellen, dass wir diese Operation blockieren

und Claude ein Logging-Feedback geben. Ich fÃ¼ge also zuerst

ein `console.error` ein, speziell ein `console.error`,

weil wir auf `stderr` protokollieren wollen. Denk daran, damit

geben wir Claude Feedback. Und ich sage etwas

wie: â€žSie kÃ¶nnen die .env-Datei nicht lesen.â€œ

Und dann mache ich einen `process.exit(2)`.

Um das zu testen, speichere ich die Datei. Ich

Ã¶ffne Claude Code. Wenn du es bereits geÃ¶ffnet hast,

stelle sicher, dass du Claude Code neu startest.

Du musst es neu starten, damit Ã„nderungen an deinen Hooks wirksam werden.

Ich bitte Claude, die .env-Datei zu lesen.

Und es wird wahrscheinlich versuchen, das zu tun, aber wenn es versucht,

werden wir einen Fehler zurÃ¼ckgeben, der besagt: â€žSie kÃ¶nnen die .env-Datei nicht lesen.â€œ

Und Claude wird hoffentlich erkennen, dass es leider nicht gelesen werden kann.

TatsÃ¤chlich kann es sogar erkennen, dass es durch einen Read-Hook daran gehindert wurde.

Unser Hook sollte also auch fÃ¼r `grep`-Operationen funktionieren.

Wenn ich Claude also bitte, das `grep`-Tool zu versuchen,

sollte dies hoffentlich auch verboten sein. Mal sehen, wie es lÃ¤uft.

Und ja, dasselbe, es ist jetzt verboten.

Das ist also ein funktionierender Hook, den wir zusammengestellt haben. Jetzt

ist dieser Hook nicht besonders nÃ¼tzlich, und ich zeige Ihnen

gleich einen viel nÃ¼tzlicheren Hook.
