

const CourseDetail = ({ courseName, totalprice, credittotal, creditremaininghour }) => {


    return (
        <div className="p-4 border-solid border-2 rounded-md w-[312px]  py-7 mt-5">

            <div className="text-blue-500 my-4 border-b-2">
                <h1 className="mb-3 text-lg font-bold">Credit Hour Remaining : {creditremaininghour}</h1>
            </div>

            <div className="border-solid my-4 ">
                <h2 className="text-xl font-bold mb-3">Course Name: {courseName.length} </h2>

                {
                    courseName.map((course) => (
                        <li className="list-decimal list-inside" key={course.id}>{course.title}</li>

                    ))
                }

            </div>

            <div className="border-t-2 border-b-2 py-2">
                <h2 className="text-base font-medium">Total Credit Hour: {credittotal}</h2>
            </div>

            <div className="mt-4">
                <h3 className="text-base font-semibold">Total Price : ${totalprice} USD</h3>
            </div>
        </div>
    );
};

export default CourseDetail;