
<template>
    <form class="add-feed" @submit.prevent="onSubmit">
        <h2 class="mb-4">Add New Feed</h2>
        <div class="form-group">
            <label for="description">Feed's Names</label>
            <input 
                type="text"
                id="description"
                class="form-control"
                v-model="description">
        </div>

        <div class="form-group">
            <label for="feedUrl">URL</label>
            <input 
                type="text"
                id="feedUrl"
                class="form-control"
                v-model="feedUrl">
        </div>

        <button 
            type="submit"
            >
                Add
        </button>

    </form>
</template>

<script>
     export default {

        data() {
            return {
                description: null,
                feedUrl: null,
            }
        },

        methods: {
            onSubmit() {
                let createdFeed = {
                    description: this.description,
                    feedUrl: this.feedUrl,
                };
                this.$emit('onAddFeed', createdFeed);

                this.description = null;
                this.feedUrl = null;
            },

        }
    }    
</script>


<style>
    input {
        background: white;
        border: solid 1px black;
        padding: 10px;
        margin: 5px;
    }

    .add-feed {
        margin: 30px;
        background: blue;
    }
    .form-group {
        display: grid;
        grid-template-columns: 45% 45%;
        grid-gap: 10px;
    }
</style>










