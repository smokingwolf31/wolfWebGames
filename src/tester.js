let possibleImages = ["images//deletePostImage.png", "images//likePostImage.png", "images//deletePostImage.png", "images//likePostImage.png"
    , "images//toktikBlue.png", "images//toktikBlue.png", "images//viewPostImage.png", "images//viewPostImage.png"]
shuffle(possibleImages);

let buttonClickes = 0;
let preButton = "NA"

addListener(".logo1", "B1");
addListener(".logo2", "B2");
addListener(".logo3", "B3");
addListener(".logo4", "B4");
addListener(".logo5", "B5");
addListener(".logo6", "B6");
addListener(".logo7", "B7");
addListener(".logo8", "B8");

function addListener(buttonId ,imageId){
    let button = document.querySelector(buttonId);
    let image = document.getElementById(imageId);
    button.addEventListener("click", (imageID) => {
        let image = document.getElementById(imageId);
        console.log(32);
        console.log(image.src);
        if(image.src === "file:///home/n/nkbmnq002/smokeWebGames/src/logo.jpeg"){ 
            console.log(33);
            buttonClickes++;
            image.src = getImage(imageId);
            if(buttonClickes % 2 === 0){
                if(preButton.src != image.src){
                    let buttons = document.querySelectorAll('[id^="yes"]');
                    buttons.forEach(function(button) {
                        button.disabled = true;
                    });
                    setTimeout(() => {  
                        console.log("World!"); 
                        preButton.src = "logo.jpeg";
                        image.src = "logo.jpeg";
                        buttons.forEach(function(button) {
                            button.disabled = false;
                        });
                        }, 1200);
                    
                    
                }
            }
            else{
                preButton = image;
            }
        }
        
    })

}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getImage(imageId){
    id = imageId.substring(1);
    return possibleImages[id -1];
}


