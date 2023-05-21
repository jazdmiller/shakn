import React from 'react'

function CategoryLabel({category}) {
  return (
    <div>
       <button className='cat-btn'>
        {category}
       </button>
    </div>
  )
}

export default CategoryLabel