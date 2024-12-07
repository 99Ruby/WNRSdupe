const cards = {
    "level 1": [
      { index: 1, text: "What do you think is the hardest part of what I do for a living?", isWildCard: false },
      { index: 2, text: "What reality show do you think I'm most likely to binge watch? Explain.", isWildCard: false },
      { index: 3, text: "What's the first thing you noticed about me?", isWildCard: false },
      { index: 4, text: "If Myspace was still a thing what would my profile song be?", isWildCard: false },
      { index: 5, text: "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?", isWildCard: false },
      { index: 6, text: "On a scale of 1-10, how messy do you think my car is? 1 being the cleanest 10 complete disaster, explain.", isWildCard: false },
      { index: 7, text: "Do you think plants thrive or die in my care? Explain.", isWildCard: false },
      { index: 8, text: "Do I look kind? Explain.", isWildCard: false },
      { index: 9, text: "Do I seem like more of a creative or analytical type? Explain.", isWildCard: false },
      { index: 10, text: "Do I seem like someone who would get a name tattooed on myself? Why or why not?", isWildCard: false },
      { index: 11, text: "Finish the sentence: Just by looking at you I'd think _____________.", isWildCard: false },
      { index: 12, text: "What do my shoes tell you about me?", isWildCard: false },
      { index: 13, text: "Do you think I've ever been fired from a job? If so, what for?", isWildCard: false },
      { index: 14, text: "What was your first impression of me?", isWildCard: false },
      { index: 15, text: "What was your first impression of me on Bumble vs IRL?", isWildCard: false },
      { index: 16, text: "How would you describe what you think my type is in three words?", isWildCard: false },
      { index: 17, text: "What did you think about my first message?", isWildCard: false },
      { index: 18, text: "Between the two of us, who seems like the better texter? Explain.", isWildCard: false },
      { index: 19, text: "What does my Instagram tell you about me?", isWildCard: false },
      { index: 20, text: "Make an assumption about me.", isWildCard: false },
      { index: 21, text: "What about me intrigues you?", isWildCard: false },
      { index: 22, text: "What do you think I'm most likely to splurge on?", isWildCard: false },
      { index: 23, text: "As a child, what do you think I wanted to be?", isWildCard: false },
      { index: 24, text: "Finish the sentence: just by looking at you I'd think ...", isWildCard: false },
      { index: 25, text: "Do you think I was popular in school? Explain.", isWildCard: false },
      { index: 26, text: "How many speeding tickets do you think I've gotten in my life?", isWildCard: false },
      { index: 27, text: "Do you think I fall in love easily why or why not.", isWildCard: false },
      { index: 28, text: "What compliment do you think I hear the most?", isWildCard: false },
      { index: 29, text: "Do you think I ever checked an Ex phone for evidence?", isWildCard: false },
      { index: 30, text: "What subject do you think I thrived at in school and did I fail any?", isWildCard: false },
      { index: 31, text: "Do I seem like a coffee or tea person - sweetened or unsweetened?", isWildCard: false },
      { index: 32, text: "As a child what do you think I wanted to be when I grow up?", isWildCard: false },
      { index: 33, text: "Do I seem like a morning person or a night owl?", isWildCard: false },
      { index: 34, text: "Do you think I was popular at school? Explain.", isWildCard: false },
      { index: 35, text: "Do you think I'm usually early, on time, or late to events. Explain.", isWildCard: false },
      { index: 36, text: "Do I remind you of anyone you know?", isWildCard: false },
      { index: 37, text: "WILDCARD: Ask and answer the next question in a different accent.", isWildCard: true },
      { index: 38, text: "WILDCARD: Create your own question.", isWildCard: true },
      { index: 39, text: "Am I someone you typically connect with?", isWildCard: false },
      { index: 40, text: "Do I intimidate you? Why or why not?", isWildCard: false },
      { index: 41, text: "What's your favorite song lyric that comes to your mind from the top of your head?", isWildCard: false },
      { index: 42, text: "As a child, what do you think I wanted to be?", isWildCard: false },
      { index: 43, text: "WILDCARD: Write down your number one goal for the next month. Compare.", isWildCard: true }
    ],
    "level 2": [
      { index: 1, text: "What's been your happiest memory this past year?", isWildCard: false },
      { index: 2, text: "Have you changed your mind about anything recently?", isWildCard: false },
      { index: 3, text: "What has been your earliest recollection of happiness?", isWildCard: false },
      { index: 4, text: "What lesson took you the longest to un-learn?", isWildCard: false },
      { index: 5, text: "Are you lying to yourself about anything?", isWildCard: false },
      { index: 6, text: "What questions are you trying to answer most in your life right now?", isWildCard: false },
      { index: 7, text: "When was the last time you surprised yourself?", isWildCard: false },
      { index: 8, text: "What title would you give this chapter in your life?", isWildCard: false },
      { index: 9, text: "What do you crave more of?", isWildCard: false },
      { index: 10, text: "Finish the sentence: Strangers would describe me as ______ only I know that I am _______.", isWildCard: false },
      { index: 11, text: "What's the worst pain you have ever been in that wasn't physical?", isWildCard: false },
      { index: 12, text: "Has a stranger ever changed your life?", isWildCard: false },
      { index: 13, text: "What's your first love's name and the reason you fell in love with them?", isWildCard: false },
      { index: 14, text: "What would your younger self not believe about your life today?", isWildCard: false },
      { index: 15, text: "How would you describe the feeling of being in love with one word?", isWildCard: false },
      { index: 16, text: "What are you more afraid of: failure or success and why?", isWildCard: false },
      { index: 17, text: "What is a dream you let go of?", isWildCard: false },
      { index: 18, text: "If you could get to know someone in your life on a deeper level who would it be and why?", isWildCard: false },
      { index: 19, text: "What's your mom's name and what is the most beautiful thing about her?", isWildCard: false },
      { index: 20, text: "What part of your life works what part of your life hurts?", isWildCard: false },
      { index: 21, text: "How can you become a better person?", isWildCard: false },
      { index: 22, text: "Do you think the image you have of yourself matches the image other people see you as?", isWildCard: false },
      { index: 23, text: "Are you missing anyone right now? Do you think they miss you too?", isWildCard: false },
      { index: 24, text: "What fast food restaurant do you think I'm most likely to drive through? What's my order?", isWildCard: false },
      { index: 25, text: "Do you think I intimidate others? Why or why not?", isWildCard: false },
      { index: 26, text: "When you are asked how are you, how often do you answer truthfully?", isWildCard: false },
      { index: 27, text: "WILDCARD: Think of someone you admire. Write down what you admire about them. Compare.", isWildCard: true },
      { index: 28, text: "WILDCARD: Write down something you've been wanting to let go of. Compare.", isWildCard: true }
    ],
    "level 3": [
      { index: 1, text: "What about me surprised you?", isWildCard: false },
      { index: 2, text: "What do you think our most important similarity is?", isWildCard: false },
      { index: 3, text: "What do you think is one thing I could do that would drastically improve my life?", isWildCard: false },
      { index: 4, text: "What would make you feel closer to me?", isWildCard: false },
      { index: 5, text: "What do you admire most about me?", isWildCard: false },
      { index: 6, text: "What do you think my superpower is?", isWildCard: false },
      { index: 7, text: "What can I help you with?", isWildCard: false },
      { index: 8, text: "When this game is over, what will you remember about me?", isWildCard: false },
      { index: 9, text: "What is a lesson you will take away from our conversation?", isWildCard: false },
      { index: 10, text: "How do our personalities complement each other?", isWildCard: false },
      { index: 11, text: "What do you think my defining characteristic is?", isWildCard: false },
      { index: 12, text: "Based on what you've learned about me, do you have any Netflix recommendations?", isWildCard: false },
      { index: 13, text: "WILDCARD: Both players write a note to your younger selves. Compare.", isWildCard: true },
      { index: 14, text: "WILDCARD: Give your partner a compliment you don't think they hear enough.", isWildCard: true },
      { index: 15, text: "WILDCARD: Swap a song suggestion you think the other person will enjoy.", isWildCard: true }
    ]
  };

  
