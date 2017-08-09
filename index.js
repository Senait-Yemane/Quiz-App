//object variale with keys that have number values. rightOption key is to be later determined.
var score = {
  correct: 0,
  incorrect: 0,
  questionTracker: 0,
  rightOption: null
};

var questions = [ 
  {
  question: "Which state in the U.S. has a city named Santa Clause?",
  options: [ "Arkansas", "Nebraska", "Colorado", "Indiana"],
  answer: 3,
  image: 'https://badarchaeology.files.wordpress.com/2009/12/demre_santa_claus_small.jpg'
  },
  { 
  question: "Which is the largest body of fresh water in the world?",
  options: ["Lake Superior", "Lake Michigan", "Caspian Sea", "Lake Victoria"],
  answer: 0,
  image: 'http://wpnature.com/wp-content/uploads/2016/08/lakes-lake-mcdonald-montana-sky-glacier-national-park-summer-beautiful-forest-clouds-crystal-waters-mountain-jeclo-modern-image-1920x1030.jpg'
  },
  { 
  question: "Which is the smallest country, and home to the biggest church in the world at only 0.2 square miles?",
  options: ["Vatican City", "Maldives", "Monaco", "Grenada"],
  answer: 0,
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Westminster_Abbey_north_transept_TTaylor_sky_adj.JPG'
  },
  { 
  question: "Which mountain is considered to be closest to the moon?",
  options: [ "Mount Everest", "Mount Chimborazo", "Mauna Kea", "Mount Kilimanjaro"],
  answer: 1,
  image:'http://hunsci.com/data/out/147/643661.jpeg'
  },
  { 
  question: "Which continent covers all four hemispheres in the world?",
  options: [ "Antartica", "South America", "Africa", "Asia"],
  answer: 2,
  image:'http://elizabethhagan.com/wp-content/uploads/2014/02/world.jpeg'
  },
  { 
  question: "With China being the third largest country in the world,it shares its borders with a total  of 14 countries.  Which one of these countries does China not share a border with?",
  options: ["Nepal", "Vietnam", "Thailand", "North Korea"],
  answer: 2,
  image: 'https://1.bp.blogspot.com/-dbH0qHXpf2c/VtfJUBEzLpI/AAAAAAAAAFE/9gvUBjcaz3E/s1600/Panjin-Red-beach-china.jpg'
  },
  { 
  question: "Ninety percent of the world's population lives in which hemisphere?",
  options: ["Northern", "Western", "Southern", "Eastern"],
  answer: 0,
  image:'http://thewallpaper.co/wp-content/uploads/2016/03/city-sunny-people-street-hd-city-wallpapers-places-beautiful-place-wallpaper-cool-city-images-free-city-photos-best-town-city-images-for-windows-large-places-1600x1020.jpg'
  },
  { 
  question: "Which state in the U.S. has three times as may cows as it does people?",
  options: [ "Wyoming", "Ohio", "Washington", "Montana"],
  answer: 3 ,
  image:'https://hoosieragtoday.com/wp-content/uploads/2017/06/dairy-cow.jpg'
  },
  { 
  question: "At 134.1 degrees Fahrenheit, where was the highest temperatire ever recorded on Earth?",
  options: ["Death Valley, CA US", "Wadi Kalfa, Sudan", "Timbuktu, Mali", "Coober Pedy, Australia"],
  answer: 0 ,
  image: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/03/The-most-beautiful-desert-landscapes-of-the-World33__880.jpg'
  },
  { 
  question: "With Qatar ranking #1 as the richest country in the world with 141,543 GDP per capita, which is the second richest country in the world, according to the World Bank, 2016?",
  options: ["Luxembourg", "Singapore", "United States", "Saudi Arabia"],
  answer: 0,
  image:'https://1.bp.blogspot.com/--d1kF-6FbPw/Vs4cQhuMpOI/AAAAAAAAEbs/fephSpjn8is/s640/Qatar%2Battractions.jpg'
  },
];

 

// Function for checking if selected option is the correct answer.
function correctAnswer(score,options) {
  console.log("I am the correctAnswer function");
  // if option value converted into index in options key is equal to the answer which corresponds to the particular questionTracker index in the score object with the questions array.
  if(parseInt(options) === questions[score.questionTracker].answer) {
    //score object is correct, increasing the value of the correct key up by 1 increment
    score.correct++;
    //the rightAnswer key in the score object variable then gets the boolean value of true
    score.rightOption = true;
    console.log("This option is correct");
  }
  else {
    //otherwise score object is incorrect, inceasing the value of the incorrect key up by 1 increment
    score.incorrect++;
    //the rightAnswer key in the score object variable then gets the boolean value of false
    score.rightOption = false;
    console.log("This option is incorrect");
  }
}

//This function will let the user know if the answer is correct or incorrect.  Function variable renderFeedback that holds 2 arguments (score and element).

