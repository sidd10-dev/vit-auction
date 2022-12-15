import { React, useRef, useState } from 'react'
import styles from '../../styles/project.module.css'
import NavbarCust from '../../components/navbar-cust'
import axios from 'axios';

import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { Router, useRouter } from 'next/router'

const newProject = () => {

    const phoneRef = useRef()
    const pnameRef = useRef()
    const pdescRef = useRef()
    const pfileRef = useRef()
    const streetRef = useRef()
    const stateRef = useRef()
    const cityRef = useRef()
    const zipRef = useRef()
    const totalRef = useRef()
    const pcsRef = useRef()

    const router= useRouter()

    const [Form, setForm] = useState([])

    const newProjectEventHandler = async (event) => {
        event.preventDefault()

        try {

            var date = new Date();
            var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
            console.log("Hello")
            console.log(pfileRef.current.value.buffer)

            router.push("/customer")

            const res = await axios.post('http://localhost:3000/api/create-project', {
                name: pnameRef.current.value,
                debrief: pdescRef.current.value,
                address: streetRef.current.value,
                state: stateRef.current.value,
                city: cityRef.current.value,
                pincode: zipRef.current.value,
                budget: totalRef.current.value,
                quantity: pcsRef.current.value,
                date: current_date,
                phone: phoneRef.current.value,
                components: Form
            })

        } catch (error) {
            console.log(error)
        }
    }

    const prevIsValid = () => {
        if (Form.length === 0) {
            return true;
        }
    
        const someEmpty= Form.some(
          (item) => item.industry === '' ||
          item.desc === '' || item.name === '' ||
          item.price === ''
        );
    
        if(someEmpty){
          Form.map((item, index)=>{
            const allPrev= [...Form]
    
            if(Form[index].name == ''){
              allPrev[index].errors.name = 'Component Name is Required'; 
            }

            
            if(Form[index].desc == ''){
                allPrev[index].errors.desc = 'Description is Required'; 
            }
            
            if(Form[index].industry == ''){
              allPrev[index].errors.industry = 'Industry is Required'; 
            }
            
            if(Form[index].price == ''){
              allPrev[index].errors.price = 'Component Budget is Required'; 
            }
    
            setForm(allPrev)
          });
        }

        return !someEmpty;
    };

    const handleAddLink = (e) => {
        e.preventDefault();
    
        const inputState= {
            name: '',
            desc: '',
            industry: '',
            price: '',

            errors: {
                name: null,
                desc: null,
                industry: null,
                price: null,
            }
        };

        if (prevIsValid()) {
            setForm((prev) => [...prev, inputState])

            setTimeout(function () {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }, 2);
        }
    }

    const handleRemoveLink = (e, index) => {
        e.preventDefault();

        setForm((prev) => prev.filter((item) => item !== prev[index]));
    }

    const onChange = (index, event) => {
        event.preventDefault();
        event.persist();

        setForm(prev => {
            return prev.map((item, i) => {
                if (i != index) {
                    return item
                }

                return {
                    ...item,
                    [event.target.name]: event.target.value,

                    errors: {
                        ...item.errors,
                        [event.target.name]: event.target.value.length > 0 ? null : [event.target.name] + ' is Required',
                    }
                };
            });
        });
    }

    return (
        <>
            <NavbarCust></NavbarCust>
            <div className="w-3/4 mx-auto my-5 sm:w-2/3">

            <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
                Create New Project
            </div>


                <form className="bg-white rounded-lg" action='POST' onSubmit={newProjectEventHandler}>
                    <div className="shadow-xl sm:overflow-hidden sm:rounded-lg">

                        <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Contact No.<span className="text-red-500"> *</span>
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            autoComplete="tel"
                                            ref={phoneRef}
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="proj-name" className="block text-sm font-medium text-gray-700">
                                        Project Name<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="proj-name"
                                        id="proj-name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        ref={pnameRef}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Project Debrief<span className="text-red-500"> *</span>
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={4}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Explanation of your project"
                                            defaultValue={''}
                                            ref={pdescRef}
                                            required
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                                        Brief description for your project.
                                    </p>
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Project Blueprint<span className="text-red-500"> *</span></label>
                                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload files</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={pfileRef} required />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        Company address<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        ref={streetRef}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        ref={cityRef}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        ref={stateRef}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        ZIP / Postal code<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        ref={zipRef}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        Total Estimated Budget<span className="text-red-500"> *</span>
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="company-website"
                                            id="company-website"
                                            className="block w-full z-10 flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            ref={totalRef}
                                            required
                                        />
                                        <span className="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                            Rs.
                                        </span>
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        Number of Pcs Needed<span className="text-red-500"> *</span>
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="number"
                                            name="company-website"
                                            id="company-website"
                                            className="block w-full z-10 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            ref={pcsRef}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles.coloring}>
                            {JSON.stringify(Form)}
                        </div> */}

                        {
                            Form.map((item, index) => (
                                <div key={`item-${index}`}>

                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="p-5">
                                                <div className="border-t border-gray-200" />
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="rounded-lg flex items-center justify-center bg-red-500 p-1.5 text-white text-sm hover:bg-red-400"
                                                onClick={(e) => handleRemoveLink(e, index)}
                                            >
                                                <MinusIcon className="h-5 w-5 m-1" aria-hidden="true" /> Remove Component
                                            </button>
                                        </div>

                                        <div>
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Component Name<span className="text-red-500"> *</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="compname"
                                                id="compname"
                                                className={`${styles['input-box']} ${item.errors.name ? styles['invalid'] : ''}`}
                                                onChange={(e) => onChange(index, e)}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Component Description<span className="text-red-500"> *</span>
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="desc"
                                                    name="desc"
                                                    rows={4}
                                                    className={`${styles['input-box']} ${item.errors.desc ? styles['invalid'] : ''}`}
                                                    onChange={(e) => onChange(index, e)}
                                                    placeholder="Describe component"
                                                    defaultValue={''}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Component Blueprint</label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload files</span>
                                                            <input id="compfile" name="compfile" type="file"
                                                                className={`${styles['read']} ${item.errors.compfile ? styles['invalid'] : ''}`}
                                                                onChange={(e) => onChange(index, e)} />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-6 gap-6 items-center">
                                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Industry<span className="text-red-500"> *</span>
                                                </label>
                                                <select
                                                    id="industry"
                                                    name="industry"
                                                    className={`${styles['input']} ${item.errors.industry ? styles['invalid'] : ''}`}
                                                    onChange={(e) => onChange(index, e)}
                                                    defaultValue={"none"}
                                                    required
                                                >
                                                    <option disabled hidden value="none">Select Industry</option>
                                                    <option value="technology">Technology</option>
                                                    <option value="industrial">Industrial</option>
                                                    <option value="software">Software</option>
                                                    <option value="hardware">Hardware</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    Asking Price<span className="text-red-500"> *</span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="number"
                                                        name="compbud"
                                                        id="compbud"
                                                        className={`${styles['input-box-2']} ${item.errors.price ? styles['invalid'] : ''}`}
                                                        onChange={(e) => onChange(index, e)}
                                                        required
                                                    />
                                                    <span className="inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                        Rs.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                        <div className="px-4 py-3 flex justify-end sm:px-6">
                            <button
                                type="button"
                                className="mx-3 rounded-lg flex items-center justify-center bg-green-500 p-1.5 text-white text-sm hover:bg-green-400"
                                onClick={handleAddLink}
                            >
                                <PlusIcon className="h-5 w-5 m-1" aria-hidden="true" /> Add Component
                            </button>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default newProject