alert("Welcome to Coffee Coffee!")

function menuFunction1(){
  $('.menu-link').hover(function(){
  if($(this).css('font-weight') == '500'){
    $(this).css('font-weight', '700')
  } else {
    $(this).css('font-weight', '500')
  }
})
}
menuFunction1();

function menuFunction2(){
  $('.menu-link').hover(function(){
  if($(this).css('color') == "rgb(77, 77, 77)"){
    $(this).css('color', 'black')
  } else {
    $(this).css('color', "rgb(77, 77, 77)")
  }
})
}
menuFunction2();

//var coffeeImg = ['image/coffee1.jpg', 'image/coffee2.jpg', 'image/coffee3.jpg', 'image/coffee4.jpg', 'image/coffee5.jpg']
//function coffeeImage(){
//  $('.coffee').attr('src', coffeeImg)
//  function choice(arr){
//  return arr[Math.floor(Math.random() * arr.length)]
//}
//}
//coffeeImage();

var markov = new RiMarkov(1);
function generateQuote(numSentences){
 $('.quote span').text(markov.generateSentences(numSentences).join(' '))
}
var text = 'As long as there was coffee in the world, how bad could things be? I would rather take coffee than compliments just now. Coffee is a way of stealing time that should by rights belong to your older self.'
markov.loadText(text)
generateQuote(1);
