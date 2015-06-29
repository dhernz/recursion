// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
 
	var result = [];

	function keepOn(boddy) {

		for(var i = 0;i<boddy.childNode.length;i++){
			if($(boddy.childNode[i]).hasClass(className)){
				result.push(boddy.childNode[i]);
			}

			if(boddy.childNode[i].hasChildNodes()){
				keepOn(boddy.childNode[i])
			}
		}


	}


		return result;

};
