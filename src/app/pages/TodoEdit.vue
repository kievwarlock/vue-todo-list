<template>
    <Container>
        <div class="todo-edit">
            <h1 v-if="title" class="text-center">
                {{title}}
            </h1>
            <ButtonUi @click="addTodo()" color="success">ADD TODO</ButtonUi>
            <div class="todo-list__items">
                <template v-if="currentTodoList.length > 0">
                    <TodoListItem
                            v-for="(todoListItem, index) of currentTodoList"
                            :key="index"
                            :description="todoListItem.description"
                            :isDone="todoListItem.isDone"
                            :isEditable=true
                            @onDelete="confirmToDelete(index)"
                            @onUpdateStatus="todoListItem.isDone = !todoListItem.isDone"
                            @onUpdate="todoListItem.description = $event"
                    />
                </template>
                <template v-else>
                    <p>Todo list is empty...</p>
                </template>

            </div>
            <div class="todo-list__actions">
                <ButtonUi @click="saveData()" color="success">SAVE</ButtonUi>
                <ButtonUi @click="confirmToCancel()" color="warning">Cancel</ButtonUi>
                <ButtonUi v-if="!isDefaultState" @click="resetToDefaultState()">
                    To default state
                </ButtonUi>
                <ButtonUi v-if="isDefaultState && previousTodoList && previousTodoList.length > 0"
                          @click="previousTodo()">
                    previous Todo List
                </ButtonUi>
            </div>
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
    </Container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Container from "@/app/components/Container.component.vue";
    import ButtonUi from "@/app/components/ui/Button.ui.conponent.vue";
    import TodoListItem from "@/app/components/TodoListItem.component.vue";
    import Modal from "@/app/components/Modal.component.vue";

    export default {
        name: "todo-edit",
        components: {
            Container,
            ButtonUi,
            TodoListItem,
            Modal
        },
        data() {
            return {
                title: "",
                currentTodoList: [],
                originalTodoList: [],
                previousTodoList: [],
                isModalOpen: false,
                deleteIndex: "",
                modalProps: {
                    description: "",
                    confirm: () => {},
                }
            }
        },
        props: {
            id: {
                type: String
            }
        },
        mounted() {
            this.init();
        },
        computed: {
            ...mapGetters([
                "todoList",
            ]),
            isDefaultState() {
                return JSON.stringify(this.currentTodoList) === JSON.stringify(this.originalTodoList);
            }
        },
        methods: {
            init() {
                let currentTodoItem = this.todoList.filter((todoItem) => todoItem.id === this.id);

                if (currentTodoItem[0]) {
                    let {title, items} = currentTodoItem[0];
                    this.title = title;
                    this.currentTodoList = JSON.parse(JSON.stringify(items));
                    this.originalTodoList = JSON.parse(JSON.stringify(items));
                } else {
                    this.$router.push({
                        name: 'NotFound'
                    })
                }
            },
            addTodo() {
                this.currentTodoList.push({
                    description: "",
                    isDone: false
                });
            },
            confirmToDelete(index) {
                this.modalProps = {
                    description: "Delete current todo item?",
                    confirm: () => this.$delete(this.currentTodoList, index),
                };
                this.isModalOpen = true;
            },
            confirmToCancel() {
                this.modalProps = {
                    description: "Do you want cancel?",
                    confirm: () => this.$router.push({name: 'home-page'}),
                };
                this.isModalOpen = true;
            },
            resetToDefaultState() {
                this.previousTodoList = JSON.parse(JSON.stringify(this.currentTodoList));
                this.currentTodoList = JSON.parse(JSON.stringify(this.originalTodoList));
            },
            previousTodo() {
                this.currentTodoList = JSON.parse(JSON.stringify(this.previousTodoList));
                this.previousTodoList = [];
            },
            saveData() {
                this.$store.dispatch("UpdateTodoList", {
                    id: this.id,
                    title: this.title,
                    items: this.currentTodoList
                });
                this.$router.push({
                    name: 'home-page'
                })
            }
        }
    }
</script>

<style lang="scss">

    .todo-edit {
        position: relative;
        padding: 10px;

        &__items {
            padding: 10px;
            margin: 10px 0px;
            border: 1px solid #ccc;
        }

        &__actions {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>