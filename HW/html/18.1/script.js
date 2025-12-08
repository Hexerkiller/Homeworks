class Shape{
    draw(){
        console.log('draw a shape');
        
    }
}
class Rectangle extends Shape {
    draw(){
        console.log('draw a rectangle');
        
    }
}

class Circle extends Shape {
    draw(){
        console.log('draw a circle');
        
    }
}
const shapes = [new Rectangle,new Circle,new Rectangle,new Circle]
for( const shape of shapes){
    shape.draw()
}