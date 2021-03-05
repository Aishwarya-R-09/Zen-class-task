var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function () {
        this.radius = 10;
        console.log(this.radius);
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function () {
        this.color = "green";
        console.log(this.color);
    };
    Circle.prototype.getArea = function () {
        this.area = Math.PI * this.radius * this.radius;
        console.log(this.area);
    };
    Circle.prototype.getCircumference = function () {
        this.circumference = 2 * Math.PI * this.radius;
        console.log(this.circumference);
    };
    return Circle;
}());
var c = new Circle(1.0, "Red");
var radiuss = c.getRadius();
console.log(radiuss);
c.setRadius();
var color = c.getColor();
console.log(color);
c.setColor();
c.getArea();
c.getCircumference();
