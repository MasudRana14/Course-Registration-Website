/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import CourseDetail from "../CourseDetail/CourseDetail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Course = () => {

    const [showCourse, setShowcourse] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const [totalprice, setTotalPrice] = useState([0]);
    const [credittotal, setTotalCredit] = useState([0]);
    const [creditremaininghour, setCreditRemaininghour] = useState([0])


    useEffect(() => {
        fetch("./Course.json")
            .then(res => res.json())
            .then(data => setShowcourse(data))
    }, [])


    const handelSelectButton = (course) => {

        let sum = course.price;
        let credit_total = course.credit;
        const remainingHour = 20;

        const onTimeAdd = courseName.find(item => item.id == course.id)

        if (onTimeAdd) {
            return toast('Already Select This Course ', {
                position: "top-center mt-30",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {

            courseName.forEach((item) => {
                sum += item.price;
            });

            courseName.forEach((credit) => {
                credit_total += credit.credit;
            })

            const totoalRemainng = remainingHour - credit_total;
            if (totoalRemainng < 0) {
                return toast.warn('Oops Remaining Hour Is Low!! And Total Credit Hour Not Available', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                   
                });
            }

            setCourseName([...courseName, course]);
            setTotalPrice(sum);
            setTotalCredit(credit_total);
            setCreditRemaininghour(totoalRemainng);
        }

    }



    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 mt-10">Course Registration</h1>

            <div className="flex">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mr-6">

                    {
                        showCourse.map(course => (
                            <div key={course.id} className=" w-[312px] h-[402px] p-4 rounded-lg shadow-2xl">
                                <div>
                                    <img src={course.img} alt="" />
                                </div>
                                <h1 className="text-lg font-semibold py-2">{course.title}</h1>

                                <p><small className="font-normal text-sm">{course.details}</small></p>

                                <div className="flex gap-5 mt-5">
                                    <div>
                                        <p className="text-base font-medium">$ {course.price}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src="https://i.ibb.co/zhrjm71/Frame.jpg" alt="" />
                                        <p className="text-base font-medium">Credit: {course.credit} hr</p>
                                    </div>
                                </div>
                                <div className="text-center bg-sky-400 rounded-md text-white font-semibold text-lg py-1 mt-7 ">
                                    <button onClick={() => handelSelectButton(course)} className="btn">Select</button>
                                    <ToastContainer></ToastContainer>

                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Couese Details  */}

                <div >
                    <CourseDetail
                        courseName={courseName}
                        totalprice={totalprice}
                        credittotal={credittotal}
                        creditremaininghour={creditremaininghour}

                    ></CourseDetail>

                </div>
            </div>

        </div>
    );
};

export default Course;