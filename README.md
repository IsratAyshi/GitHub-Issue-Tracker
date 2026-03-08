# GitHub Issues Tracker

---

## Challenges Q&A

### 1️⃣ What is the difference between var, let, and const?

-- Variables declared with var can be reassigned and redeclared because it is function-scoped. On the other hand, let and const are both block-scoped. While let only allows variable reassignment but not redeclaration in the same scope, const does not allow reassignment or redeclaring anywhere once initialized. Also, while all three are hoisted, var is initialized with undefined by default so, can be accessed before declaration. But let and const variables will exist in a temporal dead zone period but will throw error if accessed before declaration.

### 2️⃣ What is the spread operator (...)?

-- 

### 3️⃣ What is the difference between map(), filter(), and forEach()?

-- 

### 4️⃣ What is an arrow function?

-- 

### 5️⃣ What are template literals?

--

---

### **API Endpoints:**

### **All Issues:**

- https://phi-lab-server.vercel.app/api/v1/lab/issues

### **Single Issue:**

- https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

### **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications