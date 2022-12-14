import { React, useState } from 'react';
import { Router, useRouter } from 'next/router'

import NavbarCust from '../../components/navbar-cust'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import AnimateHeight from 'react-animate-height';

export default function index() {

  const router= useRouter()

  return (
    <>
      <NavbarCust></NavbarCust>

      <div className="w-3/4 mx-auto my-4 sm:w-2/3">
        <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
          Your Projects
        </div>

        {/* 
          Project Name 
          Total Budget
          Created Date

          Project Blueprints
          Project Description
          Pcs Needed

          Component Name
          Component BLueprint
          Component Description
          Component Asking Price
          Component Industry
          Status

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
                          Total Budget: 12000 Rs.
                        </div>
                        <div>
                          Created Date: 12/12/2022
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
                        </div>

                        <div className="mt-4">

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div> 
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                                                            
                            </div>

                            <button
                              type="button"
                              className="w-24 rounded-lg flex justify-center items-center bg-blue-500 p-1.5 text-white text-sm hover:bg-blue-400"
                              onClick={()=>{ router.push("/customer/bids") }}
                            >
                              Check Bids       
                            </button>
                            
                          </div>

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div>
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                              <div className="flex flex-col items-center pr-2 sm:flex-row justify-between">
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Company:</h1>
                                  <p className="text-sm m-1">
                                    Hewlett-Packard Ltd.
                                  </p>
                                </div>
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Agreed Price:</h1>
                                  <p className="text-sm m-1">
                                    20000 Rs.
                                  </p>
                                </div>
                              </div>
                                                            
                            </div>
                            <div className="flex items-center">
                              <div className="mx-2">
                                Status
                              </div>
                              <CheckCircleIcon
                                className="w-5 h-5 fill-green-400"
                              />
                            </div>
                          </div>

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div>
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                              <div className="flex flex-col items-center pr-2 sm:flex-row justify-between">
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Company:</h1>
                                  <p className="text-sm m-1">
                                    Hewlett-Packard Ltd.
                                  </p>
                                </div>
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Agreed Price:</h1>
                                  <p className="text-sm m-1">
                                    20000 Rs.
                                  </p>
                                </div>
                              </div>
                                                            
                            </div>
                            <div className="flex items-center">
                              <div className="mx-2">
                                Status
                              </div>
                              <CheckCircleIcon
                                className="w-5 h-5 fill-green-400"
                              />
                            </div>
                          </div>        
                        </div>
                      </div>
                    </AnimateHeight>
                    
                  </>
                )}
              </Disclosure>  
            </div>            

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
                          Total Budget: 12000 Rs.
                        </div>
                        <div>
                          Created Date: 12/12/2022
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
                        </div>

                        <div className="mt-4">

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div>
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                                                            
                            </div>

                            <button
                              type="button"
                              className="w-24 rounded-lg flex justify-center items-center bg-blue-500 p-1.5 text-white text-sm hover:bg-blue-400"
                              onClick={()=>{ router.push("/customer/bids") }}
                            >
                              Check Bids       
                            </button>
                            
                          </div>

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div> 
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                              <div className="flex flex-col items-center pr-2 sm:flex-row justify-between">
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Company:</h1>
                                  <p className="text-sm m-1">
                                    Hewlett-Packard Ltd.
                                  </p>
                                </div>
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Agreed Price:</h1>
                                  <p className="text-sm m-1">
                                    20000 Rs.
                                  </p>
                                </div>
                              </div>
                                                            
                            </div>
                            <div className="flex items-center">
                              <div className="mx-2">
                                Status
                              </div>
                              <CheckCircleIcon
                                className="w-5 h-5 fill-green-400"
                              />
                            </div>
                          </div>

                          <div className="p-4 my-4 flex flex-row items-center text-white bg-blue-600 rounded-lg">
                            <div className="w-full">
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Component Name:</h1>
                                <p className="text-sm m-1">
                                  Premium Plastic
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
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Asking Price:</h1>
                                <p className="text-sm m-1">
                                  10000 Rs.
                                </p>
                              </div>
                              <div className="flex flex-row items-center">
                                <h1 className="text-base font-medium m-1">Industry:</h1>
                                <p className="text-sm m-1">
                                  Hardware
                                </p>
                              </div>
                              <div className="flex flex-col items-center pr-2 sm:flex-row justify-between">
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Company:</h1>
                                  <p className="text-sm m-1">
                                    Hewlett-Packard Ltd.
                                  </p>
                                </div>
                                <div className="flex flex-row items-center">
                                  <h1 className="text-base font-medium m-1">Agreed Price:</h1>
                                  <p className="text-sm m-1">
                                    20000 Rs.
                                  </p>
                                </div>
                              </div>
                                                            
                            </div>
                            <div className="flex items-center">
                              <div className="mx-2">
                                Status
                              </div>
                              <CheckCircleIcon
                                className="w-5 h-5 fill-green-400"
                              />
                            </div>
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
    </>
  )
}
