function Quiz(questions){
    this.questions = questions;
    this.index = 0;
    this.marks = 0;
}
Quiz.prototype.getIndex = function(){
   return this.questions[this.index];
}
Quiz.prototype.end = function(){
    return this.questions.length === this.index;
}
Quiz.prototype.guess = function(answer){
    if(this.getIndex().correctAnswer(answer)){
        this.marks++;
    }
    this.index++;

}