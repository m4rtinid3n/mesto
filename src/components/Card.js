export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._cardData = data;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element__items')
      .cloneNode(true);
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  }

  _setEventListener(){
    this._element.querySelector('.element__delete_button').addEventListener('click', () => {
      this._removeCard();
    });

    this._element.querySelector('.element__heart').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._cardData));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._img = this._element.querySelector('.element__image');
    this._title = this._element.querySelector('.element__title');

    this._img.alt = this._cardData.alt;
    this._img.src = this._cardData.link;
    this._title.textContent = this._cardData.name;

    this._setEventListener();

    return this._element;
  }
}


