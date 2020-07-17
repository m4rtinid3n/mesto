const showInputError = (config, formElement, inputErrorClass, errorMessage) => {
    const errorClass = formElement.querySelector(`#${inputErrorClass.id}-error`);
    inputErrorClass.classList.add(config.inputErrorClass);
    errorClass.textContent = errorMessage;
    errorClass.classList.add(config.errorClass);
};

const hideInputError = (config, formElement, inputErrorClass) => {
    const errorClass = formElement.querySelector(`#${inputErrorClass.id}-error`);
    inputErrorClass.classList.remove(config.inputErrorClass);
    errorClass.classList.remove(config.errorClass);
    errorClass.textContent = '';
};

const isValid = (config, formElement, inputErrorClass) => {
    if (!inputErrorClass.validity.valid) {
        showInputError(config, formElement, inputErrorClass, inputErrorClass.validationMessage);
    } else {
        hideInputError(config, formElement, inputErrorClass);
    }
};

const hasInvalidInput = (inputSelector) => {
    return inputSelector.some((inputErrorClass) => {
        return !inputErrorClass.validity.valid;
    });
};

const toggleButtonState = (config, inputSelector, inactiveButtonElement) => {
    if (hasInvalidInput(inputSelector)) {
        inactiveButtonElement.classList.add(config.inactiveButtonClass);
        inactiveButtonElement.setAttribute('disabled', true);
    } else {
        inactiveButtonElement.classList.remove(config.inactiveButtonClass);
        inactiveButtonElement.removeAttribute('disabled');
    }
};

const setEventListeners = (formElement, config) => {
    const submitButtonSelector = formElement.querySelector(config.submitButtonSelector);
    const inputSelector = Array.from(formElement.querySelectorAll(config.inputSelector));
    toggleButtonState(config, inputSelector, submitButtonSelector);
    inputSelector.forEach((inputErrorClass) => {
        inputErrorClass.addEventListener('input', () => {
            hideInputError(config, formElement, inputErrorClass);
            isValid(config, formElement, inputErrorClass);
            toggleButtonState(config, inputSelector, submitButtonSelector);
        });
    });
};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};