canvas = new fabric.Canvas("myCanvas");
 block_width=30;
block_height=30;
player_x=10;
player_y=10;
player_object="";
block_object="";
function player_update(){
fabric.Image.fromURL("player.png", function(IMG){
player_object=IMG; 
player_object.scaleToWidth(149);
player_object.scaleToHeight(139);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(IMG){
    block_object=IMG; 
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    }
window.addEventListener("keydown", my_keyDown);
function my_keyDown(e){
var key=e.keyCode;
if(e.shiftKey==true && key=="80"){
console.log("shift and p are pressed together");
block_width= block_width+10;
block_height= block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;

}
if(e.shiftKey==true && key=="77"){
    console.log("shift and m are pressed together");
    block_width= block_width-10;
    block_height= block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    
    }
    if(key=="37"){
    console.log("you have pressed left arrow key (key value 37)");
    move_left();
    }

    if(key=="38"){
        console.log("you have pressed up arrow key (key value 38)");
        move_up();
        }

        if(key=="39"){
            console.log("you have pressed right arrow key (key value 39)");
            move_right();
            }

            if(key=="40"){
                console.log("you have pressed down arrow key (key value 40)");
                move_down();
                }

                if (key=="67"){
                console.log ("you have pressed c key (key value 67");
                new_image("cloud.jpg");
                }

                if (key=="68"){
                    console.log ("you have pressed D key (key value 68");
                    new_image("dark_green.png");
                    }

                    if (key=="87"){
                        console.log ("you have pressed W key (key value 87");
                        new_image("wall.jpg");
                    }

                    if (key=="71"){
                        console.log ("you have pressed G key (key value 71");
                        new_image("ground.png");
                        }

                        if (key=="76"){
                            console.log ("you have pressed L key (key value 76");
                            new_image("light_green.png");
                            }

                            if (key=="84"){
                                console.log ("you have pressed T key (key value 84");
                                new_image("trunk.jpg");
                            
                                }

                                if (key=="82"){
                                    console.log ("you have pressed R key (key value 82");
                                    new_image("roof.jpg");
                                    }

                                    if (key=="89"){
                                        console.log ("you have pressed Y key (key value 89");
                                        new_image("yellow_wall.png");
                                        }

                                        if (key=="85"){
                                            console.log ("you have pressed U key (key value 85");
                                            new_image("unique.png");
                                            }
                    
                    
}
function move_up(){
if(player_y >0){
    player_y=player_y-block_height;
    console.log("new coordinates are x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();

}
}
function move_down(){
if(player_y<599){
player_y=player_y+block_height;
console.log("new coordinates are x="+player_x+" y="+player_y);
canvas.remove(player_object);
player_update();
}
}
function move_left(){
    if(player_x>0){
    player_x=player_x-block_width;
    console.log("new coordinates are x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();

    }
}
function move_right(){
    if(player_x<799){
    player_x=player_x+block_width;
    console.log("new coordinates are x="+player_x+" y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}