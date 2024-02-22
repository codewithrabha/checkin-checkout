const checkInInput = document.getElementById('check_in');
const checkOutInput = document.getElementById('check_out');

function updateCheckOutMinDate() {
    const checkInDate = new Date(checkInInput.value);
    checkOutInput.min = formatDate(new Date(checkInDate.setDate(checkInDate.getDate() + 1)));
    checkOutInput.disabled = false;
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

checkInInput.addEventListener('input', () => {
    updateCheckOutMinDate();
});

checkOutInput.addEventListener('input', () => {
    checkInInput.max = checkOutInput.value;
});

checkInInput.min = formatDate(new Date());
