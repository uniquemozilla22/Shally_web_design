import React from 'react'
import './Banner.css'
import BannerImg from '../../Assets/banner-img.png'

const Banner = () => {
    return (
        <section class="banner-section main-banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-7">
                        <div class="banner-text wow fadeInLeft" data-wow-duration="1000ms" style={{"visibility": "visible"}}>
                            <h2>The Smarter Way to Learn <span> Anything</span></h2>
                            <p>
                                Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper sed
                            </p>
                            <form class="search-form">
                                <input type="text" name="search" placeholder="Search Class"/>
                                <button>
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5">
                        <div class="banner-img wow zoomIn d-none d-lg-block" data-wow-duration="1000ms" style={{"visibility": "visible"}}>
                            <img src={BannerImg} alt=""/>
                        </div>
                        <div class="elements-bg wow zoomIn" data-wow-duration="1000ms" style={{"transform-style": "preserve-3d", "visibility": "visible", "transformOrigin": "center center 0px" ,"transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"}}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
