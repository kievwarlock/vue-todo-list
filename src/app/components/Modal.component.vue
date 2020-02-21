<template>
    <div :class="modalClasses" @click="onClose()">
        <div class="modal__content">
            <div v-if="isCloseIcon" class="modal__close" @click="onClose()">
                <img class="modal__close-icon" src="@/assets/icons/times-solid.svg" alt=""/>
            </div>
            <div class="modal__body">
                <slot name="body"></slot>
            </div>
            <div class="modal__actions" v-if="confirmButton || cancelButton">
                <ButtonUi
                        v-if="confirmButton"
                        @click="onConfirm()"
                        color="success">
                    {{confirmButton}}
                </ButtonUi>
                <ButtonUi
                        v-if="cancelButton"
                        @click="onClose()"
                        color="danger">
                    {{cancelButton}}
                </ButtonUi>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonUi from "@/app/components/ui/Button.ui.conponent.vue";

    export default {
        name: "modal",
        components: {ButtonUi},
        props: {
            isOpen: {
                type: Boolean,
                default: false,
            },
            isCloseIcon: {
                type: Boolean,
                default: true,
            },
            confirmButton: {
                type: String,
            },
            cancelButton: {
                type: String
            }
        },
        computed: {
            modalClasses() {
                let classes = ["modal"];
                if (this.isOpen) {
                    classes.push("modal_open");
                }
                return classes.join(" ");
            }
        },
        methods: {
            onClose() {
                this.$emit("onClose");
            },
            onConfirm() {
                this.$emit("onConfirm");
            }
        }
    }
</script>

<style lang="scss">
    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1000;
        outline: none;
        opacity: 0;
        background-color: rgba(16, 17, 29, 0.9);
        pointer-events: none;
        transition-property: opacity;
        transition-duration: .6s;

        &__close {
            position: relative;
            display: flex;
            cursor: pointer;

            & img {
                display: block;
                margin-left: auto;
            }
        }

        &_open {
            pointer-events: auto;
            opacity: 1;
        }

        &__actions {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        &__body {
            padding: 10px;
            font-size: 15px;
            color: #444444;
        }

        &__close-icon {
            cursor: pointer;
            max-width: 24px;
            max-height: 24px;
            margin-left: auto;
        }

        &__content {
            width: 100%;
            max-width: 400px;
            min-height: 100px;
            overflow-y: auto;
            background: #fff;
            box-sizing: border-box;
            transform: translateY(-10%);
            transition-duration: .6s;
            transition-property: transform;
            border-radius: 10px;
            padding: 10px;

            .modal_open & {
                transform: translateY(0);
            }
        }
    }

</style>
