import React from 'react'
import NewsCard from '../News-Card/NewsCard'
import image1 from '../../Assets/news1.jpg'
import image2 from '../../Assets/news2.jpg'
import image3 from '../../Assets/news3.jpg'
import './BlogComponent.css'
const BlogComponent = () => {
    return (
        <div className="blog_component__section">
            <NewsCard width date="2021/12/21" title="With the Image" description="This is the description part" postedBy="Admin" tag={["News", "English"]} lang="English" img={image1} delay={1} />
            <NewsCard width date="2021/12/21" title="No Image" description="This part doesnot contain Image" postedBy="Admin" tag={["News", "Nepali"]} lang="Nepali" delay={2} />
            <NewsCard carousel width date="2021/12/22" title="Carousel Image for group of Images" description="This is the image container for the gallery in carousel" postedBy="Admin" img={[image3, image2, image1]} tag={["News", "Carousel"]} lang="Nepali" delay={3} />
            <NewsCard video='https://www.youtube.com/embed/ySiFM-q6J_k' width date="2021/12/21" title="Video URL" description="This is the Container for the videoe" postedBy="Yogesh" tag={["News", "Video"]} lang="Video" delay={4} />
        </div>
    )
}

export default BlogComponent
