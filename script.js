const videoAnswer = document.getElementById('VideoAnswer');
const videoQuestion = document.getElementById('videoQuestion')
const buttonStart = document.getElementById('start');
const information = document.getElementById('information');
const wrongAnswer = document.getElementById('WrongContainer');
const rightAnswer = document.getElementById('RightContainer');
const theForm = document.getElementById('theForm');
const myInput = document.getElementById('myInput');




const numbers = [ 3,7,1,9,5,2,8,10,11,4,6];
let countNumber = 1
let videoNumb = 11 


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

         
    videoAnswer.src = `./answers/answer${numbers[countNumber - 1]}.mp4`
    videoAnswer.style.zIndex = '3';
    information.style.zIndex = '-1';
    
    videoAnswer.addEventListener('ended',() => {
      videoAnswer.style.zIndex = '-1';
      videoQuestion.style.zIndex = '3';
     videoQuestion.src = `./questions/question${numbers[countNumber - 1]}.mp4`
     
      })
      if (countNumber < videoNumb) { 
        countNumber ++
      } else {
        countNumber =1
      }
    ////////////////////////////////////////////////////////////////////////////////////
  }else{
    ////////////////////////////////////////////////////////////////////////////////////
    if (countNumber < videoNumb) {
      countNumber ++
    } else {
      countNumber = 1
    }
    wrongAnswer.style.zIndex = "4"
    setTimeout(() => {
      wrongAnswer.style.zIndex = "-1"
    }, 1000);
  
  videoQuestion.src = `./questions/question${numbers[countNumber - 1]}.mp4`
  
  
  videoQuestion.style.zIndex = '3';
  videoAnswer.style.zIndex = '-1';
  information.style.zIndex = '-1';
    
  videoQuestion.addEventListener('ended',() => {
    videoQuestion.style.zIndex = '-1';
    information.style.zIndex = '3';
    })
    ////////////////////////////////////////////////////////////////////////////////////////////
  }
  myInput.value = ''
});
//...........................................................................................




/////////////////////////////////////START///////////////////////////////////////////////////////////


buttonStart.addEventListener('click',() => {

        videoQuestion.src = `./questions/question${numbers[countNumber - 1]}.mp4`
        videoQuestion.style.zIndex = '3';
         videoAnswer.style.zIndex = '-1';
         information.style.zIndex = '-1';
         
         videoQuestion.addEventListener('ended',() => {
          videoQuestion.style.zIndex = '-1';
          information.style.zIndex = '3';
          
          })
     
          buttonStart.style.marginTop = '100px';
   
  });


  


