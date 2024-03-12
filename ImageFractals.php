<!DOCTYPE html>
<html lang="en">
<head>
    <title>Make Fractals of Images</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/main01.min.css" type="text/css">
    <link rel="stylesheet" href="js/spectrum.css" type="text/css">
</head>
<body>
    <div class="wrapper">
        <div id="content">
            <div class="container-fluid">
                <!-- Hamburger icon -->
                <div class="container-fluid mb-2">
                    <div class="menuButton">
                        <div class="animated-icon"><span></span><span></span><span></span></div>
                    </div>
                </div>
                <article class="myarticle">
                    <header>
                        <h1>Make Fractals of Images</h1>
                        <p>
                            <a href="http://malinchristersson.tumblr.com/">Malin Christersson</a> &loz;&loz;&loz;
                            <time>2015-12-26</time>
                        </p>
                    </header>
                    <div class="textDiv">
                        <ul>
                            <li>Choose an image file. The image will be cropped to a square.</li>
                            <li>Click in the top canvas to pick a new Julia point or to zoom in.</li>
                            <li>Change the size and the position of orbit trap (the image).</li>
                            <li>Change the degree of the polynomial used to generate the fractal.</li>
                            <li>Switch between Mandelbrot and Julia set.</li>
                            <li>Generate a large fractal for downloading.</li>
                        </ul>
                        <hr>
                    </div>
                    <div class="row narrow centerDiv">
                        <div class="col-sm custom-file mb-2">
                            <input type="file" class="custom-file-input" id="files" name="files[]">
                            <label class="custom-file-label">Choose an image file</label>
                        </div>
                        <div class="col-sm mb-2">
                            <figure>
                                <div id="PhotoContainer"></div>
                                <figcaption>Image</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="row narrow centerDiv mb-4">
                        <div class="col-sm mb-2">
                            <fieldset>
                                <legend>Choose click option</legend>
                                <input type="radio" name="chooseClick" id="zoomIn" value="false">Zoom in<br>
                                <input type="radio" name="chooseClick" id="pickJulia" value="true" checked="checked">Pick Julia point<br>
                            </fieldset>
                        </div>
                        <div class="col-sm mb-2 pt-5">
                            <button id="resetJulia" class="btn btn-primary">Reset size</button> 
                        </div>
                    </div>
                    <figure>
                        <figcaption>Click in the canvas below to generate another Julia set!</figcaption>
                        <div id="JuliaContainer"></div>
                    </figure>
                    <div class="row narrow centerDiv mb-4 mt-4">
                        <div class="col-sm mb-2 border">
                            <div class="center">
                                <b>Background color</b> <br>
                                <div class="inlineDiv">
                                    <input type="color" id="bkgrColor" value="#000000" name="bkgrColor">
                                </div>
                            </div>  
                            <hr>
                            <div class="center">
                                <b>Orbit trap size</b> <br>
                                <div class="inlineDiv">
                                    <input id="squareSide" type="range" min="0.1" max="2" step="0.1" value="1">
                                </div>
                                <div class="inlineDiv" id="squareSideDisplay">1</div>
                            </div>
                            <div class="center">
                                <b>Degree of polynomial</b> <br>
                                <div class="inlineDiv">
                                    <input id="degree" type="range" min="2" max="5" value="5">
                                </div>
                                <div class="inlineDiv" id="degreeDisplay">5</div>
                            </div>
                            <div class="center">
                                <button id="switch" class="btn btn-primary">Switch to Mandelbrot</button>
                            </div>
                        </div>
                        <div class="col-sm mb-2 border">
                            <div class="center">
                                <b>Click to change position</b> <br>
                                <div id="OrbitTrapContainer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="center">
                        <button id="generateLarge" class="btn btn-primary">Generate 2560 &times; 2560 fractal</button>
                    </div>
                    <figure id="ImageHolder" style="width: 200px; margin: 10px auto;"></figure>
                    <div class="center" id="LinkHolder"></div>

                    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
                    <script>!window.jQuery && document.write('<script src="../jquery-1.7.1.min.js"><\/script>')</script>
                    <script src='/math/fractals/scripts/spectrum.min.js'></script>
                    <script src="js/ImageFractals01.min.js"></script>
                </article>
            </div> <!--container-fluid-->
        </div> <!--content-->
    </div> <!--wrapper-->
    <script src="m04.js"></script>
</body>
</html>
