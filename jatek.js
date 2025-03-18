console.log('booting game');

let questionIndex = -1;

const qa = [ // the first answer is always the correct one
   {
      "Mi a bináris számrendszer?": [
         "Egy rendszer, ami csak a 0 és 1 számjegyeket használ",
         "Egy rendszer, ami a 0–9 számjegyeket tartalmazza",
         "Egy rendszer, ami 0, 1, 2 számjegyeket használ",
         "Egy rendszer, ami csak páros számokat ábrázol"
      ]
   },
   {
      "Milyen számjegyeket használ a bináris rendszer?": [
         "0 és 1",
         "1 és 2",
         "0 és 2",
         "1, 2 és 3"
      ]
   },
   {
      "Mi a 2^3 értéke?": [
         "8",
         "6",
         "9",
         "7"
      ]
   },
   {
      "Melyik a decimális 13 helyes bináris alakja?": [
         "1101",
         "1011",
         "1001",
         "1110"
      ]
   },
   {
      "Mit jelent a \"bit\" rövidítése?": [
         "Binary digit",
         "Binary integer",
         "Bit digit",
         "Byte information"
      ]
   },
   {
      "Mi a 253 helyes bináris alakja?": [
         "11111101",
         "10101010",
         "11001100",
         "01111111"
      ]
   },
   {
      "Miért előnyös a bináris rendszer a számítástechnikában?": [
         "Könnyen ábrázolható elektromos jelekkel",
         "Bonyolultabb műveleteket tesz lehetővé",
         "Több számjegyet használ, mint a decimális",
         "Nagyobb számokat ábrázol"
      ]
   }
];

function nextQuestion() {
   questionIndex++;
   if (questionIndex < qa.length) {
      const question = Object.keys(qa[questionIndex])[0];
      const answers = qa[questionIndex][question];
      const answersShuffled = answers.slice().sort(() => Math.random() - 0.5);


      const elAnswers = document.querySelectorAll('.answer');

      for (let i = 0; i < elAnswers.length; i++) {
         elAnswers[i].innerText = answersShuffled[i];
      }

   } else {
      alert('congrats!');
   }
}

function onAnswer(elAnswer) {
   const answer = elAnswer.innerText;
   const question = Object.keys(qa[questionIndex])[0];
   const correctAnswer = qa[questionIndex][question][0];
   if (answer === correctAnswer) {
      console.log('correct!');
      nextQuestion();
   } else {
      elAnswer.classList.add('hibasgomb');
      console.log('wrong!');
   }
}

document.querySelectorAll('.answer').forEach(elAnswer => elAnswer.addEventListener('click', () => onAnswer(elAnswer)));

nextQuestion();