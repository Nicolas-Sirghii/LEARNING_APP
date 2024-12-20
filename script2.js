const answerdata = {
    70: "a",
    69: "a",
    68: "a",
    67: "a",
    66: "a",
    65: "william shakespeare",
    64: "a",
    63: "a",
    62: "a",
    61: "a",
    60: "a",
    59: "a",
    58: "a",
    57: "a",
    56: "a",
    55: "a",
    54: "a",
    53: "a",
    52: "a",
    51: "a",
    50: "a",
    49: "a",
    48: "a",
    47: "tennis",
    46: "a",
    45: "a",
    44: "algeria",
    43: "a",
    42: "a",
    41: "a",
    40: "a",
    39: "a",
    38: "a",
    37: "a",
    36: "a",
    35: "a",
    34: "a",
    33: "1492",
    32: "a",
    31: "a",
    30: "a",
    29: "a",
    28: "a",
    27: "a",
    26: "a",
    25: "a",
    24: "a",
    23: "a",
    22: "a",
    21: "a",
    20: "a",
    19: "a",
    18: "a",
    17: "a",
    16: "a",
    15: "a",
    14: "a",
    13: "a",
    12: "a",
    11: "a",
    10: "a",
    9: "a",
    8: "a",
    7: "a",
    6: "a",
    5: "the kangaroo",
    4: "venus",
    3: "a",
    2: "a",
    1: "a",
    
    
   
  };

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




const firstCont = document.getElementById('firstCont');
const secondCont = document.getElementById('secondCont');
const thirdCont = document.getElementById('thirdCont');
const startButton = document.getElementById('start');
const input = document.getElementById('input');
const controls = document.getElementById("controls")
const subbb = document.getElementById("form")


const videoAnswer = document.getElementById('VideoAnswer');
const videoQuestion = document.getElementById('videoQuestion')
const learnRandom = document.getElementById('learn_random');
const simpleRandom = document.getElementById('simple_random');
const information = document.getElementById('mainContainer');
const wrongAnswer = document.getElementById('WrongContainer');
const rightAnswer = document.getElementById('RightContainer');
const theForm = document.getElementById('form');
const myInput = document.getElementById('input');
const containerOne = document.getElementById('containerOne');
const containerTwo = document.getElementById('containerTwo');
const containerThree = document.getElementById('containerThree');
const theEnd = document.getElementById('theEnd');




let numbers = [];
let countNumber = 0;
let stopNumber = 4;
let videoNumb = 65
let right = 0;
let turn = 1;



let finish = 0;










let firstArray = [44, 33, 47, 65, 5];
let secondArray = [4, 7, 70 ,8, 10, 1, 12, 66, 56, 15, 16, 43, 66, 19, 20];
let thirdArray = [33,34, 57, 29, 40, 11, 39, 60, 39, 59, 16, 17, 18, 19, 20 , 33, 34, 37, 29, 40, 11, 39, 60,
 39, 59, 16, 17, 18, 19, 2,33,34, 27, 29, 40, 11, 39, 60, 39, 59, 16, 17, 18, 19, 2];
 getSimpleRandom(65);

 startButton.addEventListener('click', () => {
    currentContainerIndex = 0;
    currentIndexInContainer = 0;
    blueDivs.clear();
    highlightDiv(currentContainerIndex, currentIndexInContainer);


    videoQuestion.src = `./questions/question${dd}.mp4`
    videoQuestion.style.zIndex = '3';
     videoAnswer.style.zIndex = '-1';
     information.style.zIndex = '-1';
     
     videoQuestion.addEventListener('ended',() => {
      videoQuestion.style.zIndex = '-4';
      information.style.zIndex = '1';
     controls.style.zIndex = "3"
      
      })
});

// Create divs in each container
function createDivs(container, array) {
    array.forEach(num => {
        const div = document.createElement('div');
        div.dataset.index = num; // Assign index to each div
        div.textContent = num; // Set the text content from the array
        container.appendChild(div);
    });
}

createDivs(firstCont, firstArray);
createDivs(secondCont, secondArray);
createDivs(thirdCont, thirdArray);

const containers = [
    Array.from(firstCont.children),
    Array.from(secondCont.children),
    Array.from(thirdCont.children)
];

let currentContainerIndex = 0;
let currentIndexInContainer = 0;
let blueDivs = new Set();
let dd = 0
let prev = []
const highlightDiv = (containerIndex, indexInContainer) => {
    containers.forEach(container => container.forEach(div => div.style.border = '1px solid white'));
    const currentDiv = containers[containerIndex][indexInContainer];
    dd = currentDiv.textContent
    prev.push(answerdata[dd])
    currentDiv.style.border = '3px solid red';
    
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



let theWord = "word"

input.addEventListener('keypress', event => {
    
    if (event.key === 'Enter') {
        event.preventDefault()
        const value = input.value.trim();
        input.value = '';

        const currentContainer = containers[currentContainerIndex];
        const currentDiv = currentContainer[currentIndexInContainer];
         theWord = value.toLowerCase()

             
        if (value.toLowerCase() == answerdata[dd]) {
            currentDiv.style.backgroundColor = 'blue';
            blueDivs.add(currentDiv);

            rightAnswer.style.zIndex = "4"
            setTimeout(() => {
              rightAnswer.style.zIndex = "-2"
            }, 1000);
        
                 finish ++


            videoAnswer.src = `./answers/answer${dd}.mp4`
            videoAnswer.style.zIndex = '3';
            information.style.zIndex = '-1';

            
                videoAnswer.addEventListener('ended',() => {

                    if (finish < 64) {
                        videoAnswer.style.zIndex = '-1';
                        videoQuestion.style.zIndex = '3';
                       videoQuestion.src = `./questions/question${dd}.mp4`
                    } else {
                        theEnd.style.zIndex = "4"
                    }
                  
                   });
        
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
                finish = true
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

            if (theWord !== prev[prev.length - 2]) {
                wrongAnswer.style.zIndex = "4"
                setTimeout(() => {
                  wrongAnswer.style.zIndex = "-1"
                }, 1000);
              
              videoQuestion.src = `./questions/question${dd}.mp4`
              
              
              videoQuestion.style.zIndex = '3';
              videoAnswer.style.zIndex = '-1';
              information.style.zIndex = '-1';
                
              videoQuestion.addEventListener('ended',() => {
                videoQuestion.style.zIndex = '-1';
                information.style.zIndex = '3';
                controls.style.zIndex = "4"
                
                })
            }  
        
       
    }
    

    
});



