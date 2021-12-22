import React from 'react'
import './BlogFilter.css'
import Categories from './Categories/Categories'
import Recents from './Recents/Recents'
import Search from './Search/Search'
import Tags from './Tags/Tags'
const BlogFilter = () => {
    return (
        <div className="blog_filter__section">
            <Search />
            <Categories />
            <Recents />
            <Tags />
        </div>
    )
}

export default BlogFilter
