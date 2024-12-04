function isGreaterThanTen() {
    const num = document.getElementById("input");
    const inputValue = parseFloat(num.value); 
    if(inputValue>10)
        alert("Value accepted.");
    else
        alert("Please try again with a number greater than 10.");
}