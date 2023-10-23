function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      id={props.name}
    >
      <div
        className={`popup__container ${
          props.name === "avatar" ? "popup__avatar-container" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup__form popup__${props.name}-form`}
          name={`popup__${props.name}-form`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__submit-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
