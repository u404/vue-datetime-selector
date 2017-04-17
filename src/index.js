import Vue from 'vue';
import DatetimeSelector from './components/DatetimeSelector';
import BaseSelector from './components/BaseSelector';

var vm = new Vue({
    el: '#app',
    data () {
        return {
                time: null,
                duration: 0,
                durationText: '',
                dateSelectorShow: false,
                durationSelectorShow: false,
                coverImage: null,
                durationItemList: [
                    { value: 60, text: '1小时' },
                    { value: 90, text: '1.5小时' },
                    { value: 120, text: '2小时' },
                    { value: 150, text: '2.5小时' },
                    { value: 180, text: '3小时' },
                    { value: 240, text: '4小时' },                    
                ]      
        }
    },
    methods: {
            dateChange(value){
                this.time= value;
                this.dateSelectorShow = false;
            },
            durationChange(data){
                this.duration = data.value;
                this.durationText = data.text;
                this.durationSelectorShow = false;
            }
    },
    components: {
        DatetimeSelector,
        BaseSelector
    },
    template: `
            <div class="page">
                <div>
                    <input type="text" readonly placeholder="请选择日期" :value="time" @click="dateSelectorShow=true" />
                    <datetime-selector :show="dateSelectorShow" :default="time" @cancel="dateSelectorShow=false" @change="dateChange"/>
                </div>
                
                <div>
                    <input type="text" readonly placeholder="请选择时长" :value="durationText" @click="durationSelectorShow=true" />
                    <base-selector :show="durationSelectorShow" :default="duration" :datalist="durationItemList" @cancel="durationSelectorShow=false" @change="durationChange"/>
                </div>
            </div>
            `
});