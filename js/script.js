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
    const area = 0.5 * base * height;

    // show area
    const areaResult = document.getElementById('show-area');
    areaResult.innerText = area;
}


// rectangle calculator
function rectangleCalculator(){
    // get the rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const widthFieldValue = parseFloat(widthFieldText);

    // get the rectangle length value
    const lengthField = document.getElementById('rectangle-length');
}