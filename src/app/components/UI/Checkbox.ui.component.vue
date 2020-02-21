<template>
    <span :class="checkboxClasses">
         <input
                 type="checkbox"
                 class="checkbox__input"
                 :checked="value"
                 @change="$emit('input', $event.target.checked)"
         />
        <img class="checkbox__input-icon" :src="currentIcon"/>
    </span>
</template>

<script>
    export default {
        name: "checkbox-ui",
        props: {
            value: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            currentIcon() {
                return require(`@/assets/icons/${this.value ? "check-solid" : "times-solid"}.svg`);
            },
            checkboxClasses() {
                let classes = ["checkbox"];
                if (this.isOpen) {
                    classes.push("checkbox_checked");
                }
                return classes.join(" ");
            }
        }
    }
</script>

<style lang="scss">

    .checkbox {
        display: inline-flex;
        align-items: center;
        width: 18px;
        height: 18px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 3px 0px #ccc;
        background: #fff;

        &__input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            cursor: pointer;
            height: 100%;
            margin: 0;
            opacity: 0;
            padding: 0;
            z-index: 1;
        }

        &__input-icon {
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
        }

        &_checked &__input-icon {
            transform: scale(1);
            opacity: 1;
        }
    }

</style>
