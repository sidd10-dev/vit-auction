import { React, Fragment } from 'react'
import { Router, useRouter } from 'next/router'

import NavbarComp from '../../components/navbar-comp'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AnimateHeight from 'react-animate-height';

const Pending = () => {
    const router= useRouter()

    return (
    <>
      <NavbarComp></NavbarComp>

      <div className="w-3/4 mx-auto my-4 sm:w-2/3">
        <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
          Pending Orders
        </div>

        {/* 
          Project Name 
          Component Name
          Component Accepted Price

          Contact Number
          Address
          City State Zipcode

          Total Budget
          Pieces Needed
          Project Description
          Project Blueprints
          Component Description
          Component Blueprint
        */}
        
        <div className="w-full px-2">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">

            <div className="m-3">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="p-1 flex w-full justify-between items-center rounded-lg bg-sky-800 px-4 py-2 text-left text-sm font-medium text-sky-200 hover:bg-sky-900 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <div className="w-full p-4 text-base sm:text-lg">
                        <div>
                            Project Name: Gaming Mouse
                        </div>
                        <div>
                            Component Name: Premium Plastic
                        </div>
                        <div>
                            Component Accepted Price: 10000 Rs.
                        </div>
                      </div>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transition-all rotate-180 transform' : 'transition-all'
                        } h-10 w-10 text-sky-200`}
                      />
                    </Disclosure.Button>

                    <AnimateHeight
                      style={{flexShrink: 0}}
                      id="example-panel"
                      duration={500}
                      height={open ? 'auto': 0} 
                    >
                      <div className="px-4 pt-4 pb-2 text-sm text-black">
                        <div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-lg font-medium m-1">Contact Number:</h1>
                                <p className="text-base m-1">
                                    +91 7358171473
                                </p>
                            </div>
                            
                            <div>
                                <h1 className="text-lg font-medium m-1">Address:</h1>
                                <p className="text-base m-1 indent-2 px-3 py-1">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ad, aspernatur dolorem quaerat amet, ipsam aliquam sapiente quos at, 
                                </p>
                            </div>

                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex flex-row items-center">
                                    <h1 className="text-lg font-medium m-1">City:</h1>
                                    <p className="text-base m-1">
                                        Chennai
                                    </p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <h1 className="text-lg font-medium m-1">State:</h1>
                                    <p className="text-base m-1">
                                    TamilNadu
                                    </p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <h1 className="text-lg font-medium m-1">ZipCode:</h1>
                                    <p className="text-base m-1">
                                        600056
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center">
                                <h1 className="text-lg font-medium m-1">Total Budget:</h1>
                                <p className="text-base m-1">
                                    200000 Rs.
                                </p>
                            </div>

                            <div className="flex flex-row items-center">
                                <h1 className="text-lg font-medium m-1">Pieces Needed:</h1>
                                <p className="text-base m-1">
                                    1000
                                </p>
                            </div>
                            
                            <div>
                                <h1 className="text-lg font-medium m-1">Project Description:</h1>
                                <p className="text-base m-1 indent-2 px-3 py-1">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ad, aspernatur dolorem quaerat amet, ipsam aliquam sapiente quos at, 
                                    deserunt vel odio ipsum beatae provident est alias quasi eum praesentium. 
                                    Illo nemo nostrum perspiciatis? Sed velit odit eos quae quo repudiandae maxime, 
                                    aliquam, perferendis voluptatibus ipsum in porro dolor incidunt eligendi.
                                </p>
                            </div>

                            <div className="flex flex-row items-center">
                                <h1 className="text-lg font-medium m-1">Project Blueprint:</h1>
                                <p className="text-base m-1 underline font-bold">
                                    blueprint.docx
                                </p>
                            </div>
                            
                            <div>
                                <h1 className="text-lg font-medium m-1">Component Description:</h1>
                                <p className="text-base m-1 indent-2 px-3 py-1">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ad, aspernatur dolorem quaerat amet, ipsam aliquam sapiente quos at, 
                                    deserunt vel odio ipsum beatae provident est alias quasi eum praesentium. 
                                    Illo nemo nostrum perspiciatis? Sed velit odit eos quae quo repudiandae maxime, 
                                    aliquam, perferendis voluptatibus ipsum in porro dolor incidunt eligendi.
                                </p>
                            </div>

                            <div className="flex flex-row items-center">
                                <h1 className="text-lg font-medium m-1">Component Blueprint:</h1>
                                <p className="text-base m-1 underline font-bold">
                                    plasticblueprint.docx
                                </p>
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

export default Pending