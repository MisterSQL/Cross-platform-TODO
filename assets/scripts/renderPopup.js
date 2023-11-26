export function renderButtonClosePopup() {
    return `
            <button type="button" class="popup__close" id="closePopup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="8" fill="#F1F1F1"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.06325L10.598 4.46522C10.8569 4.20634 11.2767 4.20634 11.5355 4.46522C11.7944 4.7241 11.7944 5.14384 11.5355 5.40272L8.9375 8.00076L11.5355 10.5988C11.7944 10.8577 11.7944 11.2774 11.5355 11.5363C11.2767 11.7952 10.8569 11.7952 10.598 11.5363L8 8.93826L5.40197 11.5363C5.14308 11.7952 4.72335 11.7952 4.46447 11.5363C4.20558 11.2774 4.20558 10.8577 4.46447 10.5988L7.0625 8.00076L4.46447 5.40272C4.20558 5.14384 4.20558 4.7241 4.46447 4.46522C4.72335 4.20634 5.14308 4.20634 5.40197 4.46522L8 7.06325Z" fill="#E04042"/>
                </svg>
            </button>
        `
}

export function renderButtonCreate(object) {
    return `
            <button type="button" class="popup__button popup__create-task" id="${object.buttonId}" >
                Создать
            </button>
        `
}

export function renderButtonRemove(object) {
    return `
            <button type="button" id="removeTask" class="popup__button popup__remove-task">${object.buttonRemove}</button>
        `
}

export function renderInputPopup(object) {
    return `
            <label class="task-label" for="fieldName">Название</label>
            <input type="text" class="popup_input inputs" id="fieldName" placeholder="${object.placeholder}">
            <p class="notification-error hidden" id="notificationError">Название обязательное поле</p>
        `
}

export function renderTitlePopup(object) {
    return `
            <h2 class="popup__title ${object.classTitle}">
                [${object.valueTextTitle}]
            </h2>
        `
}