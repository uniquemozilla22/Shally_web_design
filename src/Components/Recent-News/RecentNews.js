import React from 'react'
import NewsCard from '../News-Card/NewsCard'
import "./RecentNews.css"
import news1 from '../../Assets/news1.jpg'
import news2 from '../../Assets/news2.jpg'
import news3 from '../../Assets/news3.jpg'

const RecentNews = () => {
    return (
        <div className="recent_news__section">
            <div className="container">
                <div className="content__container" >
                    <h2 className="title">Recent News</h2>
                    <p className="titles_content">Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem sem, aliquet</p>
                </div>
                <div className="news_card__container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <NewsCard delay={2} img={news1} lang="English" date="12/09/2020" postedBy="Admin" tag={["Teachers", "School"]} title="Campus clean workshop" description="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <NewsCard delay={3} img={news2} lang="Nepali" date="12/09/2020" postedBy="Admin" tag={["Teachers", "School"]} title="Campus clean workshop" description="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <NewsCard delay={4} img={news3} lang="Spanish" date="12/09/2020" postedBy="Admin" tag={["Teachers", "School"]} title="Campus clean workshop" description="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentNews
