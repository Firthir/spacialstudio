import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import './Categories.css'

const Categories = ({ categories }) => (
  <ul className='Categories'>
    {categories.map((category, index) => {
      return (
        <li key={category + index}>
          <Link to={`/blog/${_kebabCase(category)}/`}>{category}</Link>
        </li>
      )
    })}
  </ul>
)

export default Categories