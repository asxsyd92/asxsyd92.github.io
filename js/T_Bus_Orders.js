
$(function () {
    ExhibitionData.init();//初始化
});
ExhibitionData = {
 
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据
        url:'../Handler.ashx',
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
                    "select * from exhibition where state=?", [1],
                    function (tx, result) { //执行成功的回调函数
                        if (result.rows.length > 0) {
                            for (kid = 0; kid < result.rows.length; kid++) {
                                var id = parseInt(result.rows[kid].KeyId);
                                var queryResult = Enumerable.From(resp).Where("x=>x.KeyId==" + id).ToArray();

                                $.each(eval(queryResult), function (i, item) {
                                    eachHtml = eachHtml + "<input type='text' name='Ex_Code' class='name' value='" + item.Code + "' hidden=hidden />";
                                    eachHtml = eachHtml + "<h4><lable>商品名称：</lable><span>" + item.Name + "</span></h4>";
                                    eachHtml = eachHtml + "	<h4><lable>商品单价：</lable><span>" + item.RentPrice + "</span></h4>";
                                    eachHtml = eachHtml + "	<h4><lable>押金：</lable><span>" + item.Deposit + "</span></h4>";
                                    eachHtml = eachHtml + "	<h4><lable>商品数量：</lable><span>" + result.rows[kid].count + "</span></h4>";
                                    //eachHtml = eachHtml + "<h4 class='num'><lable class='fl'>商品数量：</lable><span class='subtract'>-</span><input value='1' name=count' class=count' readonly = 'true'/><span class='add' id='add'>+</span></h4></li>";
                                    //eachHtml = eachHtml + "<li><a href='pro_detail.html?id=" + item.KeyId + "'><img src='" + item.PicUrl + "' /></a>";
                                    //eachHtml = eachHtml + "<h4>" + item.Name + "</h4>";
                                    //eachHtml = eachHtml + "<h6><span>RMB</span>" + item.RentPrice + "</h6></li>";
                                    $('#buy').html(eachHtml);
                                });
                            }
                        } else {
                            alert("购物车空空，去首页看看吧！");
                            window.location.href = "/";
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
            ExhibitionData.createTable();
        } else {
           

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
    },
    onsubmit: function () {
        if ($.trim($(".book .name").val()) == "" || $.trim($(".book .mobile").val()) == "" || $(".book .name").val() == "输入您的姓名" || $(".book .mobile").val() == "输入您的手机号" || $(".book .mobile").val() == "输入您的所在单位" || $(".book .mobile").val() == "输入您的所在单位" || $(".book .mobile").val() == "输入您的QQ方便联系" || $(".book .mobile").val() == "你要哪个展位呢？") {
            new TipBox({ type: 'success', str: "亲 ，请将信息填写完整！", hasBtn: true });
            return false;
        } else {
            goods = [];
            $.ajax({
                url: ExhibitionData.loadUrl.T_Bus_Exhibition,
                dataType: "JSON",
                async: false,
                cache: false,
                success: function (resp) {
                    ExhibitionData.dataBase.transaction(function (tx) {
                        tx.executeSql(
                        "select * from exhibition where state=?", [1],
                        function (tx, result) { //执行成功的回调函数
                            if (result.rows.length > 0) {
                                for (kid = 0; kid < result.rows.length; kid++) {
                                    var id = parseInt(result.rows[kid].KeyId);
                                    var queryResult = Enumerable.From(resp).Where("x=>x.KeyId==" + id).ToArray();
                                    $.each(eval(queryResult), function (i, item) {
                                        goods.push({ "Ex_Code": item.Code, "Ex_Quantity": result.rows[kid].count });
                                    });
                                }
                                $.ajax({
                                    type: "POST",
                                    url: ExhibitionData.loadUrl.url,
                                    data: { Goods: JSON.stringify( goods), CustomerName: $("#CustomerName").val(), Contacts: $("#Contacts").val(), Phone: $("#Phone").val(), QQ: $("#QQ").val(), Position: $("#Position").val()},
                                    dataType: "JSON",
                                    success: function (resp) {
                                        if (resp.Success) {
                                            //new TipBox({ type: 'success', str: resp.msg, hasBtn: true });

                                            ExhibitionData.dataBase.transaction(function (tx) {
                                                tx.executeSql(
                                                "update exhibition set state = ?",
                                                [0],
                                                function (tx, result) {
                                                },
                                                function (tx, error) {
                                                    alert('更新失败: ' + error.message);
                                                });
                                            });
                                        }
                                        alert(resp.msg);
                                        window.location.reload();
                                    },
                                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                                        alert("哎呀我起网络开小差了！去首页看看吧！");
                                        window.location.reload();
                                    }
                                });
                            }
                        }
                        ,
                function (tx, error) {
                    alert('查询失败: ' + error.message);
                });
                    });
                }
            });
           
      
        }
    }
}