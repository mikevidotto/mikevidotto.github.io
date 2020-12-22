var Words = [
  "the", "of", "to", "and", "a", "in", "is", "it", "you",
  "that", "he", "was", "for", "on", "are", "with",
  "as", "I", "his", "they", "be", "at", "one", "have", "this", 
  "from", "or", "had", "by", "hot", "but", "some", "what",
  "there", "we", "can", "out", "other", "were", "all",
  "your", "when", "up", "use", "word", "how", "said", "an",
  "each", "she", "which", "do", "their", "time", "if", "will",
  "way", "about", "many", "then", "them", "would", "write",
  "like", "so", "these", "her", "long", "make", "thing", "see",
  "him", "two", "has", "look", "more", "day", "could", "go",
  "come", "did", "my", "sound", "no", "most", "number", "who",
  "over", "know", "water", "than", "call", "first", "people",
  "may", "down", "side", "been", "now", "find", "any", "new",
  "work", "part", "take", "get", "place", "made", "live",
  "where", "after", "back", "little", "only", "round", "man",
  "year", "came", "show", "every", "good", "me", "give", "our",
  "under", "name", "very", "through", "just", "form", "much",
  "great", "think", "say", "help", "low", "line", "before",
  "turn", "cause", "same", "mean", "differ", "move", "right",
  "boy", "old", "too", "does", "tell", "sentence", "set",
  "three", "want", "air", "well", "also", "play", "small",
  "end", "put", "home", "read", "hand", "port", "large",
  "spell", "add", "even", "land", "here", "must", "big", "high",
  "such", "follow", "act", "why", "ask", "men", "change",
  "went", "light", "kind", "off", "need", "house", "picture",
  "try", "us", "again", "animal", "point", "mother", "world",
  "near", "build", "self", "earth", "father", "head", "stand",
  "own", "page", "should", "country", "found", "answer",
  "school", "grow", "study", "still", "learn", "plant", "cover", 
  "food", "sun", "four", "thought", "let", "keep", "eye", 
  "never", "last", "door", "between", "city", "tree", "cross",
  "since", "hard", "start", "might", "story", "saw", "far",
  "sea", "draw", "left", "late", "run", "don't", "while",
  "press", "close", "night", "real", "life", "few", "stop",
  "open", "seem", "together", "next", "white", "children",
  "begin", "got", "walk", "example", "ease", "paper", "often",
  "always", "music", "those", "both", "mark", "book", "letter",
  "until", "mile", "river", "car", "feet", "care", "second",
  "group", "carry", "took", "rain", "eat", "room", "friend",
  "began", "idea", "fish", "mountain", "north", "once", "base",
  "hear", "horse", "cut", "sure", "watch", "color", "face",
  "wood", "main", "enough", "plain", "girl", "usual", "young",
  "ready", "above", "ever", "red", "list", "though", "feel",
  "talk", "bird", "soon", "body", "dog", "family", "direct",
  "pose", "leave", "song", "measure", "state", "product",
  "black", "short", "numeral", "class", "wind", "question",
  "happen", "complete", "ship", "area", "half", "rock", "order",
  "fire", "south", "problem", "piece", "told", "knew", "pass", 
  "farm", "top", "whole", "king", "size", "heard", "best", 
  "hour", "better", "true", "during", "hundred", "am",
  "remember", "step", "early", "hold", "west", "ground",
  "interest", "reach", "fast", "five", "sing", "listen", "six",
  "table", "travel", "less", "morning", "ten", "simple", 
  "several", "vowel", "toward", "war", "lay", "against", 
  "pattern", "slow", "center", "love", "person", "money",
  "serve", "appear", "road", "map", "science", "rule", 
  "govern", "pull", "cold", "notice", "voice", "fall",
  "power", "town", "fine", "certain", "fly", "unit", "lead", 
  "cry", "dark", "machine", "note", "wait", "plan", "figure",
  "star", "box", "noun", "field", "rest", "correct", "able",
  "pound", "done", "beauty", "drive", "stood", "contain", 
  "front", "teach", "week", "final", "gave", "green", "oh", 
  "quick", "develop", "sleep", "warm", "free", "minute", 
  "strong", "special", "mind", "behind", "clear", "tail", 
  "produce", "fact", "street", "inch", "lot", "nothing",
  "course", "stay", "wheel", "full", "force", "blue", "object",
  "decide", "surface", "deep", "moon", "island", "foot", "yet",
  "busy", "test", "record", "boat", "common", "gold", "possible",
  "place", "age", "dry", "wonder", "laugh", "thousand", "ago",
  "ran", "check", "game", "shape", "yes", "hot", "miss", 
  "brought", "heat", "snow", "bed", "bring", "sit", "perhaps",
  "fill", "east", "weight", "language", "among"
];
//all 500 words

