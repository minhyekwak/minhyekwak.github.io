function preload() {
    songA = loadSound('songs/awholenewworld.mp3');
    songB = loadSound('songs/beourguest.mp3');
    songC = loadSound('songs/circleoflife.mp3');
    songD = loadSound('songs/doyouwanttobuildasnowman.mp3');
    songE = loadSound('songs/everythingishoney.mp3');
    songF = loadSound('songs/friendlikeme.mp3');
    songG = loadSound('songs/gaston.mp3');
    songH = loadSound('songs/howfarillgo.mp3');
    songI = loadSound('songs/iseethelight.mp3');
    songJ = loadSound('songs/justaroundtheriverbend.mp3');
    songK = loadSound('songs/kissthegirl.mp3');
    songL = loadSound('songs/letitgo.mp3');
    songM = loadSound('songs/motherknowsbest.mp3');
    songN = loadSound('songs/no.mp3');
    songO = loadSound('songs/onceuponadream.mp3');
    songP = loadSound('songs/partofyourworld.mp3');
    songR = loadSound('songs/reflection.mp3');
    songS = loadSound('songs/somewhereoutthere.mp3');
    songT = loadSound('songs/thesecondstartotheright.mp3');
    songU = loadSound('songs/underthesea.mp3');
    songW = loadSound('songs/whenyouwishuponastar.mp3');
    songY = loadSound('songs/youcanfly.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    console.log(key);
    if(key === 'A') {
        songA.loop();
        $("#gif").css({"background": "url('images/a.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing A");
    } 
    
    if( key !== 'A') {
        songA.stop();
        console.log("stop A");
    }
    
    if(key === 'B') {
        songB.loop();
        $("#gif").css({"background": "url('images/b.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing B");
    }
    
    if( key !== 'B') {
        songB.stop();
        console.log("stop B");
    }
    
    if(key === 'C') {
        songC.loop();
        $("#gif").css({"background": "url('images/c.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing C");
    }
    
    if( key !== 'C') {
        songC.stop();
        console.log("stop C");
    }
    
    if(key === 'D') {
        songD.loop();
        $("#gif").css({"background": "url('images/d.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing D");
    }
    
    if( key !== 'D') {
        songD.stop();
        console.log("stop D");
    }
    
    if(key === 'E') {
        songE.loop();
        $("#gif").css({"background": "url('images/e.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing E");
    }
    
    if( key !== 'E') {
        songE.stop();
        console.log("stop E");
    }
    
    if(key === 'F') {
        songF.loop();
        $("#gif").css({"background": "url('images/f.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing F");
    }
    
    if( key !== 'F') {
        songF.stop();
        console.log("stop F");
    }
    
    if(key === 'G') {
        songG.loop();
        $("#gif").css({"background": "url('images/g.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing G");
    }
    
    if( key !== 'G') {
        songG.stop();
        console.log("stop G");
    }
    
    if(key === 'H') {
        songH.loop();
        $("#gif").css({"background": "url('images/h.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing H");
    }
    
    if( key !== 'H') {
        songH.stop();
        console.log("stop H");
    }
    
    if(key === 'I') {
        songI.loop();
        $("#gif").css({"background": "url('images/i.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing I");
    }
    
    if( key !== 'I') {
        songI.stop();
        console.log("stop I");
    }
    
    if(key === 'J') {
        songJ.loop();
        $("#gif").css({"background": "url('images/j.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing J");
    }
    
    if( key !== 'J') {
        songJ.stop();
        console.log("stop J");
    }
    
    if(key === 'K') {
        songK.loop();
        $("#gif").css({"background": "url('images/k.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing K");
    }
    
    if( key !== 'K') {
        songK.stop();
        console.log("stop K");
    }
    
    if(key === 'L') {
        songL.loop();
        $("#gif").css({"background": "url('images/l.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing L");
    }
    
    if( key !== 'L') {
        songL.stop();
        console.log("stop L");
    }
    
    if(key === 'M') {
        songM.loop();
        $("#gif").css({"background": "url('images/m.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing M");
    }
    
    if( key !== 'M') {
        songM.stop();
        console.log("stop M");
    }
    
    if(key === 'N') {
        songN.play();
        $("#gif").css({"background": "url('images/n.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing N");
    }
    
    if(key === 'O') {
        songO.loop();
        $("#gif").css({"background": "url('images/o.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing O");
    }
    
    if( key !== 'O') {
        songO.stop();
        console.log("stop O");
    }
    
    if(key === 'P') {
        songP.loop();
        $("#gif").css({"background": "url('images/p.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing P");
    }
    
    if( key !== 'P') {
        songP.stop();
        console.log("stop P");
    }
    
    if(key === 'Q') {
        songN.play();
        $("#gif").css({"background": "url('images/q.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing Q");
    }
    
    if(key === 'R') {
        songR.loop();
        $("#gif").css({"background": "url('images/r.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing R");
    }
    
    if( key !== 'R') {
        songR.stop();
        console.log("stop R");
    }
    
    if(key === 'S') {
        songS.loop();
        $("#gif").css({"background": "url('images/s.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing S");
    }
    
    if( key !== 'S') {
        songS.stop();
        console.log("stop S");
    }
    
    if(key === 'T') {
        songT.loop();
        $("#gif").css({"background": "url('images/t.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing T");
    }
    
    if( key !== 'T') {
        songT.stop();
        console.log("stop T");
    }
    
    if(key === 'U') {
        songU.loop();
        $("#gif").css({"background": "url('images/u.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing U");
    }
    
    if( key !== 'U') {
        songU.stop();
        console.log("stop U");
    }
    
    if(key === 'V') {
        songN.play();
        $("#gif").css({"background": "url('images/v.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing V");
    }
    
    if(key === 'W') {
        songW.loop();
        $("#gif").css({"background": "url('images/w.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing W");
    }
    
    if( key !== 'W') {
        songW.stop();
        console.log("stop W");
    }
    
    if(key === 'X') {
        songN.play();
        $("#gif").css({"background": "url('images/x.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing X");
    }
    
    if(key === 'Y') {
        songY.loop();
        $("#gif").css({"background": "url('images/y.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing Y");
    }
    
    if( key !== 'Y') {
        songY.stop();
        console.log("stop Y");
    }
    
    if(key === 'Z') {
        songN.play();
        $("#gif").css({"background": "url('images/z.gif') no-repeat center center fixed", "background-size": "cover"});
        console.log("playing Z");
    }

}

