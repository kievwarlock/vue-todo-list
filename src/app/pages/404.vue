<template>
    <Container>
        <div class="page-404 text-center">
            <h1>404</h1>
            <h3>Page not found!</h3>
            <ButtonUi @click="$router.push({name: 'home-page'})">To Home page</ButtonUi>
        </div>
    </Container>
</template>

<script>
    import Container from "../components/Container.component.vue"
    import ButtonUi from "../components/ui/Button.ui.conponent.vue"

    export default {
        name: "page-404",
        components: {
            Container,
            ButtonUi
        }
    }
</script>

<style>
</style>