var wordString = ""; // default word string. starts with a page break
var random; // used to generate random number
var input = ""; // keys that are pressed
var perma = "<br>"; // words that WERE typed
var newlineCounter = 1; // once it hits a certain value, it adds a newline to the string of words you are prompted to type
var totalWords = 0; // number of words you typed within the time
var wpm; //words per minute
var rawCharacters = 0; // counts all characters typed
var corCharacters = 0; // counts correct characters types
var startGame = false; // false before you hit any keys so that the timer doesn't start counting down until you start to type
var tempString = "";

var secondsLabel;
const secondsInAMinute = 60;
var totalSeconds = 60; //minute by default

var secCount = 0;
var timer = setInterval(setTime, 1000);

var temp = "";
var spacebarError = false;


var _15 = false;
var _30 = false;
var _60 = true;

var checkTimer = true;



function setTime() {
  if (startGame == true) {
    secondsLabel = document.getElementById("timer");
    // wpm = (totalWords / (secondsInAMinute - totalSeconds));

    --totalSeconds;
    secCount++;
    // document.getElementById('wpm').innerHTML = wpm.toFixed(0) * 60; //calc wpm updated every second
    secondsLabel.innerHTML = pad(totalSeconds % 60);

                
    if (totalSeconds == 0) {
      clearInterval(timer);
      wpm = (totalWords / secCount) * 60;
      tempString = wpm.toString().fontcolor('orange');
      document.getElementById('display-wpm').innerHTML = "wpm: " + tempString;
      tempString = rawCharacters.toString().fontcolor('orange');
      document.getElementById("display-raw-characters").innerHTML = "# of keys: " + tempString; 
      tempString = corCharacters.toString().fontcolor('orange');
      document.getElementById('display-characters').innerHTML = "# of correct keys: " + tempString;

      document.getElementById('words').style.visibility = "hidden";
      document.getElementById('words-placeholder').style.visibility = "visible";
      document.getElementById('words-placeholder').innerHTML = "Hit 'Tab' to play again";
      checkTimer = false;
    }

  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

document.getElementById('fifteen').addEventListener("click", function() {
  _15 = true;
  _30 = false;
  _60 = false;

  document.getElementById('fifteen').style.color = "#fff";
  document.getElementById('thirty').style.color = "#555";
  document.getElementById('sixty').style.color = "#555";

  totalSeconds = 15;
  document.getElementById('timer').innerHTML = totalSeconds;
});

document.getElementById('thirty').addEventListener("click", function() {
  _15 = false;
  _30 = true;
  _60 = false;
  document.getElementById('fifteen').style.color = "#555";
  document.getElementById('thirty').style.color = "#fff";
  document.getElementById('sixty').style.color = "#555";

  totalSeconds = 30;
  document.getElementById('timer').innerHTML = totalSeconds;
});

document.getElementById('sixty').addEventListener("click", function() {
  _15 = false;
  _30 = false;
  _60 = true;

  document.getElementById('fifteen').style.color = "#555";
  document.getElementById('thirty').style.color = "#555";
  document.getElementById('sixty').style.color = "#fff";

  totalSeconds = 60;
  document.getElementById('timer').innerHTML = totalSeconds;
});

window.onload = function() {

  //100 words generated, appended to string variable 'wordString' and sent to <div id='words'></div>
  for(var i=0; i < 500; i++) {

    //generate random number from 0 to 499
    random = Math.floor(Math.random() * Words.length);

    if(newlineCounter >= 9) {
      wordString += "<br>";
      newlineCounter = 1;
    }
    
    //append each word to string and add whitespace between each
    if (wordString.length == 0) {
      wordString = Words[random] + " ";
    }
    else {
      wordString += Words[random];
      wordString += " ";
    }
    newlineCounter++;
  } 

  document.getElementById('words').innerHTML = "<br>" + wordString.fontcolor("#bbb");

}

var underline = false;

var inputBox = document.getElementById('input-box');

        window.addEventListener("keydown", function(event) {
          //set all options to be invisible while you are in the middle of a test
          document.getElementById('fifteen').style.visibility = "hidden";
          document.getElementById('thirty').style.visibility = "hidden";
          document.getElementById('sixty').style.visibility = "hidden";
          
          //goes up by 1 everytime a key is pressed except for space
          if (event.key != " " && wordString.substring(0,1) != " ") {
            rawCharacters++;
          }

          startGame = true;
            if (event.defaultPrevented) {
                return; // do nothing if the evet was already processed
            }

            ///YOURE TRYING TO MAKE THE BACKSPACE WORK


            // if (underline == true) {
            //   wordString = " " + wordString.substring(1, wordString.length);
            //   underline = false;
            // }







            if (checkTimer == true) {
              // if (wordString.substring(1, 2) == "<") {
              //   perma = "<br>" + "";
              //   wordString = wordString.substring(0,1) +  wordString.substring(5, wordString.length);
              // }

              if (wordString.substring(1, 2) == " " && spacebarError == false) {
                document.getElementById('space-alert').style.color = "#777";
              }
              else {
                if (temp == "") {
                  document.getElementById('space-alert').style.color = "#222";
                }
              }
              // if (event.key == " " && wordString.substring(1, 2) == "<") {
              //   perma = "<br>" + "";
              //   wordString = wordString.substring(0,1 ) + wordString.substring(5, wordString.length);
              //   temp += wordString.substring(0, 1);
              //   input += wordString.substring(0, 1).fontcolor('red'); //event.key;
              //   wordString = wordString.substring(1, wordString.length);
              // }
              if (event.key == "Shift" || event.key == "CapsLock") {
                document.getElementById('debug').innerHTML = "hit shift or caps lock";
              }
              else if (event.key == " " && event.key == wordString.substring(0, 1) && temp == "" && wordString.substring(1, 2) == "<") {
                spacebarError = false;
                input += event.key;
                perma = "<br>" + "";
                input = "";
                wordString = wordString.substring(5, wordString.length);
                totalWords++;
                document.getElementById('debug').innerHTML = "hit spacebar at correct time, with no errors in the word, before a newline";
              }
              else if (event.key == " " && event.key == wordString.substring(0, 1) && temp == "") {
                spacebarError = false;
                input += event.key;
                perma += input.fontcolor('black');
                input = "";
                wordString = wordString.substring(1, wordString.length);
                totalWords++;
                document.getElementById('debug').innerHTML = "hit spacebar at correct time, with no errors in the word, NOT before a newline";
              }
              else if (event.key == " " && event.key == wordString.substring(0, 1)) {
                spacebarError = false;
                document.getElementById('space-alert').style.color = "#222";
                input += event.key;
                if (wordString.substring(1, 2) == "<") {
                  perma = "<br>" + "";
                  wordString = wordString.substring(5, wordString.length);
                  document.getElementById('debug').innerHTML = "hit spacebar at correct time with error(s) in the word, before a newline";
                }
                else {
                  perma += input.fontcolor('black');
                  wordString = wordString.substring(1, wordString.length);
                  document.getElementById('debug').innerHTML = "hit spacebar at correct time with error(s) in the word";
                }
                input = "";
                temp = "";
              }
              else if (event.key == wordString.substring(0, 1)) {
                corCharacters++;
                if (temp != "") {
                  temp += wordString.substring(0, 1);
                  input += wordString.substring(0, 1).fontcolor('red'); //event.key;
                  wordString = wordString.substring(1, wordString.length);
                }
                else {
                  input += event.key;
                  wordString = wordString.substring(1, wordString.length);
                }
                document.getElementById('debug').innerHTML = "hit the correct key";
              }
              else if (event.key == "Backspace") {
                
                //checks for errors that were wrapped in <font color="red">   <--letter--> </font>
                if(input.substring(input.length-1, input.length) == '>') { ///<font color="red">x</font>
                  //eliminate all of the html
                  input = input.substring(0, input.length-26);
                  
                  //insert back the correct letter without html
                  input += temp.substring(temp.length-1, temp.length);

                  //append last letter in input stream to front of wordString
                  wordString = input.substring(input.length-1, input.length) + wordString;
                }
                // else if(temp != "") {
                //   input = input.substring(0, input.length-1);
                  
                // }
                else { //if it's not wrapped in <font>HTML, then erase it normally.
                  
                  input += temp.substring(temp.length-1, temp.length);
                  wordString = input.substring(input.length-1, input.length) + wordString;
                  
                }

                temp = temp.substring(0, temp.length-1);

                input = input.substring(0, input.length-1);
                document.getElementById('debug').innerHTML = "hit backspace";
              }
              else if (wordString.substring(1, 2) == "<") {
                perma = "<br>" + "";
                wordString = wordString.substring(0,1) +  wordString.substring(5, wordString.length);
                document.getElementById('debug').innerHTML = "the second character in wordString is start of a newline ( < br > )";
              }
              else {
                if (wordString.substring(0,1) == " ") {
                  document.getElementById('space-alert').style.color = "red";
                  spacebarError = true;
                }
                temp += wordString.substring(0, 1);
                input += wordString.substring(0, 1).fontcolor('red'); //event.key;
                wordString = wordString.substring(1, wordString.length);
                document.getElementById('debug').innerHTML = "incorrect letter";
              }
              // document.getElementById('wpm').innerHTML = temp;
              // document.getElementById('timer').innerHTML = input;

              // if (totalWords%5 == 0) {
              //   perma = "";
              // }
              document.getElementById('wpm').innerHTML = totalWords; //ENABLE THIS <----------------------------------------------------<------------------------------------
              // input = input.substring(0, input.length-1)+"<u>"+input.substring(input.length-1, input.length)+"</u>";
              document.getElementById('words').innerHTML = perma + input.fontcolor('green') + wordString.substring(0, 1).bold().fontcolor('#fff') + wordString.substring(1, wordString.length).fontcolor("#bbb");
            }
            else {
              //quit or new game
              if (event.key == "Tab") {
                //check for enter or some shit and then run the function
                document.getElementById('words-placeholder').style.visibility = "hidden";
                document.getElementById('words').style.visibility = "visible";
                document.getElementById('debug').innerHTML = " starting new game";
                start();
              }
            }

            event.preventDefault();
        }, true);

        
function start() {
  document.getElementById('fifteen').style.visibility = "visible";
  document.getElementById('thirty').style.visibility = "visible";
  document.getElementById('sixty').style.visibility = "visible";

  wordString = "";
  input = "";
  perma = "<br>";
  newlineCounter = 1;
  totalWords = 0;
  rawCharacters = 0;
  corCharacters = 0;
  startGame = false;
  tempString = "";
  temp = "";

  if (_15 == true) {
    totalSeconds = 15;
  }
  else if (_30 == true) {
    totalSeconds = 30;
  }
  else if (_60 == true) {
    totalSeconds = 60;
  }
  document.getElementById('timer').innerHTML = totalSeconds;
  secCount = 0;
  
  timer = setInterval(setTime, 1000);

  checkTimer = true;

  document.getElementById('display-wpm').innerHTML = ""
  document.getElementById("display-raw-characters").innerHTML = ""; 
  document.getElementById('display-characters').innerHTML = "";

  //100 words generated, appended to string variable 'wordString' and sent to <div id='words'></div>
  for(var i=0; i < 500; i++) {

    //generate random number from 0 to 499
    random = Math.floor(Math.random() * Words.length);

    if(newlineCounter >= 9) {
      wordString += "<br>";
      newlineCounter = 1;
    }
    
    //append each word to string and add whitespace between each
    if (wordString.length == 0) {
      wordString = Words[random] + " ";
    }
    else {
      wordString += Words[random];
      wordString += " ";
    }
    newlineCounter++;
  } 

  document.getElementById('words').innerHTML = "<br>" + wordString.fontcolor("#bbb");
  document.getElementById('debug').innerHTML = "DONE START()";
}