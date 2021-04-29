/* eslint-disable no-unused-vars */
import React from 'react'

export default function Rating(props) {
  const { rating, numReview } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
    </div>
  );
}
