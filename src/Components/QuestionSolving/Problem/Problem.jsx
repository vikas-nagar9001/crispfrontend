import { useSelector } from 'react-redux';

const Problem = () => {
    const question = useSelector(state => state.questions.selectedQuestion);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };
    return (
        <>
            {/* Questions */}
            <div style={{ boxShadow: '1px 2px 4px 0px rgba(0, 0, 0, 0.14)' }} className='md:w-1/2 w-full h-[600px] bg-white overflow-x-auto scrollbar'>
                {question && (
                    <div className='m-8 sm:text-base text-base font-normal text-gray-600'>
                        <p>{question.question}</p> <br />
                        <div dangerouslySetInnerHTML={createMarkup(question.example)}></div>
                        <p>
                            <span className='text-black font-medium select-none pointer-events-none inline mx-1'>
                                ar = [1,2,3], 1 + 2 + 3 = 6</span> , so return
                            <span className='text-black font-medium select-none pointer-events-none inline mx-1'>
                                6
                            </span>.
                        </p> <br />

                        <h1 className='text-gray-800 font-semibold' > Function Description </h1> <br />

                        <p>{question.functiondescription}</p> <br />
                        <ul><li className='list-disc ml-4'> ar: an array of integers </li></ul> <br />

                        <p className='text-gray-800 font-semibold'> Input Format</p> <br />
                        <ul >
                            <li className=''>The first line contains an integer,
                                <span className='text-black font-medium select-none pointer-events-none font-serif inline mx-1'>n</span>
                                , denoting the size of the array.</li>
                            <li className=''>The second line contains
                                <span className='text-black font-medium select-none pointer-events-none font-serif inline mx-1'>n</span>
                                space-separated integers representing the array's elements.</li> <br />
                        </ul>

                        <p className='text-gray-800 font-semibold'>Constraints</p> <br />
                        <pre className="select-none pointer-events-none">
                            <code className=' text-black font-serif font-normal'>{question.constraints}</code>
                        </pre> <br />

                        <p className='text-gray-800 font-semibold'> Output Format</p> <br />
                        <p>{question.outputformat}</p> <br />

                        <p className='text-gray-800 font-semibold'>Sample Input</p> <br />
                        <pre className='bg-[#e7eeef] pd-[20px] pl-6 pt-4 pb-4'>
                            <code>6</code> <br />
                            <code>1 2 3 4 10 11</code>
                        </pre>

                        <br />

                        <p className='text-gray-800 font-semibold'>Sample Output</p> <br />
                        <pre className='bg-[#e7eeef] pd-[20px] pl-6 pt-4 pb-4'>
                            <code>{question.sampleoutput}</code>
                        </pre> <br />

                        <p className='text-gray-800 font-semibold'>Explanation</p> <br />
                        <p className=''>{question.explanation}

                            <span className='text-black font-medium select-none pointer-events-none inline '>: 1 + 2 + 3 + 4 + 10 + 11 = 31.</span>
                        </p> <br />

                    </div>
                )}
            </div>
            {/* Questions */}
        </>
    )
}

export default Problem;
