// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.

function camelCase(cssProp) {
    // Split the string by dashes.
    const parts = cssProp.split('-');
    
    // Capitalize the first letter of each part except the first one, and join them.
    for (let i = 1; i < parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }

    // Join the parts back together.
    return parts.join('');
}

// Testing the function.
console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('display'));

// a) Variant using for...of loop.
function camelCaseForOf(cssProp) {
    const parts = cssProp.split('-');
    let camelCased = parts[0]; 

    for (const part of parts.slice(1)) {
        camelCased += part.charAt(0).toUpperCase() + part.slice(1); 
    }

    return camelCased;
}

// Testing the function.
console.log(camelCaseForOf('margin-left')); 
console.log(camelCaseForOf('background-image')); 
console.log(camelCaseForOf('display')); 

// b) Variant using while loop.
function camelCaseWhile(cssProp) {
    const parts = cssProp.split('-');
    let camelCased = parts[0];
    let i = 1;

    while (i < parts.length) {
        camelCased += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
        i++;
    }

    return camelCased;
}

// Testing the function.
console.log(camelCaseWhile('margin-left')); 
console.log(camelCaseWhile('background-image')); 
console.log(camelCaseWhile('display'));

// c) Variant using conditional operator.
function camelCaseConditional(cssProp) {
    const parts = cssProp.split('-');
    
    return parts.map((part, index) => 
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
}

// Testing the function.
console.log(camelCaseConditional('margin-left')); 
console.log(camelCaseConditional('background-image')); 
console.log(camelCaseConditional('display'));