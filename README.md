**qtools-functional-library**

This is a collection of tools that allow chained operations on various Javascript datatypes. In each case, the primary operand is `this`. In most cases, the function takes parameteers to guide the operation. In all cases, `this` is returned for use by the next function in the chain. 

Most of the functions included in this library (except, eg, qt.log()) are implemented on the prototype of the data type in question. For example, almost any element can take the .qtDump() function.

- qtools-clone: Does a deep clone of an object or array.
- qtools-get-by-property: Operates on an array of objects. Retrieves one or more elements based on the value of an object property specified by a dotted path.
- qtools-includes-regex: Operations on a simple array of strings. Retrieves one or more elements based on an regEx match.
- qtools-log-output: Substitutes properties into a <!template!> string and send to log. (Note to self, verify array operation)
- qtools-merge: Deep merge of two objects including array propterties.
- qtools-number-iterator: Operates on a number. EG, (5).qtStart(7).qtIncrement(3).qtIterate(item=>item*100)
- qtools-number-keys-to-array: Converts an object with properties that are numbers to an array, including subordinate properties.
- qtools-object-sure-path: Gets or Sets the value of a property based on a dotted string path. No crash if intermediate elements are missing. Provides default. Predates and is prettier to use than optional chaining and supports setting the value.
- qtools-pass-through: Sits in a declarative chain and executes an arbitrary function. It returns 'this' regardless of what the function does. 'this' is available to the function.
- qtools-pop: Pops the last value off an array. If a default is supplied and there is nothing left on the list, that will be returned. Really good for ArrayOfObjects.qtPop({}).
- qtools-qtLast: Delivers the element that would have been pop'd but does not change the array.
- qtoolspush: Pushes a value onto an array and returns the array (unlike normal .push() which returns the length of the array)
- qtools-print-debug
- qtools-template-replace
- qtools-to-key-value-array
- qtools-to-string

NEW:

- qtools-select-properties
- qtools-map-properties

DESCRIPTION