const buttonOpenProfile = document.querySelector('.profile__button');
const buttonCloseProfile = document.querySelector('.popup__close');
const buttonOpenElements = document.querySelector('.profile__add-button');
const buttonCloseElements = document.querySelector('.popup__close_elements');
const buttonOpenPopupImage = document.querySelector('.popup__image');
const buttonClosePopupImage = document.querySelector('.popup__close_image');
const buttonLike = document.querySelector('.element__heart');
const popupProfile = document.querySelector('.popup_profile');
const popupElement = document.querySelector('.popup_element');
const Cardtitle = document.querySelector('.element__title');
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


function getCardElement(item) {
    const card = cardsTemplate.content.cloneNode(true);
    const likebutton = card.querySelector('.element__heart');
    const cardImage = card.querySelector('.element__image');

    card.querySelector('.element__title').textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    card.querySelector('.element__delete_button').addEventListener('click', deleteCard);
    likebutton.addEventListener('click', toggleLike);
    cardImage.addEventListener('click', openPopupCards);
    
    return card;
}

function renderCard(card, container) {
    container.prepend(card);
  }
  
initialCards.forEach(function (item) {
    const card = getCardElement(item);
    renderCard(card, cardsList);
  });

function deleteCard(e) {
    const card = e.target.closest('.element');
    card.remove();
}

function toggleLike(e) {
    e.target.classList.toggle('element__heart_active');
}

function openPopupCards(evt) {
    const card = evt.target.closest('.element__image');
    buttonOpenPopupImage.src = card.src;
    popupDescription.textContent = card.alt;
    popupOpened(popupImage);
}
  
function popupOpened(popup) {
    popup.classList.add('popup_opened');
}

function popupClosed(popup) {
    popup.classList.remove('popup_opened');
}

function saveProfileInfo() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupClosed(popupProfile);
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClosed(popupProfile);
} 

function formSubmitCards (evt) {
    evt.preventDefault();
    const name = nameElement.value;
    const link = linkElement.value;
    const cardItem = {
        name,
        link,
    }
    const card = getCardElement(cardItem);
    nameElement.value = '';
    linkElement.value = '';
    renderCard(card, cardsList)
    popupClosed(popupElement);
}


buttonOpenProfile.addEventListener('click', () => popupOpened(popupProfile));
buttonCloseProfile.addEventListener('click', () => popupClosed(popupProfile));
buttonOpenElements.addEventListener('click', () => popupOpened(popupElement));
buttonCloseElements.addEventListener('click', () => popupClosed(popupElement));
buttonClosePopupImage.addEventListener('click', () => popupClosed(popupImage));
formElement.addEventListener('submit', formSubmitHandler);
formElements.addEventListener('submit', formSubmitCards);