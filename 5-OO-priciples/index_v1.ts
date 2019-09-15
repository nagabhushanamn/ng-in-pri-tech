
// -----------------------------------------
// wheel
// -----------------------------------------

interface Wheel {
    rotate: () => void
}

class MRFWheel implements Wheel {
    constructor() { console.log("MRF wheel instantiated..."); }
    rotate() {
        console.log("MRF-wheel rotating...");
    }
}


class CEATWheel implements Wheel {
    constructor() { console.log("CEAT wheel instantiated..."); }
    rotate() {
        console.log("CEAT-wheel rotating...");
    }
}


// -----------------------------------------
// car
// -----------------------------------------

/*

    design & performance issues
    -----------------------------

    => tight-coupling b/w dependent & dependency..
        -> can't extend with new features easily..
    => too many duplicate dependency instances created & destroyed..
        -> slow, resource use high..
    => unit-testing not possible
        -> dev/bug fix slow


    why these issues ?

    => dependent itself creating its own dependency..

    soln:

    => don't create , do lookup on factory..

    limitation on factory-lookup:

    => factory location tight coupling..

    best soln:

    => don't create/lookup , get/inject-by 'some-one' ( INVERSION OF CONTROL ==> IOC  )

    HOW TO IMPLEMENT IOC?

    many ways :

    -> dependency injection ( DI )
        - constructor
        - method
    -> AOP

    ---------------------------------------------
    OO concepts
    ---------------------------------------------

    -> Abstraction
    -> Encapsulation
    -> Inheritance
    -> Polymorphism

    ---------------------------------------------
    OO principles
    ---------------------------------------------

    -> Single-Responsibility
    -> Open-Closed
    -> Liskov, substi..
    -> Interface segregation
    -> Dependency Inversion

    ---------------------------------------------
    OO pattern(s)
    ---------------------------------------------

    






*/

class NewCar {
    
    // private wheel;
    // constructor(wheel: Wheel) {
    //     this.wheel = wheel;
    //     console.log("car instantiated...");
    // }
    // -or-
    constructor(private wheel:Wheel){}

    move() {
        // let wheel = new MRFWheel();
        this.wheel.rotate();
        console.log("car moving...");
    }
}



// -----------------------------------------
// drive
// -----------------------------------------

let car1 = new NewCar(new MRFWheel());
car1.move()
console.log("-");
car1.move()

// -----------------------------------------