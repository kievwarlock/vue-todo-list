<template>
    <div class="create-list">
        <h3>Create Todo list:</h3>
        <div class="create-list__wrapper">
            <div class="create-list__input">
                <InputUi
                        placeholder="Inout Todo title..."
                        v-model="title"
                />
            </div>
            <div class="create-list__submit">
                <ButtonUi @click="CreateTodo" color="success">
                    Add
                </ButtonUi>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonUi from "@/app/components/ui/Button.ui.conponent.vue";
    import InputUi from "@/app/components/ui/Input.ui.component.vue";

    export default {
        name: "create-list",
        data() {
            return {
                title: ""
            }
        },
        components: {
            ButtonUi,
            InputUi
        },
        methods: {
            CreateTodo() {
                try {
                    this.$store.dispatch("AddTodoList", this.title);
                    this.title = ""
                } catch (e) {
                    alert(e);
                }
            }
        }
    }
</script>

<style lang="scss">

    .create-list {
        padding: 15px;
        border-radius: 5px;

        &__wrapper {
            margin: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        &__input {
            width: 100%;
            padding: 5px;
            border: none;
            margin-right: 10px;
        }

        &__submit {
            padding: 0 10px;
        }
    }

</style>
