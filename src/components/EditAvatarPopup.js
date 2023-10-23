import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      {
        <div className="popup__inputs">
          <div className="popup__input-container">
            <input
              id="input_avatar-link"
              name="avatar"
              className="popup__input"
              placeholder="Ссылка на картинку"
              type="url"
              ref={avatarInputRef}
              required
            />
            <span
              id="error-input_avatar-link"
              className="popup__error-message popup__error-message_hidden"
            ></span>
          </div>
        </div>
      }
    </PopupWithForm>
  );
}