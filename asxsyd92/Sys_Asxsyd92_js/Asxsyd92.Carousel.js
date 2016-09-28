/// <reference path="Asxsyd92.Carousel.js" />
/// <reference path="../json/Asxsyd92.Carousel.js" />

$(function () {
    Carousel.init();//初始化

});
Carousel = {
    loadUrl: {
        carouselUrl:"../asxsyd92/json/Asxsyd92.Carousel.js",
    },
    init: function () {
        $("#onebyone_slider").html("");
        $.ajax({
            url: Carousel.loadUrl.carouselUrl,
            dataType: "JSON",
            async: false,
            cache: false,
            success: function (resp) {
                var beginHtml = "<ul>";
                var endHtml = "</ul>";
                var eachHtml = "";
                $('#Exhibition').html('');
                $.each(eval(resp), function (i, item) {
                    eachHtml = eachHtml +  " <div class='oneByOne_item'>";
                    eachHtml = eachHtml + "   <span class='ob1_title'>" + item.Title + "</span>";
                    eachHtml = eachHtml + " <span class='ob1_description'>" + item.Content + "</span>";
                    eachHtml = eachHtml + " <span class='ob1_button'><a href='" + item.Url + "' target='_blank' class='default_button'>查看详情</a></span>";
                    eachHtml = eachHtml + "   <img src='" + item.PicUrl + "' class='ob1_img_device1' alt='" + item.Title + "' />";
                    eachHtml = eachHtml +  "  </div>";

                    //eachHtml = eachHtml + "<li><a href='pro_detail.html?id=" + item.KeyId + "'><img src='" + item.PicUrl + "' /></a>";
                    //eachHtml = eachHtml + "<h4>" + item.Name + "</h4>";
                    //eachHtml = eachHtml + "<h6><span>RMB</span>" + item.RentPrice + "</h6></li>";
                    $('#onebyone_slider').html(beginHtml + eachHtml + endHtml);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }
}