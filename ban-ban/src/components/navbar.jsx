import React from "react";

function NavBar() {
  return (
    <nav
      class="bg-white py-3 dark:bg-gray-300 flex justify-center"
      style={{
        direction: "ltr",
      }}
    >
      <div class="container flex flex-wrap items-center justify-between max-w-screen-lg px-5 sm:px-10">
        <a href="https://banimode.com/" class="flex items-center">
          <img
            src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white dark:bg-gray-00 md:dark:bg-gray-400">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                نحوه قیمت‌گذاری
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                خانه
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
