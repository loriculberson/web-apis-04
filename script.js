// the only html tag on the page is the body tag
var body = document.querySelector('body')

//1. create an html element - h2
var header = document.createElement('h2')

//2. add text to the newly created element
header.textContent = "I love a rainy night!"

// 3. append the header to the body tag
body.appendChild(header)
// var divOne =  document.createElement('div')
// divOne.setAttribute('style', "background: green; font-size:2rem")

// var divTwo =  document.createElement('div')
// var sectionOne =  document.createElement('section')
// var sectionTwo =  document.createElement('section')