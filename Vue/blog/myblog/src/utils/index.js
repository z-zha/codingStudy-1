import axios from "axios"

//请求封装
const host = "http://localhost:3000"

export function get(url,data) {
  return new Promise((resolve,reject) => {
    axios({
      url: host + url,
      method: 'get',
      params: {
        article_id: data
      }
    })
    .then(res => {
       resolve(res.data)
    })
    .catch(err => {
      reject(err.data)
    })
  })
}
// axios({
//   url:"pakage.json",
//   method:"get",
//   params:{
//       userId:"123"
//   },
//   headers:{
//       token:"http-test"
//   }
// }).then(res=>{
//   console.log(res.data);
// })