class Form{
constructor(){






}
 display() 
{
    var title = createElement('h2')
    title.html("Car Racing Game")
    title.position(620,100)
    var Input=createInput('Player Name')
    Input.position(620,200)
    var button = createButton("Play")
    button.position(620,200)
    var greeting = createElement("h4")
    button.mousePressed(function() 
    {
     Input.hide()
     button.hide()
     var name = Input.value()
     playerCount++
     player.update(name)
     player.updateCount(playerCount)
     greeting.html('hello'+ name)
     greeting.position(200,200)
        
    }
    )
    
}



































} 