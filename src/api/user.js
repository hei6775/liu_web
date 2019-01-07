import axios from "./index";

export const getUserInfo = () => {
  return axios.request({
    //
    url: "/getUserInfo",
    method: "post",
    data: {}
  });
};

//在其它地方调用,返回的是一个Promise
// getUserInfo().then(res=>{
//   //
//   console.log("res",res)
// })
