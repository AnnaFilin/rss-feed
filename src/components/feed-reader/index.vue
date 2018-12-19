<!--<template>
    <div class="page-container">
        <div class="sidebar">
            <FavoriteFeeds :favorites="favorites"/>
            <FeedList 
                @onSelectFeed="handleSelectFeed"
                @onAddToFavorites="handleAddToFavorites"
                :feeds="feeds"
            />
            <AddFeed @onAddFeed="handleAddFeed"/>
        </div>
        <div class="main">
            <div class="header">
                <h1 class="mb-6">Feed Reader</h1>
                <div></div>
                <SearchFeed />
            </div>    
            <div class="feed-container">
                <router-view></router-view>
                
                
            </div>
        </div>
    </div>
</template>-->


<template>
    <div class="page-container">
        <div class="sidebar">
            <router-link class="nav-link" to="/favorites"> + Favorites</router-link>
            </br>
            <router-link class="nav-link" to="/">Feeds</router-link>
            <FeedList 
                @onSelectFeed="handleSelectFeed"
                @onAddToFavorites="handleAddToFavorites"
                :feeds="feeds"
            />
            <AddFeed @onAddFeed="handleAddFeed"/>
        </div>
        <div class="main">
            <div class="header">
                <h1 class="mb-6">Feed Reader</h1>
                <div></div>
                <SearchFeed />  
            </div>    
            <div class="feed-container">
                <router-view></router-view>
                
                
            </div>
        </div>
    </div>
</template>




                // <ArticlesList 
                //     @onSelectArticle="handleSelectArticle"
                //     :articles="articles"
                // />

<script>

import axios from 'axios';
import FeedList from './FeedList';
import ArticlesList from './ArticlesList';
import SingleArticle from './SingleArticle';
import AddFeed from './AddFeed';
import SearchFeed from './SearchFeed';
import FavoriteFeeds from './FavoriteFeeds';

import Parser from 'rss-parser';

export default {
    components: {FeedList, ArticlesList, SingleArticle, AddFeed, SearchFeed, FavoriteFeeds},

    data() {
        return {
            feeds: [],
            articles: [],
            favorites: [],
            //selectedArticle: null
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
           // console.log(`This is the new url recieved from the user ${newFeed.feedUrl}`);

            let parser = new Parser();
            let feed =await parser.parseURL(newFeed.feedUrl);

         //   console.log(feed.title);

            this.feeds.push(feed);
        },

        handleAddToFavorites(feed) {
            this.favorites.push(feed);
            console.log(feed);
        }

    },
}

</script>

<style>
    .page-container {
        display: grid;
        grid-template-columns: 25% auto;
        grid-gap: 20px;
    }
    .header {
        display: grid;
        grid-template-columns: 20% 60% auto;
        grid-gap: 20px;
    }
    .nav-link {
        padding: 20px;
        margin: 20px;
        text-decoration: none;
    }
    /* .feed-container {
        display: grid;
        grid-template-columns: 25% 15% auto;
        grid-gap: 20px;
    } */


</style>