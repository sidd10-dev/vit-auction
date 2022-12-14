import { Fragment, React, useState } from 'react'
import NavbarCust from '../../components/navbar-cust'

import { Router, useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

const Bids = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const router= useRouter()
    
    return (
        <>
            <NavbarCust></NavbarCust>
            <div className="w-3/4 mx-auto my-4 sm:w-2/3">
                <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
                    Current Bids for your Component
                </div>

                <div className="w-full">
                    <div className="mx-auto w-full rounded-2xl bg-white p-6">
                        <div className="text-lg mb-4 p-4 flex flex-col items-start bg-slate-900 text-white rounded-lg">
                            <div>
                                <span className="font-medium">Current Least Bid:</span> 20000 Rs.
                            </div>
                            <div>
                                <span className="font-medium">Company:</span> Hewlett-Packard Ltd.
                            </div>
                        </div>

                        <div className="overflow-y-auto h-[60vh] scrollbar-hide p-2 flex flex-col items-center">
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
                            <div className="w-4/5 my-2 py-3 px-5 rounded-full bg-sky-900 text-white flex items-center justify-between">
                                <div>
                                    Company: Hewlett-Packard Ltd.
                                </div>
                                <div className="flex items-center">
                                    Bid: 20000 Rs.

                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 rounded-full flex justify-center items-center bg-green-500 text-white text-sm hover:bg-green-400"
                                        onClick={openModal}
                                    >
                                        Accept    
                                    </button>
                                </div>
                            </div>
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
                            Confirmation!!!
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Do you want to choose the following company for your component?
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <button
                                type="button"
                                className="m-1 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none"
                                onClick={()=>{ router.push("/customer") }}
                            >
                                Agree
                            </button>
                            <button
                                type="button"
                                className="m-1 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
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

export default Bids