const videoAnswer = document.getElementById('VideoAnswer');
const videoQuestion = document.getElementById('videoQuestion')
const learnRandom = document.getElementById('learn_random');
const simpleRandom = document.getElementById('simple_random');
const information = document.getElementById('information');
const wrongAnswer = document.getElementById('WrongContainer');
const rightAnswer = document.getElementById('RightContainer');
const theForm = document.getElementById('theForm');
const myInput = document.getElementById('myInput');
const containerOne = document.getElementById('containerOne');
const containerTwo = document.getElementById('containerTwo');
const containerThree = document.getElementById('containerThree');



let firstArray = [];
let secondArray = [];
let thirdArray = [];
let numbers = [];
let countNumber = 0
let videoNumb = 65
let right = 0;
let turn = 1;






///==============================array function=============================================================
const getMyarray = (n)=>{
  
  
    const array1 = [];
    const array2 = [];
    const array3 = [];
  
    // First array: 1 to 3
    for (let i = videoNumb-2; i <= videoNumb; i++) {
      array1.push(i);
    }
  
    // Second array: 4 to 9
    for (let i = videoNumb - 8; i <= videoNumb; i++) {
      array2.push(i);
    }
  
    // Third array: 10 to 27
    for (let i = videoNumb - 26; i <= videoNumb; i++) {
      array3.push(i);
    }
  
    let arr = [];
    for (let i = 1; i <= videoNumb - 27; i++) {
        arr.push(i);
    }
  
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Random index between 0 and i
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap arr[i] and arr[j]
    }



    // Shuffle the input array using Fisher-Yates (Knuth) shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  // Split the shuffled array into three parts
  const array11 = arr.slice(0, 2);   // Index 0 to 4
  const array22 = arr.slice(3, 9);  // Index 5 to 9
  const array33 = arr.slice(10, 28); // Index 10 to 29

  firstArray = [...array1 , ...array11];
  secondArray = [...array2 , ...array22];
  thirdArray = [...array3 , ...array33];

  for (let i = firstArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstArray[i], firstArray[j]] = [firstArray[j], firstArray[i]]; // Swap elements
  }
  for (let i = secondArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [secondArray[i], secondArray[j]] = [secondArray[j], secondArray[i]]; // Swap elements
  }
  for (let i = thirdArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [thirdArray[i], thirdArray[j]] = [thirdArray[j], thirdArray[i]]; // Swap elements
  }
}
///==================================array function end=========================================================
const getSimpleRandom = (n)=>{
  let arr = [];
  for (let i = 1; i <= n; i++) {
      arr.push(i);
  }

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));  // Random index between 0 and i
      [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap arr[i] and arr[j]
  }
  firstArray = arr.slice(0, 5);   // Index 0 to 4
  secondArray = arr.slice(6, 21);  // Index 5 to 9
  thirdArray = arr.slice(22, 67); // Index 10 to 29
};

