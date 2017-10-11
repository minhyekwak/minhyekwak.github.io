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

var markov = new RiMarkov(3);
function coffeeEssays(){
 $('.coffeeEssay').text(markov.generateSentences(3).join(' '))
}
var coffeeEss = 'Coffee, a magic word with a magic power. It can be used as a great medicine to help patients, and it can be taken as a popular drink all over the world. People love coffee, need coffee and enjoy coffee. Caffeinated drinks are large consumed by people on regular basis. It has become an international popular drink for almost everybody. Coffee is so important to our daily lives that coffee has become as part of their culture in some countries. In fact, some people consider it as a critical part of their day, and even some people are taking it as a sign of fashion. However, the fact that everyone likes coffee does not means everyone is fit to drink coffee. Whether it is good coffee or bad depends on a person’s situation or condition. Many believe that moderate use of coffee is harmless to the human body, and it can even help us work faster with fewer errors. According to researcher Ruxton, Moderate drinking could dramatically reduce the risk of MI (myocardial infarction), mortality as well as plasma cholesterol. However, the coffee consumption by pregnant women does appear to increase the stillbirth rate, and decreases the fetal birth rate and fetal heart rate. Furthermore, increasing coffee consumption affects people’s mental development and behavior in both good and bad way. Finally, this article discusses both the benefits and risks of regular coffee consumption. Also, different population groups are considered, including older men and women, pregnant women and others. According to Linda Nolan, caffeine is a kind of chemical drug which shares the same pharmacological actions of therapeutic interest with theophylline and theobromine. These acts on kidneys relax the smooth muscles around them; stimulate cardiac muscles; and stimulate the central nervous system. According to researchers Etherton and Kochar (1993), the typical cup of coffee contains 85 to 100mg caffeine (175ml or 6oz) and 65 mg of caffeine in a cup of instant coffee. By comparison, there is 40 mg of caffeine in a 12oz cup of tea, and 45 mg caffeine in the same size of soft drink. However, the effects of caffeine on individuals depends on how much coffee they consume, and how of and how long are they consume it. According to CBC news post on October 14th 2008(our growing appetite for a boost), 80 percent of us include coffee as part of our daily ritual, and also, every person, including man, woman and child, will consume 70 milligrams of caffeine every day, which means a 200ml cup of coffee. Even though coffee is a basic drink in our lives, a cup of is coffee not good for everyone. Linda Nolan observes that caffeine is a powerful central nervous system stimulant, and caffeine can over-excited all portions of the cortex. Wilson (as cited in Nolan, 2001) study proved that after taking caffeine, people appear more intelligent and more easily come up with perfect ideas. In addition, Wilson (as cited in Nolan, 2001) found that people after taking caffeine had increased their motor activity; they can work faster with less time and fewer errors.'
markov.loadText(coffeeEss)