// Define variables and initialize
let level1Texts = [];
let level2Texts = [];
let level3Texts = [];
let textArray = [];
let level1Index = 0;
let level2Index = 0;
let level3Index = 0;
let currentlvl = 1;

// Shuffle and prepare card data
level1Texts = cards["level 1"].map(card => card.text).sort(() => Math.random() - 0.5);
level2Texts = cards["level 2"].map(card => card.text).sort(() => Math.random() - 0.5);
level3Texts = cards["level 3"].map(card => card.text).sort(() => Math.random() - 0.5);

textArray = [level1Texts, level2Texts, level3Texts];
console.log(textArray);

// Display the initial card
displayCard();

// Function to navigate to the next card
function nextCard() {
    if (currentlvl === 1 && level1Index < level1Texts.length - 1) {
        level1Index++;
    } else if (currentlvl === 2 && level2Index < level2Texts.length - 1) {
        level2Index++;
    } else if (currentlvl === 3 && level3Index < level3Texts.length - 1) {
        level3Index++;
    } else {
        alert("You have reached the end of this level's cards.");
    }
    displayCard();
}

// Function to navigate to the previous card
function prevCard() {
    if (currentlvl === 1 && level1Index > 0) {
        level1Index--;
    } else if (currentlvl === 2 && level2Index > 0) {
        level2Index--;
    } else if (currentlvl === 3 && level3Index > 0) {
        level3Index--;
    } else {
        alert("You are at the beginning of this level's cards.");
    }
    displayCard();
}

