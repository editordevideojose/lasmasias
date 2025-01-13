function calculateTotal() {
    const nights = document.getElementById('nights').value;
    const total = nights * 100;
    document.getElementById('total').textContent = total;
}

function reserve() {
    window.location.href = 'form.html';
}











