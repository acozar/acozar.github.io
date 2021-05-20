---
layout: post
title: Openboard
image: https://acozar.github.io/src/img/openboard/openboard-logo.png
---

<div class="ktr-landing-first">
	<em><a href="https://acozar.github.io/apps/openboard.html" title="Go to Openboard"> Openboard </a></em>
	<br><br><br>
	<figure>
		<img src="https://acozar.github.io/src/img/openboard/openboard-screenshot.jpg" alt="Openboard">
		<figcaption>Openboard screenshot</figcaption>
	</figure>
	<br><br><br>
	<h3>- A customizable Homepage -</h3>
</div>
<div class="">
<p>Openboard is a simple, customizable home page for your browser.</p>

<p>It has been developed to meet my own needs, but can be freely adapted by modifying just a few lines of code. It has some practical applications such as a plain text editor, as well as a small set of widgets (location, weather, stopwatch, timer, calculator, task list, RSS headlines, etc ...).</p><br>

<p>Openboard applications are developed with <a href="https://jquery.com/">jQuery</a>. Widgets sortable function is done using <a href="https://jqueryui.com/">jQuery-UI</a>.</p><br>

<p>All aspects of the design are developed in CSS, using the <a href="https://acozar.github.io/bcncss/">BarcelonaCSS</a> library, including the four design modes that can be accessed by the lower right button (light, dark, warm and cold).</p><br>

<p>The text editor allows you to load and save text files in simple formats, such as .txt and .md. It also has a word and character counter.</p><br>

<p>The task list works with Cookies that allow the data to be stored in the browser's cache.</p><br>

<p>The widgets provided by the <a href="https://www.coingecko.com/en/widgets">Coingecko</a> and <a href="https://www.tradingview.com/widget/">Tradingview</a> platforms have been used for the cryptocurrency and stock quotes widgets.</p><br>

<p>Soon, I will implement the use of Cookies to obtain a persistent behavior for widgets and design modes.</p><br>

	<figure>
		<img src="https://acozar.github.io/src/img/openboard/openboard-screenshot-2.jpg" alt="Pad">
		<figcaption>Pad screenshot</figcaption>
	</figure>
	<br><br><br>
	
	<h3>The code</h3>
	
	<pre>
