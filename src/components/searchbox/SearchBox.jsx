import React from 'react'
import './searchbox.scss'

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='searchbox'>
        <input 
            type="search"
            name=""
            id=""
            placeholder='Search Robots'
            onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox