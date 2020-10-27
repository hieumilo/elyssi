import React from 'react';

import footer from './../../assets/img/bg-footer.png'

const Footer = () => (
  <div
    className="bg-center bg-no-repeat bg-cover"
    style={{backgroundImage: `url(${footer})`}}>
    <div className="container py-16 sm:py-20 md:py-24">
      <div className="w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
          <h4 className="font-hkbold text-white text-xl pb-8">Contact</h4>
          <ul className="list-reset">
            <li className="pb-2 block">
              <a
                href="mailto:test.email0123@elyssi.com"
                className="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">
                test.email0123@elyssi.com
              </a>
            </li>
            <li className="pb-2 block">
              <a
                href="tel:0123234222"
                className="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">
                0123 234 222
              </a>
            </li>
            <li className="pb-2 block">
              <a
                href="https://elyssi.tailwindmade.com"
                className="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">
                Elyssi
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center py-16 lg:py-0">
          <a href="/" className="font-butlerregular text-white text-4xl uppercase tracking-wider">
            Elyssi.
          </a>
          <div className="flex items-center justify-center pt-5">
            <a href="https://www.google.com" className="group">
              <span className="sr-only">Social link</span>
              <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                <i className="bx bxl-facebook text-secondary transition-colors group-hover:text-white"></i>
              </div>
            </a>
            <a href="https://www.google.com" className="group">
              <span className="sr-only">Social link</span>
              <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                <i className="bx bxl-twitter text-secondary transition-colors group-hover:text-white"></i>
              </div>
            </a>
            <a href="https://www.google.com" className="group">
              <span className="sr-only">Social link</span>
              <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                <i className="bx bxl-instagram text-secondary transition-colors group-hover:text-white"></i>
              </div>
            </a>
            <a href="https://www.google.com" className="group">
              <span className="sr-only">Social link</span>
              <div className="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                <i className="bx bxl-pinterest text-secondary transition-colors group-hover:text-white"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h4 className="font-hkbold text-white text-xl pb-8">Link</h4>
          <ul className="list-reset">
            <li className="pb-2 block">
              <a
                href="/collection-list"
                className="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">
                Shop
              </a>
            </li>
            <li className="pb-2 block">
              <a
                href="/contact"
                className="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">
                Contact Us
              </a>
            </li>
            <li className="pb-2 block">
              <a
                href="/single"
                className="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
