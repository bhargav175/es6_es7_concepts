let ArrowFunctions = function(){


	var bob = {
	  _name: "Ross",
	  _friends: ["Joey","Chandler"],
	  lexicalPrintFriends() {
	    this._friends.forEach(f =>
	      console.log(this._name + " knows " + f));
	   },
	   printFriends() {
	    this._friends.forEach(function(f){
	      try{
	      	console.log(this._name + " knows " + f);	
	      }catch(e){
	      	  console.log(e);
	      }
	      
	    });
	   }

	};

	bob.printFriends();
	bob.lexicalPrintFriends();

	
};

export default ArrowFunctions;