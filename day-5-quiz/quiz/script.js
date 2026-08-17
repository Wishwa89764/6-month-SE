// SAME questions you have - keep your 6 grades
const questionsByGrade = {
  6: [ { q: "ICT full form?", options: ["Information and Communication Technology","Internet Computer Tool","Info Comm Tech","Internet Tech"], ans:0 }, { q: "Which is input device?", options: ["Monitor","Printer","Keyboard","Speaker"], ans:2 }, { q: "1 Byte =?", options: ["8 Bits","4 Bits","16 Bits","1024 Bits"], ans:0 }, { q: "Permanent storage?", options: ["RAM","Hard Disk","Cache","CPU"], ans:1 }, { q: "CPU means?", options: ["Central Processing Unit","Computer Print Unit","Central Program","Control Unit"], ans:0 } ],
  7: [ { q: "OS means?", options: ["Operating System","Output System","Open System","Office System"], ans:0 }, { q: "Example of OS?", options: ["MS Word","Windows 10","Chrome","Excel"], ans:1 }, { q: "Internet is?", options: ["Single computer","Network of networks","One website","Software"], ans:1 }, { q: "URL means?", options: ["Uniform Resource Locator","Universal Link","Unique Locator","United Link"], ans:0 }, { q: "Word file extension?", options: [".exe",".docx",".jpg",".mp3"], ans:1 } ],
  8: [ { q: "Algorithm is?", options: ["Step by step solution","A computer","A virus","Hardware"], ans:0 }, { q: "Flowchart is?", options: ["Diagram of steps","Sales chart","Hardware","OS"], ans:0 }, { q: "Loop means?", options: ["Repeating steps","Stopping","One step","No step"], ans:0 }, { q: "Programming language?", options: ["Python","Mouse","Printer","Monitor"], ans:0 }, { q: "Variable?", options: ["Stores data","Printer","Monitor","OS"], ans:0 } ],
  9: [ { q: "Binary base?", options: ["2","10","8","16"], ans:0 }, { q: "Binary 101 =?", options: ["5","3","4","6"], ans:0 }, { q: "AND gate both 1 =?", options: ["1","0","10","11"], ans:0 }, { q: "Database?", options: ["Collection of data","Printer","Monitor","OS"], ans:0 }, { q: "Primary key?", options: ["Unique identifier","Duplicate","Virus","Hardware"], ans:0 } ],
  10: [ { q: "SDLC?", options: ["Software Development Life Cycle","System Data Cycle","Data Link Control","Development Logic"], ans:0 }, { q: "HTML is?", options: ["Markup Language","Programming","OS","Database"], ans:0 }, { q: "CSS for?", options: ["Styling pages","Storing data","Printing","OS"], ans:0 }, { q: "Python used for?", options: ["Web, AI, Data","Only printing","Only hardware","Only gaming"], ans:0 }, { q: "Not SDLC phase?", options: ["Planning","Design","Sleeping","Testing"], ans:2 } ],
  11: [ { q: "Encapsulation?", options: ["Hiding data","Showing all","Deleting","Printing"], ans:0 }, { q: "Inheritance?", options: ["Child gets parent","Deleting parent","Printing","No relation"], ans:0 }, { q: "IP address?", options: ["Unique device address","Software","Hardware","Virus"], ans:0 }, { q: "Normalization?", options: ["Reduce redundancy","Deleting DB","Printing","No use"], ans:0 }, { q: "E-commerce?", options: ["Buying online","Offline only","No commerce","Printing"], ans:0 } ]
};

let currentGrade=6, questions=[], current=0, score=0;
const urlGrade = new URLSearchParams(window.location.search).get('grade');
if(urlGrade) document.getElementById('studentGrade').value = urlGrade;

function startQuiz(){
  const name=document.getElementById('studentName').value;
  const grade=document.getElementById('studentGrade').value;
  if(!name){alert("Enter Your Name");return;}
  if(!grade){alert("Select Grade");return;}
  currentGrade=grade; questions=questionsByGrade[grade]; current=0; score=0;
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('quizBox').classList.remove('hidden');
  showQuestion();
}
function showQuestion(){
  const q=questions[current];
  document.getElementById('progressBar').style.width=`${((current+1)/questions.length)*100}%`;
  document.getElementById('quizProgress').innerText=`Grade ${currentGrade} • Q ${current+1}/${questions.length} • Score: ${score}`;
  document.getElementById('qBadge').innerText=`Q${current+1}`;
  document.getElementById('qGradeBadge').innerText=`Grade ${currentGrade}`;
  document.getElementById('questionText').innerText=q.q;
  const div=document.getElementById('options'); div.innerHTML="";
  q.options.forEach((opt,i)=>{
    div.innerHTML+=`<button onclick="checkAns(${i})" class="w-full text-left bg-[#f8f8f7] hover:bg-black hover:text-white border border-black/5 p-4 rounded-2xl font-bold transition-all hover:scale-[1.02]">${String.fromCharCode(65+i)}. ${opt}</button>`;
  });
}
function checkAns(sel){
  if(sel===questions[current].ans) score++;
  current++; if(current<questions.length) showQuestion(); else showResult();
}
function showResult(){
  document.getElementById('quizBox').classList.add('hidden');
  document.getElementById('resultBox').classList.remove('hidden');
  document.getElementById('resultGrade').innerText=currentGrade;
  document.getElementById('finalScore').innerText=`${score}/${questions.length}`;
  document.getElementById('passFail').innerText=score>=3?`✅ PASS - Well done!`:`❌ Keep learning - Try again`;
  document.getElementById('certName').innerText=document.getElementById('studentName').value;
  document.getElementById('certGrade').innerText=currentGrade;
  document.getElementById('certScore').innerText=`${score}/${questions.length}`;
}