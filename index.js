
withdrawBtn.addEventListener('click', () => {
    withdrawModal.classList.remove('hidden');
});

closeWithdraw.addEventListener('click', () => {
    withdrawModal.classList.add('hidden');
});

confirmWithdraw.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById('withdraw-amount').value);
    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('account-number-input').value;
    const accountName = document.getElementById('account-name').value;

    if (!amount || amount < 1700) {
        alert('Minimum withdrawal amount is ₦1700');
        return;
    }

    if (!bankName || !accountNumber || !accountName) {
        alert('Please fill all bank details');
        return;
    }

    // Simulate withdrawal




    // Simulate withdrawal
    const users = JSON.parse(localStorage.getItem('mutech_users'));
    const username = localStorage.getItem('mutech_logged_in');
    const user = users[username];

    if (amount > user.wallet) {
        alert('Insufficient funds');
        return;
    }

    user.wallet -= amount;
    users[username] = user;
    localStorage.setItem('mutech_users', JSON.stringify(users));

    document.getElementById('withdraw-form').classList.add('hidden');
    document.getElementById('withdraw-success').classList.remove('hidden');
    document.getElementById('withdraw-amount-success').textContent = amount.toLocaleString();
    document.getElementById('withdraw-bank-success').textContent = bankName;
    document.getElementById('withdraw-account-number-success').textContent = accountNumber;
});

closeWithdrawSuccess.addEventListener('click', () => {
    withdrawModal.classList.add('hidden');
    document.getElementById('withdraw-form').classList.remove('hidden');
    document.getElementById('withdraw-success').classList.add('hidden');
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('bank-name').value = '';
    document.getElementById('account-number-input').value = '';
    document.getElementById('account-name').value = '';
});
