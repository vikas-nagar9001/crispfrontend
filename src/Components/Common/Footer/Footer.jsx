import React from 'react'

export const Footer = () => {
  return (
    <>
      {/* footer start */}
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6   ">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            CodeCrisp
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Products |{" "}
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Solutions |
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Resources |
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pricing |
            </a>
          </li>
        </ul>
      </footer>
      {/* footer end */}
    </>

  )
}

export default Footer;