function preload() {
    drumA = loadSound('sounds/bass1.mp3');
    drumS = loadSound('sounds/bass2.mp3');
    drumD = loadSound('sounds/crash1.mp3');
    drumF = loadSound('sounds/crash2.mp3');
    drumG = loadSound('sounds/hihat1.mp3');
    drumH = loadSound('sounds/hihat2.mp3');
    drumJ = loadSound('sounds/ride.mp3');
    drumK = loadSound('sounds/snare1.mp3');
    drumL = loadSound('sounds/snare2.mp3');
    drumM = loadSound('sounds/tenor.mp3');
    
//    drums = {};
//    drums['A'] = {
//        drumFile: 'sounds/bass1.mp3',
//        drumImage: 'images/bass1.gif'
//    }
//    drums['S'] = 'sounds/bass2.mp3';
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    console.log(key);
//    drum = loadSound(drums[key];
//    drum.play;        
    if(key === 'A') {
        drumA.play();
        $("#gif").css({"background": "url('images/bass1.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing A");
    } 
    
    if( key !== 'A') {
        drumA.stop();
        console.log("stop A");
    }
    
    if(key === 'S') {
        drumS.play();
        $("#gif").css({"background": "url('images/bass2.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing S");
    }
    
    if( key !== 'S') {
        drumS.stop();
        console.log("stop S");
    }
    
    if(key === 'D') {
        drumD.play();
        $("#gif").css({"background": "url('images/crash1.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing D");
    }
    
    if( key !== 'D') {
        drumD.stop();
        console.log("stop D");
    }
    
    if(key === 'F') {
        drumF.play();
        $("#gif").css({"background": "url('images/crash2.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing F");
    }
    
    if( key !== 'F') {
        drumF.stop();
        console.log("stop F");
    }
    
    if(key === 'G') {
        drumG.play();
        $("#gif").css({"background": "url('images/highhat1.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing G");
    }
    
    if( key !== 'G') {
        drumG.stop();
        console.log("stop G");
    }
    
    if(key === 'H') {
        drumH.play();
        $("#gif").css({"background": "url('images/highhat2.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing H");
    }
    
    if( key !== 'H') {
        drumH.stop();
        console.log("stop H");
    }
    
    if(key === 'J') {
        drumJ.play();
        $("#gif").css({"background": "url('images/ride.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing J");
    }
    
    if( key !== 'J') {
        drumJ.stop();
        console.log("stop J");
    }
    
    if(key === 'K') {
        drumK.play();
        $("#gif").css({"background": "url('images/snare1.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing K");
    }
    
    if( key !== 'K') {
        drumK.stop();
        console.log("stop K");
    }
    
    if(key === 'L') {
        drumL.play();
        $("#gif").css({"background": "url('images/snare2.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing L");
    }
    
    if( key !== 'L') {
        drumL.stop();
        console.log("stop L");
    }
    
    if(key === 'M') {
        drumM.play();
        $("#gif").css({"background": "url('images/tenor.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing M");
    }
    
    if( key !== 'M') {
        drumM.stop();
        console.log("stop M");
    }
    
}

