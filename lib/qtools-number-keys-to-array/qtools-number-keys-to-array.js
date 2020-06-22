'use strict';
//START OF moduleFunction() ============================================================
var moduleFunction = function(args = {}) {
	const { commonFunctions } = args;
	
	const addToPrototypeActual = functionObject => () =>
		commonFunctions.universalAddToPrototype(commonFunctions, functionObject);
	
	
	
	//first method definition function ==========================
	const firstMethodFunction = commonFunctions => {
		const methodName = 'qtNumberKeysToArray';
		const description = `object.${methodName}({collapseHoles=false, omitNonNumeric=true})`;
		const supportedTypeList = [Object];

		const method = () =>
			function(args) {
				const { collapseHoles = true, omitNonNumeric = false } = args;
				if (typeof this.length != 'undefined') {
					return this;
				}

				var outArray = [];
				var workingArray = [];
				const extraElements = [];
				let maxIndex = 0;
				
				let naturalIndex = 0;
				
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

					if (collapseHoles) {
						workingArray[naturalIndex] = element;
						naturalIndex++;
					} else {
						workingArray[i] = element;
						maxIndex = Math.max(maxIndex, i);
					}
					
				}
				
				if (!collapseHoles) {
					
					for (var i = 0; i < maxIndex + 1; i++) {
						outArray.push(
							typeof workingArray[i] != 'undefined' ? workingArray[i] : void ''
						);
					}
					
				} else {
					outArray = workingArray;
				}
				
				if (!omitNonNumeric) {
					for (var i = 0, len = extraElements.length; i < len; i++) {
						outArray.push(extraElements[i]);
					}
				}

				return outArray;
			};

		const functionObject = new Map(); // prettier-ignore
		functionObject.set(methodName, {
			description,
			supportedTypeList,
			method,
			test: args => {
				return require('./test.js')({
					...args,
					...{
						moduleName: module.id.replace(module.path, '')
					}
				});
			}
		});
		return functionObject;
	};
	this.addToPrototype = addToPrototypeActual(
		firstMethodFunction(commonFunctions)
	);
	
};
//END OF moduleFunction() ============================================================
module.exports = moduleFunction;
//module.exports = new moduleFunction();
