<template>
    <div>
        <div v-text="name" class="white"></div>
        <div v-text="money"></div>
    </div>
</template>
<script>
    export default {
        name: 'project',
        props: ['name','money'],
        mounted() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>

</style>