<template>
    <transition name="bottommenu">
        <div class="bottommenu" v-show="show">
            <transition name="bottommenu-mask" appear>
                <div class="bottommenu-mask" @click="$emit('maskclick')" v-show="show"></div>
            </transition>
            <transition name="bottommenu-body" appear>
                <div class="bottommenu-body" v-show="show">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
    import '../assets/css/bottommenu.css';
    export default {
        props: {
            show: {
                type: Boolean,
                default: true
            }
        }
    }
</script>