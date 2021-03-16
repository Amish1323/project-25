class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height  = height;

        this.image = loadImage("images/dustbin.jpg");

        World.add(world,this.body);
         
    }

    display(){
        rectMode(CENTER);

        fill(255);

        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        image(this.image, 610, 620, this.width, this.height);
    }
    }


