import React from 'react'

function CategoryLabel({id, category}) {
  return (
    <div>
       <button id={id} className='cat-btn'>
        {category}
       </button>
    </div>
  )
}

export default CategoryLabel