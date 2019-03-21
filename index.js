// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }
    get getCount() {
        return this.array.length
    }

    get perimeter() {
        let total = 0
        this.array.forEach(side => {
            total += side
        })
        return total
    }
}

// triangle = [a,b,c] if a+b > c, a+c > b, b+c > a
class Triangle extends Polygon {

    // constructor(array) {
    //     this.array = array
    // }
    get isValid() {
        let side = this.array
        const trueFalse = side[0] + side[1] > side[2] && side[1] + side[2] > side[0] && side[0] + side[2] > side[1];
        return trueFalse
    }
}

class Square extends Polygon {
    get isValid() {
        const trueFalse = this.array.every(side => side === this.array[0])
        return trueFalse
    }

    get area() {
        return this.array[0] ** 2
    }
}