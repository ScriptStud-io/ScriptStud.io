/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import './PageHeader.css';

// TODO: the links inside the avatar dropdown are placeholders for now to clear warnings in terminal 
 

const navigation = [
  { name: 'Home', href: '/', current: false, loggedIn: [true]},
  { name: '+ Create', href: '/snippets/create', current: false, loggedIn: [true]},
  { name: 'Search Snips', href: '/search/all', current: false, loggedIn: [true, false] },
  { name: 'Login', href: '/login', current: false, loggedIn: [false] },
  { name: 'Sign Up', href: '/signup', current: false, loggedIn: [false] },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageHeader(props) {
  
  const [loggedIn, setLoggedIn] = useState(false);

  // checks if a user is logged in every time props.user changes
  useEffect(() => {
    (async function() {
      const userLoggedIn = props.user ? true : false;
      setLoggedIn(userLoggedIn);
    })();
  }, [props.user]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <Link to='/'>
              <div id="nav-logo" className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
                  <p id="logo-ends">&#60;&nbsp;</p>
                  <p id="logo">ScriptStud.io</p>
                  <p id="logo-ends"> &nbsp;/&#62;</p>
              </div>
              </Link>
              {/* start of nav link items */}
              <div id="nav-items" className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.filter(item => item.loggedIn.includes(loggedIn)).map((item, idx) => (
                      <a key={idx}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>
                </div>
              </div>
              {/* end of nav link items */}
              { props.user }              
              {/* div containing signout icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a href="/" onClick={props.handleLogout}>
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Signout</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
                </a>
              </div>
            </div>
          </div>          
        </>
      )}
    </Disclosure>
  )
}