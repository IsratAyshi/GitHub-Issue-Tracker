# GitHub Issues Tracker
netlify: https://github-issue-tracker-209398.netlify.app/
---

## Challenges Q&A

### 1️⃣ What is the difference between var, let, and const?

-- Variables declared with var can be reassigned and redeclared because it is function-scoped. On the other hand, let and const are both block-scoped. While let only allows variable reassignment but not redeclaration in the same scope, const does not allow reassignment or redeclaring anywhere once initialized. Also, while all three are hoisted, var is initialized with undefined by default so, can be accessed before declaration. But let and const variables will exist in a temporal dead zone period but will throw error if accessed before declaration.

### 2️⃣ What is the spread operator (...)?

-- Spread operator is used to expand an array, string or object into individual elements or properties. It helps to avoid complex loops or concatenation and simplifies the code, making it more readable.

### 3️⃣ What is the difference between map(), filter(), and forEach()?

-- map() applies a function to each element of an array and returns a new array without modifying the original. In contrast, filter() returns a new array that contains all elements that fullfill a condition passed to it, while forEach() applies a given function for each element in an array but doesn't return anything.

### 4️⃣ What is an arrow function?

-- Arrow functions is a concise way of ES6 to declare a function in JavaScript. It is defined using the => notation, to make the code more compact and readable by removing the function and return keywords. Arrow functions are ideal for callbacks because they dont have their own 'this' but inherit 'this' from its parent scope.

### 5️⃣ What are template literals?

-- Template literals are a JS feature that allow embed expressions and variables dynamically into strings using backticks(``) insted of double or single quotes. They are useful becasue they allow multiline strings and easily include variables and expressions inside them using only ${}.

---

### **API Endpoints:**

### **All Issues:**

- https://phi-lab-server.vercel.app/api/v1/lab/issues

### **Single Issue:**

- https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

### **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
