1.  **Have the necessary programs downloaded.**

To download and run the project, you need to have <a href="https://nodejs.org/en/">Node.js</a>, <a href="https://www.gatsbyjs.com/docs/quick-start/"> Gatsby</a> and some kind of code-editor (preferably <a href="https://code.visualstudio.com/">Visual Studio Code<a/>).
If you're on a windows computer, it's prefered to download <a href="https://git-scm.com/">git</a> so you can use git bash as a command prompt to be able to use linux commands instead of the ones for windows.

```shell
  #If you don't have gatsby on your computer, copy this into your command prompt (you'll need node.js for this):
  npm install -g gatsby-cli
  #this creates a new gatsby project with the name "gatsby-blog" with this github project. After creating the project, it'll enter the gatsby-blog folder, and then opens it in a code-editor.
  gatsby new gatsby-blog https://github.com/SweDark/Jesper_Flodstrom_webbapplikationer-och-mobil-utveckling-tenta && cd gatsby-blog && code .
```
2. **download all the packages needed for the project.**

When you've gotten into the project, you'll need to open a new terminal in the code-editor. In the terminal you'll have to write

```shell
#This will install all packages needed to run the project that can be found in the package.json file.
npm install 
```

3. **Check if everything's working!**

After all the packages has been installed, you can check if everything works by doing this in the terminal:

```shell
#This will start running the site.
gatsby develop
```
Now, to see if it's running correctly, you can enter `http://localhost:8000` in your browser. If that worked, then you can start editing the project to your own liking.
You can also experiment with queries on `http://localhost:8000/___graphql`.

4. **description of folders**

Here's a quick description of things you need to know:

components folder - Where you put all the components of the website. An example of components that you can find here will be the navigation, content and footer.

elements folder - This is where you add all your style components for all the components.

images folder - You can put images that should be global here.

pages folder - You can have your pages here.

posts folder - all of the articles can be found here.

templates folder - this is where the website is built up. Every file in here is another page.

themes folder - Your theme file, add colors etc that you want to use here and then use them in the elements files instead of hex codes for color etc.

gatsby-node.js - creates the single post pages, and even the amount of pagination pages needed on your allposts page.

gatsby-browser.js & gatsby-ssr.js - these two files are always the same, since it the website won't work sometimes if you don't have it. Global styles are written in this one.

gatsby-config.js - rules for mapping pages, posts, images etc can be found here. Even the meta-data is in this file!

5. **You now know what is where, thus you can now start coding!**



<!-- auto generated-content:start -->
## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->


## Tenta Uppgift

Från början använde jag mig utav vanlig html, css och javascript. Nu när man testat både pugg och gatsby, så tycker jag att det är smidigare att sitta i gatsby än att göra på det vanliga sättet. Detta beror på att man inte behöver upprepa navigationen på varje html sida som man gör (på det sättet jag skrev vanlig kod var det mycket upprepning av vissa element). Därför tycker jag som enskild åsikt att det är bättre är gatsby än på det vanliga sättet. Dock är min uppfattning utav pug tvärtom, men det kan bero på att vi inte jobbat så mycket med pug.  


Men även om jag tycker att gatsby är smidigare, så beror den slutsatsen på vem det är som kodar. För nybörjare skulle gatsby vara svårt, men för de som har tidigare erfarenhet är det smidigare eftersom vi redan förstår hur programmering funkar och kan därför lättare förstå vad som händer i koden.


Iallafall, det finns fler anledningar till att gatsby är bättre än det vanliga sättet. Ett utav anledningarna är att det laddar lika snabbt som andra statiska sidor(länk 1 och 2). Detta beror på att gatsby laddar bara det viktigaste html, css, javascript och data. Sedan förhämtas resurser så att man kan klicka utan mycket laddningstid.


När jag kollade vidare mot program som man kan använda istället för gatsby, kom jag in lite på Next.js(länk 3). Om man vill ha snabbt laddande sidor, då är gatsby bättre än next.js eftersom next.js använder sig utav ssr (server-side rendering) istället för gatsby’s statisk renderade sidor. Detta gör att Next.js måste först få en förfrågan från en användare, och den förfrågan måste skickas från servern för att hämta data innan den får tillbaka data för att sedan skicka tillbaka till användarens browser. 


(länk 3) Gatsby gör på ett bättre sätt, eftersom den först gör sidorna till statiska html sidor. Därefter hämtar den data när den kompileras. Filerna som skapas blir till exempel index.html, och de filerna blir tillgängliga till användaren på direkten. Detta gör att stegen i next.js där den skickar en förfrågan till servern för att hämta data etc behövs inte i gatsby, då all data har skapats som statiska objekt vid kompilationen. En annan sak som är bättre med gatsby är att det finns många plugins, medan Next.js inte har några.


(länk 4 och 5)Sedan om vi jämför gatsby mot Jekyll, som använder sig också utav statiska sidor, då blir skillnaden på om man har mycket kunskaper i programmering eller inte . Man behöver lära sig mer i gatsby, och man behöver mer erfarenhet för att använda gatsby på ett bra sätt. Jekyll har mindre delar som man behöver lära sig. Dock så har Jekyll inte PWA (Progressive Web Application), medan gatsby har det. Detta betyder att gatsby ska fungera på alla standard plattformar samt man kan nå applikationen genom media etc, och inte genom app stores. Om man vill att applikationen ska synas överallt, då är gatsby bättre än jekyll, men om applikationen bara ska finnas på android eller apple app store, då skulle jekyll funka bättre. 


 Alla tre (Gatsby, Next.js och Jekyll) har sitt eget sätt att göra SEO, vilket gör att om man är ute efter en hög sido-ranking, då kvittar det vilken utav de 3 man använder, eftersom rankingen kommer att bli hög så länge man använder SEO.

**Slutsats:**

Slutsatsen som jag har kommit fram till är att om man är en erfaren programmerare, då är gatsby bättre om man kollar på hastighet och tillgänglighet (länk 1, 2, 5). Om man inte är så insatt i programmering skulle jekyll funka bra, eftersom det är färre moment att lära sig, men man får inte samma tillgänglighet som man får genom gatsby(länk 4, 5). Samma sak händer om man kollar hastighet emot Next.js (länk 3). Men om man har en databas kopplat så kan man inte direkt använda gatsby eftersom gatsby inte använder databaser (länk 6). Om den använde sig utav databaser, då hade hatigheten gått ner till samma som Next.js, vilket i sådana fall skulle göra gatsby till en SSR istället för statisk webbplats (länk 3). 


Slutsatsen är alltså att om man har erfarenhet och ska ha en statisk sida, då är gatsby bra att använda. Om man är en nybörjare som kanske inte vill lära sig många saker som i gatsby, då kan man använda Jekyll. Men om man har en webbplats som inte är statisk, då är Next.js ett bra alternativ.


Länkar:

1. https://blog.logrocket.com/is-gatsby-really-that-great-e7b19c4c1c05/

2. http://russelljanderson.com/choosing-gatsby/

3. https://medium.com/javascript-in-plain-english/server-side-rendering-for-websites-or-gatsbyvs-next-js-6caed9a79e16 

4. https://dev.to/pagepro_agency/is-gatsbyjs-the-best-framework-for-building-static-websites-what-are-the-other-alternatives-1lbo 

5. https://medium.com/@moqod_development/advantages-and-disadvantages-of-progressive-web-apps-6f019223cb17

6. https://dev.to/patricksevat/so-what-database-does-gatsby-use-545f

