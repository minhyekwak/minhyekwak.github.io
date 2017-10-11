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

var coffeeImg = ['image/coffee1.jpg', 'image/coffee2.jpg', 'image/coffee3.jpg', 'image/coffee4.jpg', 'image/coffee5.jpg']
function coffeeImage(){
  $('.coffee').attr('src', choice(coffeeImg))
  function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
  }
}
coffeeImage();

//var markov = new RiMarkov(2);
//function generateQuote(numSentences){
// $('.quote span').text(markov.generateSentences(numSentences).join(' '))
//}
//markov.loadText(text)
//generateQuote(2);

var coffeeQuotes = ['As long as there was coffee in the world, how bad could things be?', 'I would rather take coffee than compliments just now.', 'Coffee is a way of stealing time that should by rights belong to your older self.', 'Black as night, sweet as sin.', 'Even bad coffee is better than no coffee at all.', 'Adventure in life is good; consistency in coffee even better.', 'If it was not for the coffee, I would have no identifiable personality whatsover.']
var quotes = choice(coffeeQuotes)
$('.quote span').text(quotes)
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

var coffeeTyp = ['image/types-01-latte.jpg', 'image/types-02-americano.jpg', 'image/types-03-flatwhite.jpg', 'image/types-04-mocha.jpg', 'image/types-05-espresso.jpg', 'image/types-06-cappuchino.jpg']
function coffeeTypes(){
  $('.imgTypes').attr('src', choice(coffeeTyp))
  function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
  }
}
coffeeTypes();

var coffeeRec = ['image/recipe-01.jpg', 'image/recipe-02.jpg', 'image/recipe-03.jpg', 'image/recipe-04.jpg', 'image/recipe-05.jpg', 'image/recipe-06.jpg', 'image/recipe-07.jpg', 'image/recipe-08.jpg', 'image/recipe-09.jpg', 'image/recipe-10.jpg', 'image/recipe-11.jpg', 'image/recipe-12.jpg']
function coffeeRecipes(){
     var x = Math.floor((Math.random() * coffeeRec.length));
    document.getElementById('imgRecipes').src = coffeeRec[x];
}

var coffeeSho = ['image/cafe-01.jpg', 'image/cafe-02.jpg', 'image/cafe-03.jpg', 'image/cafe-04.jpg', 'image/cafe-05.jpg']
function coffeePlaces(){
    var y = Math.floor((Math.random() * coffeeSho.length));
    document.getElementById('imgCafes').src = coffeeSho[y];
}

















