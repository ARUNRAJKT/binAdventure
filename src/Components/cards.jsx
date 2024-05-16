import React from 'react'
import "./cards.css"
export default function cards({ imgSrc, title, description }) {
  return (
    <div className="card">
    <img
      className="card__background"
      src={imgSrc}
      alt={title}
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </div>
  )
}
