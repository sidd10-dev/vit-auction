import NavbarComp from "../../components/navbar-comp"

import { React } from 'react'

export default function index() {

  return (
    <>
      <NavbarComp></NavbarComp>
      <div className="w-3/4 mx-auto my-4 sm:w-2/3">
        <div className="font-head text-3xl p-5 mx-5 flex items-center justify-center">
          Bids Dashboard
        </div>

        {/* 
          Project Name 
          Component Name
          Component Bid Price
        */}
        
        <div className="w-full px-2">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">

            <div className="m-3">
              <div className="p-1 flex w-full justify-between items-center rounded-lg bg-sky-800 px-4 py-2 text-left text-sm font-medium text-sky-200">
                <div className="w-full p-4 text-base sm:text-lg">
                  <div>
                      Project Name: Gaming Mouse
                  </div>
                  <div>
                      Component Name: Premium Plastic
                  </div>
                  <div>
                      Component Bid Price: 10000 Rs.
                  </div>
                </div>
              </div>  
            </div>          
                              
            <div className="m-3">
              <div className="p-1 flex w-full justify-between items-center rounded-lg bg-sky-800 px-4 py-2 text-left text-sm font-medium text-sky-200">
                <div className="w-full p-4 text-base sm:text-lg">
                  <div>
                      Project Name: Gaming Mouse
                  </div>
                  <div>
                      Component Name: Premium Plastic
                  </div>
                  <div>
                      Component Bid Price: 10000 Rs.
                  </div>
                </div>
              </div>  
            </div>                            
                         
            </div>
            </div>
        </div>

    </>
  )
}