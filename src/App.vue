<template>
    <div id="app">
        <AppAnimation>
            <keep-alive max="1">
                <template>
                    <router-view/>
                </template>
            </keep-alive>
        </AppAnimation>
    </div>
</template>

<script>
    import AppAnimation from './app/components/Animation.vue'

    export default {
        components: {
            AppAnimation,
        },
        beforeCreate() {
            this.$store.commit('initialiseStore');
        }
    }
</script>