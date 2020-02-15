<template>

    <div class="profile__fixed-nav" :class="modificationStyle" >
        <div class="profile__fixed-nav-inner">
            <div class="profile__fixed-nav__left">
                <slot name="left"></slot>
            </div>
            <div class="profile__fixed-nav__center">
                <slot name="center"></slot>
            </div>
            <div class="profile__fixed-nav__right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'FixedTopNavigation',
        data() {
            return {}
        },
        computed:{
          modificationStyle(){
              let className = '';
              if(this.bg) className+= 'profile__fixed-nav__bg ';
              if(this.shadow) className+= 'profile__fixed-nav__shadow ' ;
              if(this.radius)className+= 'profile__fixed-nav__radius ';
              return className;
          }
        },
        props: {
            bg: {
                type: Boolean,
                default: false,
            },
            shadow: {
                type: Boolean,
                default: false,
            },
            radius: {
                type: Boolean,
                default: true,
            }
        },
        methods: {}
    }

</script>


<style>
    .profile__fixed-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        padding: 7px 15px;
        text-align: center;
        height: 50px;
        display: flex;
    }
    .fixed-top-navigation-container{
        padding-top:50px;
    }
    .profile__fixed-nav__shadow {
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    }
    .profile__fixed-nav__bg {
        background-color: rgba(255, 255, 255, 0.8);
    }
    .profile__fixed-nav__radius {
        border-radius: 0px 0px 18px 18px;
    }
    .profile__fixed-nav__text-center__nowrap {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .profile__fixed-nav__text-center {
        font-size: 19px;
        line-height: 1;
        color: #222;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 15px 0px 15px;
        text-decoration: none;
        height: 100%;
    }
    .profile__fixed-nav-inner {
        position: relative;
        width: 100%;
    }
    .profile__fixed-nav__left {
        width: 36px;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;

    }
    .profile__fixed-nav__center {
        position: absolute;
        top: 0;
        left: 45px;
        right: 45px;
        height: 100%;

    }
    .profile__fixed-nav__right {
        min-width: 36px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
