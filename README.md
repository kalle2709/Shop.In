**React Dependencies MUI for styling**
1. npx create-react-app my-app --template typescript
2. cd my-app
3. npm install @mui/material @emotion/react @emotion/styled
4. npm install @mui/icons-material
5. npm install react-router-dom @types/react-router-dom
6. npm install @reduxjs/toolkit react-redux
7. npm install @types/react-redux

**Repo setup**
1. First install git.
2. Then open the command prompt and navigate to the existing code folder and then initialize the git repository using "git init".
3. Add the remote repository to newly created repo using command prompt and the command "git remote add origin ".
4. Add all the files using "git add." to staging or using vs code.
5. Commit using git commit -m "message".
6. push the changes "git push -u origin master".

**Shopping Website with Folder STructure**
Layout for a shopping website with the following pages
1. Within src whe have a Components folder created
2. Within components folder we have all our pages
3. Login Page
4. Home Page
5. Shpping Page
6. Bag or cart page
7. About us page
8. Contact page
9. Header
10. Footer

**Hooks**
A Hook is a special function that lets you **“hook into”** React features.They enable us to **reuse** stateful logic across components without changing the component hierarchy.
1.  **UseState**: 
   This is a hook that allows us to add state to a functional component.It lets us add local state to React function components.
  1. We **declare** a **state variable** and pass a **parameter** which is the **initial state**.
  2. It **returns** a pair of values: the **current state** and a **function that updates it.**
  3. React will **remember** its **current value between re-renders**, and provide the **most recent one to our function**.
  4. If we want to **update** the **current** state, we can call **setState**.
  5. **const[state, setState] = useState(initial state)**
  6. When we want to **display** the current state/value, we use **{current state/value}**
  7. The representation of useState is **array destructuring** -- allows you to unpack values from arrays or properties from objects into distinct variables
   Example:
   const numbers = [1, 2, 3, 4, 5];
   const [first, second] = numbers;

  console.log(first);  // Output: 1
  console.log(second); // Output: 2
  
   **We can also skip values:**
   const numbers = [1, 2, 3, 4, 5];
   const [first, , third] = numbers;

   console.log(first);  // Output: 1
   console.log(third);  // Output: 3
   

   

   



