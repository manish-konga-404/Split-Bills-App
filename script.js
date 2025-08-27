function splitPay() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tips").value || 0);
    const people = parseInt(document.getElementById("members").value);
    
    if(isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0 ) {
        document.getElementById("result").textContent = "Please enter valid input";
        return;
    }
    const tipCh = (tip/100) *bill;
    const totalBill = bill + tipCh;
    const perPerson = totalBill/people;
    document.getElementById("result").textContent = `Per person pays: ₹${perPerson}/-`;
}