export default {
  methods: {
    /**
     *跳转到
     *@param path
     */
    goTo(path) {
      this.$router.push({
        name: path
      });
    },
    goToQuery(name, params) {
      this.$router.push({
        name: name,
        params: params || {},
        //这中传递的方式会在地址栏显示传递时的数据
        // query:params || {}  

      });
    },
    someThing(){
      console.log("wef");
      
    }
  }
}
