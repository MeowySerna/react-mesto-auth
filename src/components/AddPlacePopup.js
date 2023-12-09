import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  React.useEffect(() => {
    setName(name);
    setLink(link);
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({ name, link });
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      {
        <div className="popup__inputs">
          <div className="popup__input-container">
            <input
              type="text"
              id="input_image-name"
              minLength="2"
              maxLength="30"
              name="name"
              value={name || ""}
              className="popup__input"
              placeholder="Название"
              onChange={handleNameChange}
              required
            />
            <span
              id="error-input_image-name"
              className="popup__error-message popup__error-message_hidden"
            ></span>
          </div>
          <div className="popup__input-container">
            <input
              id="input_image-link"
              name="link"
              value={link || ""}
              className="popup__input"
              placeholder="Ссылка на картинку"
              type="url"
              onChange={handleLinkChange}
              required
            />
            <span
              id="error-input_image-link"
              className="popup__error-message popup__error-message_hidden"
            ></span>
          </div>
        </div>
      }
    </PopupWithForm>
  );
}
