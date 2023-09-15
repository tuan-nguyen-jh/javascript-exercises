// Define the decision tree as a nested array
const questionsData = [
  ["Do you like animals?", ["Yes", "No"], [1, 2]],
  ["Which type of animal do you prefer?", ["Cats", "Dogs"], [3, 4]],
  ["Why not?", ["Allergic", "Not interested"], [5, 6]],
  ["What is your favorite type of cat?", ["England", "Egypt"], []],
  ["What is your favorite type of dog?", ["Labrador", "Golden Retriever"], []],
  ["You prefer dogs, great choice!", [], []],
  ["You prefer cats, great choice!", [], []],
];

class DecisionTree {
  constructor(data) {
    this.questions = data;
    this.currentQuestionId = 0;
  }

  moveToNext(answerIndex) {
    const nextQuestionId = this.questions[this.currentQuestionId][2][answerIndex];
    if (nextQuestionId === undefined) {
      throw new Error("Invalid answer index or end of the tree reached.");
    }
    this.currentQuestionId = nextQuestionId;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionId][0];
  }

  getAnswer() {
    return this.questions[this.currentQuestionId][1];
  }

  getQuestionById(questionId) {
    if (questionId < 0 || questionId >= this.questions.length) {
      throw new Error("Invalid question ID.");
    }
    return this.questions[questionId][0];
  }

  addQuestion([ parentQuestionId, question, answers, childrenQuestionId = [] ]) {
    const newQuestionId = this.questions.length;
    this.questions.push([question, answers, childrenQuestionId]);

    if (parentQuestionId >= 0) {
      const parentQuestion = this.questions[parentQuestionId];
      parentQuestion[2].push(newQuestionId);
    }

    return newQuestionId;
  }
}

const decisionTree = new DecisionTree(questionsData);
console.log(decisionTree)

console.log(decisionTree.getCurrentQuestion()); // "Do you like animals?"
console.log(decisionTree.getAnswer()); // ["Yes", "No"]

decisionTree.moveToNext(0); // User selects "Yes"
console.log(decisionTree.getCurrentQuestion()); // "Which type of animal do you prefer?"
console.log(decisionTree.getAnswer()); // ["Cats", "Dogs"]

decisionTree.moveToNext(0); // User selects "Cats"
console.log(decisionTree.getCurrentQuestion()); // "What is your favorite type of cat?"
console.log(decisionTree.getAnswer()); // ["England", "Egypt"]

const newQuestion = [6, "Do you prefer indoor or outdoor cats?", ["Indoor", "Outdoor"], [8, 9]]
const newQuestionId = decisionTree.addQuestion(newQuestion);
console.log(decisionTree)
console.log("Get question by id: ", decisionTree.getQuestionById(newQuestionId)); 
