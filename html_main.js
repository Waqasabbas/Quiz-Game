function combine(){
    if(quiz.end()){
        showScores();
    }
    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getIndex().text;
        var choices = quiz.getIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }
    showProgress();
    }
};
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        combine();
    }
}
function showProgress(){
    var currentQuestion = quiz.index + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestion + " of " + quiz.questions.length ;
}
function showScores(){
    var total = 10;
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id=\"score\"> You Score " + quiz.marks + " out of " + total + "</h2><br>" ;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    document.querySelector('.btn').addEventListener('click', function(){
        document.querySelector('.close').style.display = 'flex';
    });

};
var questions = [
    new Question ("HTML stand for?", ["Higher Text Marking Language","Hyper Text Markup Language","Hyper Tool Markup Language","Hyper Text Markup Line"],"Hyper Text Markup Language"),
    new Question ("Which tag use for paragraph?", ["b","em","p","q"],"p"),
    new Question ("Choose the correct HTML element for the largest heading: ", ["h1","h6","h2","h4"], "h1"),
    new Question ("What is the correct HTML element for line breaking", ["em","line-break","br","hr"], "br"),
    new Question ("Which character used to indicate an end tag?", ["/",":",";",","],"/" ),
    new Question ("Which of these element are all <\"table\"> element", ["thead,tr,td","tr,th,td","table,thead,td","td,t,th"],"tr,th,td"),
    new Question ("from which element you made number list in HTML?", ["ol","li","ul","dl"],"ol"),
    new Question ("What is the Extension for HTML?", ["index.html","INDEX.HTML","index.Html","index.hyperTextMarkUpLanguage"], "index.html"),
    new Question ("<\"a ____=\"#\"> choose the missing part:", ["src","href","ref","style"],"href"),
    new Question ("<\"input type=\"____\"> User need to enter his birthdate provide him correct type for birthdate", ["search","date","number","text"], "date")
];
 
var quiz = new Quiz(questions);
combine();