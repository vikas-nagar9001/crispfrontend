import { useState } from 'react';
import Problem from '../Components/QuestionSolving/Problem/Problem';
import ProblemCompiler from '../Components/QuestionSolving/ProblemCompiler/ProblemCompiler';
import Solveme from '../Components/Common/SolveMeFirst/Solveme'

const QuestionSolvinPage = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [activeLanguage, setActiveLanguage] = useState('');
    return (
        <>

            <Solveme />

            <section >
                <div className='absolute flex md:flex-nowrap flex-wrap gap-2 inset-0 top-[21.5rem]'>

                    <Problem />
                    <ProblemCompiler code={code}
                        setCode={setCode}
                        output={output}
                        setOutput={setOutput}
                        activeLanguage={activeLanguage}
                        setActiveLanguage={setActiveLanguage}
                    />
                </div>
            </section>
        </>
    )
}

export default QuestionSolvinPage