<template>
    <div v-if="article">
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
</template>

<script>

export default {
    props: ['article'],
}

</script>
