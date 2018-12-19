<template>
    <div>

        <ul v-if="feeds && feeds.length" class="list-reset sticky pin-t border-b border-grey">
            <li v-for="feed in feeds" :key="feed.title">
                <a
                    @click="selectFeed(feed)"
                    href="#"
                    class="no-underline p-2 block border-grey border border-b-0 text-teal hover:bg-teal-lightest"
                >
                    {{feed.title}}
                    <button @click="addToFavorites">+</button>
                </a>
            </li>

        </ul>

        
    </div>
</template>


<script>

    export default {
        props: ['feeds'],

        methods: {
            selectFeed(feed) {
                this.$emit('onSelectFeed', feed);
            },

            addToFavorites(feed) {
                this.$emit('onAddToFavorites', feed);
            },
            
        } 
    }

</script>
