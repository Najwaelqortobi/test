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
      document.getElementById("htmlCode2").value ='<h1>display block example</h1>\n<span class="block">block element 1</span>\n<span class="block">block element 2</span>';
      document.getElementById("cssCode2").value = ".block {\n display: block; \n background-color: #4CAF50; \n color: green;  padding: \n 10px; margin: 10px 0;\n }";
	  
      document.getElementById("htmlCode3").value ='<h1>display inline example</h1>\n<div class="inline">inline element 1</div>\n<div class="inline">inline element 2</div>\n<div class="inline">inline element3</div>';
      document.getElementById("cssCode3").value = ".inline {\n display: inline;\n background-color: #4CAF50;\n color: white;\n padding: 5px;\n margin-right: 10px;\n width:200px;/*no respeta este ancho */\n height: 100px;/*no respeta este alto */\n}";
	  
	  document.getElementById("htmlCode4").value ='<div class="box">Box 1</div>\n<div class="box box2">Box 2</div>\n<div class="box">Box 3</div>\n<div class="box">Box 4</div>';
      document.getElementById("cssCode4").value = ".box{\n display: inline-block;\n width: 50px;\n height: 50px;\n background-color: #4CAF50;\n color: white;text-align: center;\n line-height: 50px;\n margin: 5px;\n}\n .box2{\n width:70px;\n height:70px;\n}";
	  
	  document.getElementById("htmlCode5").value ='<div class="contenedor">\n<div class="box">Box 1</div>\n<div class="box box-none">Box 2</div>\n<div class="box">Box 3</div>\n<div class="box">Box 4</div>\n</div>';
      document.getElementById("cssCode5").value = ".contenedor{\n background-color: gray;\n}\n.box{\n width: 100px;\n height: 100px;\n background-color: green;\n color: white;\n border: 1px solid white;\n}\n.box-none{\n display: none;\n}";
	  
	  document.getElementById("htmlCode8").value ='<h1 class="visible-box">Welcome to My Webpage</h1>\n<p>This is a simple paragraph to show some visible HTMLcontent.</p>\n<ul>\n<li>Item 1</li>\n<li class="hidden-box" >Item 2</li><!-- este elemento no se mostrará -->\n<li>Item 3</li>\n</ul>\n<a href="https://www.example.com">Visit Example Website</a>';
      document.getElementById("cssCode8").value = "/* Visible */\n.visible-box {\n visibility: visible;\n }\n /* Oculto */\n .hidden-box {\n visibility: hidden;\n }\n";
	  
	  document.getElementById("htmlCode9").value ='<div class="contenedor">\n<div class="box">Box 1</div>\n<div class="box hidden-box">Box 2</div>\n<div class="box">Box 3</div>\n<div class="box">Box 4</div>\n</div>';
      document.getElementById("cssCode9").value = ".contenedor{\n background-color: gray;\n}\n.box{\n width: 100px;\n height: 100px;\n background-color: green;\n color: white;\n border: 1px solid white;\n}\n.hidden-box{\n visibility: hidden;\n}";
	  
	  document.getElementById("htmlCode10").value ='<table>\n<tr>\n<th>Columna 1</th>\n<th>Columna 2</th>\n</tr>\n<tr>\n<td>fila 1, columna 1</td>\n<td>fila 1, columna 2</td>\n</tr>\n<tr class="collapse">\n<td>fila 2, columna1</td>\n<td>fila2, columna 2</td>\n</tr>\n<tr>\n<td>fila 3, columna1</td>\n<td>fila 3, columna 2</td>\n</tr>\n</table>';
      document.getElementById("cssCode10").value = "table, th, td {\n border: 1px solid;\n}\n.collapse{\n visibility: collapse;\n}";
	  
	  

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
        document.getElementById("htmlCode2").addEventListener("input", () => updatePreview(2));
        document.getElementById("cssCode2").addEventListener("input", () => updatePreview(2));
		
		document.getElementById("htmlCode3").addEventListener("input", () => updatePreview(3));
        document.getElementById("cssCode3").addEventListener("input", () => updatePreview(3));
		
		document.getElementById("htmlCode4").addEventListener("input", () => updatePreview(4));
        document.getElementById("cssCode4").addEventListener("input", () => updatePreview(4));
		
		document.getElementById("htmlCode5").addEventListener("input", () => updatePreview(5));
        document.getElementById("cssCode5").addEventListener("input", () => updatePreview(5));
		
		document.getElementById("htmlCode8").addEventListener("input", () => updatePreview(8));
        document.getElementById("cssCode8").addEventListener("input", () => updatePreview(8));
		
		document.getElementById("htmlCode9").addEventListener("input", () => updatePreview(9));
        document.getElementById("cssCode9").addEventListener("input", () => updatePreview(9));
		
		document.getElementById("htmlCode10").addEventListener("input", () => updatePreview(10));
        document.getElementById("cssCode10").addEventListener("input", () => updatePreview(10));
		
		


        // Repetir para otras sections si es preciso (por ejemplo, section2, section3, ...)




