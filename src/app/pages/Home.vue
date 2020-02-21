<template>
    <Container>
        <div class="home-page">
            <h1 class="home-page__title text-center">
                Todo List vue.js
            </h1>
            <div class="home-page__create-todo">
                <CreateList/>
            </div>
            <div class="home-page__todo" v-if="todoList && todoList.length > 0 ">
                <TodoList
                        v-for="todoListSingle of todoList.slice().reverse()"
                        v-if="todoListSingle && todoListSingle.id"
                        :todoList="todoListSingle"
                        :key="todoListSingle.id"
                        @onDelete="confirmToDelete(todoListSingle.id)"
                        @onEdit="toEditPage(todoListSingle.id)"
                />
            </div>
            <div v-else>
                <p>Add your first todo list...</p>
            </div>
            <Modal
                    :isOpen=isModalOpen
                    confirmButton="Yes"
                    cancelButton="No"
                    @onClose="isModalOpen = false"
                    @onConfirm="modalProps.confirm()">
                <template #body>
                    <h4 class="text-center">{{modalProps.description}}</h4>
                </template>
            </Modal>
        </div>
    </Container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Container from "@/app/components/Container.component.vue";
    import CreateList from "@/app/components/CreateList.component.vue";
    import TodoList from "@/app/components/TodoList.component.vue";
    import Modal from "@/app/components/Modal.component.vue";

    export default {
        name: "home-page",
        data() {
            return {
                newTitle: "",
                isModalOpen: false,
                modalProps: {
                    description: "",
                    confirm: () => {},
                }
            }
        },
        computed: {
            ...mapGetters([
                "todoList",
            ])
        },
        components: {
            Container,
            TodoList,
            CreateList,
            Modal
        },
        methods: {
            confirmToDelete(id) {
                this.modalProps = {
                    description: "Delete todo item?",
                    confirm: () => this.$store.dispatch("DeleteTodoList", id),
                };
                this.isModalOpen = true;
            },
            toEditPage(id) {
                this.$router.push({
                    name: 'todo-edit',
                    params: {id}
                })
            },
        }
    }
</script>

<style lang="scss">
    .home-page {

        &__title {
            padding: 10px;
            background: bisque;
            margin-bottom: 20px;
        }
    }
</style>