document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const marla = parseFloat(document.getElementById('marla').value);
    const squareFeet = marla * 272; // 1 Marla = 272 square feet in charsadda
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${marla} Marla is equal to ${squareFeet} Square Feet.`;
});
