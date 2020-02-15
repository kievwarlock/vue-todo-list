<template>
    <div
            class="app-button"
            v-else
            @click="$emit('click')">
        <div class="app-button__inner">
            <div class="app-button__icon" v-if="hasIconSlot">
                <slot name="icon"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AppButton',
        data() {
            return {}
        },
        props: {
        },
        computed: {
            hasIconSlot () {
                return !!this.$slots.icon
            }
        },
        methods: {}
    }
</script>

<style>
    .app-button {
        color: #ff0050;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 7px 20px;
        border: 1px solid #ff0050;
        border-radius: 32px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        max-height: 36px;
        height: 100%;
        min-width: 170px;
    }

    .app-button__inner {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app-button__icon {
        display: block;
        margin-right: 10px;
    }

    .app-button__icon * {
        max-height: 20px;
        display: block;
    }

    .app-button:hover, .app-button:active, .app-button:focus {
    }

    .app-button:active, .app-button:focus {
    }
</style>
