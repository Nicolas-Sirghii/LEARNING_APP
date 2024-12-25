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

// Main arrays
let firstArray = [];
let secondArray = [];
let thirdArray = [];

// Function to generate random arrays with no zeros
const generateRandomArrays = (number) => {
if (number < 33) {
  throw new Error("Number must be at least 33 to generate arrays with the required sizes.");
}

// Helper function to create a descending array from a start number and length
const createDescendingArray = (start, length) =>
  Array.from({ length }, (_, i) => start - i);

// Helper function to generate a shuffled range of numbers
const generateShuffledRange = (size) =>
  Array.from({ length: size }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

// Helper function to combine and shuffle arrays, ensuring no zeros
const combineAndShuffleArrays = (arr1, arr2) =>
  [...arr1, ...arr2].filter((num) => num !== 0).sort(() => Math.random() - 0.5);

// Generate fixed arrays
const firstArrayFixed = createDescendingArray(number, 3);
const secondArrayFixed = createDescendingArray(number, 8);
const thirdArrayFixed = createDescendingArray(number, 23);

// Adjust number for remaining random arrays
const remainingNumber = number - 23;

// Generate shuffled arrays
const shuffledRange = generateShuffledRange(remainingNumber);
const firstArrayRandom = shuffledRange.slice(0, 2);
const secondArrayRandom = shuffledRange.slice(2, 9);
const thirdArrayRandom = shuffledRange.slice(9, 31);

// Combine fixed and random arrays, shuffle, and assign to main arrays
firstArray = combineAndShuffleArrays(firstArrayRandom, firstArrayFixed);
secondArray = combineAndShuffleArrays(secondArrayRandom, secondArrayFixed);
thirdArray = combineAndShuffleArrays(thirdArrayRandom, thirdArrayFixed);
};

// Call the function
generateRandomArrays(70);




const firstCont = document.getElementById('firstCont');
const secondCont = document.getElementById('secondCont');
const thirdCont = document.getElementById('thirdCont');
const startButton = document.getElementById('start');
const input = document.getElementById('input');
const controls = document.getElementById("controls")
const subbb = document.getElementById("form")
const videoPlayer = document.getElementById('videoPlayer');
const revew = document.getElementById("revew");




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
const videoFolder = './answers/';




let numbers = [];
let countNumber = 0;
let stopNumber = 4;
let videoNumb = 65
let right = 0;
let turn = 1;
let videoSequence = [  3, 43 , 33];


let finish = 0;







function playVideosSequentially(videoList) {

  setTimeout(() => {
    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex < videoList.length) {
        const videoSrc = `./answers/answer${videoList[currentIndex]}.mp4`;
        videoPlayer.src = videoSrc;
        videoPlayer.play();
        currentIndex++;
  
        // Set up an event listener to play the next video after the current one ends
        videoPlayer.onended = () => {
          if (currentIndex < videoList.length) {
            setTimeout(playNext, 1000); // 1-second delay
          } else {
            console.log("finish"); // Log "finish" after the last video
            theEnd.style.zIndex = "4"
          }
        };
      }
    };
  
    playNext();
  }, 10000);
  revew.style.zIndex = "4"
  let procents =  100 -((65 / 100) * videoSequence.length )  ;
  let trezz = `<div id="revweList"> <p id="reviewTitle">REVEW  <span>${videoSequence.length}</span></p> <div> <p id = "procent"> ${ Math.round(procents)} %  <p/>`
  videoSequence.forEach(element => {
    trezz = trezz + `<p class="mistakes"><span>${element}.</span> ${answerdata[element]}</p> ` 
    
  });
  trezz = trezz + "<div/></div>"
  revew.innerHTML = trezz
  setTimeout(() => {
    revew.style.zIndex = "-1"
  }, 10000);

  


}


startButton.addEventListener('click', () => {
  startButton.style.zIndex = "-2"
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
function createDivs(container, array , a) {
  
  array.forEach(num => {
    
    a ++
      const div = document.createElement('div');
      div.dataset.index = num; // Assign index to each div
      div.id = `divplace${a}`
      div.textContent = num; // Set the text content from the array
      container.appendChild(div);
  });
}

createDivs(firstCont, firstArray , 0);
createDivs(secondCont, secondArray , 5);
createDivs(thirdCont, thirdArray , 20);

const containers = [
  Array.from(firstCont.children),
  Array.from(secondCont.children),
  Array.from(thirdCont.children)
];

let currentContainerIndex = 0;
let currentIndexInContainer = 0;
let blueDivs = new Set();
let dd = 0
let aa = [];
let prev = []
const highlightDiv = (containerIndex, indexInContainer) => {
  containers.forEach(container => container.forEach(div => div.style.border = '1px solid white'));
  const currentDiv = containers[containerIndex][indexInContainer];
  dd = currentDiv.textContent
  aa.push(dd)
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

                  if (finish < 66) {
                      videoAnswer.style.zIndex = '-1';
                      videoQuestion.style.zIndex = '3';
                     videoQuestion.src = `./questions/question${dd}.mp4`
                  } else {
                    if (videoSequence.length > 0) {
                      videoPlayer.style.zIndex = "3"
                      playVideosSequentially(videoSequence);
                    } else {
                      theEnd.style.zIndex = "4"
                    }
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
               
              return;
          }else{
            
            finish ++
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
            function addUniqueNumber(array, number) {
              if (!array.includes(number)) {
                array.push(number);
              }
            }
            addUniqueNumber(videoSequence , aa[aa.length-2] )
        
            
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




