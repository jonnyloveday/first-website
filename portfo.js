const lightMode = document.getElementById("lightMode");
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.backgroundImage = 'none';
    
    document.body.style.color = 'black';
    document.body.style.fontFamily = "'Courier New'";
    document.body.style.textShadow = '0px 0px black';

    space1.style.backgroundColor = 'white';
    space2.style.backgroundColor = 'white';
    space3.style.backgroundColor = 'white';
    space4.style.backgroundColor = 'white';
    header.style.backgroundColor = 'white';
    header.style.backgroundImage = 'none';
    
    boat1.style.backgroundColor = 'white';
    boat2.style.backgroundColor = 'white';
    boat3.style.backgroundColor = 'white';
    boat4.style.backgroundColor = 'white';

    document.getElementById("cyberpet").src = "plain/cyberpet.jpeg";
    document.getElementById("RBR").src = "plain/rbr.jpeg";
    document.getElementById("homer").src = "plain/homer.jpeg";

    document.getElementById("captain").src = "plain/boat.jpeg";
    document.getElementById("taco").src = "plain/taco.jpeg";
    document.getElementById("scuba").src = "plain/scuba.jpeg";
    document.getElementById("costco").src = "plain/costco.jpg";

})


const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.backgroundImage = 'none';
    
    document.body.style.color = 'gold';
    document.body.style.fontFamily = "'Press Start 2P'";
    document.body.style.textShadow = '0px 0px black';

    space1.style.backgroundColor = 'black';
    space2.style.backgroundColor = 'rgb(15 ,15, 15)';
    space3.style.backgroundColor = 'black';
    space4.style.backgroundColor = 'rgb(15 ,15, 15)';
    header.style.backgroundColor = 'black';
    header.style.backgroundImage = 'none';
    
    boat1.style.backgroundColor = 'blue';
    boat2.style.backgroundColor = 'greenyellow';
    boat3.style.backgroundColor = 'blue';
    boat4.style.backgroundColor = 'greenyellow';

    document.getElementById("cyberpet").src = "plain/cyberpet.jpeg";
    document.getElementById("RBR").src = "plain/rbr.jpeg";
    document.getElementById("homer").src = "teletext/3DHomer.jpeg";

    document.getElementById("captain").src = "plain/boat.jpeg";
    document.getElementById("taco").src = "plain/taco.jpeg";
    document.getElementById("scuba").src = "plain/scuba.jpeg";
    document.getElementById("costco").src = "plain/costco.jpg";

    main.style.borderRadius = "0";

    redMode.style.display = "block";
})

const redMode = document.getElementById("redMode");
redMode.addEventListener("click", () => {
    document.body.style.backgroundColor = 'maroon';
    document.body.style.backgroundImage = 'url(BG/redBK.jpeg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.color = 'rgb(92, 0, 0)';
    document.body.style.fontFamily = 'monospace';
    document.body.style.textShadow = '1px 1px red';

    space1.style.backgroundColor = 'maroon';
    space2.style.backgroundColor = 'transparent';
    space3.style.backgroundColor = 'transparent';
    space4.style.backgroundColor = 'maroon';
    header.style.backgroundColor = 'maroon';
    header.style.backgroundImage = 'none';
    
    boat1.style.backgroundColor = 'darkRed';
    boat2.style.backgroundColor = 'darkRed';
    boat3.style.backgroundColor = 'darkRed';
    boat4.style.backgroundColor = 'darkRed';

    document.getElementById("cyberpet").src = "plain/cyberpet.jpeg";
    document.getElementById("RBR").src = "red/redRBR.jpeg";
    document.getElementById("homer").src = "red/evilHomer.jpeg";

    document.getElementById("captain").src = "red/redBoat.jpeg";
    document.getElementById("taco").src = "red/redTaco.jpeg";
    document.getElementById("scuba").src = "red/redScuba.jpeg";
    document.getElementById("costco").src = "red/redCostco.jpeg";

    galaxyMode.style.display = "block";
})

const galaxyMode = document.getElementById("galaxyMode");
galaxyMode.addEventListener("click", () => {
    document.body.style.backgroundImage = 'url(BG/spacebackground.png)'
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = 'midnightblue';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Orbitron';
    document.body.style.textShadow = '-1px 2px skyblue';

    space1.style.backgroundColor = 'transparent';
    space2.style.backgroundColor = 'transparent';
    space3.style.backgroundColor = 'transparent';
    space4.style.backgroundColor = 'transparent';
    header.style.backgroundColor = 'transparent';
    header.style.backgroundImage = 'none';
    
    boat1.style.backgroundColor = 'midnightblue';
    boat2.style.backgroundColor = 'midnightblue';
    boat3.style.backgroundColor = 'midnightblue';
    boat4.style.backgroundColor = 'midnightblue';

    document.getElementById("cyberpet").src = "plain/cyberpet.jpeg";
    document.getElementById("RBR").src = "plain/rbr.jpeg";
    document.getElementById("homer").src = "galaxy/spaceHomer.jpeg";

    document.getElementById("captain").src = "plain/boat.jpeg";
    document.getElementById("taco").src = "plain/taco.jpeg";
    document.getElementById("scuba").src = "plain/scuba.jpeg";
    document.getElementById("costco").src = "plain/costco.jpg";

    wildWest.style.display = "block";
})

const wildWest = document.getElementById("wildWest");
wildWest.addEventListener("click", () => {
    document.body.style.backgroundImage = 'url(BG/west.jpeg)'
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = 'blanchedalmond';
    document.body.style.color = 'black';
    document.body.style.fontFamily = 'Rye';
    document.body.style.textShadow = '1.5px 1.5px blanchedalmond';


    space1.style.backgroundColor = 'transparent';
    space2.style.backgroundColor = 'transparent';
    space3.style.backgroundColor = 'transparent';
    space4.style.backgroundColor = 'transparent';
    header.style.backgroundImage = 'url(BG/leather.jpeg';
    
    boat1.style.backgroundColor = 'blanchedalmond';
    boat2.style.backgroundColor = 'blanchedalmond';
    boat3.style.backgroundColor = 'blanchedalmond';
    boat4.style.backgroundColor = 'blanchedalmond';

    document.getElementById("cyberpet").src = "plain/cyberpet.jpeg";
    document.getElementById("RBR").src = "ww/wwRBR.jpeg";
    document.getElementById("homer").src = "ww/wwHomer.jpeg";

    document.getElementById("captain").src = "ww/wwBoat.jpeg";
    document.getElementById("taco").src = "ww/wwTaco.jpeg";
    document.getElementById("scuba").src = "ww/wwScuba.jpeg";
    document.getElementById("costco").src = "ww/wwCostco.jpeg";

})
