<template>
    <transition
            appear
            :name="transitionName"
            :mode="transitionMode" >
        <slot></slot>
    </transition>

</template>

<script>

    const DEFAULT_TRANSITION = 'component-fade';
    const DEFAULT_TRANSITION_MODE = 'out-in';

    export default {
        name:'Animation',
        data(){
          return {
              transitionName: DEFAULT_TRANSITION,
              transitionMode: DEFAULT_TRANSITION_MODE,
          }
        },
        created() {
            this.$router.beforeEach((to, from, next) => {

                let transitionName = to.meta.transitionName || from.meta.transitionName;

                if (transitionName === 'slide') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }
                if (transitionName === 'slideTop') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-top';
                    this.transitionMode = toDepth < fromDepth ? 'out-in' : 'in-out';

                }
                if (transitionName === 'slideLong') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slideLeftLong' : 'slideRightLong';
                    this.transitionMode = '';
                }

                this.transitionName = transitionName || DEFAULT_TRANSITION;

                next();
            });
        },
        methods:{
        }
    }
</script>


<style>
    /*ANIMATIONS */
    /* slide-top slide-down*/
    .slide-top-enter-active,
    .slide-top-leave-active,
    .slide-down-enter-active,
    .slide-down-leave-active {
        overflow: hidden;
        transition-duration: 1s;
        transition-property: height,top, opacity, transform;
        transition-timing-function: ease-in-out;
    }
    .slide-top-enter-active {
        position: fixed;
        top:100%;
        left: 0;
        width: 100%;
        height:100%;
        border-top:1px solid #ccc;
    }
    .slide-top-enter {
        top:100%;
    }
    .slide-top-enter-to {
        top:0;
    }
    .slide-top-leave-active{
        display: none;
    }
    .slide-down-leave-active {
        position: fixed;
        left: 0;
        width: 100%;
        height:100%;
        border-top:1px solid #ccc;

    }
    .slide-down-leave {
        top:0;
    }
    .slide-down-leave-to {
        top:100%;
    }
    .slide-down-enter-active {
        transition-duration: 0.8s;
    }
    .slide-down-enter {
        opacity:0;
    }
    .slide-down-enter-to {
        opacity:1;
    }
    /* END slide-top slide-down*/


    /*SLIDE slideLong */
    .slideRightLong-enter-active {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 0;
        transform: translate(0%, 0);
        transition-duration: .5s;
        transition-property: height, opacity, left, transform;
        transition-timing-function: ease-in-out;
        overflow: hidden;
        box-shadow: 0px 0px 1px 1px #ccc;
    }
    .slideRightLong-leave-active {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 0;
        overflow: hidden;
        transform: translate(0%, 0);
        transition-duration: .4s;
        transition-property: height, opacity, left, transform;
        transition-timing-function: ease-in-out;
    }
    .slideRightLong-leave {
        transform: translate(0%, 0) ;
        opacity: 1;
    }
    .slideRightLong-leave-to {
        transform: translate(-50%, 0) ;
        opacity: 0;
    }
    .slideRightLong-enter {
        transform: translate(100%, 0);
    }
    .slideRightLong-enter-to {
        transform: translate(0%, 0);
    }
    @keyframes moveLeave {
        50% {
            transform: translate(0%, 0) scale(0.9);
            opacity:0.8;
        }
        100% {
            transform: translate(-30%, 0) scale(0.9);
        }
    }

    /*--------------*/

    .slideLeftLong-enter-active {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 1;
        transform: translate(0%, 0);
        transition-duration: .6s;
        transition-property: height, opacity, left, transform;
        transition-timing-function: ease-in-out;
        overflow: hidden;
        box-shadow: 0px 0px 1px 1px #ccc;
    }
    .slideLeftLong-leave-active {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 2;
        transform: translate(0%, 0);
        transition-duration: .6s;
        transition-property: opacity, left, transform;
        transition-timing-function: ease-in-out;
        overflow: hidden;
    }
    .slideLeftLong-leave {
        transform: translate(0%, 0);
        opacity:1;
    }
    .slideLeftLong-leave-to {
        transform: translate(100%, 0);
        opacity:1;
    }
    .slideLeftLong-enter {
        transform: translate(-100%, 0);
        opacity:0;
    }
    .slideLeftLong-enter-to {
        transform: translate(0%, 0);
        opacity:1;
    }

    /*END slideRightLong */

    /*SLIDE LEFT - RIGHT */
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }
    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }
    /*END SLIDE LEFT - RIGHT */

    /*FADE */
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    /* .component-fade-leave-active до версии 2.1.8 */
    .component-fade-enter, .component-fade-leave-to
    {
        opacity: 0;
    }
    /* END FADE */



</style>
