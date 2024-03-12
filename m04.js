(function (window, document) {
	"use strict";

    var oldWidth,
        menuButton = document.getElementsByClassName('menuButton')[0],
        sidebar = document.getElementById('sidebar'),
        content = document.getElementById('content'),
        iframes = document.getElementsByTagName('iframe'),
		iframeWidths = [], //preferred widths and heights of iframes
		iframeHeights = [],
		containers = [],
		preferredWidths = [],
		preferredHeights = [],
		processingIds = [];

	function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i;

        for(i = 0; i < length; i += 1) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuButton.onclick = function(e) {
    	var animatedButtons = document.getElementsByClassName('animated-icon'),
    		i;
    	e.preventDefault();
    	for (i = 0; i < animatedButtons.length; i++) {
    		toggleClass(animatedButtons[i], 'active');
    	}
    	toggleClass(sidebar, 'active');
    	toggleClass(content, 'active');
    }

		
	function resizeCanvas(width, height, canvas, pjs) {
		if ( canvas.parentNode.offsetWidth < canvas.width) {
				canvas.width = canvas.parentNode.offsetWidth;
				canvas.height = Math.floor(canvas.width*height/width);
				pjs.size(canvas.width,canvas.height);
		} else if (canvas.width < width) {
				canvas.width = Math.min(width, canvas.parentNode.offsetWidth);
				canvas.height = Math.floor(canvas.width*height/width);
				pjs.size(canvas.width,canvas.height);
		}
	}
		
	function getPjsInstance(canvasId, width, height, pjs) {
		var canvas = document.getElementById(canvasId);
		if (Processing !== undefined) {
			pjs = Processing.getInstanceById(canvasId);
		}
		if (pjs !== undefined) {
			resizeCanvas(width, height, canvas, pjs);
			window.addEventListener('resize', function() {
				resizeCanvas(width, height, canvas, pjs);
			}, false);
			window.addEventListener('orientationchange', function() {
				resizeCanvas(width, height, canvas, pjs);
			}, false);
		} else {
			setTimeout(function(){
				getPjsInstance(canvasId, width, height);
			}, 250);
		}
	}
	
	function resizeProcessing() {
		var canvasList = document.getElementsByTagName('canvas'),
			i;
			for (i = 0; i <canvasList.length; i += 1) {
				if (canvasList[i].className === "processing") {
					getPjsInstance(canvasList[i].id, preferredWidths[i], preferredHeights[i]);					
				} 
			}
		
	}
	
	
	/*
	 * resize iframes and videos
	 */
	
	function getElementsDimensions() {
		var i;
		for (i = 0; i <iframes.length; i += 1) {
			iframeWidths[i] = iframes[i].width;
			iframeHeights[i] = iframes[i].height;
		}
	}
	
	function resizeElements(elements, widths, heights) {
		var i;
		for (i = 0; i <elements.length; i += 1) {
			if ( elements[i].parentNode.offsetWidth < elements[i].width) {
				elements[i].width = elements[i].parentNode.offsetWidth;
				elements[i].height = Math.floor(elements[i].width*heights[i]/widths[i]);
			} else if (elements[i].width < widths[i]) {
				elements[i].width = Math.min(widths[i], elements[i].parentNode.offsetWidth);
				elements[i].height = Math.floor(elements[i].width*heights[i]/widths[i]);
			}
		}
	}

	function setActiveIcon(cName) {
		let animatedButtons = document.getElementsByClassName('animated-icon'), i;
		for (i = 0; i < animatedButtons.length; i++ ) {
			animatedButtons[i].className = cName;
		}
		
	}
	
	function resizeIframesAndVideos() {
		let w = window.innerWidth;
		if (w > 768 && oldWidth <= 768 ) {
			setActiveIcon('animated-icon active');
			console.log('j')
			sidebar.className = '';
			content.className = '';
		} 
		if (w <= 768 && oldWidth > 768 ) {
			setActiveIcon('animated-icon');
			sidebar.className = '';
			content.className = '';
		}
		oldWidth = w;
		resizeElements(iframes, iframeWidths, iframeHeights);
	}
	
	
	/*
	 * load geogebra
	 */

	function loadGeoGebra() {
		var divs = document.getElementsByTagName('div'),
			i;
		for (i = 0; i <divs.length; i += 1) {
			if (divs[i].className === "ggbContainer") {
				divs[i].children[0].onclick = function(e) {
					e.preventDefault();
					var src = this.parentNode.children[0],
						w = this.parentNode.children[1].width,
						h = this.parentNode.children[1].height;
					this.parentNode.children[2].src = src;
					this.parentNode.children[2].style.display = "block";
					this.parentNode.removeChild(this.parentNode.children[1]);
					this.parentNode.removeChild(this.parentNode.children[0]);
				};
			}
		}
	}
	
	
	/*
	 * load processing canvases
	 */
	
	function loadProcessing() {
		var i, j, innerString, classes, ratio, actualWidth, actualHeight;
		containers = document.getElementsByClassName("processingContainer");
		for (i = 0; i < containers.length; i += 1){
			classes = containers[i].children[0].className.split(' ');
			processingIds[i] = classes[1];
			ratio = classes[0].split('_');
			preferredWidths[i] = parseInt(ratio[1], 10);
			preferredHeights[i] = parseInt(ratio[2], 10);
			actualWidth = Math.floor(Math.min(containers[i].offsetWidth, preferredWidths[i]));
			actualHeight = Math.floor(actualWidth*preferredHeights[i]/preferredWidths[i]);
			innerString = '<canvas id="'+processingIds[i]+'" width="'+actualWidth+'" height="'+actualHeight+'"';
			innerString = innerString+' class="processing" ></canvas>';
			containers[i].innerHTML = innerString;
			Processing.loadSketchFromSources(containers[i].children[0], ["../processing/"+processingIds[i]+"/web-export/"+processingIds[i]+".pde"]);
		}
	}
	
	function init() {
		let w = window.innerWidth;
		oldWidth = w;
		loadProcessing();
		resizeProcessing();
		getElementsDimensions();
		resizeIframesAndVideos();
		window.addEventListener('resize', resizeIframesAndVideos, false);
		window.addEventListener('orientationchange', resizeIframesAndVideos, false);
		loadGeoGebra();
	}
	
	init();

}(this, this.document));