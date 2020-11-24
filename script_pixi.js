 const w=500;
        const h=window.innerHeight;
        const app = new PIXI.Application({
            width: w,
            height: window.innerHeight,
            
            backgroundColor:0x507080
        });
        document.body.appendChild(app.view);
        
        //===================copyKat header====================
        const copyKatHeader = new PIXI.Container();
        app.stage.addChild(copyKatHeader);
       
        const style = new PIXI.TextStyle({ 
            align : 'center',
            fill : '0xd0f6e4',
            fontSize: 36
            });
        const header = new PIXI.Text('CopyKat', style);
        header.x = 175;
        header.y = 10;
        
        
        const mask = new PIXI.Graphics().beginFill(0x00203F).drawRect(0,0, w, 70).endFill();
        copyKatHeader.addChild(mask);
        copyKatHeader.addChild(header);
        

    //================ScoreBoard ==================================
    scoreBoard= new PIXI.Container();
    app.stage.addChild(scoreBoard);
    const mask2 = new PIXI.Graphics().beginFill(0x265380).drawRect(0,70, w, 70).endFill();
    const style1 = new PIXI.TextStyle({ 
            align : 'left',
            fill : '0xd0f6e4',
            fontSize: 29
            });
    
        const roundNo = new PIXI.Text('Round: 1/3', style1);
        roundNo.x = 20;
        roundNo.y = 85; 
        
        const scoretext = new PIXI.Text('Score: 1', style1);
        scoretext.x = w-125;
        scoretext.y = 85;
    scoreBoard.addChild(mask2);
    scoreBoard.addChild(roundNo);
    scoreBoard.addChild(scoretext);

//========================Watch Text =====================================

        watch = new PIXI.Container();
        app.stage.addChild(watch);
        const watchText = new PIXI.Text('Watch',style);
        watchText.anchor.set(0.5);
        watchText.x=w/2;
        watchText.y=200;
        watch.addChild(watchText);
        watch.visible=false;
        


//=======================Tiles =======================================
 tileBoard= new PIXI.Container();
app.stage.addChild(tileBoard);


 pinkTile= animations("pink", 155, 355);
 yellowTile= animations("yellow", w-155, 355);
 greenTile= animations("green", 155, h-130);
 blueTile= animations("blue", w-155, h-130);
 

pinkTile.on('pointerdown', ()=>{input(0)});
yellowTile.on('pointerdown', ()=>{input(1)});
greenTile.on('pointerdown', ()=>{input(2)});
blueTile.on('pointerdown', ()=>{input(3)});
 
correctPink=correctAnimation(155,355);
correctYellow=correctAnimation(w-155,355);
correctGreen=correctAnimation(155,h-130);
correctBlue=correctAnimation(w-155,h-130);

tileBoard.addChild(pinkTile);
tileBoard.addChild(yellowTile);
tileBoard.addChild(greenTile);
tileBoard.addChild(blueTile);
tileBoard.addChild(correctPink);
tileBoard.addChild(correctYellow);
tileBoard.addChild(correctGreen);
tileBoard.addChild(correctBlue);


//========================Incorrect Text =====================================
incorrect= new PIXI.Container();
    app.stage.addChild(incorrect);
    const mask4 = new PIXI.Graphics().beginFill(0x265380).drawRect(0,140, w, h).endFill();
    mask4.alpha=0.5;
    const errorMsg = new PIXI.Text('Incorrect! Watch the Pattern carefully and try again',style);
        errorMsg.anchor.set(0.5);
        errorMsg.x=w/2;
        errorMsg.y=340;
        incorrect.addChild(new PIXI.Graphics().beginFill(0x265380).drawRect(0,270, w, 140).endFill());
        incorrect.addChild(mask4);
        incorrect.addChild(errorMsg);
        incorrect.visible=false;

//========================Game Over =====================================
    gameOver= new PIXI.Container();
    app.stage.addChild(gameOver);
    const mask5 = new PIXI.Graphics().beginFill(0x265380).drawRect(0,140, w, h).endFill();
    mask5.alpha=0.5;
    const gameOverMsg = new PIXI.Text('Game Over',style);
        gameOverMsg.anchor.set(0.5);
        gameOverMsg.x=w/2;
        gameOverMsg.y=340;
        gameOver.addChild(new PIXI.Graphics().beginFill(0x265380).drawRect(0,270, w, 140).endFill());
        gameOver.addChild(mask5);
        gameOver.addChild(gameOverMsg);
        gameOver.visible=false;
    
