import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const handleClick = () => {
    onCardClick(card);
  };
  const handleLikeClick = () => {
    onCardLike(card);
  };
  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="cards__item">
      <div className="card">
        {isOwn && (
          <button
            type="button"
            className="card__trash-button"
            aria-label="Удалить"
            onClick={handleDeleteClick}
          />
        )}

        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__info">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button
              type="button"
              className={`card__like ${isLiked ? "card__like_active" : ""}`}
              onClick={handleLikeClick}
              aria-label="Нравится"
            ></button>
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
