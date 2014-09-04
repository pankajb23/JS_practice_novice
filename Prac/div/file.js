///implementation using div only and a little bit of jquery
//no need to be modest right now so all things are public :P

/**containing data */

function data_node(activity_Name,lev,ID,divv)
{
    var level=lev;
    var activityName=activity_Name;
    var id=ID;
    var status=0;
    var div=divv;
    return {
		child: new Array(),
		setLevel:function(a){
            this.level=a;
        },
		getLevel:function(){
            return level;
        },
		getId:function(){
            return this.id;
        },
		flipStatus:function()
        {
            status=!status;
        },
		getStatus:function()
        {
            return status;
        },
        getDiv:function(){
        	return div;
        }
    };
};
var travel_dfs=function(index,list_array)
{
    if(index<list_array.length) {
        for(var i=0; i<list_array[index].child.length; i++) {
            console.log(index+"\t"+list_array[index].child[i]);
            travel_dfs(list_array[index].child[i],list_array);
        }
    }
};

data_node.prototype.child=[];
var list_array=new Array();
list_array.push(new data_node("pankaj",1,1,"div1"));
list_array.push(new data_node("pankaj1",2,0,"div2"));
list_array.push(new data_node("pankaj2",3,0,"div3"));
list_array.push(new data_node("pankaj3",3,0,"div4"));
list_array.push(new data_node("pankaj4",2,0,"div5"));
list_array.push(new data_node("pankaj5",3,0,"div6"));
list_array.push(new data_node("pankaj6",3,0,"div7"));

/// array, parent_index, index

var stack=new Array();
function stackObject(level,index)
{
    this.level=level;
    this.index=index;
};
for(var i=0; i<list_array.length; i++)
{
    if(stack.length===0) {
        stack.push( new stackObject(list_array[i].getLevel(),i) );
    } else {
        var length=stack.length-1;
        for(; length>=0; length--) {
            if(stack[length].level>=list_array[i].getLevel()) { ///
                stack.splice(length,length+1);
            } else if(stack[length].level<list_array[i].getLevel()) {
                break;
            }
        }
        length=stack.length;
        if(length>0) {
            var previous=stack[(length-1)].index;
            list_array[previous].child.push(i);
        }
        stack.push( new stackObject(list_array[i].getLevel(),i));
    }
};

for (var i=0; i<list_array.length; i++)
{
    for (var j=0; j<list_array[i].child.length; j++) {
        var child=list_array[i].child[j];
    }
}
//travel_dfs(0,list_array);
var createDivPanel=function(id,list_array,index)
{
    var div_element=document.createElement('div');
    console.log("error\t"+id);
    document.getElementById(id).appendChild(div_element);
    var html="<div id='"+ list_array[index].getDiv()+"'>" ;
    console.log(list_array[index].getDiv());
    for(var index=0; index<list_array[index].child.length; index++) {
        html=html+createDivPanel(list_array[index].getDiv(),list_array,list_array[index].child[index]);
    }
    html=html+"</div>";
    div_element.innerHTML=html;
    return div_element;
}
$(document).ready(function(){
    var html=createDivPanel("supreme",list_array,0);
});
/*
console.log(document.getElementById('supreme').innerHTML);
console.log(document.getElementById('none').innerHTML);
*/
