const checkInInput = document.getElementById('check_in');
const checkInBtn = document.getElementById('check_in_btn')
const checkOutInput = document.getElementById('check_out');
const checkOutBtn = document.getElementById('check_out_btn')


const showPickerTrigger = (input) => {
  try {
    input.showPicker();
  } catch (error) {
    // Fall back to another picker mechanism
  }
}

const removeDesabled = () => {
  checkOutInput.removeAttribute('disabled')
  checkOutBtn.removeAttribute('disabled')
}


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