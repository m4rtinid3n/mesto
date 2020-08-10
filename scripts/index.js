const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonOpenProfile = document.querySelector('.profile__button');
const buttonOpenElements = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_profile');
const formProfile = document.querySelector('.popup-profiles');
const buttonCloseProfile = popupProfile.querySelector('.popup__close');
const buttonCloseElements = document.querySelector('.popup__close_elements');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');

const popupElement = document.querySelector('.popup_element');
const formElements = popupElement.querySelector('.popup-elements');
const nameElement = popupElement.querySelector('.popup__input_type_name-element');
const linkElement = popupElement.querySelector('.popup__input_type_src');
const cardsList = document.querySelector('.elements');

import Card from "./Card.js";
import {cardFormValidator, profileFormValidator} from "./FormValidator.js";
import {config, initialCards, openPopup, closePopup,} from "./utils.js";

function renderCard(card, container) {
  container.prepend(card);
}

initialCards.forEach(function (item) {
  const card = new Card(item, '.template-elements');
  const cardElement = card.generateCard();

  renderCard(cardElement, cardsList);
});

function saveProfileInfo(popup, formElement, inputElement) {
  profileFormValidator.resetErrorElement()
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  profileFormValidator.resetErrorElement()
  openPopup(popupProfile, formElement, inputElement);
}

function resetCardForm() {
  nameElement.value = '';
  linkElement.value = '';
}

function popupElementShow() {
  openPopup(popupElement);
  resetCardForm();
  cardFormValidator.resetErrorElement();
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile)
}

function formSubmitCards(evt) {
  evt.preventDefault();
  const name = nameElement.value;
  const link = linkElement.value;
  const cardItem = {
    name,
    link,
  }
  const card = new Card(cardItem, '.template-elements');
  const cardElement = card.generateCard()
  renderCard(cardElement, cardsList);
  closePopup(popupElement);
  formElements.reset();
}

buttonOpenProfile.addEventListener('click', saveProfileInfo);
buttonOpenElements.addEventListener('click', popupElementShow);
buttonCloseElements.addEventListener('click', () => closePopup(popupElement));
buttonCloseProfile.addEventListener('click', () => closePopup(popupProfile));
formProfile.addEventListener('submit', formSubmitHandler);
formElements.addEventListener('submit', formSubmitCards);