class Form {
    constructor() {}

    display() {

        let title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        let input = createInput("name");
        input.position(130, 160);

        let button = createButton("play");
        button.position(250, 200);

        let greeting = createElement("h3");

        button.mousePressed(function() {

            input.hide();
            button.hide();

            let name = input.value();
            playerCount ++;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(200, 200);
            
        })
    }
}