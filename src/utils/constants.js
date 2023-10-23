export const VALIDATION_CONFIG = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__error-message_hidden",
};
export const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/cohort-74/",
  headers: {
    authorization: "64e404e9-f7a8-42cf-bd55-2fdfa91c3cc8",
    "Content-Type": "application/json",
  },
};