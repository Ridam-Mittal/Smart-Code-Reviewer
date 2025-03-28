import { useState, useEffect} from 'react'
import { useRef } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'


function App() {
  // const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  const resultref = useRef(null)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  // const copyreview = () =>{
  //   if(review == '') return;
  //   resultref.current?.select(); 
  //   window.navigator.clipboard.writeText(review);
  // }

  const copyreview = () => {
    if (review === '') return; // Ensure there's content to copy
  
    if (resultref.current) {
      navigator.clipboard.writeText(resultref.current.textContent)
        .then(() => alert('Review copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    }
  };
  

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <h2 style={{ marginBottom: "0.5rem" }}>CODE REVIEW</h2>
          <div 
            className="copy"
            style={{
              position: "absolute",
              top: "2.8rem",
              right: "4rem",
              fontSize: "27px", 
              cursor: "pointer"
            }}
            onClick={copyreview}
          >
            <span>&#128203;</span> {/* 📋 Copy Icon */}
          </div >
          <div ref={resultref}>       
            <Markdown
              rehypePlugins={[ rehypeHighlight ]}
            >{review}</Markdown>
          </div>
        </div>
      </main>
    </>
  )
}



export default App
