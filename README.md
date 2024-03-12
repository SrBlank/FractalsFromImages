# Fractals From Images

## Description
This repo was created to fix a website I came upon [malinc.se/m/ImageFractals.php](https://www.malinc.se/m/ImageFractals.php). The website claimis to take images and turn them into fractals using both the Mandelbrot and Julia set. I thought this was interesting however found the website did not work. Upon inspection there are many console errors that appear so I decided to try and fix it.

After removing a bunch of unncessary HTML and keeping only essential files found in the sources tab of the developers console it works very well. 

## Usage
To run this website locally you must have a way to run the PHP server. I did this in WSL using the PHP-CLI which can be installed by doing.

```
sudo apt install php-cli
```

Then run 

```
php -S localhost:8000
```

The website is intutive to use from there. While the code does try to convert an image into a square it does so by cropping instead of scaling. Therfore I recommend either manually scaling your photos or using a square photo onhand. I found a 900x900px photo to be the best.

## Credits

The original author of all the code and the original website is Malin Christersson, who I believe is/was a professor at Lund University in Sweden. I could not find any contact information however, [here](https://www.malinc.se/) is their latest website, which seems to have not been updated since 2015.