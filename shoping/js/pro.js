/// <reference path="T_Bus_Exhibition.js" />
$(function () {
    $(".tops").fbmodal({
        okay: "人家知道啦",
        okaybutton: true,
        cancelbutton: true,
        buttons: true,
        opacity: 0.35,
        fadeout: true,
        overlayclose: true,
        modaltop: "30%",
        modalwidth: "400"    });
    var $el = $('.dialog');
    $el.hDialog();
    ExhibitionData.init();//初始化
    ExhibitionData.createDatabase();
});
ExhibitionData = {
    dataBase: null,
    goods: [],
 
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: '../js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据

    },
    init: function () {

        $.ajax({
            url: ExhibitionData.loadUrl.T_Bus_Exhibition,
            dataType: "JSON",
            async: false,
            cache: false,
            success: function (resp) {
         
                var eachHtml = "";
                $('#M-main-b').html('');
                $.each(eval(resp), function (i, item) {
                    eachHtml = eachHtml + "    <div class='M-main-list'>";
                    eachHtml = eachHtml + "   <div class='M-main-A left'>";
             eachHtml = eachHtml + "    <div class='M-main-A-a'>";
             eachHtml = eachHtml + "      <a href='#'><img src='" + item.PicUrl + "' width='65' height='65' alt='asd' /></a>";
             eachHtml = eachHtml + "     <span class='M-list-color-1'></span>";
             eachHtml = eachHtml + "   </div>";
             eachHtml = eachHtml + "    <div class='M-main-A-b'>";
             eachHtml = eachHtml + "        <h3><a href='#'>" + item.Name + "</a><em class='baseBg ico1'></em></h3>";
             eachHtml = eachHtml + "        <p>" + item.RentPrice + "</p>";
             eachHtml = eachHtml + "      <p>" + item.Deposit + "</p>";
             eachHtml = eachHtml + "     </div>";
             eachHtml = eachHtml + "  </div>";
             eachHtml = eachHtml + "  <div class='M-main-B left'>";
             eachHtml = eachHtml + "       <p class='num'>长</p>";
             eachHtml = eachHtml + "     <p>" + item.Ex_Len + "</p>";
             eachHtml = eachHtml + " </div>";
             eachHtml = eachHtml + "   <div class='M-main-C left'>";
             eachHtml = eachHtml + "      <p>宽</p>";
             eachHtml = eachHtml + "        <p>" + item.Ex_Width + "</p>";
             eachHtml = eachHtml + "  </div>";
             eachHtml = eachHtml + "   <div class='M-main-D left'>";
             eachHtml = eachHtml + "     <em class='baseBg YI-img'></em>";
             eachHtml = eachHtml + "   <p>高</p>";
             eachHtml = eachHtml + "      <p>" + item.Ex_Height + "</p>";
             eachHtml = eachHtml + "    </div>";
             eachHtml = eachHtml + " <div class='M-main-E left'>";
             eachHtml = eachHtml + "     <a href='###' title='加入购物车' class='test' style='display: block;color: #fff;background-position: -6px -193px; width: 75px;height: 21px; line-height: 21px;padding-left: 30px; margin: 12px auto 0px; background-image: url(images/base_bg.png);background-repeat: no-repeat;' id='id_" + item.KeyId + "' onclick='Add(" + item.KeyId + " );' >加入购物车</a>";
             //eachHtml = eachHtml + "    <p><span class='attention-btn'>立即预订</span></p>";
             eachHtml = eachHtml + "   </div>";
             eachHtml = eachHtml + "  </div>";
                    $('#M-main-b').html(eachHtml);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    },
    OrderDetail: function (id) {
     //   alert(id);
    },
    createDatabase: function () {
        var db = ExhibitionData.dataBase = openDatabase("goods", "1.0", "Exhibition", 1024 * 1024, function () { });
        if (!ExhibitionData.dataBase) {
        } else {
            ExhibitionData.createTable();

        }
    },
    createTable: function () {
        ExhibitionData.dataBase.transaction(function (tx) {
            tx.executeSql(
            "create table if not exists exhibition (KeyId int,count int,state int)",
            [],
            function (tx, result) {
            },
            function (tx, error) {

            });
        });
    }
}

