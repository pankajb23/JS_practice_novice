var funny=(function(){
	var howManyTimes=0;
	return {
		checkTheLaughMeter:function(){
			return howManyTimes;
		},
		laugh:function(){
			howManyTimes+=1;
			return "You should learn to laugh";
		}
	}
})();
console.log(funny);