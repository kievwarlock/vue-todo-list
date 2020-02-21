<template>
    <div class="input-component">
        <input
                type="text"
                class="input-component__input"
                :value="value"
                :placeholder="placeholder"
                @change="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
    export default {
        name: "input-ui",
        props: {
            value: {
                type: String || Number,
                default: "",
            },
            placeholder: {
                type: String,
                default: "",
            }
        },
    }
</script>

<style lang="scss">

    .input-component {
        display: inline-block;
        position: relative;
        width:100%;
        box-sizing: border-box;

        &__input {
            width: 100%;
            font-size: 14px;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 1px 1px 3px 0px #ccc;
            outline: none;
            box-sizing: border-box;
        }
    }

</style>
