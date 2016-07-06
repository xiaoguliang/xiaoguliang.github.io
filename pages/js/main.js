window.onload = function()
{
	var tag = document.getElementById('header_tag');//标签导航
	var tag_a = tag.getElementsByTagName("a");//标签导航下的a
	var content = document.getElementById('content');//项目内容区域
    var cons = getElementsByClassName("con");//项目分块
    var order = 0;//标记原先选项位置

	tag_a[0].className = "active";
	for (var i = 0; i < tag_a.length; i++) 
	{
		tag_a[i].value=i;
		tag_a[i].onmouseover=function () 
		{
			addClass(this,"active");
			ChangeTabs(this.value);
		}
		function ChangeTabs (nowTab) 
		{
			removeClass(tag_a[order],"active");
			cons[order].style.display = "none"; 
			cons[nowTab].style.display = "block"; 
			order=nowTab;
		}
		
	}

}

function getElementsByClassName(n)//通过class名获取元素
{
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ )
   {
       if (allElements[i].className == n ) 
       {
           classElements[classElements.length] = allElements[i];
        }
   }
   return classElements;
}
function addClass(element, newClassName) //添加class名
{
    var oldClassName = element.className; //获取旧的样式类
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}
function removeClass(element, oldClassName)//移除指定class名
{
    var originClassName = element.className; //获取原先的样式类
    var pattern = new RegExp("\\b" + oldClassName + "\\b"); //使用构造函数构造动态的正则表达式
    element.className = trim(originClassName.replace(pattern, ''));
}
function trim(str)//去除空格
  {
      return str.replace(/^\s+|\s+$/g,"");
  }