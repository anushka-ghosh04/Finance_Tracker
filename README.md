# 💰 Finance Tracker

A simple and elegant web-based finance tracker application built with Node.js and vanilla JavaScript. Track your income and expenses with a clean, intuitive interface.

![Finance Tracker](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

## ✨ Features

- **Real-time Balance Tracking** - View your current balance at a glance
- **Income & Expense Categorization** - Automatically categorizes transactions as income (positive) or expense (negative)
- **Transaction History** - Complete list of all your financial transactions
- **Add/Delete Transactions** - Easily add new transactions or remove existing ones
- **Persistent Storage** - All data is stored locally in a JSON file
- **Responsive Design** - Clean, modern UI built with custom CSS and Google Fonts (Poppins)
- **RESTful API** - Backend API for managing transactions

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the repository**
   ```bash
   cd Finance_Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

   For development with auto-restart on file changes:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Finance_Tracker/
├── public/
│   ├── index.html      # Main HTML file
│   ├── script.js       # Frontend JavaScript
│   └── style.css       # Styling
├── data.json           # Transaction data storage
├── server.js           # Express server & API
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **body-parser** - Request body parsing middleware
- **cors** - Cross-Origin Resource Sharing middleware
- **fs** - File system operations for data persistence

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with custom properties (CSS variables)
- **Vanilla JavaScript** - Client-side logic
- **Fetch API** - HTTP requests to backend
- **Google Fonts (Poppins)** - Typography

## 📡 API Endpoints

### Get All Transactions
```http
GET /api/transactions
```
Returns an array of all transactions.

**Response:**
```json
[
  {
    "id": 1234567890,
    "text": "Salary",
    "amount": 5000
  },
  {
    "id": 1234567891,
    "text": "Groceries",
    "amount": -150
  }
]
```

### Add Transaction
```http
POST /api/transactions
```

**Request Body:**
```json
{
  "text": "Freelance Work",
  "amount": 500
}
```

**Response:**
```json
{
  "id": 1234567892,
  "text": "Freelance Work",
  "amount": 500
}
```

### Delete Transaction
```http
DELETE /api/transactions/:id
```

**Response:**
```json
{
  "message": "Transaction removed"
}
```

## 💡 Usage

### Adding a Transaction

1. Enter a description in the **Text** field (e.g., "Salary", "Groceries")
2. Enter the amount:
   - **Positive number** for income (e.g., `1000`)
   - **Negative number** for expenses (e.g., `-50`)
3. Click **Add Transaction**

### Deleting a Transaction

- Hover over a transaction in the history list
- Click the **×** button that appears on the left

### Understanding the Display

- **Balance** - Your total balance (income - expenses)
- **Income** - Total of all positive transactions
- **Expense** - Total of all negative transactions (displayed as positive)

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `public/style.css`:

```css
:root {
    --bg-color: #f7f9fc;           /* Background color */
    --container-bg: #ffffff;        /* Container background */
    --primary-color: #5c6bc0;       /* Primary accent color */
    --income-color: #2ecc71;        /* Income color (green) */
    --expense-color: #e74c3c;       /* Expense color (red) */
    --text-color: #333;             /* Text color */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */
}
```

### Changing the Port

Edit the `PORT` constant in `server.js`:

```javascript
const PORT = 3000; // Change to your preferred port
```

## 📊 Data Storage

Transactions are stored in `data.json` in the following format:

```json
[
  {
    "id": 1234567890,
    "text": "Transaction description",
    "amount": 100.50
  }
]
```

- **id** - Unique timestamp-based identifier
- **text** - Transaction description
- **amount** - Transaction amount (positive for income, negative for expense)

## 🔒 Security Notes

> [!WARNING]
> This is a simple demonstration application. For production use, consider:
> - Adding user authentication
> - Implementing input validation and sanitization
> - Using a proper database instead of JSON file storage
> - Adding HTTPS support
> - Implementing rate limiting
> - Adding error logging and monitoring

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, either:
- Stop the application using that port
- Change the PORT in `server.js`

### Transactions Not Saving
- Ensure the application has write permissions in the directory
- Check that `data.json` is not corrupted
- Verify the server is running without errors

### Cannot Connect to Server
- Ensure the server is running (`npm start`)
- Check that you're accessing `http://localhost:3000`
- Verify no firewall is blocking the connection

## 🤝 Contributing

Contributions are welcome! Here are some ideas for improvements:

- Add transaction categories (food, transport, entertainment, etc.)
- Implement date filtering and search functionality
- Add data visualization (charts/graphs)
- Export transactions to CSV/PDF
- Multi-currency support
- Budget planning features
- Recurring transactions

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as a learning project to demonstrate:
- RESTful API design
- Client-server architecture
- CRUD operations
- File-based data persistence
- Modern CSS techniques
- Asynchronous JavaScript

---

**Enjoy tracking your finances! 💸**