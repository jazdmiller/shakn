import React from 'react'

function BrowseHome() {
  return (
    <div>
        <div className='pt-5 container'>
            <div className='row mx-2 justify-content-space-between'>
                <div className='col home-label-text'>
                    Browse 
                </div>
                <div className='col text-end home-label-text'>
                    Filter 
                </div>
            </div>
            <div className='row mx-2'>
              <hr className='home-hr mt-2' />
            </div>
        </div>
    </div>
  )
}

export default BrowseHome