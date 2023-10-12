// triangle calculator
function triangleCalculator(){
    // get the triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    // get tge triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);

    // validation
    if (isNaN(base) || isNaN(height)) {
        alert('Please input a valid number');
        return;
    }

    // area calculate
    const areaTri = 0.5 * base * height;

    // show area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = areaTri;
}


// rectangle calculator
function rectangleCalculator(){
    // get the rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);

    // get the rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);

    // area calculate
    const areaRect = width * length;

    // show area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = areaRect;
}


/**
 * 
 * from here to top. the code is not reduced. We are using the same code again and again.
 * 
 * from here to down the code is reduced. We are using function to reduce it
 * 
 */


// Parallelogram calculator
function parallelogramCalculator(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

// Ellipse Calculator
function ellipseCalculator(){
    const base = getInputValue('ellipse-base');
    const height = getInputValue('ellipse-height');
    const area = 3.1416 * base * height;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reusable input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}



// Data validation
/**
 * 1. set the proper type of the input field.
 * 2. check type using typeof
 * 3. NaN means: not a number. isNaN is checking whether the input is not a number or not
 */