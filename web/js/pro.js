/// <reference path="T_Bus_Exhibition.js" />
$(function () {
    ExhibitionData.init();//初始化
});
ExhibitionData = {
    loadUrl: { //远程数据加载路径
        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据

    },
    init: function () {

        $.ajax({
            url: ExhibitionData.loadUrl.T_Bus_Exhibition,
            dataType: "JSON",
            async: false,
            cache: false,
            success: function (resp) {
         
                var eachHtml = "";
                $('#pro').html('');
                $.each(eval(resp), function (i, item) {
           //         eachHtml = +" <div class='col-sm-4'>" +
           //" <div class='ct-product'>" +
           //"<div class='image'><img src='images/product-01.jpg' alt=''></div>" +
           //"<div class='inner'>" +
           //" <a href='#' class='btn btn-motive ct-product-button'><i class='fa fa-shopping-cart'></i></a>" +
           //"<h2 class='ct-product-title'>Box of macaroons</h2>" +
           //" <p class='ct-product-description'>A very delicious macaroons ...</p><span class='ct-product-price'>$19.99</span>" +
           //" </div>  </div></div>";
                    //eachHtml = eachHtml + " <div class='col-sm-4'>";
                    //eachHtml = eachHtml + " <div class='ct-product'>";
                    //eachHtml = eachHtml + " <div class='image'><img src='" + item.PicUrl + "' alt=''></div>";
                    //eachHtml = eachHtml + "<div class='inner'>";
                    //eachHtml = eachHtml + " <a href='#' class='btn btn-motive ct-product-button'><i class='fa fa-shopping-cart'></i></a>";
                    //eachHtml = eachHtml + " <h2 class='ct-product-title'>" + item.Name + "</h2>";
                    //eachHtml = eachHtml + " <p class='ct-product-description'>A very delicious macaroons ...</p><span class='ct-product-price'>$19.99</span><span class='ct-product-price'>$19.99</span></div> </div>  </div>";
                    //<div class="col-sm-4">+ item.RentPrice + " + item.Deposit + "

                    //eachHtml = eachHtml + " <div class='col-sm-4'>";
                    //                      eachHtml = eachHtml + "<div class='ct-product'>";
                    //                      eachHtml = eachHtml + "<div class='image'><img src='" + item.PicUrl + "' alt=''></div>";
                    //                      eachHtml = eachHtml + "<div class='inner'>";
                    //                      eachHtml = eachHtml + "<a href='#' class='btn btn-motive ct-product-button'><i class='fa fa-shopping-cart' onclick='ExhibitionData.OrderDetail(" + item.KeyId + " );' ></i></a>";
                    //                      eachHtml = eachHtml + "<h2 class='ct-product-title'>" + item.Name + "</h2>";
                    //                      eachHtml = eachHtml + " <p class='ct-product-description'>" + item.RentPrice + "," + item.Deposit + "</p><span class='ct-product-price'>$" + item.KeyId + "</span>";
                    //                      eachHtml = eachHtml + "</div></div>  </div>";

                    eachHtml = eachHtml + "  <div class='M-main-list'>" +
                    " <div class='M-main-A left'>"+
                    " <div class='M-main-A-a'>"+
                    "<a href='http://sc.chinaz.com/'><img src='images/pro1.jpg' width='65' height='65' alt='asd' /></a>"+
                    "<span class='M-list-color-1'></span>"+
                    " </div> <div class='M-main-A-b'>"
                    "<h3><a href='http://sc.chinaz.com/'>彩涂板卷(镀铝锌基板)</a><em class='baseBg ico1'></em></h3>" +
                    " <p>chinacoder 白色 聚酯 2/1 50/50</p>" +
                    " <p>宝钢股份</p>" +
                    " </div></div>" +
                    "<div class='M-main-B left'><p class='num'>0.6*1000*C</p>" +
                    "<p><span>5.000</span>吨</p></div>" +
                    "<div class='M-main-C left'>" +
                    " <p>类似资源共189吨</p> <p><a href='#' title='立刻过滤'>立刻过滤</a></p></div><div class='M-main-D left'>" +
                    " <em class='baseBg YI-img'></em> <p>&yen;<del>8700.00</del>元/吨</p><p>&yen;<span>6200</span>元/吨</p>" +
                    "</div><div class='M-main-E left'> <a href='###' title='加入购物车' class='baseBg Q-buy-btn' id='buy-s-1'>加入购物车</a>" +
                     "<p><span class='attention-btn'>关注此类资源</span></p>" +
                    "</div> </div>";
                                           $('#pro').html( eachHtml);
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

///// <reference path="T_Bus_Exhibition.js" />
//$(function () {
//    ExhibitionData.init();//初始化
//    ExhibitionData.createDatabase();

//});
//ExhibitionData = {
//    dataBase: null,
//    goods: [],
//    loadUrl: { //远程数据加载路径
//        T_Bus_Exhibition: 'js/T_Bus_Exhibition.js', //T_Bus_Exhibition数据

//    },
//    init: function () {
//        var id = ExhibitionData.getRequest().id;
//        if (id != null) {
//            $.ajax({
//                url: ExhibitionData.loadUrl.T_Bus_Exhibition,
//                dataType: "JSON",
//                async: false,
//                cache: false,
//                success: function (resp) {

//                    //  var queryResult = Enumerable.From(resp).Where(function (x) { return x.KeyId < id }).ToArray();
//                    var queryResult = Enumerable.From(resp).Where("x=>x.KeyId==" + id).ToArray();
//                    //.OrderBy(function (x) { return x.user.screen_name })
//                    //.Select(function (x) { return x.user.screen_name + ':' + x.text })

//                    var eachHtml = "";
//                    $('#pro').html('');
//                    $.each(eval(queryResult), function (i, item) {
//                        eachHtml = eachHtml +  " <div class='col-sm-4'>"
//                        " <div class='ct-product'>"
//                        " <div class='image'><img src='" + item.PicUrl + "' alt=''></div>"
//                        "<div class='inner'>"
//                        " <a href='#' class='btn btn-motive ct-product-button'><i class='fa fa-shopping-cart'></i></a>"
//                        " <h2 class='ct-product-title'>" + item.Name + "</h2>"
//                        " <p class='ct-product-description'>A very delicious macaroons ...</p><span class='ct-product-price'>" + item.RentPrice + "</span> <p class='ct-product-description'>A very delicious macaroons ...</p><span class='ct-product-price'>" + item.Deposit + "</span></div> </div>  </div>";
//                        //$('#pro').html(item.Name);
//                        ////eachHtml = eachHtml + "  <h2>" + item.Name + "</h2>";
//                        //eachHtml = eachHtml + "  <div class='article mt10 pro-detail' style='margin-top: -10px;'> <img src='" + item.PicUrl + "' style=' width: 100%; height: 300px;'/>";
//                        //eachHtml = eachHtml + "<div     style='height: 158px;'><p>长：" + item.Ex_Len + "</p>";
//                        //eachHtml = eachHtml + "<p>宽：" + item.Ex_Width + "</p>";
//                        //eachHtml = eachHtml + "<p>高：" + item.Ex_Height + "</p>";
//                        //eachHtml = eachHtml + "<p>租赁价格：" + item.RentPrice + "</p>";
//                        //eachHtml = eachHtml + "<p>押金：" + item.Deposit + "</p>";
//                        //eachHtml = eachHtml + "<div class='book info mt10'><h4 class='num'><lable class='fl'>商品数量：</lable><span class='subtract'>-</span><input value='1' name='count' class='count' readonly = 'true'/><span class='add'>+</span></h4></div></div>";
//                        //eachHtml = eachHtml + " <a href='javascript:ExhibitionData.Add(" + item.KeyId + " )' class='title book-btn mt10 tc'>加入购物车</a>";

//                        //eachHtml = eachHtml + " <a onclick='ExhibitionData.Add(" + item.KeyId + " );'  href='book.html?id=" + item.KeyId + " ' class='title book-btn mt10 tc'>立即预定</a>";
//                        $('#pro').html(eachHtml);
//                    });
//                },
//                error: function (XMLHttpRequest, textStatus, errorThrown) {
//                }
//            });
//        } else {
//            window.location.href = "/";
//        }
//    },
//    OrderDetail: function (id) {
//        alert(id);
//    },
//    getRequest: function () {
//        var url = window.location.search; //获取url中"?"符后的字串
//        var theRequest = new Object();
//        if (url.indexOf("?") != -1) {
//            var str = url.substr(1);
//            strs = str.split("&");
//            for (var i = 0; i < strs.length; i++) {
//                //
//                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
//            }
//        }
//        return theRequest;
//    },
//    setSession: function () {

//    },
//    Add: function (id) {
//        // var count = $("#countNum").val();
//        var count = parseInt($(".count").val());
//        //  this.query = function () {
//        ExhibitionData.dataBase.transaction(function (tx) {
//            tx.executeSql(
//            "select * from exhibition where KeyId=?", [id],
//            function (tx, result) { //执行成功的回调函数
//                if (result.rows.length > 0) {
//                    //成功 
//                    new TipBox({ type: 'success', str: "亲 ，你已经填加到购物车了哟！", hasBtn: true });
//                    ExhibitionData.getAll();
//                } else {
//                    ExhibitionData.dataBase.transaction(function (tx) {
//                        tx.executeSql(
//                        "insert into exhibition (KeyId,count,state) values(?,?,?)",
//                        [id, count, 1],
//                        function () {
//                            new TipBox({ type: 'success', str: "亲 ，填加成功！", hasBtn: true });
//                        },
//                        function (tx, error) {
//                            new TipBox({ type: 'success', str: "亲 ，填加失败！", hasBtn: true });

//                        });
//                    })
//                }
//            },
//                function (tx, error) {
//                    alert('查询失败: ' + error.message);
//                });
//        });

//        //var goods = localStorage.getItem("goods");
//        //if (goods != null) {
//        //    //var data = eval(goods);
//        //    //var queryResult = Enumerable.From(data).Where("x=>x.data==" + id).ToArray();
//        //    //if (queryResult.length>0) {
//        //    //    //成功 
//        //    //    new TipBox({ type: 'success', str: "亲 ，你已经填加到购物车了哟！", hasBtn: true });
//        //    //} else {
//        //    //    //var goods = [];
//        //    //    ExhibitionData.goods.push({ "data": id });
//        //    //    localStorage.setItem("goods", JSON.stringify(goods));
//        //    //    //成功 
//        //    //    new TipBox({ type: 'success', str: "亲，填加成功了哟！", hasBtn: true });
//        //    //}
//        //}
//        //else {       
//        //    ExhibitionData.goods.push({ "data": id });
//        //    localStorage.setItem("goods", JSON.stringify(goods));
//        //    //成功 
//        //    new TipBox({ type: 'success', str: "亲，填加成功了哟！", hasBtn: true });
//        //}

//        //this.insert = function () {
//        //    dataBase.transaction(function (tx) {
//        //        tx.executeSql(
//        //        "insert into stu (id, name) values(?, ?)",
//        //        [id, '徐明祥'],
//        //        function () { alert('添加数据成功'); },
//        //        function (tx, error) { alert('添加数据失败: ' + error.message); 
//        //        } );
//        //    });

//    },
//    createDatabase: function () {
//        var db = ExhibitionData.dataBase = openDatabase("goods", "1.0", "Exhibition", 1024 * 1024, function () { });
//        if (!ExhibitionData.dataBase) {
//        } else {
//            ExhibitionData.createTable();

//        }
//    },
//    createTable: function () {
//        ExhibitionData.dataBase.transaction(function (tx) {
//            tx.executeSql(
//            "create table if not exists exhibition (KeyId int,count int,state int)",
//            [],
//            function (tx, result) {
//            },
//            function (tx, error) {

//            });
//        });
//    }
//    ,
//    getAll: function () {
//        ExhibitionData.dataBase.transaction(function (tx) {
//            tx.executeSql(
//            "select * from exhibition", [],
//            function (tx, result) { //执行成功的回调函数
//            },
//            function (tx, error) {
//                alert('查询失败: ' + error.message);
//            });
//        });
//    }
//}