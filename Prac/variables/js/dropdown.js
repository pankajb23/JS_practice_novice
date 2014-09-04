//function mainly to load the gantt chart over web page
function loadGanttChart(){
	var list_of_tasks=[];
	var scene={};
	var json=JSON.parse(scene);
	var number_of_rows=json.length;
	for(int i=0;i<number_of_rows;i++){
		list_of_tasks.push(create_object(json[i]));
	}
	build_graph(list_of_tasks);
}
var create_object=function(json){
	var row_object=new row_gantt(json.hirerchy,json.activity_name,json.start_date,json.end_date,json.duration,json.dep,json.assignee);
	return row_object;
}
function row_gantt(hirerchy,activity_name,start_date,end_date,duration,dep,assignee){
	this.hirerchy=hirerchy;
	this.pic=0;
	this.activity=activity_name;
	this.start_date=start_date;
	this.end_date=end_date;
	this.duration=duration;
	this.dep=dep;
	this.assignee=assignee;
	//keeping them private
	return {

	}
}
function build_graph(list_of_tasks){
	var length=list_of_tasks.length;
	dfs('storage',list_of_tasks,0);
}
function dfs(div,list_of_tasks,current_len){
	var create_div=document.createElement('div');
	var str="";//used for the html part
	document.getElementById('storage').appendChild(create_div);
	if(current_len==0){
	
	}else{

	}

}
