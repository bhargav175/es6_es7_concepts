var TailCalls = function(){
	 var factorial = function(n,acc=1){
	 	if(n<=1) return acc;
	 	return factorial(n-1,n*acc);
	 };
	 var res = factorial(40);
	 console.log(res);
};

export default TailCalls;