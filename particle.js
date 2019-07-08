function Particle(){
    this.position = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.maxspeed = 2;
    this.prevPos = this.position.copy();

      
    this.update = function(){

        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.acceleration.mult(0);

    }

    this.follow = function(vectors){

        let x = floor(this.position.x/scl);
        let y = floor(this.position.y/scl);
        let index = x + y*cols;
        let force = vectors[index];
        this.applyForce(force);


    }

    this.applyForce = function(force){
        this.acceleration.add(force)
    }
    this.show = function(){
        stroke(255,10);
        strokeWeight(1);
        //point(this.position.x,this.position.y);
        line(this.position.x,this.position.y,this.prevPos.x,this.prevPos.y);
        this.updatePrev();
    }

    this.updatePrev = function(){
        this.prevPos.x = this.position.x;
        this.prevPos.y = this.position.y;

    }

    this.edge = function(){
        if(this.position.x>width){ 
            this.position.x = 0;
            this.updatePrev();
        }
        if(this.position.x<0){
            this.position.x = width;
            this.updatePrev();
        }
        if(this.position.y>height){ 
            this.position.y = 0;
            this.updatePrev();
        }
        if(this.position.y<0){ 
            this.position.y = height;
            this.updatePrev();
        }
    }



}