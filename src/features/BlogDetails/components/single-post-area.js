import React from 'react';

import '../styles/style.css'
import SearchWidget from '../../BlogView/components/search-widget'
import PortifolioWidget from '../../BlogView/components/protfolio-widget'
import PopularPostsWidget from '../../BlogView/components/popular-posts-widget'
import CategoryWidget from '../../BlogView/components/category-widget'
import Newsletter from '../../BlogView/components/newsletter-widget'
import MainBlogDetails from '../components/main_blog_details'

export default function SinglePostArea({ article }) {
    return (
        <section className="blog_area section-gap single-post-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <MainBlogDetails article={article} />
                    </div>

                    <div className="col-lg-4 sidebar">
                        <SearchWidget />
                        <PortifolioWidget />
                        <PopularPostsWidget />
                        <CategoryWidget />
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>
    )
}