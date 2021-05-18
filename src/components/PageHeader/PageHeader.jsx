/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import './PageHeader.css';

 

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
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link to='/'>
              <div id="nav-logo" className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
                  <p href="/" id="logo-ends">&#60;&nbsp;</p>
                  <p id="logo">ScriptStud.io</p>
                  <p id="logo-ends"> &nbsp;/&#62;</p>
              </div>
              </Link>
              {/* start of nav link items - christian  */}
              <div id="nav-items" className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                {/* <div id="nav-logo" className="flex-shrink-0 flex items-center">
                  <p id="logo-ends">&#60;&nbsp;</p>
                  <p id="logo">ScriptStud.io</p>
                  <p id="logo-ends"> &nbsp;/&62;</p>
                </div> */}
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

              {/* div containing notify bell and avatar circle  */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* notification icon */}
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Avatar circle dropdown */}
                {/* TODO: add links to dropdown items  */}
                {/* TODO: pass props to populate avatar image (github UN?) */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://avatars.githubusercontent.com/u/2651512?s=60&v=4"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/settings"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          {/* TODO: [MARTY] add sign out funcitonality to sign out button */}
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/signout"
                                onClick={props.handleLogout}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                    // end Avatar dropdown
                  )}
                </Menu>
              </div>
            </div>
          </div>
            {/* Panel that drops down on toggle interact (mobile)*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}