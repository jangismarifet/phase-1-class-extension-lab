class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.sides.length; i++) {
            perimeter += this.sides[i];
        }
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        if (side1+side2 > side3 && side1+side3 > side2 && side2+side3 > side1) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i] === this.perimeter/4) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[0];
        }
    }
}