<template>
    <transition
            appear
            :name="transitionName"
            :mode="transitionMode">
        <slot></slot>
    </transition>
</template>

<script>
    const DEFAULT_TRANSITION = 'component-fade';
    const DEFAULT_TRANSITION_MODE = 'out-in';

    export default {
        name: 'Animation',
        data() {
            return {
                transitionName: DEFAULT_TRANSITION,
                transitionMode: DEFAULT_TRANSITION_MODE,
            }
        }
    }
</script>

<style lang="scss">
    .component-fade {
        &-enter-active, &-leave-active {
            transition: opacity .3s ease;
        }

        &-enter, &-leave-to {
            opacity: 0;
        }
    }
</style>
