// Url for the table texture
// Default: "https://d33wubrfki0l68.cloudfront.net/7e682d03058bcaa208cee6ed7a5fa662cfe34e59/26daf/bg.jpg"
var boardBG = "https://cdn.discordapp.com/attachments/859540247142858762/899832522928701511/unknown.png"

// Hex code for the color of names and the arrow
// Default: "#ffffff"
var NameColor = "#00ff00"

// Url for the texture of the board
// Default: "https://d33wubrfki0l68.cloudfront.net/4629bd964e9c60ed914da61ad48150a2cbd75533/cloth.jpg"
var boardTexture = "https://cdn.discordapp.com/attachments/859540247142858762/900909925075656744/unknown.png"

// Url for the image on the back of the cards
// Default: "https://d33wubrfki0l68.cloudfront.net/80a00d2fa6153a93eb5b10814a0b676b922b31ed/card-background.jpg
var cardBG = "https://cdn.discordapp.com/attachments/859540247142858762/900456549120634930/unknown.png"

// Scale of the image on the back of the cards (100% means it takes the full width of the card)
// Default: "9%"
var cardBGScale = "25%"

// Url for the logo on the back of the card
// Default: "https://d33wubrfki0l68.cloudfront.net/24e57ee0b794dc684227ab25038066e9a22f4e6e/logo.png"
var cardLogo = "https://cdn.discordapp.com/attachments/859540247142858762/900937872171995196/yjig.gif"

// Hex code for the color of the text on the cards
// Default: "#ffffff"
var cardTextColor = "#ff00ff"

// Hex code for the color of the card border
// Default: 2f2f2f
var cardBorderColor = "#ff00ff"

// Hex code for each card color/type
// Default: "#e8505b"
var red = "#e8505b"
// Default: "#5d54a4"
var blue = "#5d54a4"
// Default: "#18a849"
var green = "#18a849"
// Default: "#f9d56e"
var yellow = "#f9d56e"

// Hex code for the pizzuno button font color
// Default: "#ffffff"
var unoColor = "#ffffff"
// Hex code for the pizzuno button background color
// Default: "#00ff57"
var unoBG = "#00ff57"


// Changes card bg to the image at the url stored in the variable boardBG
document.styleSheets[0].cssRules[94].style.setProperty("background-image", 'url(' + boardBG + ')') // body

// Change the color of the name/arrow text
document.styleSheets[0].cssRules[94].style.setProperty("color", NameColor) // body

// Changes card bg to the image at the url stored in the variable boardTexture
document.styleSheets[0].cssRules[99].style.setProperty("background-image", 'url(' + boardTexture + ')') // #app, #intro

// Changes card bg to the image at the url stored in the variable cardBG
document.styleSheets[0].cssRules[33].style.setProperty("background-image", 'url(' + cardBG + ')') // .card.back

// Change the scale percent of the card background image
document.styleSheets[0].cssRules[33].style.setProperty("background-size", cardBGScale) // .card.back

// Changes card bg to the image at the url stored in the variable cardLogo
document.styleSheets[0].cssRules[34].style.setProperty("background-image", 'url(' + cardLogo + ')') // .card.back:before

// Change card text color
document.styleSheets[0].cssRules[20].style.setProperty("color", cardTextColor) //.card .card-symbol

// Top and bottom color
document.styleSheets[0].cssRules[21].style.setProperty("color", cardTextColor) // .card::before, .card::after

// Card border color
document.styleSheets[0].cssRules[17].style.setProperty("background", cardBorderColor) // .card

// Card back border color
document.styleSheets[0].cssRules[33].style.setProperty("border-top-color", cardBorderColor) // .card.back
document.styleSheets[0].cssRules[33].style.setProperty("border-right-color", cardBorderColor) // .card.back
document.styleSheets[0].cssRules[33].style.setProperty("border-bottom-color", cardBorderColor) // .card.back
document.styleSheets[0].cssRules[33].style.setProperty("border-left-color", cardBorderColor) // .card.back

// Card colors
document.styleSheets[0].cssRules[0].style.setProperty("--colorRed", red) // :root
document.styleSheets[0].cssRules[0].style.setProperty("--colorBlue", blue) // :root
document.styleSheets[0].cssRules[0].style.setProperty("--colorGreen", green) // :root
document.styleSheets[0].cssRules[0].style.setProperty("--colorYellow", yellow) // :root

// Uno button
document.styleSheets[0].cssRules[96].style.setProperty("color", unoColor) // button
document.styleSheets[0].cssRules[109].style.setProperty("background", unoBG) // .button

// Uno button font size
//document.styleSheets[0].cssRules[96].style.setProperty("font-size", "5vw")

// Moves the pizzuno button off screen
//document.styleSheets[0].cssRules[124].style.setProperty("right", "-1000vh") // .call-pizzuno

/*
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "boardBG":
                sendResponse(count);
                break;
            case "NameColor":
                
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);
*/

/*
chrome.storage.local.set({'boardBG' : boardBG}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'NameColor' : NameColor}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'boardTexture' : boardTexture}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'cardBG' : cardBG}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'cardBGScale' : cardBGScale}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'cardLogo' : cardLogo}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'cardTextColor' : cardTextColor}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'cardBorderColor' : cardBorderColor}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'red' : red}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'blue' : blue}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'green' : green}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'yellow' : yellow}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'a' : a}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'unoColor' : unoColor}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
chrome.storage.local.set({'unoBG' : unoBG}, function(){
    if(chrome.runtime.error){
        console.log("Error.");
    }
});
*/