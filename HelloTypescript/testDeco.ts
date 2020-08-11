function Component(constructorFN?: Function){
    /* 
    * 클래스를 꾸며주는 로직 : Component, html, css
    */
    return constructorFN
}

@Component()
class AppComponent {

    @Input() height: number;
    
    constructor(){

    }
}