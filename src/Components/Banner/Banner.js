import React from 'react'
import './Banner.css'
import BannerImg from '../../Assets/banner-img.png'
import { animated, useSpring } from 'react-spring'

const Banner = () => {

    const appear = useSpring({
        loop: false,
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500
    })


    const slide = useSpring({
        loop: false,
        from: { x: 100 },
        to: { x: 0 },
    })

    return (
        <>
            <section class="banner-section main-banner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-12">
                            <animated.div class="banner-text " style={appear}>
                                <h2 >The Smarter Way to Learn <span> Anything</span></h2>
                                <p>
                                    Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper sed
                                </p>
                                <form class="search-form">
                                    <input type="text" name="search" placeholder="Search Class" />
                                    <button>
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </animated.div>
                        </div>
                        <div class="col-lg-5 col-md-5" >
                            <div class="banner-img wow zoomIn d-none d-lg-block" data-wow-duration="1000ms" style={{ "visibility": "visible" }}>
                                <animated.img src={BannerImg} alt="" style={slide} />
                            </div>
                            <div class="elements-bg wow zoomIn" data-wow-duration="1000ms" >
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="title_name">Shelly</h1>
            </section>
        </>
    )
}

export default Banner