&#x3C;!DOCTYPE html&#x3E;
&#x3C;html lang=&#x22;en&#x22;&#x3E;
&#x9;&#x3C;head&#x3E;
&#x9;&#x9;&#x3C;meta charset=&#x22;utf-8&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Metadata --&#x3E;
&#x9;&#x9;&#x3C;title&#x3E;OpenBoard&#x3C;/title&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;viewport&#x22; content=&#x22;width=device-width, initial-scale=1.0&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;description&#x22; content=&#x22;Open Source Dashboard &#x26; web widgets&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;keywords&#x22; content=&#x22;Startpage&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;author&#x22; content=&#x22;Ac&#xF3;zar&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Metadata: GeoTags --&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;geo.region&#x22; content=&#x22;Catalunya&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;geo.placename&#x22; content=&#x22;Barcelona&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;geo.position&#x22; content=&#x22;41.426812,2.234972&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;ICBM&#x22; content=&#x22;41.426812;2.234972&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Screen styles --&#x3E;
&#x9;&#x9;&#x3C;link href=&#x22;https://acozar.github.io/src/styles/screen.components.min.css&#x22; rel=&#x22;stylesheet&#x22; media=&#x22;screen&#x22;&#x3E;
&#x9;&#x9;&#x3C;link href=&#x22;https://acozar.github.io/src/styles/bcnapp.css&#x22; rel=&#x22;stylesheet&#x22; media=&#x22;screen&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Print styles --&#x3E;
&#x9;&#x9;&#x3C;link href=&#x22;https://acozar.github.io/src/styles/print.css&#x22; rel=&#x22;stylesheet&#x22; media=&#x22;print&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- If iexplorer :( --&#x3E;
&#x9;&#x9;&#x3C;!--[if lt IE 9]&#x3E;&#x3C;script src=&#x22;https://acozar.github.io/src/styles/html5shiv.js&#x22;&#x3E;&#x3C;/script&#x3E;&#x3C;![endif]--&#x3E;
&#x9;&#x9;&#x3C;!--[if IE]&#x3E;&#x3C;link rel=&#x22;stylesheet&#x22; type=&#x22;text/css&#x22; href=&#x22;https://acozar.github.io/src/styles/iexplorer.css&#x22; /&#x3E;&#x3C;![endif]--&#x3E;
&#x9;
&#x9;&#x9;&#x3C;!-- No Script styles --&#x3E;&#x9;&#x9;
&#x9;&#x9;&#x3C;noscript&#x3E;&#x3C;link href=&#x22;https://acozar.github.io/src/styles/noscript.css&#x22; rel=&#x22;stylesheet&#x22; media=&#x22;screen&#x22;&#x3E;&#x3C;/noscript&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Page Icons --&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;apple-touch-icon&#x22; sizes=&#x22;180x180&#x22; href=&#x22;https://acozar.github.io/src/ics/apple-touch-icon.png&#x22;&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;icon&#x22; type=&#x22;image/png&#x22; sizes=&#x22;32x32&#x22; href=&#x22;https://acozar.github.io/src/ics/favicon-32x32.png&#x22;&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;icon&#x22; type=&#x22;image/png&#x22; sizes=&#x22;16x16&#x22; href=&#x22;https://acozar.github.io/src/ics/favicon-16x16.png&#x22;&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;manifest&#x22; href=&#x22;https://acozar.github.io/src/ics/site.webmanifest&#x22;&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;mask-icon&#x22; href=&#x22;https://acozar.github.io/src/ics/safari-pinned-tab.svg&#x22; color=&#x22;#777777&#x22;&#x3E;
&#x9;&#x9;&#x3C;link rel=&#x22;shortcut icon&#x22; href=&#x22;https://acozar.github.io/src/ics/favicon.ico&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;msapplication-TileColor&#x22; content=&#x22;#eeeeee&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;msapplication-config&#x22; content=&#x22;https://acozar.github.io/src/ics/browserconfig.xml&#x22;&#x3E;
&#x9;&#x9;&#x3C;meta name=&#x22;theme-color&#x22; content=&#x22;#ffffff&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x3C;/head&#x3E;
&#x9;&#x3C;body class=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Theme inputs (invisibles) --&#x3E;&#x9;&#x9;
&#x9;&#x9;&#x3C;input type=&#x22;radio&#x22; id=&#x22;theme-nox&#x22; name=&#x22;theme&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E;
&#x9;&#x9;&#x3C;input type=&#x22;radio&#x22; id=&#x22;theme-vesperum&#x22; name=&#x22;theme&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E;
&#x9;&#x9;&#x3C;input type=&#x22;radio&#x22; id=&#x22;theme-meridianus&#x22; name=&#x22;theme&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E;
&#x9;&#x9;&#x3C;input type=&#x22;radio&#x22; id=&#x22;theme-aurora&#x22; name=&#x22;theme&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E; 
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Page content --&#x3E;&#x9;&#x9;
&#x9;&#x9;&#x3C;div id=&#x22;page&#x22;&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;randombg&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;fixed-tools&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;em class=&#x22;pophover&#x22; data-title=&#x22;About&#x22;&#x3E;&#x3C;small&#x3E;&#x3C;label for=&#x22;main-check&#x22;&#x3E;&#x26;#9673;&#x3C;/label&#x3E;&#x3C;/small&#x3E;&#x3C;/em&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x3C;header id=&#x22;page-header&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h1&#x3E;Open Board&#x3C;/h1&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/header&#x3E;
&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;main-check&#x22; name=&#x22;main&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E;
&#x9;&#x9;&#x9;&#x3C;main id=&#x22;page-main&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div&#x3E;

