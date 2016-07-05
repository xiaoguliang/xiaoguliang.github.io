window.onload = function()
{
	var tag = document.getElementById('header_tag');//标签导航
	var tag_a = tag.getElementsByTagName("a");//标签导航下的a
	var content = document.getElementById('content');//项目内容区域
    var cons = getByClass(content,"con");//项目分块
    var order = 0;//标记原先选项位置

    console.log(tag_a.length);
	for (var i = 0; i < tag_a.length; i++) 
	{
		tag_a[i].value=i;
		console.log(tag_a[i].value);
		tag_a[i].onmouseover=function ()
		{
		 	this.className="active";
		 	console.log(this.value);
		 	cons[this.value].style.display="block";
		 	order=this.value;
		 	console.log(order);
		}
		tag_a[i].onmouseout=function()
		{
			tag_a[order].className="";
			console.log(order);
			cons[order].style.display="none";
		}
	}
}
function getByClass(oParent, sClassName)//通过类名获取
{
    var aElm=oParent.getElementsByTagName('*');
    var aArr=[];
    for(var i=0; i<aElm.length; i++)
    {
        if(aElm[i].className==sClassName)
        {
            aArr.push(aElm[i]);
        }
    }
    return aArr;
}