import {config} from "./utils.js";

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError(config, inputElement, errorMessage) { 
    const errorElement = inputElement.closest(this._config.popupFieldSelector).querySelector(this._config.errorSelector); 
 
    inputElement.classList.add(config.inputErrorClass); 
    errorElement.classList.add(config.errorClass); 
    errorElement.textContent = errorMessage; 
  } 

  _hideInputError(config, inputElement) {
    const errorElement = inputElement.closest(this._config.popupFieldSelector).querySelector(this._config.errorSelector);

    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }

  _isValid(config, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(config, inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(config, inputElement)
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _onDisabledSubmit(buttonElement) {
    buttonElement.classList.add('popup__save_disabled');
    buttonElement.setAttribute('disabled', true);
  }

  _offDisabledSubmit(buttonElement) {
    buttonElement.classList.remove('popup__save_disabled');
    buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._onDisabledSubmit(buttonElement);
    } else {
      this._offDisabledSubmit(buttonElement);
    }
  };

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
    const buttonElement = this._formElement.querySelector(config.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(config, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetErrorElement() {
    const  inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._formElement.querySelector(config.submitButtonSelector);

    inputList.forEach((inputElement) => {
      this._hideInputError(config, inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  }
}


const formProfile = document.querySelector('.popup-profiles');
const formCard = document.querySelector('.popup-elements');

export const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation(config);

export const cardFormValidator = new FormValidator(config, formCard);
cardFormValidator.enableValidation(config);