&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;flex-box-1&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;widget-box about-box&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;About&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;img src=&#x22;https://acozar.github.io/src/img/openboard/openboard-logo.png&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Openboard is a simple, customizable home page for your browser.&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;More info at: &#x3C;a href=&#x22;https://acozar.github.io&#x22;&#x3E;acozar.github.io&#x3C;/a&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;collapser widget widget-box search-box&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;em&#x3E;&#x3C;label for=&#x22;search&#x22;&#x3E;Search&#x3C;mark&#x3E;&#x3C;/mark&#x3E;&#x3C;/label&#x3E;&#x3C;/em&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;search&#x22; name=&#x22;checkcollapser&#x22; hidden checked&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;form method=&#x22;get&#x22; id=&#x22;search&#x22; action=&#x22;http://duckduckgo.com/&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;hidden&#x22; name=&#x22;sites&#x22; value=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;hidden&#x22; name=&#x22;k8&#x22; value=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;hidden&#x22; name=&#x22;k9&#x22; value=&#x22;&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;hidden&#x22; name=&#x22;kt&#x22; value=&#x22;h&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;strong&#x3E;&#x3C;input type=&#x22;text&#x22; name=&#x22;q&#x22; maxlength=&#x22;255&#x22; placeholder=&#x22;Search Duckduckgo&#x22;&#x3E;&#x3C;/strong&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;submit&#x22; value=&#x22;DuckDuckGo Search&#x22; hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;collapser widget widget-box pad-box&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;em&#x3E;&#x3C;label for=&#x22;pad&#x22;&#x3E;Pad&#x3C;mark&#x3E;&#x3C;/mark&#x3E;&#x3C;/label&#x3E;&#x3C;/em&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;pad&#x22; name=&#x22;checkcollapser&#x22; hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;nav&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;button&#x22; id=&#x22;btnOpen&#x22; class=&#x22;pophover&#x22; data-title=&#x22;Open file&#x22;&#x3E; &#x26;#10514; &#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button type=&#x22;button&#x22; id=&#x22;btnSave&#x22; class=&#x22;pophover&#x22; data-title=&#x22;Save file&#x22;&#x3E; &#x26;#10515; &#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button class=&#x22;zoomout pophover&#x22; data-title=&#x22;- size&#x22;&#x3E; - &#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button class=&#x22;zoomin pophover&#x22; data-title=&#x22;+ size&#x22;&#x3E; + &#x3C;/button&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;file&#x22; id=&#x22;exampleInputFile&#x22; accept=&#x22;.txt,.csv,.xml,.md,.css,.html,.js,.php,.xhtml,.tex&#x22; hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/nav&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;editor-app&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;textarea id=&#x22;work-textarea&#x22; placeholder=&#x22;Type...&#x22;&#x3E;&#x3C;/textarea&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;&#x3C;span id=&#x22;wordCount&#x22;&#x3E;0 words&#x3C;/span&#x3E;  |  &#x3C;span id=&#x22;charCount&#x22;&#x3E;0 characters&#x3C;/span&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;flex-box-4&#x22; id=&#x22;sortable&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box browser-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Browser&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Your browser agent: &#x3C;br&#x3E;&#x3C;span id=&#x22;browser&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box os-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;OS&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Your OS: &#x3C;br&#x3E;&#x3C;span id=&#x22;os&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/p&#x3E;&#x3C;br&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box map-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Location&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;map&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;iframe style=&#x22;width: 100%;margin: -8px 0;&#x22; src=&#x22;https://www.openstreetmap.org/export/embed.html?bbox=&#x22;&#x3E;&#x3C;/iframe&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Your location: &#x3C;br&#x3E;&#x3C;b&#x3E;&#x3C;span id=&#x22;location&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Your IP: &#x3C;br&#x3E;&#x3C;b&#x3E;&#x3C;span id=&#x22;clientip&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;&#x3C;a href=&#x22;https://www.openstreetmap.org/&#x22; title=&#x22;Open Street Map&#x22;&#x3E;Maps&#x3C;/a&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box weather-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Weather&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;weather-app&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div id=&#x22;sky-image&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Skies: &#x3C;b&#x3E;&#x3C;span id=&#x22;weather-id&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Temperature: &#x3C;b&#x3E;&#x3C;span id=&#x22;temperature&#x22;&#x3E;&#x3C;/span&#x3E; C &#x26;deg&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Wind speed: &#x3C;b&#x3E;&#x3C;span id=&#x22;wind-speed&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;p&#x3E;Humidity: &#x3C;b&#x3E;&#x3C;span id=&#x22;humidity&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/b&#x3E;&#x3C;/p&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box clock-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Time&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;clock-1&#x22; name=&#x22;clock-1&#x22; hidden&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-case&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;  &#x3C;div class=&#x22;clock-dial&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-zenit-hand&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-hour-hand&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-minute-hand&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-second-hand&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-nut&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;clock-ratio&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;  &#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;hr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box date-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Date&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;calendar&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span id=&#x22;month&#x22;&#x3E;&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span id=&#x22;day&#x22;&#x3E;&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;span id=&#x22;year&#x22;&#x3E;&#x3C;/span&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box timer-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Timer&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h3 id=&#x22;countdown&#x22;&#x3E;00:30:00&#x3C;/h3&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;form id=&#x22;example2form&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    &#x3C;input type=&#x22;button&#x22; class=&#x22;timer-play&#x22; value=&#x22;Play/Pause&#x22; onclick=&#x22;Example2.Timer.toggle();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    &#x3C;br&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    &#x3C;label&#x3E;Countdown in seconds&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    &#x3C;input type=&#x22;text&#x22; name=&#x22;startTime&#x22; value=&#x22;30&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;    &#x3C;input type=&#x22;button&#x22; class=&#x22;timer-reset&#x22; value=&#x22;Stop/Reset&#x22; onclick=&#x22;Example2.resetCountdown();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box chrono-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Chrono&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h3 id=&#x22;stopwatch&#x22;&#x3E;00:00:00&#x3C;/h3&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;form&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;button&#x22; class=&#x22;timer-play&#x22; value=&#x22;Play/Pause&#x22; onclick=&#x22;Example1.Timer.toggle();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;button&#x22; class=&#x22;timer-reset&#x22; value=&#x22;Stop/Reset&#x22; onclick=&#x22;Example1.resetStopwatch();&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/form&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box coin-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;BTC rate&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;script src=&#x22;https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;coingecko-coin-price-chart-widget  coin-id=&#x22;bitcoin&#x22; currency=&#x22;usd&#x22; width=&#x22;100%&#x22; height=&#x22;300&#x22; locale=&#x22;en&#x22;&#x3E;&#x3C;/coingecko-coin-price-chart-widget&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box coin-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Etherum rate&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;script src=&#x22;https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;coingecko-coin-price-chart-widget  coin-id=&#x22;ethereum&#x22; currency=&#x22;usd&#x22; width=&#x22;100%&#x22; height=&#x22;300&#x22; locale=&#x22;en&#x22;&#x3E;&#x3C;/coingecko-coin-price-chart-widget&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box rss-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Wired News&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div id=&#x22;rss-wired&#x22;&#x3E;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box todo-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;To Do&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;todo&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;ul id=&#x22;list-items&#x22;&#x3E;&#x3C;/ul&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;form class=&#x22;add-items&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;todo-list-item&#x22; placeholder=&#x22;What to do?&#x22;&#x3E;&#x3C;br&#x3E;
                &#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;button class=&#x22;add&#x22; type=&#x22;submit&#x22;&#x3E;Add to List&#x3C;/button&#x3E;
           &#x9;&#x9;&#x9;&#x9;&#x9; &#x9;&#x3C;/form&#x3E;
           &#x9;&#x9;&#x9;&#x9;&#x9; &#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box calc-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Calc&#x3C;/h5&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;ui&#x22;&#x3E; 
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;table&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td colspan=&#x22;3&#x22;&#x3E;&#x3C;input type=&#x22;text&#x22; class=&#x22;numtxt&#x22; id=&#x22;input&#x22;&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;1&#x22;&#x3E;1&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;2&#x22;&#x3E;2&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;3&#x22;&#x3E;3&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;opBtn&#x22; value=&#x22;+&#x22;&#x3E;+&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;4&#x22;&#x3E;4&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;5&#x22;&#x3E;5&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;6&#x22;&#x3E;6&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;opBtn&#x22; value=&#x22;-&#x22;&#x3E;-&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;7&#x22;&#x3E;7&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;8&#x22;&#x3E;8&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;9&#x22;&#x3E;9&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;opBtn&#x22; value=&#x22;*&#x22;&#x3E;*&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;clrBtn&#x22;  value=&#x22;c&#x22;&#x3E;C&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;numBtn&#x22; value=&#x22;0&#x22;&#x3E;0&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td&#x3E;&#x3C;button class=&#x22;opBtn&#x22; value=&#x22;/&#x22;&#x3E;/&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;td colspan=&#x22;3&#x22;&#x3E;&#x3C;button class=&#x22;calBtn&#x22; value=&#x22;=&#x22;&#x3E;=&#x3C;/button&#x3E;&#x3C;/td&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/tr&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/table&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;section class=&#x22;widget widget-box coin-box&#x22; draggable=&#x22;true&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;h5&#x3E;Markets&#x3C;/h5&#x3E;
&#x3C;!-- TradingView Widget BEGIN --&#x3E;
&#x3C;div class=&#x22;tradingview-widget-container&#x22;&#x3E;
  &#x3C;div class=&#x22;tradingview-widget-container__widget&#x22;&#x3E;&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;tradingview-widget-copyright&#x22;&#x3E;&#x3C;a href=&#x22;https://www.tradingview.com&#x22; rel=&#x22;noopener&#x22; target=&#x22;_blank&#x22;&#x3E;&#x3C;span class=&#x22;blue-text&#x22;&#x3E;Crypto&#x3C;/span&#x3E;&#x3C;/a&#x3E; by TradingView&#x3C;/div&#x3E;
  &#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js&#x22; async&#x3E;
  {
  &#x22;colorTheme&#x22;: &#x22;light&#x22;,
  &#x22;dateRange&#x22;: &#x22;12M&#x22;,
  &#x22;showChart&#x22;: false,
  &#x22;locale&#x22;: &#x22;en&#x22;,
  &#x22;width&#x22;: &#x22;100%&#x22;,
  &#x22;height&#x22;: &#x22;100%&#x22;,
  &#x22;largeChartUrl&#x22;: &#x22;&#x22;,
  &#x22;isTransparent&#x22;: true,
  &#x22;showSymbolLogo&#x22;: true,
  &#x22;tabs&#x22;: [
    {
      &#x22;title&#x22;: &#x22;Stocks&#x22;,
      &#x22;symbols&#x22;: [
        {
          &#x22;s&#x22;: &#x22;NASDAQ:AAPL&#x22;,
          &#x22;d&#x22;: &#x22;Apple Corp&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:GOOG&#x22;,
          &#x22;d&#x22;: &#x22;Google&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:AMZN&#x22;,
          &#x22;d&#x22;: &#x22;Amazon&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:MSFT&#x22;,
          &#x22;d&#x22;: &#x22;Microsoft&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NYSE:TWTR&#x22;,
          &#x22;d&#x22;: &#x22;Twitter&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:FB&#x22;,
          &#x22;d&#x22;: &#x22;Facebook&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:NFLX&#x22;,
          &#x22;d&#x22;: &#x22;Netflix&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:TSLA&#x22;,
          &#x22;d&#x22;: &#x22;Tesla&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NYSE:T&#x22;,
          &#x22;d&#x22;: &#x22;AT&#x26;T&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NYSE:BABA&#x22;,
          &#x22;d&#x22;: &#x22;Alibaba&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NASDAQ:ADBE&#x22;,
          &#x22;d&#x22;: &#x22;Adobe&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;NYSE:DIS&#x22;,
          &#x22;d&#x22;: &#x22;Disney&#x22;
        }
      ],
      &#x22;originalTitle&#x22;: &#x22;Indices&#x22;
    },
    {
      &#x22;title&#x22;: &#x22;Crypto&#x22;,
      &#x22;symbols&#x22;: [
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:BTC&#x22;,
          &#x22;d&#x22;: &#x22;BTC&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:ETH&#x22;,
          &#x22;d&#x22;: &#x22;ETH&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:ADA&#x22;,
          &#x22;d&#x22;: &#x22;ADA&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:USDT&#x22;,
          &#x22;d&#x22;: &#x22;USDT&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:XRP&#x22;,
          &#x22;d&#x22;: &#x22;XRP&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:DOT&#x22;,
          &#x22;d&#x22;: &#x22;DOT&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:BCH&#x22;,
          &#x22;d&#x22;: &#x22;BCH&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:LINK&#x22;,
          &#x22;d&#x22;: &#x22;LINK&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:LTC&#x22;,
          &#x22;d&#x22;: &#x22;LTC&#x22;
        },
        {
          &#x22;s&#x22;: &#x22;CRYPTOCAP:XLM&#x22;,
          &#x22;d&#x22;: &#x22;XLM&#x22;
        }
      ]
    }
  ]
}
  &#x3C;/script&#x3E;
