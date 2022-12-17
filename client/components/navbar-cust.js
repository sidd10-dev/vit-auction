import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PlusIcon} from '@heroicons/react/24/outline'
import {Router, useRouter} from 'next/router'

const navigation = [
  { name: 'Projects', href: '', current: false },
  { name: 'Signout', href: '', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarCust() {

  const router= useRouter()

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none ">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center hover:cursor-pointer" onClick={()=>{router.push("/customer")}}>
                  <img
                    className="block h-10 w-auto bg-white p-1 lg:hidden"
                    src="/vit.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10 w-auto bg-white p-1 lg:block"
                    src="/vit.png"
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={()=>{router.push("/customer/"+item.href)}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:cursor-pointer hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-lg flex items-center bg-blue-500 p-1.5 text-white text-sm hover:bg-blue-400"
                  onClick={()=>{ router.push("/customer/new-project") }}
                >
                    <PlusIcon className="h-5 w-5 m-1" aria-hidden="true" /> <span className="hidden sm:block">New Project</span>        
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={()=>{router.push("/customer/"+item.href)}}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
