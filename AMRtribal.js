let hiders = ["Accounting", "Cash", "Training", "Contract", "Internal", "Indirect", "Information", "Litigation", "Audit"]
let buttons = ["accounting", "cash", "training", "contract", "internal", "indirect", "information", "litigation", "audit"]

function displayTarget(show){
  document.getElementById(show).classList.remove("hidden")
  console.log("you called displayTrget")
}

function hideAll(){
  console.log("you called hideAll")
  for (let i = 0; i < hiders.length; i++){
    if (document.getElementById(hiders[i]).classList.contains("hidden")){
      console.log(":)")
    }
    else{
      document.getElementById(hiders[i]).classList.add("hidden")
    }
  }
}

function spyOnButtons() {
  for (let i = 0; i < buttons.length; i++){
    document.getElementById(buttons[i]).addEventListener("click", function(e){
      hideAll()
      displayTarget(hiders[i])
    })
  }
}
spyOnButtons()
