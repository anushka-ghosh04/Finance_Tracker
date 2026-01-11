const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Fetch transactions from API
async function getTransactions() {
    try {
        const res = await fetch('/api/transactions');
        const data = await res.json();

        updateUI(data);
    } catch (err) {
        console.error('Error fetching transactions:', err);
    }
}

// Add transaction
async function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount');
        return;
    }

    const transaction = {
        text: text.value,
        amount: +amount.value
    };

    try {
        const res = await fetch('/api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        });

        if (res.ok) {
            getTransactions(); // Refresh list
            text.value = '';
            amount.value = '';
        }
    } catch (err) {
        console.error('Error adding transaction:', err);
    }
}

// Remove transaction
async function removeTransaction(id) {
    try {
        await fetch(`/api/transactions/${id}`, {
            method: 'DELETE'
        });
        getTransactions(); // Refresh list
    } catch (err) {
        console.error('Error deleting transaction:', err);
    }
}

// Update DOM
function updateUI(transactions) {
    // Clear list
    list.innerHTML = '';

    // Update Balance, Income, Expense
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;

    // Add to list
    transactions.forEach(addTransactionDOM);
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
    )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id
        })">x</button>
    `;

    list.appendChild(item);
}

// Event Listeners
form.addEventListener('submit', addTransaction);

// Init
getTransactions();
