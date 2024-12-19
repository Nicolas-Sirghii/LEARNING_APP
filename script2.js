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














const firstArray = [44, 33, 47, 65, 5];
const secondArray = [4, 7, 74 ,8, 10, 0, 12, 66, 76, 15, 76, 43, 66, 19, 20];
const thirdArray = [33,34, 87, 29, 40, 11, 39, 60, 39, 59, 16, 17, 18, 19, 20 , 33,34, 87, 29, 40, 11, 39, 60,
 39, 59, 16, 17, 18, 19, 2,33,34, 87, 29, 40, 11, 39, 60, 39, 59, 16, 17, 18, 19, 2];

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
const highlightDiv = (containerIndex, indexInContainer) => {
    containers.forEach(container => container.forEach(div => div.style.border = '1px solid white'));
    const currentDiv = containers[containerIndex][indexInContainer];
    dd = currentDiv.textContent
    currentDiv.style.border = '3px solid red';
    console.log(`Div number: ${dd}`);
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

let theWord = "word"

input.addEventListener('keypress', event => {
    
    if (event.key === 'Enter') {
        event.preventDefault()
        const value = input.value.trim();
        input.value = '';

        const currentContainer = containers[currentContainerIndex];
        const currentDiv = currentContainer[currentIndexInContainer];
         theWord = value.toLowerCase()


        if (value.toLowerCase() === 'yes') {
            currentDiv.style.backgroundColor = 'blue';
            blueDivs.add(currentDiv);

            rightAnswer.style.zIndex = "4"
            setTimeout(() => {
              rightAnswer.style.zIndex = "-2"
            }, 1000);
        
                 
            videoAnswer.src = `./answers/answer${dd}.mp4`
            videoAnswer.style.zIndex = '3';
            information.style.zIndex = '-1';
            
            videoAnswer.addEventListener('ended',() => {
              videoAnswer.style.zIndex = '-1';
              videoQuestion.style.zIndex = '3';
             videoQuestion.src = `./questions/question${dd}.mp4`
             
             
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


        if (theWord !== "yes") {
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