&#x3C;/div&#x3E;
&#x3C;!-- TradingView Widget END --&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/section&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;hr&#x3E;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/main&#x3E;
&#x9;&#x9;&#x9;
&#x9;&#x9;&#x9;&#x3C;footer id=&#x22;page-footer&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;By &#x3C;a href=&#x22;https://acozar.github.io&#x22; title=&#x22;acozar.github.io&#x22; target=&#x22;blank&#x22; class=&#x22;notranslate&#x22;&#x3E;acozar.github.io&#x3C;/a&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/footer&#x3E;
&#x9;&#x9;&#x9;
&#x9;&#x9;&#x3C;/div&#x3E;&#x3C;!-- /#page --&#x3E;
&#x9;&#x9;  
&#x9;&#x9;&#x3C;!-- Out of page
&#x9;&#x9;================================================== --&#x3E;
&#x9;&#x9;
&#x9;&#x9;&#x3C;!-- Tools switcher --&#x3E;  &#x9;&#x9;
  &#x9;&#x9;&#x3C;div id=&#x22;tools-switcher&#x22;&#x3E;
  &#x9;&#x9;&#x9;&#x3C;label for=&#x22;tools-check&#x22; data-title=&#x22;Themes&#x22; class=&#x22;pophover&#x22;&#x3E;&#x26;#10050;&#x3C;/label&#x3E;
  &#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;!-- Tools nav --&#x3E;
