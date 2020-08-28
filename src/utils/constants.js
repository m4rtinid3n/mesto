export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

export const config = {
  formSelector: '.popup__content',
  popupFieldSelector: '.popup__fields',
  inputSelector: '.popup__input',
  errorSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorVisibleClass: 'popup__input-error_visible',
  inputErrorClass: 'popup__input_type_error',
};

export const templateElementSelector = '.template-elements';
export const containerCardSelector = '.element';
export const popupProfileSelector = '.popup_profile';
export const popupAddCardSelector = '.popup_element';
export const popupImgSelector = '.popup_image';
export const profileNameSelector = '.profile__name';
export const profileJobSelector = '.profile__job';
export const imgPopupSelector = '.popup__image';
export const captionImgPopupSelector = '.popup__description';