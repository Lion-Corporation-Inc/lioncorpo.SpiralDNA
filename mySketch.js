let w, h, num;
let dots = [];
let bg = 40;

function setup() {
	w = windowWidth;
	h = windowHeight;
	num = windowWidth/1.5;
	createCanvas(windowWidth, windowHeight);
	buildDots();
	background(20);
}


function buildDots(){
	for(let i = 0; i < num; i++) {
		const d = new Dot();
		d.init();
		dots.push(d);
	}
}

function draw() {
	background(bg, 0, bg);
	dots.map((dot)=>{
		dot.update();
	})
}

class Dot{
	constructor(){
		this.position = createVector();
		this.velocity = createVector()
		this.speed = 0.25 + Math.random()*.25;
		this.amplitude = Math.random() *h/4;
		this.angle = 0;
		this.defaultY = h/3;// + (Math.random()*300 - 150);
		this.offset = 0;//Math.random()*100;
		this.R = 255;
		this.G = Math.round(Math.random()*255);
		this.B = Math.round(Math.random()*255);
		this.alpha = 0.1 + Math.random() * .6;
		this.radius = 20 * this.alpha;
		this.color = `rgba(${this.R}, ${this.G}, ${this.B}, ${this.alpha})`;
		this.strWeight = Math.ceil(this.radius/4);
		this.reflection = Math.random() > .5 ? true : false;
	}
	
	init(){
		const xpos = Math.random() * w;
		const ypos = h/2;
		this.position.set(xpos, ypos);
	}
	
	update(){
		this.updatePostition();
		this.show();
	}
	
	connect(ds){
		ds.map((d)=>{
			//if(d.position
		})
	}
	
	updatePostition(){
		let xpos = this.position.x + this.speed;
		if(xpos > w + this.radius + this.strWeight) {
			xpos = w - xpos;
		}
		let ypos = this.reflection ? (Math.sin((xpos + this.offset)/w/.1) * this.amplitude) + this.defaultY : (Math.sin(((xpos + this.offset)/w/.1) + (Math.PI*.75)) * this.amplitude*.5) + this.defaultY;
		//if(this.reflection) ypos *= -1;
		this.position.set(xpos, ypos);
		this.offset += .5;
	}
	
	show() {
		stroke(`rgba(${this.R}, ${this.G}, ${this.B}, 1)`);
		strokeWeight(this.strWeight);
		fill(this.color);
		circle(this.position.x, this.position.y, this.radius);
	}
	
	updateAngle() {
		
	}
}