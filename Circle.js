class Circle {
    constructor(radius,color) {
        this.setRadius(radius);
        this.setColor(color);
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        newRadius = newRadius;
        this.radius = newRadius;
    }
    getColor() {
        return this.color;
    }
    setColor(newColor) {
        newColor = newColor.trim();
        this.color = newColor;
    }
   
    // Circle(){
    //     return `
    //     radious: ${this.radius}
    //     color: ${this.radius}
    //     `
    // }
    // Circle(radius){
    //     this.radius=radius
    //     return `
    //     radious: ${this.radius}
    //     color: ${this.radius}
    //     `
    // }
    Circle(radius,color){
        this.radius=radius
        this.color=color
        return `
        radious: ${this.radius}
        color: ${this.radius}
        `
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    getArea(){
		return Math.PI*Math.pow(this.radius, 2)
	}
	getCircumference(){
		return 2*Math.PI*this.radius
	}
}

let circle1 = new Circle(1.0,"red");
console.log(circle1); // Jane Doe

circle1.setColor('blue');
console.log(circle1.getColor()); 
console.log(circle1.Circle(2.4,'green'));
console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference());


// output:
// Circle { radius: 1, color: 'red' }
// blue

//         radious: 2.4
//         color: 2.4

// Circle[radius=2.4,color=green]
// 18.09557368467721
// 15.079644737231007