<template>
    <div class="todo-list" v-if="todoList">
        <div v-if="todoList.title" class="todo-list__title">
            {{todoList.title}}
            <div class="todo-list__edit">
                <ButtonUi color="warning" @click="$emit('onEdit')">Edit</ButtonUi>
            </div>
            <div class="todo-list__delete">
                <ButtonUi color="danger" @click="$emit('onDelete')">Delete</ButtonUi>
            </div>
        </div>
        <div class="todo-list__items">
            <TodoListItem
                    v-for="(todoListItem, index) in todoList.items.slice(0,2)"
                    :key="index"
                    :description="todoListItem.description"
                    :isDone="todoListItem.isDone"
            />
            <p v-if="todoList.items.length > 2">....</p>
        </div>
    </div>
</template>

<script>
    import ButtonUi from "@/app/components/ui/Button.ui.conponent.vue";
    import TodoListItem from "./TodoListItem.component.vue";

    export default {
        name: "todo-list",
        props: {
            todoList: {
                type: Object,
                default: false,
            }
        },
        components: {
            TodoListItem,
            ButtonUi
        }
    }
</script>

<style lang="scss">

    .todo-list {
        margin: 10px 0px;
        padding: 10px;

        &__title {
            background: coral;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            padding: 10px;
            display: flex;
            align-items: center;
        }

        &__edit {
            margin-left: auto;
            margin-right: 10px;
        }

        &__items {
            margin: 15px 0px;
            padding-left: 5px;
        }
    }

</style>
