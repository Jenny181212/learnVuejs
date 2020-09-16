const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count:1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count:1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count:1
      },
      {
        id: 4,
        name: '代码大全',
        date: '2006-3',
        price: 138.00,
        count:1
      },

    ]
  },
  methods: {
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2);
    // }
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandle(index){
      //从index开始，删除1个
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = 0;
      // 利用索引值
      // for(let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price*this.books[i].count
      // }
      // return totalPrice

      //可以直接取对象 let item of list
      // for(let item of this.books){
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice

      //用函数简洁方法
      // return this.books.reduce(function (preValue, book) {
      //   return preValue + book.price * book.count
      // },0)
      //更加简洁
      return this.books.reduce((preValue, book) => preValue + book.price * book.count
      ,0)

      //介绍filter/map/reduce函数式编程，更加简洁

      //需求：小于100的数将它2倍相加
      const nums = [10, 20, 111, 222, 444, 40, 50]

      //在了解了全部函数后，这样写可以更加简洁
      // let total = nums.filter(function (n) {
      //   return n < 100
      // }).map(function (n) {
      //   return n * 2
      // }).reduce(function (preValue,n) {
      //   return preValue + n
      // })
      // console.log(total);

      //这个更简单
      let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
      console.log(total);

      // //1. filter函数的使用 回调true/false
      // let newNums = nums.filter(function(n){
      //   return n < 100
      // })
      // //2. map函数的使用
      // let new2Nums = newNums.map(function(n){
      //   return n * 2
      // })
      // console.log(new2Nums);
      //
      // //3. reduce函数的使用
      // //reduce作用对数组中的所有内容进行汇总
      // let total = new2Nums.reduce(function(preValue,n){
      //   return preValue + n
      // }, 0)
      // console.log(total);
      // //第一次：preValue 0     n 20
      // //第二次：preValue 20    n 40
      // //第三次：preValue 60    n 80
      // //第四次：preValue 140   n 100
      // //240

    }
  },
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  }

})