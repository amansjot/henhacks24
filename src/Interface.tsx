import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-github';

declare global {
  interface Window {
    Sk: any;
  }
}

const PythonCompiler: React.FC = () => {
  const [output, setOutput] = useState<string>('');

  const loadSkulptLibrary = () => {
    if (!window.Sk) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/skulpt/0.10.0/skulpt.min.js';
      script.async = true;
      script.onload = () => {
        console.log('Skulpt loaded');
        // Once Skulpt is loaded, execute Python code
        executePythonCode(''); // Pass an empty string initially
      };
      document.body.appendChild(script);
    } else {
      // Skulpt is already loaded, execute Python code
      executePythonCode('');
    }
  };

  const executePythonCode = (code: string) => {
    console.log('x');
    if (window.Sk) {
      // Execute Python code using Skulpt
      setOutput('Running...');
      window.Sk.configure({
        output: (text: string) => setOutput(prevOutput => prevOutput + text + '\n')
      });
      window.Sk.misceval.asyncToPromise(() => window.Sk.importMainWithBody('<stdin>', false, code, true))
        .catch((error: any) => {
          console.error('Error during Python execution:', error);
          setOutput('Error during Python execution:\n' + error.toString());
        });
    } else {
      console.error('Skulpt library not loaded');
    }
  };

  useEffect(() => {
    loadSkulptLibrary();
  }, []);

  const handleCodeChange = (newCode: string) => {
    executePythonCode(newCode); // Call executePythonCode with the updated code
  };

  return (
    <div>
      <h2>Python Compiler</h2>
      <AceEditor
        mode="python"
        theme="github"
        onChange={handleCodeChange} // Pass the code to handleCodeChange
        name="python-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="400px"
      />
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default PythonCompiler;
