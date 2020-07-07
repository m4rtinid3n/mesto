const buttonOpenProfile = document.querySelector('.profile__button');
const buttonCloseProfile = document.querySelector('.popup__close');
const buttonOpenElements = document.querySelector('.profile__add-button');
const buttonCloseElements = document.querySelector('.popup__close_elements');
const buttonOpenPopupImage = document.querySelector('.popup__image');
const buttonClosePopupImage = document.querySelector('.popup__close_image');
const buttonLike = document.querySelector('.element__heart');
const popupProfile = document.querySelector('.popup_profile');
const popupElement = document.querySelector('.popup_element');
const title = document.querySelector('.element__title');
const popupImage = document.querySelector('.popup_image');
const popupDescription = document.querySelector('.popup__description');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputJob = popupProfile.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = popupProfile.querySelector('.popup-profiles');
const cardsList = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.template-elements');
const formElements = popupElement.querySelector('.popup-elements');
const nameElement = popupElement.querySelector('.popup__input_type_name-element');
const linkElement = popupElement.querySelector('.popup__input_type_src');



function CloneCard(item) {
    const card = cardsTemplate.content.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__delete_button').addEventListener('click', deleteCard);
    card.querySelector('.element__heart').addEventListener('click', likeToggle);
    card.querySelector('.element__image').addEventListener('click', openPopupCards);
    cardsList.prepend(card);
}

function deleteCard(e) {
    const card = e.target.closest('.element');
    card.remove();
}

function likeToggle(e) {
    e.target.classList.toggle('element__heart_active');
}

function addCard(card) {
    card.prepend(card);
  }

initialCards.forEach(function (item) {
    CloneCard(item);
});

function openPopupCards(evt) {
    const card = evt.target.closest('.element__image');
    buttonOpenPopupImage.src = card.src;
    popupDescription.textContent = card.alt;
    popupToggle(popupImage);
}
  
function popupToggle(popup) {
    popup.classList.toggle('popup_opened');
}

function saveProfileInfo() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupToggle(popupProfile);
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupToggle(popupProfile);
} 

function formSubmitCards (evt) {
    evt.preventDefault();
    const name = nameElement.value;
    const link = linkElement.value;
    const cardItem = {
        name,
        link,
    }
    const card = CloneCard(cardItem);
    nameElement.value = '';
    linkElement.value = '';
    popupToggle(popupElement);
}


buttonOpenProfile.addEventListener('click', saveProfileInfo);
buttonCloseProfile.addEventListener('click', () => popupToggle(popupProfile));
buttonOpenElements.addEventListener('click', () => popupToggle(popupElement));
buttonCloseElements.addEventListener('click', () => popupToggle(popupElement));
buttonClosePopupImage.addEventListener('click', () => popupToggle(popupImage));
formElement.addEventListener('submit', formSubmitHandler);
formElements.addEventListener('submit', formSubmitCards);