&#x9;&#x9;&#x3C;input type=&#x22;checkbox&#x22; id=&#x22;tools-check&#x22; name=&#x22;tools&#x22; aria-hidden=&#x22;true&#x22; hidden&#x3E;
&#x9;&#x9;&#x3C;nav id=&#x22;tools-nav&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;label for=&#x22;tools-check&#x22; id=&#x22;label-tools&#x22; data-title=&#x22;Close&#x22; class=&#x22;pophover&#x22;&#x3E;&#x26;#10050;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x3C;label for=&#x22;theme-nox&#x22; id=&#x22;label-nox&#x22; data-title=&#x22;Nox&#x22; class=&#x22;pophover&#x22;&#x3E;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x3C;label for=&#x22;theme-vesperum&#x22; id=&#x22;label-vesperum&#x22; data-title=&#x22;vesperum&#x22; class=&#x22;pophover&#x22;&#x3E;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x3C;label for=&#x22;theme-meridianus&#x22; id=&#x22;label-meridianus&#x22; data-title=&#x22;Meridianus&#x22; class=&#x22;pophover&#x22;&#x3E;&#x3C;/label&#x3E;
&#x9;&#x9;&#x9;&#x3C;label for=&#x22;theme-aurora&#x22; id=&#x22;label-aurora&#x22; data-title=&#x22;Aurora&#x22; class=&#x22;pophover&#x22;&#x3E;&#x3C;/label&#x3E;
&#x9;&#x9;&#x3C;/nav&#x3E;&#x9;

&#x9;&#x9;&#x3C;!-- Scripts
&#x9;&#x9;================================================== --&#x3E;
&#x9;&#x9;&#x3C;script src=&#x22;https://acozar.github.io/src/scripts/jquery.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;
&#x9;&#x9;&#x3C;script src=&#x22;https://acozar.github.io/src/scripts/jquery-ui.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;
&#x9;&#x9;&#x3C;script src=&#x22;https://acozar.github.io/src/scripts/bcnapp.js&#x22; type=&#x22;text/javascript&#x22;&#x3E;&#x3C;/script&#x3E;
&#x9;&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
	</pre>
</div>