import SuccessIcon from "../images/SuccessIcon.svg";
import FailureIcon from "../images/FailureIcon.svg";
import React from "react";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__tooltip-container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        {props.isSuccess ? (
          <>
            <img
              src={`${SuccessIcon}`}
              alt="Регистрация прошла успешно."
              className="popup__tooltip_image"
            />
            <p className="popup__tooltip_message">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${FailureIcon}`}
              alt="Регистрация не была выполнена."
              className="popup__tooltip_image"
            />
            <p className="popup__tooltip_message">
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoToolTip;
