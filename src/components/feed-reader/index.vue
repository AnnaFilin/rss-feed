<template>
    <div>
        <h1 class="mb-6">Feed Reader</h1>
        <div class="feed-container">
            <div class="sidebar">
                <FeedList 
                    @onSelectFeed="handleSelectFeed"
                    
                    :feeds="feeds"
                />
                <AddFeed @onAddFeed="handleAddFeed"/>
            </div>
            <ArticlesList 
                @onSelectArticle="handleSelectArticle"
                :articles="articles"
            />
            <SingleArticle 
                :article="selectedArticle"
            />
        </div>    
    </div>
</template>

<script>

import axios from 'axios';
import FeedList from './FeedList';
import ArticlesList from './ArticlesList';
import SingleArticle from './SingleArticle';
import AddFeed from './AddFeed';

import Parser from 'rss-parser';

export default {
    components: {FeedList, ArticlesList, SingleArticle, AddFeed},

    data() {
        return {
            feeds: [],
            articles: [],
            selectedArticle: null
        }
    },

    created() {
        this.getFeeds();
    },

    mounted() {
        this.handleAddFeed();
    },

    methods: {
        async getFeeds() {
            let { data } = await axios.get('./.netlify/functions/feeds');

            this.feeds = data;
        },

        handleSelectFeed(feed) {
            this.articles = feed.items;
        },

        handleSelectArticle(article) {
            this.selectedArticle = article;
        },

        async handleAddFeed(newFeed) {
            console.log(`This is the new url recieved from the user ${newFeed.feedUrl}`);

            let parser = new Parser();
            let feed =await parser.parseURL(newFeed.feedUrl);

            console.log(feed.title);

            this.feeds.push(feed);
        },

    },
}

</script>

<style>
    .feed-container {
        display: grid;
        grid-template-columns: 25% 15% auto;
        grid-gap: 20px;
    }

</style>