<template>
    <div :class="checkboxClasses" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'button-ui',
        props: {
            color: {
                type: String,
                default: "default",
            }
        },
        computed: {
            currentIcon() {
                return require(`@/assets/icons/${this.value ? "check-solid" : "times-solid"}.svg`);
            },
            checkboxClasses() {
                let classes = ["button"];
                switch (this.color) {
                    case "warning":
                        classes.push("button_warning");
                        break;

                    case "danger":
                        classes.push("button_danger");
                        break;

                    case "success":
                        classes.push("button_success");
                        break;

                    default:
                        classes.push("button_default");
                        break;

                }
                return classes.join(" ");
            }
        }
    }
</script>

<style lang="scss">

    .button {
        font-size: 14px;
        padding: 7px 20px;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        transition: all .3s ease-in;
        transform: scale(1);

        &:active, &:focus {
            transform: scale(1.1);
        }

        &_default {
            color: #222;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border: 1px solid #ccc;

            &:hover {
                background: rgba(220, 220, 255, 0.26);
                box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.1);
            }
        }

        &_warning {
            color: #fff;
            box-shadow: 0 0 6px 0 #fb8b00;
            background: #fb8b00;

            &:hover {
                background: rgba(251, 139, 0, 0.7);
                box-shadow: 0 0 12px 1px #fb8b00;
            }
        }

        &_danger {
            color: #fff;
            box-shadow: 0 0 6px 0 #ff5251;
            background-color: #ff5251;
            border: 1px solid #ff5251;

            &:hover {
                background: rgba(255, 82, 81, 0.75);
                box-shadow: 0 0 12px 1px #ff5251;
            }
        }

        &_success {
            color: #fff;
            box-shadow: 0 0 6px 0 rgba(60, 175, 117, 0.67);
            background-color: #3caf75;
            border: 1px solid #3caf75;

            &:hover {
                background: rgba(60, 175, 117, 0.67);
                box-shadow: 0 0 12px 1px rgba(60, 175, 117, 0.67);
            }
        }
    }

</style>
