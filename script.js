
        function convertFromDecimal() {
            const decimalValue = document.getElementById('decimalInput').value;

            if (decimalValue !== '') {
                const decimalNumber = parseInt(decimalValue);
                document.getElementById('binaryInput').value = decimalNumber.toString(2);
                document.getElementById('octalInput').value = decimalNumber.toString(8); 
                document.getElementById('hexInput').value = decimalNumber.toString(16); 
            } else {
                resetFields();
            }
        }

        function convertFromBinary() {
            const binaryValue = document.getElementById('binaryInput').value;

            if (binaryValue !== '') {
                const decimalNumber = parseInt(binaryValue, 2);
                document.getElementById('decimalInput').value = decimalNumber;
                document.getElementById('octalInput').value = decimalNumber.toString(8); // Oktális
                document.getElementById('hexInput').value = decimalNumber.toString(16); // Hexadecimális
            } else {
                resetFields();
            }
        }

        function convertFromOctal() {
            const octalValue = document.getElementById('octalInput').value;

            if (octalValue !== '' && /^[0-7]+$/.test(octalValue)) { // Ellenőrizzük, hogy csak 0-7 számjegyek szerepelnek
                const decimalNumber = parseInt(octalValue, 8);
                document.getElementById('decimalInput').value = decimalNumber;
                document.getElementById('binaryInput').value = decimalNumber.toString(2); 
                document.getElementById('hexInput').value = decimalNumber.toString(16); 
            } else {
                resetFields();
            }
        }


        function convertFromHex() {
            const hexValue = document.getElementById('hexInput').value;

            if (hexValue !== '') {
                const decimalNumber = parseInt(hexValue, 16);
                document.getElementById('decimalInput').value = decimalNumber;
                document.getElementById('binaryInput').value = decimalNumber.toString(2);
                document.getElementById('octalInput').value = decimalNumber.toString(8);
            } else {
                resetFields();
            }
        }

        function resetFields() {
            document.getElementById('binaryInput').value = '';
            document.getElementById('octalInput').value = '';
            document.getElementById('decimalInput').value = '';
            document.getElementById('hexInput').value = '';
        }
