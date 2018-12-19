<template>
    <div v-if="article">
        <div class="feed-content">
            <div class="content-l"> 
                <h2 class="m4">{{article.title}}</h2>
                <div class="mb-4" v-html="article.content" />
                <a 
                    :href="article.link"
                    target="_blank"
                    rel="noopener"
                    class="inline-block bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 no-underline"
                >
                    View Original
                </a>
            </div>
            <div></div>
            <div class="image-r">
                <img class="mb-4" :src="article.enclosure.url" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['article'],
}

</script>

<style>
    .feed-content {
        display: grid;
        grid-template-columns: 45% 30% auto;
        grid-gap: 20px;
    }
</style>
