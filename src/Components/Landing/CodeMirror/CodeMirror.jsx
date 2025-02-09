import React, { useState, useRef, useEffect } from 'react';
import copy from '/assets/images/codeMirror/copy.svg';
import run from '/assets/images/codeMirror/run.svg';
import playground from '/assets/images/codeMirror/playground.svg';
import { sendRequest } from '../../../Auth/axiosUtil'; // Importing the sendRequest function
import '../../../../public/assets/styles/codemirror.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CodeMirror = () => {
  const [code, setCode] = useState(`#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 10, temp;

    cout << "Before swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    temp = a;
    a = b;
    b = temp;

    cout << "\\nAfter swapping." << endl;
    cout << "a = " << a << ", b = " << b << endl;

    return 0;
}`);
  const [output, setOutput] = useState('');
  const [activeLanguage, setActiveLanguage] = useState('C++');
  const [showOutput, setShowOutput] = useState(false);

  const codeTextareaRef = useRef(null);

  useEffect(() => {
    updateLineNumbers();
    updateEditorSize();
  }, [code]);

  const updateLineNumbers = () => {
    const lines = code.split('\n');
    const lineNumbersDiv = document.getElementById('lineNumbers');
    lineNumbersDiv.innerHTML = lines.map((_, index) => `<div class="line-number">${index + 1}</div>`).join('');
  };

  const updateEditorSize = () => {
    const containerRect = document.getElementById('lineNumbers').getBoundingClientRect();
    codeTextareaRef.current.style.width = `calc(100% - ${containerRect.width}px)`;
    codeTextareaRef.current.style.height = `${containerRect.height}px`;
  };

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
  };

  const handleCopy = () => {
    try {
      codeTextareaRef.current.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      // alert('Code copied to clipboard!');
      toast.success('Code Copid To ClipBoard!', {
        position: "top-center"
      });
    } catch (error) {
      console.error('Error copying code to clipboard:', error);
      toast.error('Error copying code to clipboard:');
    }
  };

  const compileCode = async () => {
    let language = '';
    switch (activeLanguage) {
      case 'C++':
        language = 'c_cpp';
        break;
      case 'Java':
        language = 'java';
        break;
      case 'Python':
        language = 'python';
        break;
      default:
        language = 'c_cpp';
        break;
    }

    try {
      toast.info('Compiling code...', {
        position: "top-center"
      });
      
      const response = await sendRequest('post', '/compile', {
        lang: language,
        code: code,
      });
      setOutput(response.output);
      setShowOutput(true);
    } catch (error) {
      console.error(error);
      setOutput('An error occurred while compiling the code.');
    }
  };


  return (
    <>
     <ToastContainer position="top-right" />
      {/* CodeMirror section start */}
      <section className='mt-10'>
        <div className=" sm:p-14 lg:p-16 xl:p-20 px-4 sm:w-full ">
          <nav  className="bg-[#F6F6F6] sm:p-2 md:p-4 flex justify-between items-center">
            <div>
              <ul className="flex nav-tabs">
                <li>
                  <a className={`${activeLanguage === 'C++' ? ' border-b-2 border-[#015AE7]   md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 bg-white sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1' : 'md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 border-0 bg-[#D5D5D5] sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1 hover:border-b-2 hover:border-[#015AE7]'}`} onClick={() => handleLanguageChange('C++')}>
                    C++
                  </a>
                </li>
                <li>
                  <a className={` ${activeLanguage === 'Java' ? ' border-b-2 border-[#015AE7]   md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 bg-white sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1' : 'md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 border-0 bg-[#D5D5D5] sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1 hover:border-b-2 hover:border-[#015AE7]'}`} onClick={() => handleLanguageChange('Java')}>
                    Java
                  </a>
                </li>
                <li>
                  <a className={` ${activeLanguage === 'Python' ? ' border-b-2 border-[#015AE7]   md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 bg-white sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1' : 'md:text-base lg:text-xl sm:text-sm text-[9px] text-gray-900 border-0 bg-[#D5D5D5] sm:p-1 sm:px-4 md:px-5 lg:px-7 px-1 hover:border-b-2 hover:border-[#015AE7]'}`} onClick={() => handleLanguageChange('Python')}>
                    Python
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button id="copyButton" className="copy-button text-black md:text-base lg:text-xl sm:text-sm text-[7px] border-2 border-gray-200 bg-white  sm:px-3 md:px-5 sm:py-1 px-1 sm:rounded rounded-[2px] sm:mr-1 mr-1 hover:shadow-inner hover:bg-gray-100" onClick={handleCopy}>
                Copy <img className="inline sm:w-6 w-2 h-2 sm:h-5" src={copy} alt="" />
              </button>
              <button className="bg-[#5CB85C] md:text-base lg:text-xl sm:text-sm text-[7px] text-white  sm:px-3 md:px-5 sm:py-1 px-1 sm:rounded rounded-[2px] sm:mr-1 mr-1 hover:shadow-inner hover:bg-green-700" onClick={compileCode}>
                Run <img className="inline sm:w-6 w-2 h-2 sm:h-5" src={run} alt="" />
              </button>
              <button className="bg-[#222222] md:text-base lg:text-xl sm:text-sm text-[7px] text-white bg-brown-700 sm:px-3 md:px-5  sm:py-1 px-1 sm:rounded rounded-[2px]">
                Playground <img className="inline sm:w-6 w-2 h-2 sm:h-5" src={playground} alt="" srcSet="" />
              </button>
            </div>
          </nav>
          <div className="overflow-x-auto sm:h-[23rem] md:h-[24rem] h-44 bg-white">
            <div className="code-container flex-row">
              <div id="lineNumbers" className="bg-[#D5D5D5] sm:mr-[-1.75rem] mr-[-1rem] sm:pr-[1rem] pr-[0.3rem] flex text-center flex-col pb-1 sm:text-base text-[9px]">
                {/* Line numbers will be added here */}
              </div>
              <div className="code-editor">
                <textarea ref={codeTextareaRef} className="w-full sm:h-full h-64 bg-transparent sm:text-base text-[9px]" value={code} onChange={(e) => setCode(e.target.value)} />
              </div>
              {showOutput && (
                <div id="outputSection" className="output-container sm:text-base text-[9px]">
                  <h2 className='p-2'>Output</h2>
                  <div id="output" className="bg-white border border-gray-300  max:h-screen p-4">{output}</div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      {/* CodeMirror section end */}
    </>
  );
};

export default CodeMirror;