theForm.addEventListener('submit' , (event)=>{
  event.preventDefault();
  const theValue = myInput.value;
  //......................................................................................
  if (theValue == "yes") {
    
    /////////////////////////////////////////////////////////////////////////////////

    rightAnswer.style.zIndex = "4"
    setTimeout(() => {
      rightAnswer.style.zIndex = "-1"
    }, 1000);

         
    videoAnswer.src = `./answers/answer${numbers[countNumber]}.mp4`
    videoAnswer.style.zIndex = '3';
    information.style.zIndex = '-1';
    
    videoAnswer.addEventListener('ended',() => {
      videoAnswer.style.zIndex = '-1';
      videoQuestion.style.zIndex = '3';
     videoQuestion.src = `./questions/question${numbers[countNumber]}.mp4`
     
      })
     
      
      if (countNumber < 4) {
        const pass = document.getElementById(`elemSone${countNumber}`);
        const pass2 = document.getElementById(`elemSone${countNumber + 1}`);
        
        
          pass.style.backgroundColor = "red"
        
      
     
      if (countNumber < 4) {
        pass2.style.border = "2px solid green"
        pass.style.border = "1px solid black"
      }
      
      
      
        countNumber ++
        right ++ 
        console.log(turn)
        console.log(right)
        console.log(countNumber)
      
      } else {
        
        const passPrev = document.getElementById(`elemSone${countNumber}`);
        
        
          passPrev.style.backgroundColor = "red"
        

 
        
        passPrev.style.border = "1px solid black"
        countNumber = 0
        const pass = document.getElementById(`elemSone${countNumber}`);
        const pass2 = document.getElementById(`elemSone${countNumber + 1}`);
        



        if (countNumber > 0) {
          passPrev.style.backgroundColor = "red"
        }
        pass.style.border = "2px solid green"
        
        
        right++
        countNumber = 0;
        console.log( "turn"+turn)
        console.log("right"+right)
        console.log("countnumber"+countNumber)
      }
      if (turn == 1 && right == 5) {
        turn = 2
        right = 0;
        const pass = document.getElementById(`elemSone${countNumber}`);
    pass.style.border = "1px solid black"
        countNumber = 0
      }

      
      
     
    ////////////////////////////////////////////////////////////////////////////////////
  }else{

    if (countNumber < 4) { 
      countNumber ++
      const passPrev = document.getElementById(`elemSone${countNumber-1}`);
    const pass = document.getElementById(`elemSone${countNumber}`);
    passPrev.style.border = "1px solid black"
      pass.style.border = "2px solid green"
      
    }else{
      
      countNumber = 0
      const passPrev = document.getElementById(`elemSone${4}`);
      const pass = document.getElementById(`elemSone${countNumber}`);
      passPrev.style.border = "1px solid black"
        pass.style.border = "2px solid green"
        
    }
   
    ////////////////////////////////////////////////////////////////////////////////////
   
    wrongAnswer.style.zIndex = "4"
    setTimeout(() => {
      wrongAnswer.style.zIndex = "-1"
    }, 1000);
  
  videoQuestion.src = `./questions/question${numbers[countNumber]}.mp4`
  
  
  videoQuestion.style.zIndex = '3';
  videoAnswer.style.zIndex = '-1';
  information.style.zIndex = '-1';
    
  videoQuestion.addEventListener('ended',() => {
    videoQuestion.style.zIndex = '-1';
    information.style.zIndex = '3';
    })

    
    
    
     
      if (countNumber < 5) { 

        console.log( "turn"+turn)
        console.log("right"+right)
        console.log("countnumber"+countNumber)

} else {
        const pass = document.getElementById(`elemSone${countNumber}`);
        pass.style.border = "2px solid green"
        countNumber = 0
        console.log(numbers)
      }
  
      
    ////////////////////////////////////////////////////////////////////////////////////////////
  }
  myInput.value = ''
});
//...........................................................................................




/////////////////////////////////////START///////////////////////////////////////////////////////////


learnRandom.addEventListener('click',() => {

        getMyarray(videoNumb)
        numbers = firstArray
        videoQuestion.src = `./questions/question${numbers[countNumber]}.mp4`
        videoQuestion.style.zIndex = '3';
         videoAnswer.style.zIndex = '-1';
         information.style.zIndex = '-1';
         
         videoQuestion.addEventListener('ended',() => {
          videoQuestion.style.zIndex = '-1';
          information.style.zIndex = '3';
          
          })
     
          

          
          
   
  });
  simpleRandom.addEventListener('click',() => {

    getSimpleRandom(videoNumb)
    numbers = firstArray
    videoQuestion.src = `./questions/question${numbers[countNumber]}.mp4`
    videoQuestion.style.zIndex = '3';
     videoAnswer.style.zIndex = '-1';
     information.style.zIndex = '-1';
     
     videoQuestion.addEventListener('ended',() => {
      videoQuestion.style.zIndex = '-1';
      information.style.zIndex = '3';
      
      })
     
      for (let i = 0; i < 5; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "QuestionElements";
        newDiv.id = `elemSone${i}`
        containerOne.appendChild(newDiv)
    }
      
    for (let i = 0; i < 15; i++) {
      const newDiv = document.createElement("div");
      newDiv.className = "QuestionElements";
      newDiv.id = `elemStwo${i}`
      containerTwo.appendChild(newDiv)
  }
  for (let i = 0; i < 45; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "QuestionElements";
    newDiv.id = `elemSthree${i}`
    containerThree.appendChild(newDiv)
}

const pass = document.getElementById(`elemSone${countNumber}`);
  pass.style.border = "2px solid green"

});


  


