
function convertFromDecimal() {
    const decimalValue = document.getElementById('decimalInput').value;

    if (decimalValue !== '') {
        const decimalNumber = parseInt(decimalValue);
        if (document.getElementById('binaryInput')) { document.getElementById('binaryInput').value = decimalNumber.toString(2); };
        if (document.getElementById('octalInput')) { document.getElementById('octalInput').value = decimalNumber.toString(8); };
        if (document.getElementById('hexInput')) { document.getElementById('hexInput').value = decimalNumber.toString(16); };
    } else {
        resetFields();
    }
}

function convertFromBinary() {
    const binaryValue = document.getElementById('binaryInput').value;

    if (binaryValue !== '') {
        const decimalNumber = parseInt(binaryValue, 2);
        document.getElementById('decimalInput').value = decimalNumber;
        if (document.getElementById('octalInput')) { document.getElementById('octalInput').value = decimalNumber.toString(8); };
        if (document.getElementById('hexInput')) { document.getElementById('hexInput').value = decimalNumber.toString(16); };
    } else {
        resetFields();
    }
}

function convertFromOctal() {
    const octalValue = document.getElementById('octalInput').value;

    if (octalValue !== '' && /^[0-7]+$/.test(octalValue)) {
        const decimalNumber = parseInt(octalValue, 8);
        document.getElementById('decimalInput').value = decimalNumber;
        if (document.getElementById('binaryInput')) { document.getElementById('binaryInput').value = decimalNumber.toString(2); };
        if (document.getElementById('hexInput')) { document.getElementById('hexInput').value = decimalNumber.toString(16); };
    } else {
        resetFields();
    }
}


function convertFromHex() {
    const hexValue = document.getElementById('hexInput').value;

    if (hexValue !== '') {
        const decimalNumber = parseInt(hexValue, 16);
        document.getElementById('decimalInput').value = decimalNumber;
        if (document.getElementById('binaryInput')) { document.getElementById('binaryInput').value = decimalNumber.toString(2); };
        if (document.getElementById('octalInput')) { document.getElementById('octalInput').value = decimalNumber.toString(8); };
    } else {
        resetFields();
    }
}

function resetFields() {
    if (document.getElementById('binaryInput')) { document.getElementById('binaryInput').value = ''; };
    if (document.getElementById('octalInput')) { document.getElementById('octalInput').value = ''; };
    if (document.getElementById('hexInput')) { document.getElementById('hexInput').value = ''; };
    document.getElementById('decimalInput').value = '';
}
