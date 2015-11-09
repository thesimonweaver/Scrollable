## Synopsis

Simple jQuery Script For Scrollable elements without a scrollbar.
Why? 
Because Many of us hate having to deal with a scrollbar when we are building Websites. 
This Script Resolves that Issue.

## Motivation

Searching for an easy to utilize script in the past was a pain, so I've written a script to easily apply scroll-ability to any element script.

## Installation

Required:
jQuery. Current Version tested - 2.1.1.

Easy Installation, add the following snipet to the ```<head></head>``` tag to load jQuery. 
Thank you Google Api's!
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```
Save scrollable.js from the distribute folder wherever you like.
A "js" folder on the site root is prefered, so you don't have to edit the following.

Add scrollable.js to the bottom of the ```<body></body>``` tag.
```
<script src="js/scrollable.js"></script>
```

Open scrollable.js in Notepad++ or your prefered text editor.
Within the lines 3-30 you will find basic settings variables. 
Edit the Variables to your requirements. 

Execute the following function within your init.js or main.js
Or Uncomment line 33, To Execute Code on Page Ready. (Delete // at the begining of the line)

init example:



```
function init(){
	scrollable();
};
init();
```

And That's it.
Feel Free to Edit as You Please.

## Contributors

A Very Simple distribution by, Simon Weaver. 
	simonweaver.com.au

## License

The MIT License (MIT)

Copyright (c) 2015 Simon Weaver

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
