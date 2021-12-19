import React from 'react'
import classes from './About_Masonry.module.css'
// import Masonry from 'react-masonry-component'
import img1 from '../../Assets/masonry/gallery1.jpg'
import img2 from '../../Assets/masonry/gallery2.jpg'
import img3 from '../../Assets/masonry/gallery3.jpg'
// import img4 from '../../Assets/masonry/gallery4.jpg'
// import img5 from '../../Assets/masonry/gallery5.jpg'
// import img6 from '../../Assets/masonry/gallery6.jpg'
// import img7 from '../../Assets/masonry/gallery7.jpg'
// import img8 from '../../Assets/masonry/gallery8.jpg'
// import img9 from '../../Assets/masonry/gallery9.jpg'

const About_Masonry = () => {
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    // Masory Options
    const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 10,
    itemSelector: ".photo-item"
  };
    return (
        <div className={classes.about_masonry_container+" "+classes.masonry+ " "}>
                <ul
                className={classes.photo_list}
                >
                    <li className={classes.photo_item}>
                        <img src={img1} />
                    </li>
                    <li className={classes.photo_item}>
                        <img src={img2} />
                    </li>
                    <li className={classes.photo_item}>
                        <img src={img3} />
                    </li>
                </ul>
            </div>
    )
}

export default About_Masonry
