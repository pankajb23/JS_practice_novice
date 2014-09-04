/*
var imageIndex=0;
var jpgImageName="img0";
var loadString="image/"+jpgImageName+".JPG";

$(document).ready(function(){
	$('.info').hide();
});

function changeImage()
{
  imageIndex++;
  imageIndex=imageIndex%2;
  var locationString = "image/img" + imageIndex + ".JPG";
  console.log(locationString);
  $('#currentImage').attr('src', locationString);
  if(imageIndex==1)$('.info').show();
  else $('.info').hide();
}
*/


///reteriving JSON object

///main class to hold the relationship , and data items and various function 
function DataObject(){	
	this.a=null;
	this.b=null;
	this.c=null;
	//return {};
};
DataObject.prototype.get=function(a1=null,b1=null,c1=null){
	a=a1;
	b=b1;
	c=c1;
	
};
DataObject.prototype.print=function(){
	console.log(a+b+c);
};
var obj=new DataObject();
console.log(obj.a);
obj.get(1,2,1);
obj.print();
for (var x in DataObject){
	console.log(x);
}
