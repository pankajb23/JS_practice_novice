//singly linked list in javascript
function block(){
    name:null;
    next:null;
};
block.prototype={
    setNext:function(nextt){
      this.next=nextt;
    },
    getNext:function(){
      return this.next;
    }
};
function list(){
    head:null;
}
list.prototype={
  insertNode:function(node){  //block as input
      if(this.head===undefined)
        {
              this.head=node;
        }else {
              var getB=this.head;
              while(getB.next!==undefined){
                  getB=getB.next;
              }
              getB.next=node;
        }
    },
    printNode:function(){
        while(this.head!==undefined){
            document.write(this.head.name+"<br />");
            this.head=this.head.next;
        }
    },
    createNode:function(namee){
        var obj=new block();
        obj.name=namee;
        return obj;
    }
}
var array=[1,2,3,4,"hello world","linux"];
var linked_list=new list();
for(var i=0;i<array.length;i++){
    var obj=linked_list.createNode(array[i]);
    linked_list.insertNode(obj);
}
linked_list.printNode();

