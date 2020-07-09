'use strict';

//START OF moduleFunction() ============================================================

const moduleFunction = function(args) {
	//this module is initialized with parameters spec'd in the main function module
	
	const completeStepActual = ({verbose=false, logErrors=false, moduleName}) => (
		methodName,
		thisStepMessage,
		thisStepResult,
		thisStepEvalFunction
	) => {

		const thisStepPass = thisStepEvalFunction(thisStepResult);
		
		if (logErrors && !thisStepPass) {
			console.log(`FAIL TEST: ${thisStepMessage} in ...${moduleName}`);
		}
		if (verbose) {
			console.log(`Result for: ${methodName} (${thisStepPass?'PASS':'FAIL'}):`);
			thisStepResult.qtDump();
			console.log('\n\n');
		}
		
		return passingTests && thisStepPass;
	};

	const completeStep = completeStepActual(args);

	let passingTests = true;

	let thisStepMessage;
	let thisStepResult;
	let thisStepEvalFunction;
	let methodName;

	//TESTS ============================================================



	const testArray = {
				animal: 'bird',
				eatsWith: 'teeth',
				color: 'red',
				list:['orig1',2,3, 4],
				deep:[
					{a:'a'},
					{b:{nestedList:['d1','d2','d3']}}
					]
			};
	
	const testArray2 = {
				animal: 'fish',
				eatsWith: 'snout',
				shoeSize:10,
				list:['x',void(0),'new3',void(0),'new5'],
				deep:[
					{c:'creplacement'},
					{b:{nestedList:['d1replacement']}}
					],
				new_array_not_in_replacement:[
					'newA',
					'newB'
				],
				new_object_not_in_original:{
					hello:'goodbye',
					orange:'black'
				}
			};

	
	const testArray3 = {
				animal: 'mastodon',
				horns:'pointy'
			};
	

	//TEST ITEM ------------------------------------------------------
	methodName='qtMerge'
	thisStepMessage = "Didn't merge deep replacement property correctly";
	thisStepResult = testArray[methodName](testArray2, {mergeNonExistent:true});
	thisStepEvalFunction = item => item.qtGetSurePath('deep[1].b.nestedList[0]')=='d1replacement';
	passingTests =
		completeStep(methodName, thisStepMessage, thisStepResult, thisStepEvalFunction) &&
		passingTests;
		
	//TEST ITEM ------------------------------------------------------
	methodName='qtMerge'
	thisStepMessage = "Didn't merge undefined item correctly";
	thisStepResult = testArray[methodName](testArray2, {mergeNonExistent:true});
	thisStepEvalFunction = item => typeof(item.qtGetSurePath('list[1]'))=='undefined';
	passingTests =
		completeStep(methodName, thisStepMessage, thisStepResult, thisStepEvalFunction) &&
		passingTests;

	//TEST ITEM ------------------------------------------------------
	methodName='qtMerge'
	thisStepMessage = "did not merge nested array element";
	thisStepResult = testArray[methodName](testArray2, {mergeNonExistent:false});
	thisStepEvalFunction = item => item.qtGetSurePath('deep[1].b.nestedList[0]')=='d1replacement';
	passingTests =
		completeStep(methodName, thisStepMessage, thisStepResult, thisStepEvalFunction) &&
		passingTests;

	//TEST ITEM ------------------------------------------------------
	methodName='qtMerge'
	thisStepMessage = "did not merge third object correctly";
	thisStepResult = testArray[methodName](testArray2, {mergeNonExistent:false}).qtMerge(testArray3);
	thisStepEvalFunction = item => item.horns=='pointy' && item.animal=='mastodon' && item.eatsWith=='snout';
	passingTests =
		completeStep(methodName, thisStepMessage, thisStepResult, thisStepEvalFunction) &&
		passingTests;
	
	
	

	return passingTests;
};

//END OF moduleFunction() ============================================================

module.exports = moduleFunction;
//module.exports = new moduleFunction();

