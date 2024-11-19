let rechargeData = JSON.parse(localStorage.getItem('rechargeData')) || []; // Load from local storage

function generateRechargeCode() {
  const network = document.getElementById('network').value.trim();
  const amount = document.getElementById('amount').value;

  if (!network || !amount) {
    alert('Please fill both Network and Amount fields!');
    return;
  }

  const code = Math.floor(100000000000 + Math.random() * 900000000000); // 12-digit number
  document.getElementById('rechargeCode').value = code;

  const pinInput = document.getElementById('pin');
  let ussdPrefix = '';

  switch (network.toLowerCase()) {
    case 'airtel': ussdPrefix = '*311*'; break;
    case 'mtn': ussdPrefix = '*555*'; break;
    case 'glo': ussdPrefix = '*123*'; break;
    case '9mobile': ussdPrefix = '*222*'; break;
    default:
      alert('Invalid network. Use Airtel, MTN, Glo, or 9mobile.');
      return;
  }

  pinInput.value = `${ussdPrefix}${code}#`;
}

function saveRecharge() {
  const network = document.getElementById('network').value;
  const amount = document.getElementById('amount').value;
  const rechargeCode = document.getElementById('rechargeCode').value;
  const pin = document.getElementById('pin').value;

  if (!network || !amount || !rechargeCode) {
    alert('Please fill all fields and generate a recharge code!');
    return;
  }

  const newRecharge = {
    network,
    amount,
    pin,
    rechargeCode,
    status: 'Unused',
    dateCreated: new Date().toLocaleString(),
    dateUsed: '',
  };

  rechargeData.push(newRecharge);
  saveToLocalStorage();
  updateTable();
}

function recharge() {
  const pin = document.getElementById('pin').value.trim();
  const rechargeItem = rechargeData.find(item => item.pin === pin);

  if (rechargeItem && rechargeItem.status === 'Unused') {
    rechargeItem.status = 'Used';
    rechargeItem.dateUsed = new Date().toLocaleString();
    saveToLocalStorage();
    updateTable();
    alert('Recharge successful!');
  } else {
    alert('Voucher is already used by you.');
  }
}

function updateTable() {
  const tableBody = document.getElementById('rechargeTable');
  tableBody.innerHTML = '';

  rechargeData.forEach((item, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.network}</td>
        <td>${item.amount}</td>
        <td>${item.pin || 'N/A'}</td>
        <td>${item.rechargeCode}</td>
        <td class="${item.status === 'Used' ? 'used' : 'unused'}">${item.status}</td>
        <td>${item.dateCreated}</td>
        <td>${item.dateUsed || 'N/A'}</td>
        <td><button onclick="deleteRecharge(${index})">Delete</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function deleteRecharge(index) {
  rechargeData.splice(index, 1);
  saveToLocalStorage();
  updateTable();
}

function saveToLocalStorage() {
  localStorage.setItem('rechargeData', JSON.stringify(rechargeData));
}

// Initial table load
updateTable();
