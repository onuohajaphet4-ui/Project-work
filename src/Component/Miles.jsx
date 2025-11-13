import React from 'react'
import './Miles.css'
 import Number from '../Component/Nubers'
const Miles = () => {
  return (
    <div className='mile'>
         <h5>
            INVESTORS INFORMATION
         </h5>


         <h1>
            Milestones & <br />
             Performance
        </h1>


        <div className="statts">
         <div className="statt">
            <h2>
               <Number
               end={25}
               duration={2000}
               suffix='+'
               />
            </h2>

            <p>Active Customers </p>
          </div>

          <div className="statt">
            <h2>
               <Number
               end={2000}
               duration={2000}
               suffix='+'
               />
            </h2>

            <p>Employees </p>
          </div>

         <div className="statt">
            <h2>
               <Number
               end={4000000}
               duration={2000}
               suffix='+'
               />
            </h2>

            <p>Beneficias </p>
         </div>

         <div className="statt">
                     <h2>
                        <Number
                        end={2000000}
                        duration={2000}
                        suffix='+'
                        />
                     </h2>
         
                     <p>Active Customers </p>
           </div>
        </div>
    </div>
  )
}

export default Miles
