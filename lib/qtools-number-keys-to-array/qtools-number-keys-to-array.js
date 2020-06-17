'use strict';
//START OF moduleFunction() ============================================================
var moduleFunction = function(args={}) {
	const {commonFunctions}=args;

// const a={
// ['0']:'zero',
// ['1']:'one',
// ['4']:'four',
// a:'b'
// 
// }.qtNumberKeysToArray({collapseHoles:false, omitNonNumeric:true});
// console.dir({"a [config-command-line-manager.js.moduleFunction]":a});



const workingFunction = function(args={}) {
	const {collapseHoles=true, omitNonNumeric=false}=args;
	if (typeof this.length != 'undefined') {
		return this;
	}

	var outArray = [];
	var workingArray = [];
	const extraElements = [];
	let maxIndex = 0;
	
	let naturalIndex=0;
	
	for (var i in this) {
		if (!this.hasOwnProperty(i)) {
			continue;
		}

		var element = this[i];

		if (isNaN(+i)) {
			extraElements.push({
				key: i,
				value: element
			});
			continue;
		}
		
	if (collapseHoles){
		workingArray[naturalIndex] = element;
		naturalIndex++;
	}
	else{
		workingArray[i] = element;
		maxIndex = Math.max(maxIndex, i);
	}
	
	}
	
	if (!collapseHoles){
	
		for (var i = 0; i < maxIndex + 1; i++) {
			outArray.push(
				typeof workingArray[i] != 'undefined' ? workingArray[i] : void ''
			);
		}
	
	}
	else{
		outArray=workingArray;
	}
	
	if(!omitNonNumeric){
		for (var i = 0, len = extraElements.length; i < len; i++) {
			outArray.push(extraElements[i]);
		}
	}

	return outArray;
};
	
		
	const addToPrototype = (target, workingFunction) => () => {
		const name='qtNumberKeysToArray';
		if (typeof target.prototype[name] == 'undefined') {
			Object.defineProperty(target.prototype, name, {
				value: workingFunction,
				writable: false,
				enumerable: false
			});
		}
		
		return {
			methods:[name],
			description:`object.${name}({collapseHoles=false, omitNonNumeric=true})`
		}
	};
	this.addToPrototype = addToPrototype(Object, workingFunction);
	

};
//END OF moduleFunction() ============================================================
module.exports = moduleFunction;
//module.exports = new moduleFunction();
