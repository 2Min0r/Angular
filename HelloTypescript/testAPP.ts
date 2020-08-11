class Parent {
    public one = 10;
    protected two = 10;
    private three  = 10;

    constructor() {
        this.one
        this.two
        this.three
    }
}
    
class Child extends Parent {

    constructor(public age: number) {
        super();
        
        this.one
        this.two

    }
}

let p = new Parent();
let c = new Child(20);

c.age