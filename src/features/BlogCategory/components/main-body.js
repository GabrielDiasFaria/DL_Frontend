import React from 'react';

import SearchWidget from '../../BlogView/components/search-widget'
import PortifolioWidget from '../../BlogView/components/protfolio-widget'
import PopularPostsWidget from '../../BlogView/components/popular-posts-widget'
import CategoryWidget from '../../BlogView/components/category-widget'
import Newsletter from '../../BlogView/components/newsletter-widget'
import PostArea from '../components/post-area'

export default function MainBody({ articles }) {
    return (
        <div class="main-body section-gap">
            <div class="container box_1170">
                <div class="row">
                    <div class="col-lg-8 post-list">
                        <PostArea articles={articles} />
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
        </div>
    )
}