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
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                //isAppLoaded:false,
            };
        },
        components: {
            AppAnimation,
        },
        computed: {
            ...mapGetters({
                //isAuthenticated: 'isAuthenticated',
            }),
        },
        async mounted() {

        },
        methods: {

        }
    }

</script>


