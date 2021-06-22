import {calculateAspectRatio} from "./aspect-ratio.js";
import * as percentage from "./percentage.js"

// Modulo form
const moduloForm = document.getElementById('modulo-form');
const moduloInputElement1 = document.getElementById('modulo_1');
const moduloInputElement2 = document.getElementById('modulo_2');
const moduloResultElement = document.getElementById('modulo_result');
moduloForm.addEventListener('change', event => {
    const result = moduloInputElement1.value % moduloInputElement2.value;
    moduloResultElement.value = result;
});

// Percentage form
// a) percentageOf()
const percentageForm = document.getElementById('percentage-form');
const percentageInputElement1 = document.getElementById('percentage_1');
const percentageInputElement2 = document.getElementById('percentage_2');
const percentageResultElement = document.getElementById('percentage_result');
percentageForm.addEventListener('change', event => {
    const result = percentage.percentage(percentageInputElement1.value, percentageInputElement2.value);
    console.log(result)
    percentageResultElement.value = result;
});

// b) percentageOf()
const percentageOfForm = document.getElementById('percentageOf-form');
const percentageOfInputElement1 = document.getElementById('percentageOf_1');
const percentageOfInputElement2 = document.getElementById('percentageOf_2');
const percentageOfResultElement = document.getElementById('percentageOf_result');
percentageOfForm.addEventListener('change', event => {
    const result = percentage.percentageOf(percentageOfInputElement1.value, percentageOfInputElement2.value);
    percentageOfResultElement.value = result;
});

// c) difference
const differenceForm = document.getElementById('difference-form');
const differenceInputElement1 = document.getElementById('difference_1');
const differenceInputElement2 = document.getElementById('difference_2');
const differenceResultElement = document.getElementById('difference_result');
differenceForm.addEventListener('change', event => {
    const result = percentage.difference(differenceInputElement1.value, differenceInputElement2.value);
    console.log(result);
    differenceResultElement.value = result;
});

// Aspect form
const ratioInputElement1 = document.getElementById('ratio_1');
const ratioInputElement2 = document.getElementById('ratio_2');
const ratioInputElement3 = document.getElementById('ratio_result-width');
const ratioInputElement4 = document.getElementById('ratio_result-height');
ratioInputElement3.addEventListener('change', event => {
    const originalWidth = ratioInputElement1.value;
    const originalHeight = ratioInputElement2.value;
    const newWidth = ratioInputElement3.value;
    const newHeight = calculateAspectRatio(originalWidth, originalHeight, newWidth, 'w');
    ratioInputElement4.value = newHeight;
})
ratioInputElement4.addEventListener('change', event => {
    const originalWidth = ratioInputElement1.value;
    const originalHeight = ratioInputElement2.value;
    const newHeight = ratioInputElement4.value;
    const newWidth = calculateAspectRatio(originalWidth, originalHeight, newHeight, 'h');
    ratioInputElement3.value = newWidth;
})