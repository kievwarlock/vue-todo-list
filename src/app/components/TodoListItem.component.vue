<template>
    <div class="todo-list-item">
        <div class="todo-list-item__status">
            <CheckboxUi :value="isDone" @input="onUpdateStatus()"/>
        </div>
        <div class="todo-list-item__description">
            <template v-if="this.isEditable">
                <InputUi
                        v-model=computedDescription
                />
            </template>
            <template v-else>
                {{description}}
            </template>
        </div>
        <div v-if="this.isEditable" class="todo-list-item__delete">
            <ButtonUi @click="onDelete()" color="danger">
                DELETE
            </ButtonUi>
        </div>
    </div>
</template>

<script>
    import CheckboxUi from "@/app/components/ui/Checkbox.ui.component.vue";
    import InputUi from "@/app/components/ui/Input.ui.component.vue";
    import ButtonUi from "@/app/components/ui/Button.ui.conponent.vue";

    export default {
        data() {
            return {
                test: false,
            }
        },
        name: "todo-list-item",
        components: {
            CheckboxUi,
            InputUi,
            ButtonUi
        },
        computed: {
            computedDescription: {
                get() {
                    return this.description
                },
                set(value) {
                    this.$emit('onUpdate', value)
                },
            }
        },
        props: {
            description: {
                type: String,
            },
            isDone: {
                type: Boolean,
            },
            isEditable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onUpdateStatus() {
                if (this.isEditable) {
                    this.$emit("onUpdateStatus");
                }
            },
            onDelete() {
                if (this.isEditable) {
                    this.$emit("onDelete");
                }
            },
        }
    }
</script>

<style lang="scss">

    .todo-list-item {
        background: #f5f5f5;
        padding: 5px;
        margin: 5px 0px;
        display: flex;
        align-content: center;

        &:nth-child(2n) {
            background: #eaeaea;
        }

        &__description {
            display: flex;
            align-items: center;
            width: 100%;
        }

        &__status {
            margin-right: auto;
            display: flex;
            align-items: center;
            padding: 10px;
        }

        &__delete {
            display: flex;
            align-items: center;
            padding: 0px 10px;
        }
    }

</style>
