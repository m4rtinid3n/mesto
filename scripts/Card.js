import {openPopup, closePopup, popupCloseForImg, captionPopup, imgPopup, popupImg} from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _removeCard() {
    this._element.remove();
  }

  _toggleLike() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  }

  _handleOpenPopup(){
    imgPopup.src = this._link;
    imgPopup.alt = this._name;
    captionPopup.textContent = this._name;
    openPopup(popupImg);
  }
  _setEventListener(){
    this._element.querySelector('.element__delete_button').addEventListener('click', () => {
      this._removeCard();
    });

    this._element.querySelector('.element__heart').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseForImg.addEventListener('click', () => {
      closePopup(popupImg);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._alt;
    this._element.querySelector('.element__image').src = this._link;

    return this._element;
  }
}
