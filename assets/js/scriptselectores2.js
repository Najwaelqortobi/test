        // Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // muestra/Oculta el boton Back to top al hacer scroll
        window.addEventListener("scroll", function() {
            const topButton = document.getElementById("top-button");
            if (window.scrollY > window.innerHeight) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });

      //  AQUI SE DEBE INTRODUCIR EL CODIGO CSS Y HTML QUE APARECE POR DEFECTO
      // htmlCode2, cssCode2 EL NUMERO FINAL INDICA EL SECTION DONDE SE INTRODUCIRA EL CÓDIGO
        document.getElementById("htmlCode3").value = "<p>You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>";
        document.getElementById("cssCode3").value = 'p::first-line {\n color: #ff0000;\n font-variant: small-caps;\n}';
		
		document.getElementById("htmlCode4").value = "<p>You can use the ::first-letter pseudo-element to add a special effect to the first character of a text!</p>";
        document.getElementById("cssCode4").value = 'p::first-letter {\n color: #ff0000;\n font-size: xx-large;\n}';

        document.getElementById("htmlCode5").value = '<p class="intro">This is an introduction.</p>\n<p>This is a paragraph with some text. A bit more text even.</p>';
        document.getElementById("cssCode5").value = 'p.intro::first-letter {\n color: #ff0000;\n font-size: 200%;\n}';

        document.getElementById("htmlCode6").value = '<p>You can combine the ::first-letter and ::first-line pseudo-elements to add a special effect to the first letter and the first line of a text!</p>';
        document.getElementById("cssCode6").value = 'p::first-letter {\n color: #ff0000;\n font-size: xx-large;\n}\n p::first-line {\n color: #0000ff;\n font-variant: small-caps;\n}';

        document.getElementById("htmlCode7").value = '<h1>This is a heading</h1>\n<p>The ::before pseudo-element inserts content before the content of an element.</p>\n<h1>This is a heading</h1>';
        document.getElementById("cssCode7").value = 'h1::before {\n content: url(assets/images/flecha-roja.svg);\n}';

        document.getElementById("htmlCode8").value = '<h1>This is a heading</h1>\n<p>The ::after pseudo-element inserts content after the content of an element.</p>\n<h1>This is a heading</h1>';
        document.getElementById("cssCode8").value = 'h1::after {\n content: url(assets/images/pollito-bailon.gif);\n}';

        document.getElementById("htmlCode9").value = '<ul>\n<li>Coffee</li>\n<li>Tea</li>\n<li>Milk</li>\n</ul>\n<ol>\n<li>First</li>\n<li>Second</li>\n<li>Third</li>\n</ol>\n<details>\n<summary>Epcot Center</summary>\n<p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>\n</details>\n';
        document.getElementById("cssCode9").value = '::marker {\n color: red;\n font-size: 23px;\n}';
		
  	   document.getElementById("htmlCode10").value = '<h1>Select some text on this page:</h1>\n<p>This is a paragraph.</p>\n<div>This is some text in a div element.</div>\n';
       document.getElementById("cssCode10").value = '::selection {\ncolor: red;\nbackground: yellow;\n}';
	   
	   document.getElementById("htmlCode11").value = '<label for="first-name">Your phone number:</label><br />\n<input id="first-name" type="tel" name="phone" minlength="9" maxlength="9" placeholder="It must be 9 digits" />';
       document.getElementById("cssCode11").value = 'input::placeholder {\n font-weight: bold;\n opacity: 0.5;\n color: red;\n}\ninput {\nmargin-top: 0.5rem;\n}\n';
	  
	   document.getElementById("htmlCode13").value = '<img src="assets/images/imagen-prueba.png" alt="imágen de prueba"  width="20%"/>';
       document.getElementById("cssCode13").value = 'img{\n margin:50px;\n transition:0.3s;\n}\nimg:hover {\n transform: scale(1.5);\n}';

       document.getElementById("htmlCode14").value = '<a href="https://www.google.es/" target="_blank">misitio.info</a>';
       document.getElementById("cssCode14").value = 'a:link {\n color:green;\n}';
	   
	   document.getElementById("htmlCode15").value = '<a href="https://xn--peascalf5-m6a.org/" target="_blank">misitio.info</a>';
       document.getElementById("cssCode15").value = 'a:visited {\n color:purple;\n}';
	   
	   document.getElementById("htmlCode16").value = '<a href="https://www.w3schools.com/" target="_blank">misitio.info</a>';
       document.getElementById("cssCode16").value = 'a:active {\n color:red;\n}';
	   
	   document.getElementById("htmlCode17").value = '<a href="https://developer.mozilla.org/" target="_blank">misitio.info</a>';
       document.getElementById("cssCode17").value = 'a:link {\n color:green;\n}\na:visited {\n color:purple;\n}\na:hover {color: gray;\n cursor:pointer;\n}\na:active {\n color:red;\noutline: thick double maroon;\n}';
	   
	   // document.getElementById("htmlCode18").value = '';
       // document.getElementById("cssCode18").value = '';
	   
	   // document.getElementById("htmlCode20").value = '';
       // document.getElementById("cssCode20").value = '';




      //  FIN INTRODUCCIÓN DEL CODIGO CSS Y HTML POR DEFECTO

        // Function para actualizar HTML y CSS preview en iframe en tiempo real
        function updatePreview(sectionId) {
            const htmlCode = document.getElementById(`htmlCode${sectionId}`).value;
            const cssCode = document.getElementById(`cssCode${sectionId}`).value;
            const iframe = document.getElementById(`preview${sectionId}`);
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(`
                <style>${cssCode}</style>
                ${htmlCode}
            `);
            iframeDoc.close();
        }
  
        // Añade input event listeners para modificaciones en tiempo real
        document.getElementById("htmlCode3").addEventListener("input", () => updatePreview(3));
        document.getElementById("cssCode3").addEventListener("input", () => updatePreview(3));
		
		document.getElementById("htmlCode4").addEventListener("input", () => updatePreview(4));
        document.getElementById("cssCode4").addEventListener("input", () => updatePreview(4));

        document.getElementById("htmlCode5").addEventListener("input", () => updatePreview(5));
        document.getElementById("cssCode5").addEventListener("input", () => updatePreview(5));

        document.getElementById("htmlCode6").addEventListener("input", () => updatePreview(6));
        document.getElementById("cssCode6").addEventListener("input", () => updatePreview(6));

        document.getElementById("htmlCode7").addEventListener("input", () => updatePreview(7));
        document.getElementById("cssCode7").addEventListener("input", () => updatePreview(7));

        document.getElementById("htmlCode8").addEventListener("input", () => updatePreview(8));
        document.getElementById("cssCode8").addEventListener("input", () => updatePreview(8));

        document.getElementById("htmlCode9").addEventListener("input", () => updatePreview(9));
        document.getElementById("cssCode9").addEventListener("input", () => updatePreview(9));
		
		document.getElementById("htmlCode10").addEventListener("input", () => updatePreview(10));
        document.getElementById("cssCode10").addEventListener("input", () => updatePreview(10));
		
		document.getElementById("htmlCode11").addEventListener("input", () => updatePreview(11));
        document.getElementById("cssCode11").addEventListener("input", () => updatePreview(11));
		
		document.getElementById("htmlCode13").addEventListener("input", () => updatePreview(13));
        document.getElementById("cssCode13").addEventListener("input", () => updatePreview(13));
		
		document.getElementById("htmlCode14").addEventListener("input", () => updatePreview(14));
        document.getElementById("cssCode14").addEventListener("input", () => updatePreview(14));
		
		document.getElementById("htmlCode15").addEventListener("input", () => updatePreview(15));
        document.getElementById("cssCode15").addEventListener("input", () => updatePreview(15));
		
		document.getElementById("htmlCode16").addEventListener("input", () => updatePreview(16));
        document.getElementById("cssCode16").addEventListener("input", () => updatePreview(16));
		
		document.getElementById("htmlCode17").addEventListener("input", () => updatePreview(17));
        document.getElementById("cssCode17").addEventListener("input", () => updatePreview(17));
		
		document.getElementById("htmlCode18").addEventListener("input", () => updatePreview(18));
        document.getElementById("cssCode18").addEventListener("input", () => updatePreview(18));
		
		//document.getElementById("htmlCode20").addEventListener("input", () => updatePreview(20));
        //document.getElementById("cssCode20").addEventListener("input", () => updatePreview(20));


        // Repetir para otras sections si es preciso (por ejemplo, section2, section3, ...)
