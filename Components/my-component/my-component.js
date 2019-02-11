// Components/my-component/my-component.js
Component({
    behaviors: ['wx://form-field'],
    /*
    * 组件生命周期
    */
    lifetimes: {
        created() {
            console.log('created被执行')
        },
        attached() {
            console.log('attached被执行')

        },
        ready() {
            console.log('ready被执行')

        },
        moved() {
            console.log('moved被执行')

        },
        detached() {
            console.log('detached被执行')

        },
        error() {
            console.log('error被执行')
        }


    },


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
        },
        showBehaviors(e) {
            console.log(e)
            wx.scanCode({
                success(res) {
                    console.log(res)
                }
            })
        }

    }
})
