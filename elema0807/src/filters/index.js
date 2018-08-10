export default {
    install(Vue){
        //图片过滤器
        Vue.filter('formatimg', (value,style,important)=>{
              // d78ace54115db9b99c505e2b3927f5f8png
              let width=style
              let noimpaddress
              if(important){
                  important=('!'+important+'r/')
                  noimpaddress='gravity/Center/crop'
              }
              else{
                  important=''
                   noimpaddress=''
              }
               
              let url=value.split('')
              url.splice(1,0,'/')
              url.splice(4,0,'/')
              url='//fuss10.elemecdn.com/'+url.join('')
  
              let laststr=url.substr(url.length-4)
              if(laststr=='jpeg'){
                  url+='.jpeg'
              }
              else{
                  laststr=laststr.substr(1)
                   url+='.'+laststr
              }
              url+='?'+'imageMogr/format/webp/thumbnail/'+important+noimpaddress+width
              return url
            
        })
        
    }
}

