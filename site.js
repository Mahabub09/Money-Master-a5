function costinputvalue(costId) {
    const costInput = document.getElementById(costId);
    const costInputText = costInput.value;
    const costAmount = parseFloat(costInputText)
    return costAmount;
    console.log(costAmount)
}

document.getElementById("calculate-button").addEventListener('click', function () {
    const foodcost = costinputvalue('food-input');
    const rentcost = costinputvalue('rent-input');
    const clothcost = costinputvalue('cloth-input');


})
