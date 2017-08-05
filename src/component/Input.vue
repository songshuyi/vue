<template>
    <div class="input">
        <input ref="inp" :value="value" :type="type" :placeholder="ph" @blur="onBlur" :readonly="readonly"/>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'input',
        props: ['ph','type','value','readonly'],
        data(){
          return {
          }
        },
        methods: {
            onBlur(){
                this.$emit('msg',this.$refs.inp.value);
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>