//========================scoreCard =====================================
    scoreCard= new PIXI.Container();
    app.stage.addChild(scoreCard);
    scoreCard.visible=false;
    
    //=================Animation=======================================
       
        const backAnimation=overAnimation();
        backAnimation.play();

        const starTexture=new PIXI.Texture.from('./images/star.png');
        const star = new PIXI.Sprite(starTexture);
        star.scale.x=1.1;
        star.scale.y=1.1;
        star.anchor.set(0.5);
        star.position.x=w/2+3;
        star.position.y=180;

        const highScore = new PIXI.Text("0",{
            fill : '0xffffff',
            fontSize: 35
        });
        highScore.anchor.set(0.5);
        highScore.position.x=w/2;
        highScore.position.y=185;

        scoreCard.addChild(backAnimation);  // 0
        scoreCard.addChild(star);           //1
        scoreCard.addChild(highScore);      //2

    //==================Header===========================
    const scoreCardHead = new PIXI.Text('Scorecard',style);
        scoreCardHead.anchor.set(0.5);
        scoreCardHead.x=w/2;
        scoreCardHead.y=335;
        scoreCard.addChild(new PIXI.Graphics().beginFill(0x265380).drawRect(0,300, w, 70).endFill());   //3
        scoreCard.addChild(scoreCardHead);          //4
    //==============round 1=========================== ====
    const style4 = new PIXI.TextStyle({ 
            align : 'left',
            fill : '0xffffff',
            fontSize: 25
            });
        const round1 = new PIXI.Text('Round 1',style4);
        const score1 = new PIXI.Text(" ",style4);
        round1.anchor.set(0.5);
        round1.x=w/4;
        round1.y=420;
        score1.anchor.set(0.5);
        score1.x=w-w/5;
        score1.y=420;
        scoreCard.addChild(new PIXI.Graphics().beginFill(0x234796).drawRect(w/16,390, w-w/8, 60).endFill());    //5
        scoreCard.addChild(round1);     //6
        scoreCard.addChild(score1);     //7
    
    //==============round 2===============================
        const round2 = new PIXI.Text('Round 2',style4);
        const score2 = new PIXI.Text(" ",style4);
        round2.anchor.set(0.5);
        round2.x=w/4;
        round2.y=490;
        score2.anchor.set(0.5);
        score2.x=w-w/5;
        score2.y=490;
        //scoreCard.addChild(new PIXI.Graphics().beginFill(0x234796).drawRect(w/16,460, w-w/8, 60).endFill());
        scoreCard.addChild(round2);     //8
        scoreCard.addChild(score2);     //9
    
    //==============round 3===============================
        const round3 = new PIXI.Text('Round 3',style4);
        const score3 = new PIXI.Text(" ",style4);
        round3.anchor.set(0.5);
        round3.x=w/4;
        round3.y=560;
        score3.anchor.set(0.5);
        score3.x=w-w/5;
        score3.y=560;
       // scoreCard.addChild(new PIXI.Graphics().beginFill(0x234796).drawRect(w/16,530, w-w/8, 60).endFill());
        scoreCard.addChild(round3);     //10
        scoreCard.addChild(score3);     //11
    
    //===============continue ============================
    const continueTexture = PIXI.Texture.from('./images/continue.png');
    const continueButton = new PIXI.Sprite(continueTexture);
            continueButton.anchor.set(0.5);
            continueButton.x=w/2;
            continueButton.y=h-50;
            continueButton.interactive=true;
            continueButton.buttonMode=true;
    
    scoreCard.addChild(continueButton);     //12



//==================================Start Game===================================
        
 
     var task=[];
    var finalScore=[];
    var current=0;
    var tileArray=[pinkTile,yellowTile,greenTile,blueTile];
    var correctArray=[correctPink,correctYellow,correctGreen,correctBlue];
    var round=1;
    var score=0;
    task.push(Math.floor(Math.random() * 4));
    //await new Promise(resolve => setTimeout(resolve, 1000));
    showPattern();
       



async function gameOver(){
    gameOver.visible=true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    gameOver.visible=false;
    tileBoard.visible=false;
    scoreBoard.visible=false;
    scoreCard.visible=true;
    scoreCard.getChildAt(7).text=finalScore[0];
    scoreCard.getChildAt(9).text=finalScore[1];
    scoreCard.getChildAt(11).text=finalScore[2];
    let winner=maximum(finalScore[0],finalScore[1],finalScore[2]);
    scoreCard.getChildAt(2).text=finalScore[winner];
}

