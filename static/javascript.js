document.getElementById('calculateBtn').addEventListener('click', () => {
    const birthDateInput = document.getElementById('birthDate').value;

    if (!birthDateInput) {
        alert("Please select your date of birth.");
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    const { years, months, days } = calculateAge(birthDate, today);

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
});

function calculateAge(birthDate, today) {
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
