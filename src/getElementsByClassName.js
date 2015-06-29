// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
 	var body = document;
	var result = [];

	function keepOn(parent) {

		for(var i = 0;i<parent.childNodes.length;i++){ //if parent has kids,
			if($(parent.childNodes[i]).hasClass(className)){
				result.push(parent.childNodes[i]);
			}

			if(parent.childNodes[i].hasChildNodes()){
				keepOn(parent.childNodes[i])
			}
		}


	}

 keepOn(body);
		return result;

};
