import { React, useState, useRef, Fragment } from 'react'
import { Router, useRouter } from 'next/router'

import NavbarComp from '../../components/navbar-comp'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import AnimateHeight from 'react-animate-height';

const Market = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const bidamtRef= useRef()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    
    const router= useRouter()

    const newBidEventHandler= async (event) => {
        event.preventDefault()
    
        try {

            const res = await axios.post('http://localhost:3001/api/make-bid', {
                bid: bidamtRef.current.value,
            })
            
        } catch (error) {
          console.log(error)
        }
    }

    return (
    <>
      <NavbarComp></NavbarComp>

      <div className="w-3/4 mx-auto my-4 sm:w-2/3">
        <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
          Market
        </div>

        {/* 
          Project Name 
          Component Name
          Component Asking Price

          Total Budget
          Project Blueprints
          Project Description
          Pcs Needed

          Component Blueprint
          Component Description
          Make Bid
        */}
        
        <div className="w-full px-2">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">

            <div className="m-3">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-1 flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <div className="w-full p-4 text-base sm:text-lg">
                        <div>
                            Project Name: Gaming Mouse
                        </div>
                        <div>
                            Component Name: Premium Plastic
                        </div>
                        <div>
                            Component Asking Price: 10000 Rs.
                        </div>
                      </div>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transition-all rotate-180 transform' : 'transition-all'
                        } h-10 w-10 text-purple-500`}
                      />
                    </Disclosure.Button>

                    <AnimateHeight
                      style={{flexShrink: 0}}
                      id="example-panel"
                      duration={500}
                      height={open ? 'auto': 0} 
                    >
                      <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Total Budget:</h1>
                                <p className="text-sm m-1">
                                    200000 Rs.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-base font-medium m-1">Project Description:</h1>
                                <p className="text-sm m-1 indent-2 px-3 py-1">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ad, aspernatur dolorem quaerat amet, ipsam aliquam sapiente quos at, 
                                    deserunt vel odio ipsum beatae provident est alias quasi eum praesentium. 
                                    Illo nemo nostrum perspiciatis? Sed velit odit eos quae quo repudiandae maxime, 
                                    aliquam, perferendis voluptatibus ipsum in porro dolor incidunt eligendi.
                                </p>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Project Blueprint:</h1>
                                <p className="text-sm m-1 underline font-bold">
                                    blueprint.docx
                                </p>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Pieces Needed:</h1>
                                <p className="text-sm m-1">
                                    1000
                                </p>
                            </div>
                            <div>
                                <h1 className="text-base font-medium m-1">Component Description:</h1>
                                <p className="text-sm m-1 indent-2 px-3 py-1">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ad, aspernatur dolorem quaerat amet, ipsam aliquam sapiente quos at, 
                                    deserunt vel odio ipsum beatae provident est alias quasi eum praesentium. 
                                    Illo nemo nostrum perspiciatis? Sed velit odit eos quae quo repudiandae maxime, 
                                    aliquam, perferendis voluptatibus ipsum in porro dolor incidunt eligendi.
                                </p>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Blueprint:</h1>
                                <p className="text-sm m-1 underline font-bold">
                                    plasticblueprint.docx
                                </p>
                            </div>

                            <div className="flex items-center justify-end pt-5 pr-5">
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-lg flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                    onClick={openModal}
                                >
                                    Make Bid   
                                </button>
                            </div>
                          
                        </div>

                      </div>
                    </AnimateHeight>
                    
                  </>
                )}
              </Disclosure>  
            </div>                            
                         
            </div>
            </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            Apply For Bid
                        </Dialog.Title>
                        <div className="mt-2">
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form className="bg-white rounded-lg" action='POST' onSubmit={newBidEventHandler}>
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                Bid Amount<span className="text-red-500"> *</span>
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                    type="number"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="block w-full z-10 flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    ref={bidamtRef}
                                                    placeholder="Enter Bid"
                                                    required
                                                />
                                                <span className="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                    Rs.
                                                </span>
                                            </div>
                                        </div>
                                        </div>              
                                    </div>        
                                    <div className="mt-4 flex items-center justify-end">
                                        <button
                                            type="submit"
                                            className="m-1 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none"
                                            onClick={()=>{ router.push("/company") }}
                                        >
                                            Post
                                        </button>
                                        <button
                                            type="button"
                                            className="m-1 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>                    
                                </form>              
                            </div>              
                        </div>

                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default Market