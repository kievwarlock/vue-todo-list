<template>
    <div class="container" >
        <slot/>
    </div>
</template>

<script>
    export default {
        name:"container",
    }
</script>

<style>
    .container {
        max-width:800px;
        width:100%;
        margin: 0 auto;
    }
</style>
