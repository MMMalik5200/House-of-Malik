// Components/my-component/my-component.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        innerText: {
            type: String,
            value: '这是默认文字'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        test() {
            console.log('test')
            this.triggerEvent('myEvent', { name: 'malik' }, { name: 'malik1' })
        }
    }
})
