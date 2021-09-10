# Moment 2 Webbutveckling III

Automatiseringsprocessen förenklar och gör arbetsflödet smidigare för utvecklaren med att minifiera filer så mycket som möjligt, att filändringar snabbt kan läsas av och uppdateras samt uteslutning av överflödig kod. Allt för att få en förenklad och nätt filstruktur med kod till webbmiljön som sedan tar upp mycket mindre plats när det är publicerat på webben.


I systemet har jag använt följande paket:

* gulp-concat / För att sammanslå filer av samma format -Som flera css- eller flera js-filer.
* gulp-terser / För att minifiera js-filer.
* gulp-cssnano / För att minifiera CSS-filer.
* gulp-imagemin / För att minmera bildfiler.
* gulp-brosersync / För att skapa en liveserver direkt i gulp -Direkt när ändringar sparas så uppdateras det och visas i webbläsaren automatiskt.
* gulp-sourcemaps / För att lagra sökvägar till originalfiler, såsom för js- och css-filer.
* gulp-webp / För att lagra bildformat i webp, möjlighet till bilder i komprimerad storlek.

**Verktyg**

Vid utveckling har Visual Studio Code använts och dess terminal med Git Bash. Vid initiering har NPM använts, Gulp vid utveckling samt Git och Github för versionshantering och publicering av repository. 

**Systemet**

I systemet finns en src-mapp med samtliga arbetsfiler (index.html, css-mapp, Javascript-mapp, bildmapp). Dessa automatiseras med hjälp av gulp genom filen gulpfile.js. I filen utförs tasks med ovanstående paket. Tasksen utförs för index.html, css, Javascript och bilder där de utförs och kopierar de automatiserade filerna till en pub-katalog. För att de ska kopieras använd kommandot "gulp" i terminalen. Även en watch task används för att lyssna efter ändringar som görs i arbetsfilerna som direkt kopierar det till pub-katalogen. 

Det hela initieras med npm init som skapar hela projektsystemet med en projektbeskrivning i en package.json - denna uppdateras genom ändringar som görs i systemet, tex installeras ett paket = paketet läggs in och beskrivs i package.json. I systemet utvecklas src-mappen. För att kunna använda gulp för arbetsfilerna installeras det först globalt `npm install gulp-cli -g` sedan lokalt `npm install gulp --save-dev`. Du kan nu använda gulpfilen och automatisera- Skriv kommandot `gulp`. 

## Hämtar du detta från mitt publika repository?

Klona repositorit med 
`git clone https://github.com/afagerberg/moment2.git`

Vill du starta upp systemet kör du kommandot `npm install` i din terminal 


Ha det fint :cup_with_straw:

// Alice
