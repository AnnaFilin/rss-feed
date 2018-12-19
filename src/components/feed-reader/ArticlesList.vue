<template>
    <div>
        <h2 class="mb-4">Articles</h2>
        <ul 
            v-if="articles && articles.length"
            class="list-reset sticky pin-t border-b border-grey"    
        >
                <li v-for="item in articles" :key="item.title">
                    <div class="feed-content">
                        <div class="content-l"> 
                            <h2 class="m4">{{item.title}}</h2>
                            <div class="mb-4" v-html="item.content" />
                            <a 
                                :href="item.link"
                                target="_blank"
                                rel="noopener"
                                class="inline-block bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 no-underline"
                            >
                                View Original
                            </a>
                        </div>
                        <div></div>
                        <div class="image-r">
                            <img class="mb-4" :src="item.enclosure.url" />
                        </div>
                    </div>
                </li>
        </ul>
    </div>
</template>

<script>
//import SingleArticle from './SingleArticle';

export default {
    props: ['articles'],

    // methods: {
    //     selectArticle(article) {
    //         this.$emit('onSelectArticle', article); 
    //     }
    // }
}

</script>