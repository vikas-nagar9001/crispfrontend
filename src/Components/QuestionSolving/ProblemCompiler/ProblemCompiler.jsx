import React, { useEffect, useState } from 'react';
import '../../../../public/assets/styles/codemirror.css';
import { sendRequest } from '../../../Auth/axiosUtil';
import { fetchUser } from '../../../redux/Slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProblemCompiler = () => {
  const userId = useSelector(state => state.auth.user && state.auth.user._id);
  const question = useSelector(state => state.questions.selectedQuestion);
  const questionId = question && question._id; // Get the questionId from the question object
  const maxscore = question && question.maxscore; // Get the maxscore from the question object
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser()); // Fetch user data
  }, [dispatch]);

  const [code, setCode] = useState(`#include <bits/stdc++.h>
  
  using namespace std;
  
  string ltrim(const string &);
  string rtrim(const string &);
  vector<string> split(const string &);
  
  /*
   * Complete the 'simpleArraySum' function below.
   *
   * The function is expected to return an INTEGER.
   * The function accepts INTEGER_ARRAY ar as parameter.
   */
  
  int simpleArraySum(vector<int> ar) {
  
  }
  
  int main()
  {
      ofstream fout(getenv("OUTPUT_PATH"));
  
      string ar_count_temp;
      getline(cin, ar_count_temp);
  
      int ar_count = stoi(ltrim(rtrim(ar_count_temp)));
  
      string ar_temp_temp;
      getline(cin, ar_temp_temp);
  
      vector<string> ar_temp = split(rtrim(ar_temp_temp));
  
      vector<int> ar(ar_count);
  
      for (int i = 0; i < ar_count; i++) {
          int ar_item = stoi(ar_temp[i]);
  
          ar[i] = ar_item;
      }
  
      int result = simpleArraySum(ar);
  
      fout << result << "\n";
  
      fout.close();
  
      return 0;
  }
  
  string ltrim(const string &str) {
      string s(str);
  
      s.erase(
          s.begin(),
          find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
      );
  
      return s;
  }
  
  string rtrim(const string &str) {
      string s(str);
  
      s.erase(
          find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
          s.end()
      );
  
      return s;
  }
  
  vector<string> split(const string &str) {
      vector<string> tokens;
  
      string::size_type start = 0;
      string::size_type end = 0;
  
      while ((end = str.find(" ", start)) != string::npos) {
          tokens.push_back(str.substr(start, end - start));
  
          start = end + 1;
      }
  
      tokens.push_back(str.substr(start));
  
      return tokens;
  }
  `);

  const [output, setOutput] = useState('');
  const [activeLanguage, setActiveLanguage] = useState('C++');
  const [showOutput, setShowOutput] = useState(false); // State to toggle output container visibility
  const [codeRun, setCodeRun] = useState(false); // State to track whether code has been run or not

  const codeTextareaRef = React.createRef();

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
      case 'Php':
        language = 'php';
        break;
      case 'C#':
        language = 'csharp';
        break;
      case 'Kotlin':
        language = 'kotlin';
        break;
      case 'R':
        language = 'r';
        break;
      case 'Nodejs':
        language = 'nodejs';
        break;
      case 'Ruby':
        language = 'ruby';
        break;
      case 'Bash':
        language = 'bash';
        break;
      case 'Swift':
        language = 'swift';
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
      setShowOutput(true); // Show the output container when output is received
      setCodeRun(true); // Update code run status
    } catch (error) {
      console.error(error);
      setOutput('An error occurred while compiling the code.');
      toast.error('An error occurred while compiling the code.', {
        position: "top-center"
      });
    }
  };

  const handleLanguageChange = (lang) => {
    if (codeRun) {
      // Hide output section if language is changed after running the code
      setShowOutput(false);
      // Reset output and code run status
      setOutput('');
      setCodeRun(false);
    }
    setActiveLanguage(lang);
  };

  const handleCodeChange = (newCode) => {
    if (codeRun) {
      // Hide output section if code is edited after running the code
      setShowOutput(false);
      // Reset output and code run status
      setOutput('');
      setCodeRun(false);
    }
    setCode(newCode);
  };

  const [attempts, setAttemptsCount] = useState(0);
  const cleanedOutput = output.replace(/\n|'|"/g, '');
  const result = question && cleanedOutput === question.outputformat;
  const isCorrect = question && cleanedOutput === question.sampleoutput;

  const submitCode = async () => {
    if (!userId) {
      // If userId is not available, redirect to the signup page
      navigate('/signup');
      return;
    }
    if (!codeRun && !showOutput) {
      // If code has not been run and output section is hidden, show alert
      toast.info('Please run the code first.', {
        position: "top-center"
      });
      return;
    }
    setAttemptsCount(prevCount => prevCount + 1);

    const data = {
      userId,
      code,
      output: cleanedOutput,
      language: activeLanguage,
      attempts,
      questionId,
      maxscore, // Add maxscore to the data object
      result: isCorrect ? 'Right' : 'Wrong',
    };

    try {
      // Send the POST request using the sendRequest function
      await sendRequest('post', 'answer-log/submit', data);
      console.log('Answer log submitted successfully');

      toast.success('Answer submitted successfully', {
        position: "top-center"
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log('Duplicate submission. The answer was not submitted.');
      } else {
        console.log('An error occurred while submitting the answer log.');

        toast.error('An error occurred while submitting the answer');
      }
    }
  }

  return (
    <>
      <ToastContainer />
      {/* Compiler */}
      <div style={{ backgroundColor: '#E7F1FF', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.14)' }} className=' md:w-1/2 w-full h-[600px] bg-white shadow-xl'>
        <nav className='h-20 flex place-items-center justify-between '>
          <select name="Language" className='md:ml-14 ml-7 md:p-3 p-2 md:h-14 h-10 md:w-64 w-32 border-2 border-blue-500 md:rounded-2xl rounded-xl bg-transparent text-blue-600 md:text-xl text-base' onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="">Language</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Php">PHP</option>
            <option value="C#">C#</option>
            <option value="Kotlin">Kotlin</option>
            <option value="R">R</option>
            <option value="Nodejs">Nodejs</option>
            <option value="Ruby">Ruby</option>
            <option value="Bash">Bash</option>
            <option value="Swift">Swift</option>
          </select>
          <div className="self-end flex gap-5 justify-between my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec81a5c48cd501bf8c2fb8f9b5be1d3ad69f9660c4a6521b3238fc7f43f269d7?"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e314bd6e59d192fa6c41dffc124cb6df9c71e942ad0b55bf6e5fd6cd9431790f?"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d13cfeae6ca1855d86299256aa14f8bad956b80e1b25c4d19b8a18875b0bb1b?"
              className="w-6 aspect-square"
            />
          </div>
        </nav>
        <div className='h-[500px] bg-white overflow-x-auto scrollbar '>
          <div style={{ fontFamily: "'Poppins-Medium', sans-serif" }} className="code-container flex-row font-medium font-poppin mt-8 text-xl">
            <div id="lineNumbers" className="flex text-center flex-col pb-1 ml-6 ">
              {/* Line numbers will be added here */}
            </div>
            <div className="code-editor ">
              <textarea ref={codeTextareaRef} className="w-full h-full bg-transparent" value={code} onChange={(e) => handleCodeChange(e.target.value)} />
            </div>
            {showOutput && (
              <div id="outputSection" className="output-container" style={{ maxHeight: '430px', overflowY: 'auto' }}>
                <h2 id='head' className='p-2'>Output</h2>
                <div id="output" className="bg-white border border-gray-300 p-4">{output}</div>
              </div>
            )}

          </div>
        </div>

        {/* buttons  */}
        <div className='mt-[2rem]'>
          <div style={{ justifyContent: 'flex-end' }} className='flex flex-row gap-3' >
            <button className='px-6 py-2 sm:text-xl text-lg rounded-xl border-[1px] border-gray-300 font-medium text-[#052a11] hover:bg-gray-300' onClick={compileCode}>RUN</button>
            <button className='sm:w-44 w-32 py-2 sm:text-xl text-lg rounded-xl mr-4 text-white font-medium bg-[#015ae7] hover:bg-blue-800' onClick={submitCode}>Submit Code</button>
          </div>
        </div>
        {/* buttons  */}
      </div>
      {/* Compiler */}
    </>
  );
}

export default ProblemCompiler;
