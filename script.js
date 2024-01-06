let profile = document.getElementById("profile")
let input_file = document.getElementById("input-file")
let label_ = document.getElementById("label_")
input_file.onchange=function(){
  profile.src = URL.createObjectURL(input_file.files[0])
  label_.classList.toggle("label")
}

let computer_sc = 0
let user_sc = 0
let counter = 0;

 
let count = document.getElementById("count")
let btns = document.querySelectorAll(".btn")
let con_firm = document.getElementById("con_firm")
let restart = document.getElementById("Restart")
let cancle = document.getElementById("cancle")
let counter_c = document.getElementById("counter")


   btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        counter++
        count.innerHTML = 10-counter
        if(counter == 10){
      
          con_firm.classList.toggle("active")
          
          
          restart.addEventListener("click",()=>{
           
            window.location.reload()
          })
         
      }
    })
  }
  )


  user_score.innerHTML = `${localStorage.getItem("Id")+ " Score"}  :`
  
   function checker(input){
    let computer = document.getElementById("computer")
    let user = document.getElementById("user")
    let computer_score = document.getElementById("computer_score")
    let user_score = document.getElementById("user_score")
   
    let uchoice = ["Rock","Paper","Scissor"]
    let cchoice = Math.floor(Math.random()*3);
    let computer_ch = uchoice[cchoice] 
    computer.innerHTML = `Manan Choice: ${computer_ch}`
    user.innerHTML = `${localStorage.getItem("Id")} Choice: ${input}`

    let result = document.getElementById("result")
    switch(choice_check[input][computer_ch]){
        case 'Win':
            result.innerHTML = "You Win"
            sho_r.innerHTML = "You Win"
            result.style.cssText = "background-color: #cefdce; color:#689f38 "
            sho_r.style.cssText = "background-color: #cefdce; color:#689f38 "
            user_sc++
            user_score.innerHTML = `${localStorage.getItem("Id")} Score : ${user_sc}`
            break;
            case 'lose':
                result.innerHTML = "You Lose"
                sho_r.innerHTML = "You Lose"
                result.style.cssText = "background-color: #ffdde0; color:#d32f2f "
                sho_r.style.cssText = "background-color: #ffdde0; color:#d32f2f "
                computer_sc++
                computer_score.innerHTML = `Manan Score:${computer_sc} `
                break;
                default:
                    result.innerHTML= "Draw"
                    sho_r.innerHTML= "Draw"
                    result.style.cssText = "background-color: #e5e5e5; color:#808080 "
                    sho_r.style.cssText = "background-color: #e5e5e5; color:#808080 "
                    break;
    }
 
   }
  
   let choice_check = {

    'Rock': {
      'Rock':'Draw',
      'Scissor':'Win',
      'Paper':'lose'
    },
    'Paper':{
      'Paper':'Draw',
      'Rock':'Win',
      'Scissor':'lose'
    },
    'Scissor':{
      'Scissor':'Draw',
      'Paper':'Win',
      'Rock':'lose'
    }
   }
