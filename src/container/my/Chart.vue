<template>
    <div>
        <canvas width="200" height="200" id="myCanvas"></canvas>
    </div>
</template>
<script>
    export default {
        name: 'chart',
        data() {
            return {
                money: 88.83,
                desc: '累计收益(元)',
                length: 0,
                speed: 10,
                begin: 60,
                flag: true,
                ctx:''
            }
        },
        mounted() {
            this.ctx = document.getElementById('myCanvas').getContext('2d')
            requestAnimationFrame(this.draw_arc)
        },
        methods: {
            draw_font(ctx) {
                ctx.fillStyle = '#ff6058'
                ctx.font = '24px Microsoft Yahei'
                ctx.fillText(this.money,70,90)
                ctx.fillStyle = '#555'
                ctx.font = '16px Microsoft Yahei'
                ctx.fillText(this.desc,60,120)
            },
            draw_arc() {
                let ctx = this.ctx
                this.computed_length()
                if(this.speed != 0) {
                    ctx.clearRect(0,0,200,200)
                    ctx.beginPath()
                    this.draw_font(ctx)
                    ctx.strokeStyle = '#fbbc24'
                    ctx.lineWidth = '18'
                    ctx.arc(100,100,76,Math.PI*1.505,Math.PI*this.length/100,false)
                    ctx.stroke()
                    requestAnimationFrame(this.draw_arc)
                }
            },
            computed_length(){
                let length = this.length;
                if(this.flag) {
                    if(length < 150) {
                        length += this.speed
                    }else {
                        this.flag = !this.flag
                        this.speed -= 2
                    }
                }else {
                    if(length > this.begin) {
                        length -= this.speed
                    }else {
                        this.flag = !this.flag
                        this.speed -= 2
                        this.begin += 30
                    }
                }
                this.length = length
            }
        }
    }
</script>
<style scoped>
</style>