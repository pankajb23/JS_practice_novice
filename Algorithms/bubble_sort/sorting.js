var array=new Array();
array.push(100);
array.push("pankaj");
array.push("hello");
array.push(788);
//simple bubble sort
for(var i=0;i<array.length-1;i++){
	for(var j=i+1;j<array.length;j++){
		if(array[i]>array[j]){
			var temp=array[i];
			array[i]=array[j];
			array[j]=temp;
		}
	}
}
for(var i=0;i<array.length;i++){
	document.write(array[i]+"<br />");
}