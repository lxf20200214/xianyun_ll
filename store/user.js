// 存放仓库该分类(user)下的数据,export const state=()是固定的格式
export const state = {
  // 登录成功后接口返回的用户数据,里面包含了token和用户的详细信息
  userInfo: {}
};

// 同步修改state中的数据export const mutations={}是固定的格式
// store的数据不能直接修改,必须要使用mutations来修改
export const mutations = {
  // 声明一个函数,函数名可以随便起
  // 该函数有两个参数，第一个参数是上面state（固定的），第二个参数是传入的参数（不固定）
  setUserInfo(state, data) {
    // 随意的修改state的属性
    state.userInfo = data;
  }
};

// 重点:actions可以用来存放一些公共的方法,多个组件或者项目通用的方法
// 顺带的:并且可以调用mutations来修改state
export const actions = {
  // 声明一个函数,函数名可以随便起
  // 该函数有两个参数，第一个参数是上面Store（固定的），第二个参数是传入的参数（不固定）
  login(store, data) {
    // console.log();
    // this._vm.$message.success("登录成功");
    return this.$axios({
      url: "/accounts/login",
      method: "post",
      data
    }).then(res => {
      const { data } = res;
      // 通过store.commit调用mutations的方法,修改仓库数据
      // 由于是在同一个模块下,可以省略前面的user名字
      store.commit("setUserInfo", data);
      // return一个返回值,传递给下一个then
      return data;
    });
  }
};
