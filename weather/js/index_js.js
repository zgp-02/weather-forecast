var app = new Vue({
	el:"#todayinfo",
	data:{
		todayinfo:"",
		province:""
	},
	mounted:function(){
		var that = this;
		// 读取数据
		// 为给定 ID 的 user 创建请求
		// 给定一段地址，访问这段地址，访问成功的情况下返回数据response，访问失败的情况下返回异常数据error
		axios.get('https://v0.yiketianqi.com/api?version=v61&appid=32269964&appsecret=kazip3hR')
		  .then(function (response) {/* response:就是一个变量，承载了所有从远程读取回来的数据 能够灵活的通过json的数据格式读取方式读取数据*/
		    console.log(response.data);
			
			// 赋值数据
			that.todayinfo = response.data;
			
			// 获取当前城市名称
			var city = response.data.city + "市";
			// console.log(city);
			
			// 通过当前的城市名称获取省份
			for (var i = 0; i<provinces.length;i++) {
				// 获取省份
				// console.log(provinces[i].name)
				for (var j=0; j<provinces[i].city.length;j++) {
					console.log(provinces[i].city[j].name)
					
					var ctiyvalue = provinces[i].city[j].name;
					if(city == ctiyvalue){
						that.province = provinces[i].name;
					}
				}
			}
			
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  
	}
});



// 获取七天的数据
var app = new Vue({
	el:"#seven_dayinfo",
	data:{
		sevendayinfo:""
	},
	mounted:function(){
		var that = this;
		axios.get('https://tianqiapi.com/api?version=v1&appid=32269964&appsecret=kazip3hR')
				  .then(function (response) {
				    console.log(response.data.data);
					that.sevendayinfo = response.data.data
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
	}
})