var app = new Vue({
    el:'#app',
    data:{
        //数据
        items:[{
            id:1,
            name:'iPhone7',
            price:6188,
            count:1
        },{
            id:2,
            name:'iPad pro',
            price:5888,
            count:1
        },{
            id:3,
            name:'MacBook pro',
            price:21488,
            count:1
        }]

    },
    computed:{
        totalPrice:function(){
            var totalPrice = 0;
            for(var i in this.items){
               totalPrice += this.items[i].price * this.items[i].count;
            }
            return totalPrice;
        }
    },
    methods:{
        removeItem:function(id){
            var index = 0;
            for(;index <this.items.length;index++){
                if(this.items[index].id == id){
                    break;
                }
            }
            this.items.splice(index,1);
        },
        decCount:function(id){
            var index = 0;
            for(;index<this.items.length;index++){
                if(this.items[index].id == id){
                    if(this.items[index].count == 1) {
                        break;
                    }else{
                        this.items[index].count --;
                    }
                }
            }
        },
        addCount:function (id) {
            for(var i in this.items){
                if(this.items[i].id == id){
                    this.items[i].count ++ ;
                    break;
                }
            }
        }
    }
});