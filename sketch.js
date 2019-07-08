let increment = 0.1;
let scl = 20;
let cols, rows;
let p;
let zoff = 0;
let particle = [];
let flowfield;

function setup() {
    createCanvas(innerWidth, 400);
    background(0);
    //pixelDensity(1);
    cols = width/scl;
    rows = height/scl;
    p = createP("")

    flowfield = new Array(cols*rows);

    for(let i=0;i<1000;i++){
    particle[i] = new Particle();
    }
}
function draw() {
    //loadPixels();
    //background(255);
    let yoff = 0;
    for(let y=0;y<rows;y++){
        let xoff = 0;
        for(let x=0;x<cols;x++){

            let index = (x + y*cols);
            let r = noise(xoff,yoff,zoff)*TWO_PI;

            
            // pixels[index+0] = r;
            // pixels[index+1] = r;
            // pixels[index+2] = r;
            // pixels[index+3] = 255;
            let v = p5.Vector.fromAngle(r);
            v.setMag(1);
            flowfield[index] = v;
            // fill(r);
            // rect(x*scl,y*scl,scl,scl);
            xoff += increment;
            stroke(0,50);
            
            // push();
            // translate(x*scl,y*scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0,0,scl,0);
            // pop();
            
        }
        yoff += increment;
        
        
    }
    //updatePixels();
    zoff += 0.004;

    for(let i=0;i<particle.length;i++){
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edge();
    particle[i].show();
    
    }
    
    p.html(floor(frameRate()))
}