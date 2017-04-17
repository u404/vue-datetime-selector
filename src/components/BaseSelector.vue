<template>
    <bottommenu class="base-selector" @maskclick="cancelSelect" :show="show">
        <div class="base-selector-body">
            <div class="base-selector-btnbar">
                <span class="base-selector-btn btn-cancel" @click="cancelSelect">取消</span>
                <span class="base-selector-btn btn-sure" @click="sureSelect">确认</span>
            </div>
            <selector :show="show" :default="this.default" :datalist="datalist" @change="change"></selector>
        </div>
    </bottommenu>
</template>

<script>
    import Selector from './Selector';
    import Bottommenu from './Bottommenu';
    import '../assets/css/base-selector.css';
    export default {
        name: 'base-selector',
        props:{
            show: {
                type: Boolean,
                default: false
            },
            default: {
                default: ''
            },
            datalist: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                value: null,
                text: null
            }
        },
        computed: {
            value(){
                let value = '';
                if(this.showDate){
                    value += this._fixZero(this.year) + '-'+this._fixZero(this.month)+'-'+this._fixZero(this.day);
                }
                if(this.showTime){
                    if(this.showDate){
                        value +=' ';
                    }
                    value+=this._fixZero(this.hour)+':'+this._fixZero(this.min);
                    if(this.showSec){
                        value+=this._fixZero(this.sec);
                    }
                }
                return value;
            },
            maxDay(){
                let maxDay = 31;
                if([4,6,9,11].indexOf(this.month)>-1){
                    maxDay = 30;
                }
                else if(this.month==2){
                    if((this.year % 4 == 0) && (this.year % 100 != 0 || this.year % 400 == 0)){
                        maxDay = 29;
                    }
                    else{
                        maxDay = 28;
                    }
                }
                return maxDay;
            }
        },
        methods: {
            cancelSelect(){
                this.$emit('cancel');
            },
            sureSelect(){
                this.$emit('change',{value: this.value, text: this.text });
            },
            change(data){
                this.value = data.value;
                this.text = data.text;
            }
        },
        components: {
            Selector,
            Bottommenu
        }
    }
</script>