import axios from 'axios'
import API from '../api'



/*
keyword:请求的关键字
offset:	位移，默认为0。如果传的是10，那么地址会从第11个开始返回。
limit:	地址数量，默认为10，如果传的是20，那么会限制只返回20个地址信息。点击选中后,可以获取地址信息,精度维度

=======>请求得来的数据

address:"广东省深圳市福田区深圳市",
city:"深圳市",
city_id:11,
distance:"",
district_id:5636,
geohash:"ws10k0dcg1rv"
id:"B02F38IWRJ"                
latitude:22.547               //纬度
longitude:114.085947         //经度
name:"深圳市"                
request_id:"7351173800015270212" 
short_address:"福田区深圳市"
?keyword=深圳&offset=0&limit=20 ==>配置的参数
*/




//请求地址数据
export function getHomeAddressData(addressDataObj){
    return new Promise((resolve, reject)=>{
        // 请求
        axios.get( API.HOME_REQUEST_ADDRESS_API,{
         params: {
            keyword:addressDataObj.keyword,
            offset:addressDataObj.offset,
            limit:addressDataObj.limit,
        }
        })
        .then(response=>{
          
            console.log(response)

            let data = response.map(item=>{
            return {
                name: item.name,               //地名
                address: item.address,         //地址
                distance: item.distance,       //距离
                id:item.city_id,               //城市id
                latitude:item.latitude,        //纬度
                longitude:itme.longitude,      //经度 
            }
        });
            resolve(data);
            
        })
        .catch(error=>{
            console.log('失败',error);
        })
    })
    }

/*
请求得来数据参数:
business_flag:1
description:"美食"
id:20004689
image_hash:"7d8a867c870b22bc74c87c348b75528djpeg"
is_in_serving:true
is_personalized:false
link:"eleme://restaurants?search_source=1&activity_id=10016665&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1"
more:"{"tags":null}"
name:"美食"
name_color:""
position:1

https://h5.ele.me/restapi/shopping/openapi/entries?latitude=22.54286&
longitude=114.059563&templates[]=main_template&
templates[]=favourable_template&templates[]=svip_template&terminal=h5
*/

//请求轮播图商品数据,限量抢购数据
export function getHomebannerGoodsData(geo){
    return new Promise((resolve, reject)=>{
        // 请求
        axios.get( API.HOME_BANNER_GOODS_API,{

         params:{
             latitude:geo.latitude,        //纬度
             longitude:geo.longitude,      //经度 
        }})

//图片的地址加上http://fuss10.elemecdn.com/图片地址+ .jepg
        .then(response=>{
        let data = response 
        resolve(data);
        })
        .catch(error=>{
            console.log('失败',error);
        })
    })
    }


   /* https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.54286
    &longitude=114.059563&offset=0&limit=8&extras[]=activities&
    extras[]=tags&extra_filters=home&rank_id=&terminal=h5
    
    接口参数：
     latitude:纬度,浮点数据类型
     longitude:经度,浮点数据类型
     offset:位移，默认为0。如果传的是8，那么餐厅会从第9个开始返回。
     limit:餐厅数量，默认为8，如果传的是16，那么会限制只返回16个餐厅。点击选中后,可以获取地址信息,精度维度
  */  



//请求餐馆数据列表
export function getHomeRestaurantsData(resobj){
    return new Promise((resolve, reject)=>{
        // 请求
        // &extras[]=activities
        // &extras[]=tags
        // &extra_filters=home&
        // rank_id=5b756a687cf54c28baa47e0454b24302&terminal=h5
        axios.get( API.HOME_REQUEST_RESTAURANTS_API,{
            params: {
                latitude:resobj.latitude,        //纬度
                longitude:resobj.longitude,      //经度 
                offset:resobj.offset,
                limit:resobj.limit,
                'extras[]':'activities',
                extra_filters:'home',
                terminal:'h5'
            }

        }
        )
//图片的地址加上http://fuss10.elemecdn.com/图片地址+.png

        .then(response=>{
          let data= response.data.items.map(item=>{
              item.restaurant
              
          }
          )
            resolve( response.data.items);

            
        })
        .catch(error=>{
            console.log('失败',error);
        })
    })
    }













