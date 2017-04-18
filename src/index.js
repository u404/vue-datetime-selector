import Bottommenu from './components/Bottommenu';
import Selector from './components/Selector';
import DatetimeSelector from './components/DatetimeSelector';
import BaseSelector from './components/BaseSelector';

export default {
    install(Vue){
        Vue.component('datetime-selector',DatetimeSelector);
        Vue.component('base-selector',BaseSelector);
        Vue.component('bottommenu',Bottommenu);
        Vue.component('selector',Selector);
    }
};

export {
    Bottommenu,
    Selector,
    DatetimeSelector,
    BaseSelector
}