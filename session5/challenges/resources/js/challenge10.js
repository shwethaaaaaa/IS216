//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================



const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars


function display_default() {

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)



      // YOUR CODE GOES HERE

      // console.log ('Its working!')

// updating the href and the innerText for the navigation

        var rand_int = getRandomInt(1,11) 
        // THIS IS HOW U GET THE 50% STUFF!! OR is it possible to do this in loops!


        if (rand_int <= 5 ){
        document.getElementById('wiki1').href = 'https://en.wikipedia.org/wiki/Taylor_Swift'
        document.getElementById('wiki1').innerText = 'Taylor Swift'
        document.getElementById('image1').src = 'images/sm_bg_taylor.jpg'
        //add the h2 and p for each of them, then must show and  (how??)disable the rest oif the button!!
        document.getElementById('slide_heading1').innerText = 'Taylor Swift'
        document.getElementById("slide_title1").innerText = 'Im intmidated by the fear of being average'


        document.getElementById('wiki2').href = 'https://en.wikipedia.org/wiki/Anna_Kendrick'
        document.getElementById('wiki2').innerText = 'Anna Kendrick'
        document.getElementById('image2').src = 'images/sm_bg_anna.jpg'
        document.getElementById('slide_heading2').innerText = 'Anna Kendrick'
        document.getElementById("slide_title2").innerText = 'An actor should always let humility outweigh ambition.'


        document.getElementById('wiki3').href = 'https://en.wikipedia.org/wiki/Irina_Shayk'
        document.getElementById('wiki3').innerText = 'Irina Shayk'
        document.getElementById('image3').src = 'images/sm_bg_irina.jpg'
        document.getElementById('slide_heading3').innerText ='Irina Shayk'
        document.getElementById("slide_title3").innerText =  "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer."


      
        // button
        document.getElementById('female_button').className += ' disabled'


        }


        else{

        document.getElementById('wiki1').href = 'https://en.wikipedia.org/wiki/Ryan_Gosling'
        document.getElementById('wiki1').innerText = 'Ryan Gosling'
        document.getElementById('image1').src = 'images/sm_bg_ryan.jpg'
        document.getElementById('slide_heading1').innerText = 'Ryan Gosling'
        document.getElementById("slide_title1").innerText = "I'm going to make a movie about 'Hey Girl.'"

        document.getElementById('wiki2').href = 'https://en.wikipedia.org/wiki/Zac_Efron'
        document.getElementById('wiki2').innerText = 'Zac Efron'
        document.getElementById('image2').src = 'images/sm_bg_zac.jpg'
        document.getElementById('slide_heading2').innerText = 'Zac Efron'
        document.getElementById("slide_title2").innerText = "sm_bg_zac.jpg",
        "A girl can tell I like her when I blush or start telling bad jokes."


        document.getElementById('wiki3').href = 'https://en.wikipedia.org/wiki/Eminem'
        document.getElementById('wiki3').innerText = 'Eminem'
        document.getElementById('image3').src = 'images/sm_bg_eminem.jpg'
        document.getElementById('slide_heading3').innerText = 'Eminem'
        document.getElementById("slide_title3").innerText = "I am whatever you say I am; if I wasn't, then why would you say I am."


        // button 

        document.getElementById('male_button').className += ' disabled'

        }

       






}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE (JUST COPY PASTE!)

        document.getElementById('wiki1').href = 'https://en.wikipedia.org/wiki/Ryan_Gosling'
        document.getElementById('wiki1').innerText = 'Ryan Gosling'
        document.getElementById('image1').src = 'images/sm_bg_ryan.jpg'
        document.getElementById('slide_heading1').innerText = 'Ryan Gosling'
        document.getElementById("slide_title1").innerText = "I'm going to make a movie about 'Hey Girl.'"

        document.getElementById('wiki2').href = 'https://en.wikipedia.org/wiki/Zac_Efron'
        document.getElementById('wiki2').innerText = 'Zac Efron'
        document.getElementById('image2').src = 'images/sm_bg_zac.jpg'
        document.getElementById('slide_heading2').innerText = 'Zac Efron'
        document.getElementById("slide_title2").innerText = "sm_bg_zac.jpg",
        "A girl can tell I like her when I blush or start telling bad jokes."


        document.getElementById('wiki3').href = 'https://en.wikipedia.org/wiki/Eminem'
        document.getElementById('wiki3').innerText = 'Eminem'
        document.getElementById('image3').src = 'images/sm_bg_eminem.jpg'
        document.getElementById('slide_heading3').innerText = 'Eminem'
        document.getElementById("slide_title3").innerText = "I am whatever you say I am; if I wasn't, then why would you say I am."


        // button (YOU HAVE TO KNOW THE PAST STUFF ACTIONS, IT GOES THRU THE ABOVE IF-BLOCK FIRST!)
        document.getElementById('male_button').className += ' disabled'
        document.getElementById('female_button').className = 'btn btn-danger'
        // this is how you make the button active (IMPT NOTE, O SUCH THING AS 'ACTIVE' CLASS)


}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE

        document.getElementById('wiki1').href = 'https://en.wikipedia.org/wiki/Taylor_Swift'
        document.getElementById('wiki1').innerText = 'Taylor Swift'
        document.getElementById('image1').src = 'images/sm_bg_taylor.jpg'
        //add the h2 and p for each of them, then must show and  (how??)disable the rest oif the button!!
        document.getElementById('slide_heading1').innerText = 'Taylor Swift'
        document.getElementById("slide_title1").innerText = 'Im intmidated by the fear of being average'


        document.getElementById('wiki2').href = 'https://en.wikipedia.org/wiki/Anna_Kendrick'
        document.getElementById('wiki2').innerText = 'Anna Kendrick'
        document.getElementById('image2').src = 'images/sm_bg_anna.jpg'
        document.getElementById('slide_heading2').innerText = 'Anna Kendrick'
        document.getElementById("slide_title2").innerText = 'An actor should always let humility outweigh ambition.'


        document.getElementById('wiki3').href = 'https://en.wikipedia.org/wiki/Irina_Shayk'
        document.getElementById('wiki3').innerText = 'Irina Shayk'
        document.getElementById('image3').src = 'images/sm_bg_irina.jpg'
        document.getElementById('slide_heading3').innerText ='Irina Shayk'
        document.getElementById("slide_title3").innerText =  "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer."


        document.getElementById('female_button').className += ' disabled'
        document.getElementById('male_button').className = 'btn btn-primary'
        // this is how you make the button active (IMPT NOTE, O SUCH THING AS 'ACTIVE' CLASS)

}