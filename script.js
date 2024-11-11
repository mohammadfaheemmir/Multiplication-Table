document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', function() {
        const number = parseInt(document.getElementById('number-select').value);
        const outputDiv = document.getElementById('table-output');
        let outputHtml = `<h2>Multiplication Table of ${number}</h2>`;

        for (let i = 1; i <= 10; i++) {
            outputHtml += `<p>${number} x ${i} = ${number * i}</p>`;
        }

        outputDiv.innerHTML = outputHtml;
    });
});