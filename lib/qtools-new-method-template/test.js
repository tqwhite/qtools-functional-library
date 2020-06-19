'use strict';

//START OF moduleFunction() ============================================================

const moduleFunction = function({ logErrors = false, moduleName='missing method name' }) {
	//this module is initialized with parameters spec'd in the main function module
	const completeStepActual = (logErrors, moduleName) => (
		thisStepMessage,
		thisStepResult,
		thisStepEvalFunction
	) => {

		const thisStepPass = thisStepEvalFunction(thisStepResult);
		passingTests = passingTests && thisStepPass;
		if (logErrors && !thisStepPass) {
			console.log(`FAIL TEST: ${thisStepMessage} in ...${moduleName}`);
		}
		return thisStepPass;
	};

	const completeStep = completeStepActual(logErrors, moduleName);

	let passingTests = true;

	let thisStepMessage;
	let thisStepResult;
	let thisStepEvalFunction;

	//TESTS ============================================================

	
	const testArray = [
		'allocute',
		'Hello'
	];
	
	const methodName='qtTemplateMethod'

	//TEST ITEM ------------------------------------------------------
// 	thisStepMessage = "not yet implemented";
// 	thisStepResult = testArray[methodName]('hello');
// 	thisStepEvalFunction = item => false;
// 	passingTests =
// 		completeStep(thisStepMessage, thisStepResult, thisStepEvalFunction) &&
// 		passingTests;
	
	
	

	return passingTests;
};

//END OF moduleFunction() ============================================================

module.exports = moduleFunction;
//module.exports = new moduleFunction();

