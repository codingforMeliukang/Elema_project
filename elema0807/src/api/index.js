
/*---------------------------------饿了么数据接口------------------------------------ */

/* 
接口功能：请求定位的数据接口
接口参数：
keyword:请求的关键字
offset:	位移，默认为0。如果传的是10，那么地址会从第11个开始返回。
limit:	地址数量，默认为10，如果传的是20，那么会限制只返回20个地址信息。点击选中后,可以获取地址信息,精度维度

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
*/


const HOME_REQUEST_ADDRESS_API = '/restapi/bgs/poi/search_poi_nearby_alipay';
// const HOME_REQUEST_ADDRESS_API = '/restapi/bgs/poi/search_poi_nearby_alipay?keyword=深圳&offset=0&limit=20';





/*
接口功能：首页轮播图信息
接口参数：带上经度纬度
https://h5.ele.me/restapi/shopping/openapi/entries?latitude=22.54286&
longitude=114.059563&templates[]=main_template&
templates[]=favourable_template&templates[]=svip_template&terminal=h5

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
*/
const HOME_BANNER_GOODS_API = '/restapi/shopping/openapi/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5';


/*
接口功能：请求首页餐馆的信息
https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.54286
&longitude=114.059563&offset=0&limit=8&extras[]=activities&
extras[]=tags&extra_filters=home&rank_id=&terminal=h5

接口参数：
 latitude:纬度,浮点数据类型
 longitude:经度,浮点数据类型
 offset:位移，默认为0。如果传的是8，那么餐厅会从第9个开始返回。
 limit:餐厅数量，默认为8，如果传的是16，那么会限制只返回16个餐厅。点击选中后,可以获取地址信息,精度维度


activities:[,…]
address:"深圳市福田区中国凤凰大厦3栋203-205"
authentic_id:8333315037052545
description:"嘉旺连锁快餐：中国餐饮50强"
distance:797
favored:false
flavors:[{id: 209, name: "盖浇饭"}]
float_delivery_fee:5
float_minimum_order_amount:20
has_story:false
id:279445
image_path:"2417769b4377c438f3db851885b09d12jpeg"
is_new:false
is_premium:true
is_stock_empty:0
is_valid:1
latitude:22.541227
longitude:114.064819
max_applied_quantity_per_order:-1
name:"嘉旺（海田店）"
next_business_time:""
only_use_poi:false
opening_hours:["09:20/19:30"]
order_lead_time:56
phone:"23942278 23942678"
piecewise_agent_fee:{description: "配送费¥5", extra_fee: 0, is_extra: false, rules: [{fee: 5, price: 20}], tips: "配送费¥5"}
platform:0
posters:[]
promotion_info:""
rating:4.6
rating_count:0
recent_order_num:1292
recommend:{color: "#e8470b", image_hash: "", is_ad: false, reason: "", track: "{"rankType":"3"}"}
recommend_reasons:[]
regular_customer_count:0
scheme:"eleme://catering?restaurant_id=279445"
status:1
support_tags:[,…]
supports:[]
tags:[]
theme:{default_color: "2395ff", header_style: 0, hongbao_style: 0, price_color: "ff5339",…}
type:0
*/

const HOME_REQUEST_RESTAURANTS_API = '/restapi/shopping/v3/restaurants';









const HOME_TITLE_LIST_API = '/restapi/shopping/v2/foods_page/sift_factors'

// [{"id":163089,"name":"全部","restaurant_category_ids":[209,212,213,214,215,216,217,219,265,266,267,268,269,221,222,223,224,225,226,227,228,231,232,263,218,234,235,236,237,238,211,229,230,264]},{"id":163105,"name":"简餐便当","restaurant_category_ids":[209,265]},{"id":163145,"name":"小吃炸串","restaurant_category_ids":[234,235,236,237]},{"id":163097,"name":"面食粥点","restaurant_category_ids":[216,213,215]},{"id":163153,"name":"地方菜系","restaurant_category_ids":[224,225,226,227,228,221,222,223]},{"id":163121,"name":"香锅冒菜","restaurant_category_ids":[219,214]},{"id":163129,"name":"日韩料理","restaurant_category_ids":[229]},{"id":163113,"name":"汉堡披萨","restaurant_category_ids":[211,212]},{"id":163137,"name":"轻食西餐","restaurant_category_ids":[230]}]

/*
首页头部定位当前的位置
参数：
	latitude：经度
	longitude：纬度
 */

const HOME_HEADER_ADRESS_API = '/restapi/bgs/poi/reverse_geo_coding';
const Restaurant_Detail_Data_API = '/shopping/v2/menu?';

/*

https://h5.ele.me/restapi/member/v1/discover?platform=1&block_index=0 金币
参数：
    platform: 1
    block_index: 0
*/

const DISCOVER_PARTS_API = '/restapi/member/v1/discover'

/*

https://h5.ele.me/restapi/member/gifts/suggest 限时好礼

*/

const DISCOVER_DISCOUNT_API = '/restapi/member/gifts/suggest'


export default {
    HOME_REQUEST_ADDRESS_API,
    HOME_REQUEST_RESTAURANTS_API,
    HOME_BANNER_GOODS_API,
    HOME_HEADER_ADRESS_API,
    HOME_TITLE_LIST_API,
    Restaurant_Detail_Data_API,
    DISCOVER_PARTS_API,
    DISCOVER_DISCOUNT_API
}
