import { useState, useEffect } from 'react';
import { sendRequest } from '../../../Auth/axiosUtil';
import { useSelector } from 'react-redux';
import rightdesign from '/assets/images/preperation/rightdesign.svg';

const WeekCard = () => {
    const userId = useSelector(state => state.auth.user?._id);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let responseData;
                if (userId) {
                    responseData = await sendRequest('get', `/preparationcard/${userId}`);
                } else {
                    responseData = await sendRequest('get', '/preparationcard');
                }
                setData(responseData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No preparation card found.</div>;
    }

    return (
        <>
            {/* weekcard start  */}
            {data.map(data => (
                <div key={data._id} style={{ boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.20)' }} className="mt-10 self-center pt-2 pr-2.5 pb-8 pl-6 max-w-full bg-white rounded-2xl w-[1280px] max-md:pl-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full mt-[1rem]">
                            <img
                                loading="lazy"
                                src={data.image}
                                className="grow mt-7 w-full aspect-[1.02] max-md:mt-2 rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-xl text-blue-700 max-md:mt-6 max-md:max-w-full">
                                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex-auto my-auto">We recommend</div>
                                    <img
                                        loading="lazy"
                                        src={rightdesign}
                                        className="aspect-[1.05] fill-blue-100 w-[84px] z-index-1"
                                    />
                                </div>
                                <div className="flex gap-5 justify-between self-start mt-2 text-green-950 max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex flex-col flex-1">
                                        <div className="font-semibold">{data.title}</div>
                                        <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                                            <div className="grow">Challenges:&nbsp;{data.challenges}</div>
                                            <div className="grow">Mock Tests:&nbsp;{data.mockTests}</div>
                                        </div>
                                    </div>
                                    <div className="grow self-end mt-11 whitespace-nowrap max-md:mt-10">
                                        Attempts:&nbsp;{data.attempts}
                                    </div>
                                </div>
                                <div className="mt-6 mr-3.5 text-green-950 max-md:mr-2.5 max-md:max-w-full">
                                    {data.description}
                                </div>
                                <div className="flex gap-2 justify-between mt-7 mr-4 text-lg whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                                    {data.problemSolvingOptions.map(option => (
                                        <div key={option} className="grow justify-center px-4 py-2.5 bg-indigo-50 rounded-lg">
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* weekcard  */}
        </>
    )
}

export default WeekCard;
