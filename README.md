# Smart Code Reviewer

Code Reviewer is a MERN stack application enhanced with AI capabilities to analyze, review, and improve code. It provides real-time feedback, suggests improvements, and highlights potential issues.

## ✨ Features

- AI-powered code analysis and review
- Syntax highlighting using Prism.js
- Real-time code editing with React Simple Code Editor
- AI-generated code suggestions
- Markdown rendering for clean and structured reviews
- Clipboard copy feature for easy sharing

## 🧪 Tech Stack

- **Frontend:** React.js, React Simple Code Editor, Prism.js
- **Backend:** Node.js, Express.js
- **AI Integration:** AI API for code analysis and suggestions
- **Markdown Rendering:** React-Markdown with rehype-highlight for clean and formatted reviews

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/code-reviewer.git
   cd code-reviewer
   ```
2. Install dependencies:
   ```bash
   cd Frontend
   npm install
   cd ../Backend
   npm install
   ```
3. Start the Backend:
   ```bash
   cd Backend
   npm start
   ```
4. Start the Frontend:
   ```bash
   cd ../Frontend
   npm start
   ```
5. Access the app at `http://localhost:3000`

## 🛠️ API Endpoint

- **POST /ai/get-review**: Submit code for AI analysis and receive a detailed review.

