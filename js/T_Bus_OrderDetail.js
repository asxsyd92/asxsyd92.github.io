/// <reference path="T_Bus_Exhibition.js" />
$(function () {
    ExhibitionData.init();//初始化
});
ExhibitionData = {
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据

    },
    init: function () {
        var id = ExhibitionData.getRequest().id;
        if (id != null) {
            $.ajax({
                url: ExhibitionData.loadUrl.T_Bus_Exhibition,
                dataType: "JSON",
                async: false,
                cache: false,
                success: function (resp) {

                    //  var queryResult = Enumerable.From(resp).Where(function (x) { return x.KeyId < id }).ToArray();
                    var queryResult = Enumerable.From(resp).Where("x=>x.KeyId=="+id).ToArray();
                    //.OrderBy(function (x) { return x.user.screen_name })
                    //.Select(function (x) { return x.user.screen_name + ':' + x.text })
               
                    var eachHtml = "";
                    $('#content').html('');
                    $.each(eval(queryResult), function (i, item) {
                        eachHtml = eachHtml + "  <h2>" + item.Name + "</h2>";
                        eachHtml = eachHtml + "  <div class='article mt10 pro-detail'> <img src='" + item.PicUrl + "' style=' width: 100%; height: 430px;'/>";
                        eachHtml = eachHtml + "<p>长：" + item.Ex_Len + "</p>";
                        eachHtml = eachHtml + "<p>宽：" + item.Ex_Width + "</p>";
                        eachHtml = eachHtml + "<p>高：" + item.Ex_Height + "</p>";
                        eachHtml = eachHtml + "<p>租赁价格：" + item.RentPrice + "</p>";
                        eachHtml = eachHtml + "<p>押金：" + item.Deposit + "</p>";
                        eachHtml = eachHtml + " <a href='book.html?id=" + item.KeyId + " ' class='title book-btn mt10 tc'>立即预定</a>";
                        $('#content').html(eachHtml);
                    });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        } else {
            window.location.href = "/";
        }
    },
    OrderDetail: function (id) {
        alert(id);
    },
    getRequest: function () {
        var url = window.location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                //就是这句的问题
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}