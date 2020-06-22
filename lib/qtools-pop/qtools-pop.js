'use strict';
//START OF moduleFunction() ============================================================
var moduleFunction = function(args = {}) {
	const { commonFunctions } = args;
	
	const addToPrototypeActual = functionObject => () =>
		commonFunctions.universalAddToPrototype(commonFunctions, functionObject);
	
	
	
	//first method definition function ==========================
	const firstMethodFunction = commonFunctions => {
		const methodName = 'qtPop';
		const description = `operand.qtPop() pops with an optional default argument`;
		const supportedTypeList = [Array];

		const method = () =>
			function(defaultValue) {
			const inData=this;
			if (typeof(inData.length)=='undefined'){
				throw "array.qtPop(defaultValue=undefined) works for Arrays only";
			}
			const arrayValue=inData.pop();
			const result=(typeof(arrayValue)!='undefined')?arrayValue:defaultValue;
			return result
		};

		const functionObject = new Map(); // prettier-ignore
		functionObject.set(methodName, {
			description,
			supportedTypeList,
			method,
			test: (args) =>
{
				return require('./test.js')({...args, ...{
					moduleName: module.id.replace(module.path, '')
				}})
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
