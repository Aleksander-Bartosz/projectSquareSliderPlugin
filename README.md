# projectSquareRWD-SliderPlugin

Look how it work 

https://aleksander-bartosz.github.io/projectSquareSliderPlugin/

Version Prototype 1.0 /**************\
  Working on progress
  Rwd break points:
- 320px photo img must be 300/176px -- photo must be called rlysmall-photo1.png /rlysmall-photo2.png... remember about put number start from 1

- 480 < 600 px photo must be 430/253px -- small-photo1.png

- 600< 720 photo must be 600/352px -- medium-photo1.png

- 720< 1023 px photo must be 700/422px -- bigmedium-photo1.png

- 1024 < 1125px photo must be 950/577px -- large-photo1.png

- 1125> photo must be 1024/600px
   
   
  In head write:
    ```html
    <link rel='stylesheet' type='text/css' href='style/projectSquareRWDplugin.css'>
    
    <script src="jquery-3.1.1.min.js"></script>
    
    <script src='projectSquareRWDplugin.js'></script>
    
    <script src='app.js'></script>
```

app.js is optional it just how use it in ur  jquuery code

Its  how html must look : 
```html
    <div class='mainContainerSquareRWD'>
       <div class='mainContainerSquareRWD'>
        <div class='myButtonSquareRWD firstSquareRWD'></div>
        <div class='containerSquareRWD'>
            <div class='row row-1' data-num='1'></div>
            <div class='row row-2' data-num='2'></div>
            <div class='row row-3' data-num='3'></div>
            <div class='row row-4' data-num='4'></div>
            <div class='row row-5' data-num='5'></div>
            <div class='row row-6' data-num='6'></div>
            <div class='row row-7' data-num='7'></div>
            <div class='row row-8' data-num='8'></div>
            <div class='row row-9' data-num='9'></div>
            <div class='row row-10' data-num='10'></div>
            <div class='row clearner'></div>
        </div>
        <div class='myButtonSquareRWD secondSquareRWD'></div>
    </div>    
   
```
To use  plugin in ur  code just  use method projectSquareRWD() and pass in argument how many photo will be used by slider (after download in test file it will be 3)

$('.mainContainerSquareRWD').projectSquareRWD(3);

Images are in style/img   put there any urs img remember  about  right size and names of photos ! ! !

enjoy 
