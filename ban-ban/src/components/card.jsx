import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

function Card({ image, title, description, link }) {
  return (
    <div class="bg-white rounded-lg shadow-md dark:bg-gray-800 w-full">
      <a target="_blank" href={link}>
        <img class="rounded-t-lg w-full" src={image} alt="" />
      </a>
      <div class="p-5 h-64 flex flex-col justify-between">
        <div>
          <a target="_blank" href={link}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {"قیمت: " + description + " ﷼"}
          </p>
        </div>
        <a
          target="_blank"
          href={link}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="w-full flex flex-row justify-between">
            <span>خرید</span>
            <FontAwesomeIcon className="mt-0.5" icon={faLeftLong} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
