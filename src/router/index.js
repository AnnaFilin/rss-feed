import Vue from 'vue';
import Router from 'vue-router';
import ArticlesList from '@/components/feed-reader/ArticlesList';
import FavoriteFeedsList from '@/components/feed-reader/FavoriteFeedsList';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticlesList',
      component: ArticlesList
    },
    {
        path: '/favorites',
        name: 'FavoriteFeedsList',
        component: FavoriteFeedsList
    }
  ]
});
