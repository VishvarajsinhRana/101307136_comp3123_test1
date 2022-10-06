const mixedArray= ["PIZZA", 10, true, 07, false, "Wings"]

const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve, reject) => {
        //This determines whether the input is an array or an invalid input.
        if (!mixedArray || mixedArray.length === 0 || !Array.isArray(mixedArray)) reject("There is no Array to operate.");

        //This function filters array elements and outputs just strings.
        mixedArray = mixedArray.filter(word => typeof word === 'string');

        //This function will determine whether or not the mixedArray is empty.
        if (mixedArray.length == 0) {
            reject("A detected array, however none of the items were strings.")
        }

        //The strings will be made lowercase using this function.
        mixedArray = mixedArray.map(word => word.toLowerCase());
        resolve(console.log(mixedArray));

    });
};

lowerCaseWords(mixedArray)
    .then((val) => (val))
    .catch((err) => console.log("Error : " + err));
