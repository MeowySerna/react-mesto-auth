function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card ? "popup_opened" : ""}`}>
      <figure className="popup__image-container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__image"
        />
        <figcaption className="popup__image-caption">
          {card ? card.name : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
