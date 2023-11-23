const displayPopupAddTask = document.getElementById("displayAddTaskPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementsByClassName("popup")[0];
const createTask = document.getElementById("createTask");


displayPopupAddTask.addEventListener('click',displayPopup);
closePopup.addEventListener('click',closeDownPopup);
popup.addEventListener("click",closePopupWithoutUseButton);
createTask.addEventListener('click',addTask)
const arrIdForTasks = []

function displayPopup(){
    popup.style.display = "block";
}
function closeDownPopup(){
    popup.style.display = "none";
}

function closePopupWithoutUseButton(event){
    const element = event.target;
    if(!element.closest('.popup__content')){
        closeDownPopup()
    }
}
function addTask(){
    const taskList = document.getElementById("taskList");
    const taskName = document.getElementById("taskName");
    const id = Date.now();
    arrIdForTasks.push(id)
    taskList.innerHTML += addTaskHtmlElement(taskName.value,id);
    checkListTask();
    closeDownPopup();
}

function addTaskHtmlElement(taskName,id){
    return `
          <div class="task" id="${id}">
                <p class="task__name">
                 ${taskName}
                </p>
                <button class="task__edit">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0643 0.164844C12.2841 -0.0549482 12.6405 -0.0549481 12.8603 0.164844L15.8352 3.13972C16.0549 3.35951 16.0549 3.71586 15.8352 3.93566L3.9437 15.8271C3.83853 15.9323 3.69599 15.9916 3.54725 15.992L0.56433 16C0.414538 16.0004 0.270764 15.9411 0.164844 15.8352C0.0589247 15.7292 -0.000401517 15.5855 2.0455e-06 15.4357L0.00803783 12.4528C0.00843852 12.304 0.0677036 12.1615 0.17288 12.0563L12.0643 0.164844ZM1.13304 12.688L1.12715 14.8729L3.31198 14.867L14.6412 3.53769L12.4623 1.35875L1.13304 12.688Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2955 2.88244C10.5153 2.66264 10.8716 2.66264 11.0914 2.88244L13.1176 4.90856C13.3374 5.12835 13.3374 5.4847 13.1176 5.7045C12.8978 5.92429 12.5414 5.92429 12.3216 5.7045L10.2955 3.67838C10.0757 3.45858 10.0757 3.10223 10.2955 2.88244Z" fill="black"/>
                      </svg>
                </button>
          </div>
    `
}
function checkListTask(){
    const taskList = document.getElementById("taskList");
    const title = document.getElementById("titleEmpty");
    if(taskList.children.length > 0) {
        title.classList.add("displayTitle")

    }else {
        title.classList.remove("displayTitle")
    }
}

function domContentLoaded(){
    checkListTask()
}

document.addEventListener("DOMContentLoaded",domContentLoaded);