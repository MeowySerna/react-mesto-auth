import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: name,
      about: description,
    };
    onUpdateUser(updatedUser);
  };

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit} 
    >
      {
        <div className="popup__inputs">
          <div className="popup__input-container">
            <input
              type="text"
              placeholder="Имя"
              id="input_name"
              value={name || ''}
              onChange={handleNameChange}
              name="name"
              className="popup__input"
              minLength="2"
              maxLength="40"
              required
            />
            <span
              id="error-input_name"
              className="popup__error-message popup__error-message_hidden"
            ></span>
          </div>
          <div className="popup__input-container">
            <input
              type="text"
              placeholder="О себе"
              name="about"
              value={description || ''}
              onChange={handleDescriptionChange}
              id="input_description"
              className="popup__input"
              minLength="2"
              maxLength="200"
              required
            />
            <span
              id="error-input_description"
              className="popup__error-message popup__error-message_hidden"
            ></span>
          </div>
        </div>
      }
    </PopupWithForm>
  );
}
