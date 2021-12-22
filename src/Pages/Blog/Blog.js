import React from 'react'
import { Fade } from 'react-reveal'
import BlogComponent from '../../Components/BlogComponent/BlogComponent'
import BlogFilter from '../../Components/BlogFilter/BlogFilter'

const Blog = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-6">
                        <Fade cascade bottom>
                            <BlogComponent />
                        </Fade>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <Fade cascade bottom>
                            <BlogFilter />
                        </Fade>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog
