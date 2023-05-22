let input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue, resultTypeValue;

input.addEventListener('keyup', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
        result.value = input.value;
    }

    if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
        result.value = input.value;
    }

    if (inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter') {
        result.value = input.value;
    }
}



let kgRef = document.getElementById('kg'),
    lbRef = document.getElementById('lb'),
    ozRef = document.getElementById('oz');

let convertFromKg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener('input', convertFromKg);
lbRef.addEventListener('input', convertFromLb);
ozRef.addEventListener('input', convertFromOz);
window.addEventListener('load', convertFromKg);
