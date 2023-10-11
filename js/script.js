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