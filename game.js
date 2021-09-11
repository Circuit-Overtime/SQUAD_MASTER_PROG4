class Game 
{
    constructor(){
        this.kingtxt = createElement('h1');
        this.murderer = createButton('Murderer');
        this.thief = createButton('Thief');
        this.kingtxtThief = createElement('h1');
        this.kingtxtMur = createElement('h1');
        this.kingtxt = createElement('h1');


    }
getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value" , function(data) {
            gameState = data.val();
    })
}
     updateState(state)
     {
         database.ref('/').update({
                 gameState: state
         });
     }
     async start()
     {
         if(gameState === 0){
             player = new Contestant();
             var contestantCountRef = await database.ref('playerCount').once("value");
             if(contestantCountRef.exists()){
                 playerCount = contestantCountRef.val();
                 player.getCount();
             }
             form = new Form();
             form.display();
         }
         p1= createSprite(100,200);
         p2 = createSprite(200,200);
         p3 = createSprite(300,200);
         p4 = createSprite(400,200);
        parray = [p1, p2, p3, p4];

        }
         play()
         {
             form.hide();
             Contestant.getPlayerInfo();
             
             if(allPlayers !== undefined)
             {
                 var x = 0;
                 var y = 0;
                var index = 0;
                 background(back_img);
                 form.reset.hide();
                 for(var plr in allPlayers)
                 {
                     index = index + 1;
                      x = x + 200;
                      y = displayHeight - allPlayers[plr].y;
                     parray[index-1].x = x;
                     parray[index-1].y = y;

                     if(index === player.index && player.index === 1)
                     {
                        background(back_img_Pol);

                        form.lobby.hide();
                        form.greeting.hide();
                       

                        
                         
                           
                        
                     }
                    if(index === player.index && player.index === 2)
                     {
                        background(back_img_Mur);
                        form.lobby.hide();
                        form.greeting.hide();
                     }
                    if(index === player.index && player.index === 3)
                     {
                        background(back_img_King);
                        form.lobby.hide();
                        form.greeting.hide();
                        
                        this.murderer.style('height', '100px');
                        this.murderer.style('width', '170px');
                        this.murderer.style('background', 'transparent')
                        this.murderer.style('border', '4px solid purple')
                        this.murderer.style('color', 'purple')
                        this.murderer.style('font-size', '27px')
                        this.murderer.style('border-radius', '15px')
                        this.murderer.style('cursor', 'pointer')
                        this.murderer.style('box-shadow', '0 10px 40px purple');
                        this.murderer.position(displayWidth/2-150, displayHeight/2 + 40);
                        this.murderer.style('backdrop-filter', '3px');

                        this.thief.style('height', '100px');
                        this.thief.style('width', '150px');
                        this.thief.style('background', 'transparent')
                        this.thief.style('border', '4px solid purple')
                        this.thief.style('color', 'purple')
                        this.thief.style('font-size', '32px')
                        this.thief.style('border-radius', '15px')
                        this.thief.style('cursor', 'pointer')
                        this.thief.style('box-shadow', '0 10px 40px purple');
                        this.thief.position(displayWidth/2+150, displayHeight/2 + 40);
                        this.thief.style('backdrop-filter', '3px');

                        this.kingtxt.html("Choose Whom To Catch Thief or Murderer");
                        this.kingtxt.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.kingtxt.style('color', 'cyan');
                        this.kingtxt.style('font-size', '3em');
                        this.kingtxt.style('text-shadow', '0 20px 40px purple');

                        this.kingtxtThief.html("");
                        this.kingtxtThief.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.kingtxtThief.style('color', 'lime');
                        this.kingtxtThief.style('font-size', '3em');
                        this.kingtxtThief.style('text-shadow', '0 20px 40px green');
                        this.kingtxtThief.style('display', 'block');

                        this.thief.mousePressed(()=>
                        {
                            this.murderer.hide();
                            this.thief.hide();
                            this.kingtxt.hide();
                            this.kingtxtThief.style('display', 'block');
                            this.kingtxtThief.html("You Have Chosen to Catch the Thief! Order has been Sent to Police!")



                        });
                     }
                     if(index === player.index && player.index === 4)
                     {
                        background(back_img_Rob);
                        form.lobby.hide();
                        form.greeting.hide();
                     }

                    

                 }

             }
             drawSprites();
         }
         
     }

    


