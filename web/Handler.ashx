<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;

public class Handler : IHttpHandler {
    System.Web.Script.Serialization.JavaScriptSerializer jsS = new System.Web.Script.Serialization.JavaScriptSerializer();
    string result = string.Empty;
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        var Foods = context.Request.Form["cmd"];
        var goods = context.Request.Form["Goods"];
        var CustomerName = context.Request.Form["CustomerName"];
        var Contacts = context.Request.Form["Contacts"];
        var Phone = context.Request.Form["Phone"];
        var QQ = context.Request.Form["QQ"];
        var Position = context.Request.Form["Position"];
        context.Response.Write(jsS.Serialize(new { msg = "申请成功，请等待电话通知", Success = true }));       // context.Response.Write("Hello World");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}