async function input(i){
    if(i!=task[current]){
        disableTiles();
       warn();
      await new Promise(resolve => setTimeout(resolve, 3500));
      enableTiles();
      current=0;
      if(round<4){
          finalScore.push(score);
          round+=1;
          score=0;            
      }

      if(round>3){
          gameOver();
      }else{
        scoreBoard.getChildAt(2).text="Score: " + score;
        scoreBoard.getChildAt(1).text="Round: " + round+ "/3";
        showPattern();
      }
    }else{
        if(current==task.length-1){
            correctArray[i].visible=true;
            correctArray[i].gotoAndPlay(0);
            score+=1;
            scoreBoard.getChildAt(2).text="Score: " + score;
            task.push(Math.floor(Math.random() * 4));
            current=0;
            disableTiles
            await new Promise(resolve => setTimeout(resolve, 1000));
            enableTiles
            showPattern();
        }else{
            tileArray[i].gotoAndPlay(0)
            current+=1;
        }
    }
}


async function showPattern(){
        disableTiles();
        watch.visible=true;
        console.log(task);
        for(let i=0; i<task.length; i++){
           
            tileArray[task[i]].gotoAndPlay(0);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        enableTiles();
        watch.visible=false;
}






function enableTiles(){
    pinkTile.interactive=true;
    yellowTile.interactive=true;
    greenTile.interactive=true;
    blueTile.interactive=true; 
}

function disableTiles(){
    pinkTile.interactive=false;
    yellowTile.interactive=false;
    greenTile.interactive=false;
    blueTile.interactive=false;    
}

async function warn(){
    incorrect.visible=true;
    await new Promise(resolve => setTimeout(resolve, 3000));
       incorrect.visible=false;

    
}

function correctAnimation(x,y){
    let textureArray = [];
        textureArray.push( PIXI.Texture.from("./images/correct1.png"));
        textureArray.push( PIXI.Texture.from("./images/correct2.png"));
        textureArray.push( PIXI.Texture.from("./images/correct3.png"));
        textureArray.push( PIXI.Texture.from("./images/correct3.png"));
        textureArray.push( PIXI.Texture.from("./images/correct2.png"));
        textureArray.push( PIXI.Texture.from("./images/correct1.png"));

    let temp=new PIXI.AnimatedSprite(textureArray);
    temp.anchor.x=0.5;
    temp.anchor.y=0.5;
    temp.scale.x=0.92;
    temp.scale.y=0.92;
    temp.position.x=x;
    temp.position.y=y;
    temp.animationSpeed = 0.2; 
    temp.loop=false;
    temp.visible=false;
    temp.onComplete=()=>{
       temp.visible=false;
    };
    return temp;
}

function overAnimation(){
    let textureArray = [];
        textureArray.push( PIXI.Texture.from("./images/1.png"));
         textureArray.push( PIXI.Texture.from("./images/2.png"));
         textureArray.push( PIXI.Texture.from("./images/3.png"));
        textureArray.push( PIXI.Texture.from("./images/4.png"));
        

    let temp=new PIXI.AnimatedSprite(textureArray);
    temp.anchor.x=0.5;
    temp.anchor.y=0.5;
    temp.position.x=w/2;
    temp.position.y=185;
    temp.animationSpeed = 0.2;
    temp.scale.y=0.78; 
    temp.scale.x=0.78;
    temp.loop=true;
    return temp;
}

function animations(color, x, y){
    let textureArray = [];
    //textureArray.push(PIXI.Texture.from("/images/"+color+".png"));
    for (let i=1; i < 5; i++)
    {  // console.log(color+""+i+".png");
        let texture = PIXI.Texture.from("./images/"+color+""+i+".png");
        textureArray.push(texture);
    };
    for (let i=3; i >0; i--)
    {  // console.log(color+""+i+".png");
        let texture = PIXI.Texture.from("./images/"+color+""+i+".png");
        textureArray.push(texture);
    };
    //textureArray.push(PIXI.Texture.from("/images/"+color+".png"));
    let temp=new PIXI.AnimatedSprite(textureArray);
    temp.anchor.x=0.5;
    temp.anchor.y=0.5;
    temp.position.x=x;
    temp.position.y=y;
    temp.interactive=true;
    temp.buttonMode=true;
    temp.animationSpeed = 0.2; 
    temp.loop=false;
    return temp;
}

function maximum(a,b,c){
    if(a>b){
        if(a>c){
            return 0;
        }else{
            return 2;
        }
    }else{
        if(b>c)
        return 1;
        else 
        return 2;
    }
}






