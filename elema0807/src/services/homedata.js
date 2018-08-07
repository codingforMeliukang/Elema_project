import axios from 'axios'
import API from '../api'


//请求饿了么数据
export function getHomebannerGoodsData(){
    return new Promise((resolve, reject)=>{
        // 请求
        axios.get( API.HOME_BANNER_GOODS_API
        )
        .then(response=>{
          
            console.log(response)
        
            resolve(response);
            
        })
        .catch(error=>{
            console.log('失败',error);
        })
    })
    }