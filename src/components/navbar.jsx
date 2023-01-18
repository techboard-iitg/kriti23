import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import KritiLogo from "../assets/kriti-logo.svg";
import TechboardLogo from "../assets/techboard-logo.svg";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "/schedule" },
  { name: "Points Table", href: "/table" },
  { name: "Team", href: "/team" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-white border-[#4B69B1] border-b-4'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-stretch h-full justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  {/* Image is in assets */}
                  <img
                    className='sm:h-12 h-8 w-auto'
                    src={KritiLogo}
                    alt='kriti'
                  />
                  <img
                    className='block h-8 w-auto sm:hidden border-l-2 border-[#4B69B1] pl-2 mr-2'
                    src={TechboardLogo}
                    alt='techboard'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex h-full space-x-4'>
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-[#032538] text-white "
                              : "text-[#032538] hover:bg-gray-700 my-0 hover:text-white",
                            "px-3 py-2 text-sm font-medium "
                          )
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className='flex flex-row items-center h-full px-4'>
                          {item.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-[#032538] text-white"
                        : "text-[#032538] hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 text-base font-medium"
                    )
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
