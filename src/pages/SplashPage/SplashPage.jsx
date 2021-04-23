import React from 'react';
import './SplashPage.css';
import codeLogo from '../SplashPage/code-background.jpg'
import cmLogo from '../SplashPage/christian.png'
import msLogo from '../SplashPage/marty.png'
import SignupForm from '../../components/SignupForm/SignupForm';


function SplashPage(props) {


    return (
        <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-6">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={codeLogo}
                    alt="Code Snippet"
                  />
                  <div className="absolute inset-0 bg-indigo-700" style={{ mixBlendMode: 'multiply' }} />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Take control of your</span>
                    <span className="block text-indigo-200">code snippets</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Save all your code snippets in our code repository built for developers by developers. Never stare at ugly code snippets again.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                      {/* <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a> */}
                      <a
                        href="#scrollToMe"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-80 hover:bg-opacity-70 sm:px-8"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-md font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by 2 very average junior developers
              </p>
              <div className="flex justify-center mt-6 ">
                <div >
                  <img
                    className="h-24"
                    src={cmLogo}
                    alt="Christian"
                  />
                </div>
                <div >
                  <img
                    className="h-24"
                    src={msLogo}
                    alt="Marty"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* lower section */}

        <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-6 lg:mt-20">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                      <span className="flex justify-center text-gray-900">Get to snippin.</span>
                      <span id="scrollToMe" className="flex justify-center block text-indigo-600">Sign Up Now</span>
                    </span>
                  </h1>

                  <SignupForm {...props} />

                  <div className="mt-6 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  
                  <div className="mt-5 md:mt-10 md:col-span-2">
                      <span className="sr-only"></span>
                      <img
                        className="w-full h-full"
                        height={300}
                        src="https://i1.wp.com/codemyui.com/wp-content/uploads/2017/03/hero-section-animation.gif?fit=880%2C440&ssl=1"
                        alt="computer gif"
                      /> 
                  </div>
                </div>
              </div>
            </section>
      </main>
    );
}

export default SplashPage;