function  renderFeedback(score, element) {
  var html = "";
  console.log("I am the renderFeedback function");
  //if statement for the key value of rightOption in the object score is true
  if (score.rightOption) {
    //then h2 html element comes back with a correct response
    html = '<div class="col-12"><h2>Great Job! Your answer was correct!</h2></div>';
    html += '<div class= "col-4"><img class="feedback-image" src="https://media4.giphy.com/media/3o72F6nIZRlfn5V8B2/200.webp#0-grid1" height="350" width="350"></div>';
    console.log("I am the correct response");
  } else {
    //otherwise h2 html element comes back with an incorrect response + the correct answer by accessing 1.the particluar question in the questions array, 2.with the particular option in the options array in the questions array, 3.with the corresponding answer.
     html = '<div class= "col-12"><h2>Sorry, your are incorrect. The correct answer is ' + 
               questions[score.questionTracker].options[questions[score.questionTracker].answer] + '</h2></div>';
     html += '<div class="col-4"><img class="feedback-image" src="https://media1.giphy.com/media/CaiVJuZGvR8HK/200w.webp#0-grid1" height="350" width="350"></div>';
    console.log("I am the incorrect response");
  }
  //if statement for the question Tracker which is the current questionTracker
  //if the questionTracker key value in the score object is equal to 1 less than the length of the questions array
  if (score.questionTracker === questions.length - 1) {
    //add html button element wrapped in a form element that the user can click to check their score
    html += '<div class="container"><div class="col-1"><form class="next"><button type="submit">How did I do?</button></form>';
    console.log("I am the 'How did I do' button");
    
  } else {
    //otherwise add html button element wrapped in a form element that the user can click to move on to the next question
    html += '<form class="next"><button type="submit">Next Question</button></form></div></div>';
    console.log("I am the next button");
  }
  //calling html element with the html variable
  element.html(html);
  
}

//function to render a particular question to its matching options
//function renderQuestion with two arguments(score, element)
function renderQuestion(score, element) {
  console.log("I am the renderQuestion function");
  //new local variable which is an html form element 
  var html = '<form class="question">';
  //add a paragraph element to the form element which adds 1 to the string of the questionTracker key value from the score object, followed by a forward slash, followed by the number of the length of the questions array, followed by a colon, folowed by the particular question key value in the particular questions array with the corresponding questionsTracker key value in the score object
  
  html += '<div class="col-12"><h3>'+ (score.questionTracker + 1).toString() + '/' + questions.length.toString() + ': ' + questions[score.questionTracker].question + '</h3></div>';
  console.log("I am the html paragraph element stating the question");
  //for loop with a variable index (i) starting at 0, when i is less than the questions array, and options array, move on to the next increment.
  for (var i = 0; i < questions[score.questionTracker].options.length; i++) {
    //add to the html variable an input element with a radio type that shows the options key value as multiple choice.  Input is required.  The value is equal to the index of options key value array within the questions array at the corresponding index of the questionTracker key value from the score object, each option is then followed by a line break.
   html += '<div class="col-3"><input class="answers" type="radio" name="option" value="'+ i + '" required></div>' 
          + questions[score.questionTracker].options[i];
  }
    console.log("I am the required input radio button");
    html += '<div class="col-4"><img class="question-image" src= ' + questions[score.questionTracker].image  + '></div>';
 
  //after an input is selected, the user is allowed to click on the 'Submit Answer' button.
  // html button element is added with a submit type named 'Submit Answer', and the form element that opens at the beginning of this function with the class="question" is finally closed.
  html += '<div class= "col-1"><button class="submit" type="submit">Submit Answer</button></div></form>';
  //calling the html element with the html variable.
  console.log("I am the submit answer button");
  element.html(html);

}

//function renderStarterPage with 2 arguments (score object and element)
function renderStarterPage(score, element) {
  //new variable, html h2 element 
  var html = '<h2> A Fun Geography Quiz That Just Might Surprise You!!!</h2>';
  //add form element to to html with an id of "starting-page"
  html += '<form id="starting-page">'; 
  //add button element to html  with a 'Start Quiz' button-close form element
  html += '<div class="col-1"><button class="start" type="submit">Start Quiz</button></div></form>';
  //calling html element
  element.html(html);

}

//jquery event listener function for on click, submit type, question class
$(document).on("submit", ".question", function(event) {
  console.log("I am the on click event listener");
  event.preventDefault();
  //new variable answer is equal to input html tag selector with an attribute name=option, whichever option the user selected, or checked.  Get that value.
  var option = $('input[name=option]:checked').val();
  //calling correctAnswer function
  correctAnswer(score, option);
  //calling renderFeedback function with 2 arguments(score object, and class=container selector)
  renderFeedback(score, $(".container"));
});
//jquery next question on click event listener class=next (next button)
$(document).on("submit", ".next", function(event) {
  event.preventDefault();
  //next increment of the questionTracker key value from the score object. 
  score.questionTracker++;
  //if statement: if the questionTracker key value in the score object is greater than the length of the questions array minus one (which means all of the questions have been rendered)
  if (score.questionTracker > questions.length - 1) {
    //new variable, html h2 element with a string + the value of the correct key in the score object. (States how many questions the user got correct)
    var html = '<h2>Congratulations on finishing! You got ' + score.correct.toString() + '/' + questions.length.toString() + ' correct.</h2>';
    html += '<img (https://ak5.picdn.net/shutterstock/videos/1063363/thumb/1.jpg)>';
    //add html form element with a class="retart"
    html += '<form class="restart">';
    //add html button element with the name="restart-button", identified with "Start Again".  Close form element.
    html +=  '<button type="submit" name="restart-button">Start Again</button></form>';
    $(".container").html(html);
  } else {
    //otherwise call the renderQuestion function, which will allow the next question in the array to show.
    renderQuestion(score, $(".container"));
  }
});
//jquery function for  on click event listener for the starting page button
$(document).on("submit", "#starting-page", function(event) {
  event.preventDefault();
  //call the renderQuestion function with 2 arguments(score object and selector class=container)
  renderQuestion(score, $(".container"));
});
//calling renderStarterPage function on load with a container class selector
renderStarterPage(score, $(".container"));
























