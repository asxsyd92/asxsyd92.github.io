
$(function () {
    ExhibitionData.init();//初始化
});
ExhibitionData = {
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据

    },
    init: function () {
        var eachHtml = "";
        $('#buy').html('');
        ExhibitionData.createDatabase();
        $.ajax({
            url: ExhibitionData.loadUrl.T_Bus_Exhibition,
            dataType: "JSON",
            async: false,
            cache: false,
            success: function (resp) {
      
                ExhibitionData.dataBase.transaction(function (tx) {
                    tx.executeSql(
                    "select * from exhibition", [],
                    function (tx, result) { //执行成功的回调函数
                        if (result.rows.length > 0) {
                            for (kid = 0; kid < result.rows.length;kid++) {
                                var id = parseInt(result.rows[kid].KeyId);
                                var queryResult = Enumerable.From(resp).Where("x=>x.KeyId==" + id).ToArray();
                            
                                $.each(eval(queryResult), function (i, item) {

                                    eachHtml = eachHtml+"<h4><lable>商品名称：</lable><span>" + item.Name + "</span></h4>";
                                    eachHtml = eachHtml + "	<h4><lable>商品单价：</lable><span>" + item.RentPrice + "</span></h4>";
                                    eachHtml = eachHtml + "	<h4><lable>押金：</lable><span>" + item.Deposit + "</span></h4>";
                                    //eachHtml = eachHtml + "<h4 class='num'><lable class='fl'>商品数量：</lable><span class='subtract'>-</span><input value='1' name='count' class='count' readonly = 'true'/><span class='add' id='add'>+</span></h4></li>";
                                    //eachHtml = eachHtml + "<li><a href='pro_detail.html?id=" + item.KeyId + "'><img src='" + item.PicUrl + "' /></a>";
                                    //eachHtml = eachHtml + "<h4>" + item.Name + "</h4>";
                                    //eachHtml = eachHtml + "<h6><span>RMB</span>" + item.RentPrice + "</h6></li>";
                                    $('#buy').html(eachHtml);
                                });
                            }
                        }
                        ;
                    },
                    function (tx, error) {
                        alert('查询失败: ' + error.message);
                    });
                });
               
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    },
    OrderDetail: function (id) {
      //  alert(id);
    }, createDatabase: function () {
        var db = ExhibitionData.dataBase = openDatabase("goods", "1.0", "Exhibition", 1024 * 1024, function () { });
        if (!ExhibitionData.dataBase) {
        } else {
            ExhibitionData.createTable();

        }
    },
    createTable: function () {
        ExhibitionData.dataBase.transaction(function (tx) {
            tx.executeSql(
            "create table if not exists exhibition (KeyId int)",
            [],
            function (tx, result) {
            },
            function (tx, error) {

            });
        });
    }
}