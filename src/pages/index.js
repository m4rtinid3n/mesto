import './index.css';
import Card from '../components/Card.js';
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


import {
  templateElementSelector,
  config,
  containerCardSelector,
  initialCards,
  popupAddCardSelector,
  popupImgSelector,
  popupProfileSelector,
  profileJobSelector,
  profileNameSelector,
} from "../utils/constants.js";


export const buttonOpenProfile = document.querySelector('.profile__button');
export const buttonOpenElements = document.querySelector('.profile__add-button');
export const popupProfile = document.querySelector('.popup_profile');
export const formCard = document.querySelector('.popup_element');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

const profileFormValidator = new FormValidator(config, popupProfile);
profileFormValidator.enableValidation(config);

const cardFormValidator = new FormValidator(config, formCard);
cardFormValidator.enableValidation(config);

const popupWithImg = new PopupWithImage(popupImgSelector);
popupWithImg.setEventListeners();

function createCard(item) {
  return new Card({
    data: item,
    handleCardClick: (item) => {
      popupWithImg.open(item);
    }
  }, templateElementSelector)
}

const initialArray = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item).generateCard();
    initialArray.addItem(cardElement);
  }
},
  containerCardSelector
);
initialArray.renderItems();

export const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupFormAddCard = new PopupWithForm({
  popupSelector: popupAddCardSelector,
  handleFormSubmit: (item) => {
    const cardElement = createCard({ name: item.name, link: item.link }).generateCard();
    initialArray.addItem(cardElement);
  }
});
popupFormAddCard.setEventListeners();

export function setValueInputPopupProfile(data) {
  nameInput.value = data.name;
  jobInput.value = data.job;
}

const popupEditProfile = new PopupWithForm({
  popupSelector: popupProfileSelector,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});
popupEditProfile.setEventListeners();


buttonOpenProfile.addEventListener('click', () => {
  popupEditProfile.open();
  profileFormValidator.resetErrorElement();
  setValueInputPopupProfile(userInfo.getUserInfo());
  });

buttonOpenElements.addEventListener('click', () => {
  popupFormAddCard.open();
  cardFormValidator.resetErrorElement();
});