// Function to display the card based on the current level and index
function displayCard() {
    const index = getIndex();
    const currentCards = textArray[currentlvl - 1];

    if (index >= 0 && index < currentCards.length) {
        document.getElementById("card-text").innerText = currentCards[index];
    } else {
        document.getElementById("card-text").innerText = "No cards available.";
    }

    // if (currentCards[index].isWildCard){
    //     document.getElementById("card-div").style.backgroundColor = "#ba0000"
    //     document.getElementById("card-div").style.color = "#ffffff"
    // } else {
    //     document.getElementById("card-div").style.backgroundColor = "#ffffff"
    //     document.getElementById("card-div").style.color = "#ba0000"
    // }
}

// Function to get the current index based on the level
function getIndex() {
    if (currentlvl === 1) return level1Index;
    if (currentlvl === 2) return level2Index;
    if (currentlvl === 3) return level3Index;
    return 0;
}


function lvlOne(){
    if (currentlvl != 1){
        currentlvl = 1;
        
    }
    displayCard();

    document.getElementById("level-1").style.color = "#F7F7F7";
    document.getElementById("level-1").style.backgroundColor = "#ba0000";

    document.getElementById("level-2").style.color = "#ba0000";
    document.getElementById("level-2").style.backgroundColor = "#F7F7F7";

    document.getElementById("level-3").style.color = "#ba0000";
    document.getElementById("level-3").style.backgroundColor = "#F7F7F7";

}


function lvlTwo(){
    if (currentlvl != 2){
        currentlvl = 2;
        
    }
    displayCard();

    document.getElementById("level-2").style.color = "#F7F7F7";
    document.getElementById("level-2").style.backgroundColor = "#ba0000";

    document.getElementById("level-1").style.color = "#ba0000";
    document.getElementById("level-1").style.backgroundColor = "#F7F7F7";

    document.getElementById("level-3").style.color = "#ba0000";
    document.getElementById("level-3").style.backgroundColor = "#F7F7F7";
}

function lvlThree(){
    if (currentlvl != 3){
        currentlvl = 3;

    }
    displayCard();

    document.getElementById("level-3").style.color = "#F7F7F7";
    document.getElementById("level-3").style.backgroundColor = "#ba0000";

    document.getElementById("level-2").style.color = "#ba0000";
    document.getElementById("level-2").style.backgroundColor = "#F7F7F7";

    document.getElementById("level-1").style.color = "#ba0000";
    document.getElementById("level-1").style.backgroundColor = "#F7F7F7";
}