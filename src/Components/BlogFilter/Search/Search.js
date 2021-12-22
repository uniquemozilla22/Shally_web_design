import React from 'react'
import classes from './Search.module.css'

const Search = () => {
    return (
        <div className={classes.blog_search__container}>
            <input type="text" placeholder="Search" name="blogSearch" />
            <button type="submit"><i className="fas fa-search" /></button>
        </div>
    )
}

export default Search
