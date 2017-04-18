import Bottommenu from './components/Bottommenu';
import Selector from './components/Selector';
import DatetimeSelector from './components/DatetimeSelector';
import BaseSelector from './components/BaseSelector';



(function(window){
    let VueDatetimeSelector = {
        install: function(Vue){
            Vue.component('datetime-selector',DatetimeSelector);
            Vue.component('base-selector',BaseSelector);
            Vue.component('bottommenu',Bottommenu);
            Vue.component('selector',Selector);
        }
    };

    if(window.define){  //amd cmd 支持
        window.define(function(){
            return VueDatetimeSelector
        });
    }
    else{
        window.VueDatetimeSelector = VueDatetimeSelector;
    }
})(window);





