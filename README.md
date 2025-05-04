# NodeProject
# 🚀 Invoice Manager – Full Stack App Setup Guide

A full-stack invoice management system with:

- **Backend**: NestJS + Prisma + PostgreSQL  
- **Frontend**: React + Vite + Tailwind CSS + Redux + React Query

---

## 📁 Project Structure

```
FullStackNodePrj/
├── server/     → Backend (NestJS + Prisma)
└── client/     → Frontend (React + Vite + Tailwind)
```

---

## 🔧 Prerequisites

- Node.js ≥ 18  
- PostgreSQL installed and running  
- Git + npm or yarn  

---

## ⚙️ 1. Clone the Repository

```bash
git clone <your-repo-url>
cd FullStackNodePrj
```

---

## 🛠️ 2. Backend Setup (`/server`)

### 📍 Go to backend folder:

```bash
cd server
```

### 📦 Install dependencies:

```bash
npm install
```

### 🧪 Create `.env` file:

```bash
touch .env
```

Paste this inside:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/invoicedb"
JWT_SECRET=supersecret123
```

> Replace `<username>`, `<password>`, and `invoicedb` as per your PostgreSQL config.

### 🗃️ Migrate DB & Generate Prisma Client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 🌱 Seed sample data:

```bash
npx prisma db seed
```

### ▶️ Start the backend server:

```bash
npm run start:dev
```

Backend runs at: [http://localhost:3000](http://localhost:3000)

---

## 💻 3. Frontend Setup (`/client`)

### 📍 Move to client folder:

```bash
cd ../client
```

### 📦 Install dependencies:

```bash
npm install
```

### ✅ Run the app:

```bash
npm run dev
```

Frontend runs at: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Sample Credentials (from seeded data)

```bash
Email: demo@example.com
Password: test1234
```

---

## ✅ You’re done!

- Login with seeded credentials
- View invoices
- Click to view invoice details
- Logout securely
