<template>
    <Container>
        <div class="home-page">
            <h1>
                Главная страница
            </h1>

            <div class="todo-list__create">
                <input
                        type="text"
                        name="title"
                        v-model=newTitle
                >

                <AppButton @click="CreateTodo">
                    Create todo
                </AppButton>
            </div>

            <div class="todo-list">
                <div class="todo-list__title">
                    Todo title - {{newTitle}}
                </div>
                <div class="todo-list__items">
                    <h2 class="todo-list__item">
                        Todo item
                    </h2>
                    <div class="todo-list__item">
                        Todo item 2
                    </div>
                    <div class="todo-list__item">
                        Todo item 3
                    </div>
                </div>
            </div>
        </div>

        <!--<div
            class="login-page-user-item"
            v-for="( user, index) of users"
            :key="user.id"
            :class="( selectedUser === index )? 'active' : '' "
            @click="selectedUser = index">
            <div class="login-page-user-item-logo">
                <img src="@/assets/img/avatar-placeholder.png" alt="">
            </div>
            <div class="login-page-user-item-name">
                {{user.phoneNumber}}
            </div>
        </div>-->

    </Container>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import Container from "@/app/components/Container.component.vue"
    import AppButton from "@/app/components/AppButton.conponent.vue"




    export default {
        name: "home-page",
        data() {
            return {
                newTitle: "",
            }
        },
        mounted() {

        },
        components: {
            Container,
            AppButton
        },
        methods: {
            CreateTodo(){
                console.log("create todo");
            },
        }
    }
</script>

<style>

</style>