class Form {
    constructor(){
        this.title = createElement ("h1")
        this.button1 = createButton("PLAY")
        this.button2 = createButton("HOW TO PLAY")
        
    }
    display(){
       
        this.title.html("Hunter Warrior")
        this.title.position(450,70)
        this.title.style("font-size",500)
        this.title.style("color","red")
       
        this.button1.position(500,150)
        this.button2.position(500,200)
    
        this.button1.mousePressed(()=>{
            this.button1.hide()
            this.button2.hide()
           
            this.title.hide()
            
            gameState=1
        })
        this.button2.mousePressed(()=>{
            gameState=2
            this.button2.hide()
            this.button3.hide()
            
            this.title.hide()
          
            this.button1.position(650,530)
        })
        
    }
    
}