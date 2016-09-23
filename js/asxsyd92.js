/// <reference path="T_Bus_Exhibition.js" />
$(function () {
    ExhibitionData.init();//初始化导航条
});
ExhibitionData = {
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据
 
    },
    init:function(){
        $.ajax({
            url: ExhibitionData.loadUrl.T_Bus_Exhibition,
            dataType: "JSON",
            async: false,
            cache: false,
            success: function (resp) {
                var beginHtml = "<ul>";
                    var endHtml = "</ul>";
                    var eachHtml = "";
                    $('#Exhibition').html('');
                    $.each(eval(resp), function (i, item) {
                  
                        eachHtml = eachHtml + "<li><a href='javascript:ExhibitionData.OrderDetail(" + item.KeyId + ")'><img src='" + item.PicUrl + "' /></a>";
                    eachHtml = eachHtml + "<h4>" + item.Name + "</h4>";
                    eachHtml = eachHtml + "<h6><span>RMB</span>" + item.RentPrice + "</h6></li>";
                    $('#Exhibition').html(beginHtml + eachHtml + endHtml);
                });
       
                //  <li>
               // <a href="pro_detail.html"><img src="uploads/product.gif" /></a>
               // <h4>四倍蚕丝凝白柔肤</h4>
              //  <h6><span>RMB</span>890</h6>
           // </li>
                //
                //if (resp != null) {
                //    var html = "";
                //    var start = "<li>";
                //    var end = "</li>";
                //    for(var i in resp){
                //    html.in
                //    }

             //   }
                //alert(resp);
               // initMenu(target, resp);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            //    $.messager.alert("", textStatus || errorThrown, "error");
            }
        });
    },
    OrderDetail: function (id) {
        alert(id);
    }
}