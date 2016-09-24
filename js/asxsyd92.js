/// <reference path="T_Bus_Exhibition.js" />
$(function () {
    ExhibitionData.init();//初始化
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
                  
                        eachHtml = eachHtml + "<li><a href='pro_detail.html?id=" + item.KeyId + "'><img src='" + item.PicUrl + "' /></a>";
                    eachHtml = eachHtml + "<h4>" + item.Name + "</h4>";
                    eachHtml = eachHtml + "<h6><span>RMB</span>" + item.RentPrice + "</h6></li>";
                    $('#Exhibition').html(beginHtml + eachHtml + endHtml);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    },
    OrderDetail: function (id) {
        alert(id);
    }
}