!function(){
	//store the old global;
	var  oldb = window.b;
	//set new global
    var b;
	window.b=b={};
	var useNative=function(){
		console.log('why are you using this please use the native support!');
	};
	//documenting function
	b.getTag= function(tag){
		useNative();
		return document.getElementsByTagName(tag);
	};
	//documenting function
	b.getId= function(id){
		useNative();
		return document.getElementById(id);
	};
	//documenting function
	b.getClass= function(cName){
		useNative();
		return document.getElementsByClassName(cName);
	};
	//documenting function
	b.getAll= function(selector){
		useNative();
		return document.querySelectorAll(selector);
	};
	//documenting function
	b.get= function(selector){
		useNative();
		return document.querySelector(selector);
	};
	//documenting function
	b.parent= function(elem){
		useNative();
		return elem.parentNode;
	};
	//documenting function
	b.find=function(elem,match){
		useNative();
		return elem.querySelectorAll(match);
	}
	b.siblings=function(elem,match){
		var parent = elem.parentNode;
		var children = parent.children;
		//if we have a match then reuse filtering child function
		if(match){
			children = b.children(parent,match);
		}
		else{
			//if no match then we could do this in one line 
			useNative();
		}
		//always filter out the array for the current element
		return Array.prototype.filter.bind(children)(function(item){
			return item!==elem;
		});
		
		
	}
	
	b.children=function(elem,match){
		var matcher = null;
		var matched =[];
		if(!elem)
			return matched;
		//if we have a match then get match function
		if(match && match.length>0){
			matcher = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
		}
		else{ //no match then straight forward 
			useNative();
			return elem.children;
		}
		for(var i=0;i<elem.children.length;i++){
			if(matcher.bind(elem.children[i])(match))
				matched.push(elem.children[i]);
		}
		return matched;
	};
	
	
	
	b.parents= function(elem,match){
		var matcher = null;
		var matched =[];
		if(!elem)
			return matched;
		if(match && match.length>0){
			matcher = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
		}
		elem=elem.parentNode;
		while(elem!==document){
			//if we have a matcher then use it.
			if(matcher && matcher.bind(elem)(match))
				matched.push(elem);
			//no match sweet just add it to the match element
			if(!matcher){
				matched.push(elem);
			}
			//set element to parent and keep on looping!
			elem = elem.parentNode;

		}
		//return the elements;
		return matched;
	}

}();
