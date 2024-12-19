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
const theEnd = document.getElementById('theEnd');



let firstArray = [];
let secondArray = [];
let thirdArray = [];
let numbers = [];
let countNumber = 0;
let stopNumber = 4;
let videoNumb = 65
let right = 0;
let turn = 1;







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
  secondArray = arr.slice(5, 20);  // Index 5 to 9
  thirdArray = arr.slice(20, 70); // Index 10 to 29
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
     
      
      if (countNumber < stopNumber) {

        
        const pass = document.getElementById(`elemSone${countNumber}`);
        const pass2 = document.getElementById(`elemSone${countNumber + 1}`);

        let pprr = pass
        let ttaa = pass2


        const pass11 = document.getElementById(`elemStwo${countNumber}`);
        const pass22 = document.getElementById(`elemStwo${countNumber + 1}`);

        const pass3 = document.getElementById(`elemSthree${countNumber}`);
        const pass33 = document.getElementById(`elemSthree${countNumber + 1}`);

        if (turn == 2) {
          pprr = pass11
          ttaa = pass22
        }
        if (turn == 3) {
          pprr = pass3
          ttaa = pass33
        }


        
        
        pprr.style.backgroundColor = "red"
        
      
     
      if (countNumber < stopNumber) {
        ttaa.style.border = "2px solid green"
        pprr.style.border = "1px solid black"
      }
      
      
      
        countNumber ++
        right ++ 
      
      } else {
        if (turn == 2) {
          numbers = secondArray
          stopNumber = 14;
        }
        if (turn == 3) {
          numbers = thirdArray
          stopNumber = 44
        }
        
        const passPrev = document.getElementById(`elemSone${countNumber}`);
        const passPrev1 = document.getElementById(`elemStwo${countNumber}`);
        const passPrev2 = document.getElementById(`elemSthree${countNumber}`);

        let ppprrrev = passPrev;

        if (turn == 2) {
          ppprrrev = passPrev1
        }
        if (turn == 3) {
          ppprrrev = passPrev2
        }

        
        
        ppprrrev.style.backgroundColor = "red"
        

 
        
        ppprrrev.style.border = "1px solid black"
        countNumber = 0
        const pass = document.getElementById(`elemSone${countNumber}`);
        

        let pprr = pass
        


        const pass11 = document.getElementById(`elemStwo${countNumber}`);
        

        const pass3 = document.getElementById(`elemSthree${countNumber}`);
        

        if (turn == 2) {
          pprr = pass11
          
        }
        if (turn == 3) {
          pprr = pass3
          
        }
        



        if (countNumber > 0) {
          ppprrrev.style.backgroundColor = "red"
        }
        pprr.style.border = "2px solid green"
        
        
        right++
        countNumber = 0;

      }
      if (turn == 1 && right == 5) {
        turn = 2
        right = 0;
        const pass = document.getElementById(`elemSone${countNumber}`);
        console.log("hello")
        let pprr = pass
        const pass11 = document.getElementById(`elemStwo${countNumber}`);
        const pass3 = document.getElementById(`elemSthree${countNumber}`);
        if (turn == 2) {
          pprr = pass11  
        }
        if (turn == 3) {
          pprr = pass3
          
        }
        pprr.style.border = "1px solid black"
        countNumber = 0
        for (let i = 0; i < 5; i++) {
         const bar =  document.getElementById(`elemSone${[i]}`);
          bar.style.backgroundColor = "green"
          bar.style.border = "1px solid black"
        }
        const pamm = document.getElementById(`elemStwo${0}`);
        pamm.style.border = "2px solid green"
      }
      if (turn == 2 && right == 15) {
        turn = 3
        right = 0;
        const pass = document.getElementById(`elemSone${countNumber}`);
        let pprr = pass
        const pass11 = document.getElementById(`elemStwo${countNumber}`);
        const pass3 = document.getElementById(`elemSthree${countNumber}`);
        if (turn == 2) {
          pprr = pass11  
        }
        if (turn == 3) {
          pprr = pass3
          
        }
        pprr.style.border = "1px solid black"
        countNumber = 0
        for (let i = 0; i < 15; i++) {
          const bar =  document.getElementById(`elemStwo${[i]}`);
           bar.style.backgroundColor = "green"
           bar.style.border = "1px solid black"
         }
         const pamm = document.getElementById(`elemSthree${0}`);
         pamm.style.border = "2px solid green"
      }
      if (turn == 3 && right == 45) {
        turn = 4
        right = 0;
        const pass = document.getElementById(`elemSone${countNumber}`);
        let pprr = pass
        const pass11 = document.getElementById(`elemStwo${countNumber}`);
        const pass3 = document.getElementById(`elemSthree${countNumber}`);
        if (turn == 2) {
          pprr = pass11  
        }
        if (turn == 3) {
          pprr = pass3
          
        }
        pprr.style.border = "1px solid black"
        countNumber = 0
      }

      if (turn == 2) {
        numbers = secondArray
        stopNumber = 14;
      }
      if (turn == 3) {
        numbers = thirdArray
        stopNumber = 44
      }
      
     

     videoAnswer.addEventListener('ended',() => {
     
     theEnd.style.zIndex = turn == 4 ? "5" : "-2"
     
    })

     
    ////////////////////////////////////////////////////////////////////////////////////
  }else{

    if (countNumber < stopNumber) { 
      countNumber ++
      const passPrev = document.getElementById(`elemSone${countNumber-1}`);
      const pass = document.getElementById(`elemSone${countNumber}`);

      let rrarr = passPrev;
      let lerro = pass ;

      const passPrev1 = document.getElementById(`elemStwo${countNumber-1}`);
      const pass1 = document.getElementById(`elemStwo${countNumber}`);

      const passPrev2 = document.getElementById(`elemSthree${countNumber-1}`);
      const pass2 = document.getElementById(`elemSthree${countNumber}`);
      if (turn == 2) {
        rrarr = passPrev1
        lerro = pass1
        
      }
      if (turn == 3) {
        rrarr = passPrev2
        lerro = pass2
        
      }











      rrarr.style.border = "1px solid black"
      lerro.style.border = "2px solid green"
      
    }else{
      
      countNumber = 0
      const passPrev = document.getElementById(`elemSone${stopNumber}`);
      const pass = document.getElementById(`elemSone${countNumber}`);



      let rrarr = passPrev;
      let lerro = pass ;

      const passPrev1 = document.getElementById(`elemStwo${countNumber-1}`);
      const pass1 = document.getElementById(`elemStwo${countNumber}`);

      const passPrev2 = document.getElementById(`elemSthree${countNumber-1}`);
      const pass2 = document.getElementById(`elemSthree${countNumber}`);
      if (turn == 2) {
        rrarr = passPrev1
        lerro = pass1
        
      }
      if (turn == 3) {
        rrarr = passPrev2
        lerro = pass2
        
      }















      rrarr.style.border = "1px solid black"
      lerro.style.border = "2px solid green"
        
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

    
    
    
     
      if (countNumber < stopNumber) { 

        

} else {
        const pass = document.getElementById(`elemSone${countNumber}`);

        const pass1 = document.getElementById(`elemStwo${countNumber}`);

        const pass2 = document.getElementById(`elemSthree${countNumber}`);
       
        let tramp = pass;

        if (turn == 2) {
          tramp = pass1
        }

        if (turn == 3) {
          tramp = pass2
        }




        tramp.style.border = "2px solid green"
        countNumber = 0
        console.log(numbers)
      }
  
      
    ////////////////////////////////////////////////////////////////////////////////////////////
  }
  myInput.value = ''

  if (turn == 2) {
    numbers = secondArray
    stopNumber = 14;
  }
  if (turn == 3) {
    numbers = thirdArray
    stopNumber = 44
  }

  
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


  


const firstCont = document.getElementById('firstCont');
const secondCont = document.getElementById('secondCont');
const thirdCont = document.getElementById('thirdCont');
const startButton = document.getElementById('start');
const input = document.getElementById('input');



// Create divs in each container
function createDivs(container, array) {
    array.forEach(num => {
        const div = document.createElement('div');
        div.dataset.index = num; // Assign index to each div
        div.textContent = num; // Set the text content from the arrayf
        container.appendChild(div);
    });
}

createDivs(containerOne, firstArray);
createDivs(containerTwo, secondArray);
createDivs(containerThree, thirdArray);

const containers = [
    Array.from(containerOne.children),
    Array.from(containerTwo.children),
    Array.from(containerThree.children)
];

let currentContainerIndex = 0;
let currentIndexInContainer = 0;
let blueDivs = new Set();

function highlightDiv(containerIndex, indexInContainer) {
    containers.forEach(container => container.forEach(div => div.style.border = '1px solid white'));
    const currentDiv = containers[containerIndex][indexInContainer];
    currentDiv.style.border = '3px solid red';
    console.log(`Div number: ${currentDiv.textContent}`);
}

function getNextDivIndex(containerIndex, indexInContainer) {
    let container = containers[containerIndex];
    let nextIndex = (indexInContainer + 1) % container.length;

    while (blueDivs.has(container[nextIndex])) {
        nextIndex = (nextIndex + 1) % container.length;
        if (nextIndex === indexInContainer) {
            // All divs in the current container are blue
            return null;
        }
    }

    return nextIndex;
}

simpleRandom.addEventListener('click', () => {
    currentContainerIndex = 0;
    currentIndexInContainer = 0;
    blueDivs.clear();
    highlightDiv(currentContainerIndex, currentIndexInContainer);
});

myInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const value = myInput.value.trim();
        myInput.value = '';

        const currentContainer = containers[currentContainerIndex];
        const currentDiv = currentContainer[currentIndexInContainer];

        if (value.toLowerCase() === 'yes') {
            currentDiv.style.backgroundColor = 'blue';
            blueDivs.add(currentDiv);
        }

        let nextIndex = getNextDivIndex(currentContainerIndex, currentIndexInContainer);
        if (nextIndex === null) {
            // Move to the next container if all divs in the current container are blue
            let allBlue = true;
            for (let container of containers) {
                if (container.some(div => !blueDivs.has(div))) {
                    allBlue = false;
                    break;
                }
            }

            if (allBlue) {
                console.log('The end');
                return;
            }

            do {
                currentContainerIndex = (currentContainerIndex + 1) % containers.length;
            } while (containers[currentContainerIndex].every(div => blueDivs.has(div)));

            // Mark the last div of the row blue before moving to the next row
            currentDiv.style.backgroundColor = 'blue';
            blueDivs.add(currentDiv);

            currentIndexInContainer = 0;
        } else {
            currentIndexInContainer = nextIndex;
        }

        highlightDiv(currentContainerIndex, currentIndexInContainer);
    }
});