**qtools-functional-library**

This is a collection of tools that allow chained operations on various Javascript datatypes. In each case, the primary operand is `this`. In most cases, the function takes parameteers to guide the operation. In all cases, `this` is returned for use by the next function in the chain. 

Most of the functions included in this library (except, eg, qt.log()) are implemented on the prototype of the data type in question. For example, almost any element can take the .qtDump() function.

- qtClone: Does a deep clone of an object or array.
- qtGetByProperty: Operates on an array of objects. Retrieves one or more elements based on the value of an object property specified by a dotted path.
- qtIncludesRegex: Operations on a simple array of strings. Retrieves one or more elements based on an regEx match.
- qtLog: Logs message by applying 'this' into the argument which is a <!template!> string. Appends calling file name.
- qtMerge: Deep merge of two objects including array propterties.
- qtIterate: Operates on a number. EG, (5).qtStart(7).qtIncrement(3).qtIterate(item=>item*100)
- qtNumberKeysToArray: Converts an object with properties that are numbers to an array, including subordinate properties.
- qtGetSurePath Gets the value of a property based on a dotted string path. No crash if intermediate elements are missing. Provides default. Predates and is prettier to use than optional chaining and supports setting the value.
-  qtGetSurePath Sets the value of a property based on a dotted string path. Creates intermediate elements aifre missing. 
- qtPassThrough: Sits in a declarative chain and executes an arbitrary function. It returns 'this' regardless of what the function does. 'this' is available to the function.
- qtPop: Pops the last value off an array. If a default is supplied and there is nothing left on the list, that will be returned. Really good for ArrayOfObjects.qtPop({}).
- qtPush: Pushes a value onto an array and returns the array (unlike normal .push() which returns the length of the array)
- qtLast: Delivers the element that would have been pop'd but does not change the array. Default if none exists.
- qtFirst: Delivers the element zero if it exists but does not change the array. Default if none exists.
- qtDump: Prints 'this' and returns it. Good for debugging complicated chains.
- qtTemplateReplace: Takes Object and a <!template!> String, either can be this or the argument. Substitutes from the object properties into the string. If the Object is an array of objects, it does it to all of them.
- qtToKeyValueArray: Converts an object to an array of objects of the form [{keyName:value}].
- qtToString: Joins an array with prefix, suffix and separator. Pretty much the same as .join().
- qtSelectProperties: Given an Object and an Array of Strings, filters the properties into a new Object with defaults for missing elements. Does the same for an Array of Objects.
- qtMapProperties: Given an Object and a one level Object whose properties are functions, applies each function to the corresponding element. Does the same for an array of Objects.

DESCRIPTION