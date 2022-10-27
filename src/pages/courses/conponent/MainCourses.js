import PropTypes from "prop-types";
import {conversTime} from "../../../utils";


const MainCourses = ({ courses }) => {
    return (
        <div className='grid grid-cols-1 gap-x-4 tablet:grid-cols-2 tablet:gap-y-4 laptop:grid-cols-3 laptop:gap-x-8 laptop:px-4 desk:grid-cols-4'>
            {
                courses.map((course) => (
                    <div key={course.id} className='group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow'>
                        <div className='flex flex-col space-y-2'>
                            <div className='self-start pb-2'>
                                <div
                                    className='bg-primary-gray h-6 relative flex items-center justify-center rounded text-white px-2 text-center after:w-0 after:content-[""] after:h-0 after:absolute after:inset-y-0 after:right-0 after:border-y-[12px] after:border-y-transparent after:border-r-[5px] after:border-r-white'>
                                    <span>कोर्स {course.id.slice(-1)}</span>
                                    &nbsp;
                                </div>
                            </div>
                            <div className='flex w-full flex-col text-left'>
                                <div>
                                    <div className='text-lg font-medium leading-normal text-gray-title'>{course.title}</div>
                                    <div className='text-sm leading-normal text-gray-subtitle laptop:text-base'>{course.subtitle}</div>
                                    <div className='pt-1 text-xs text-gray-subtitle laptop:text-sm'>{conversTime(course.courseHours)}</div>
                                    <div className='pt-1 text-xs text-gray-subtitle laptop:text-sm capitalize'>
                                        <span>contribution: ₹</span>
                                        <span>{course.amount}</span>
                                    </div>
                                </div>
                                <div className='mt-2 flex flex-wrap text-xs'>
                                    <div className='mr-1'>
                                        <div className='rounded py-px px-1.5 text-xs text-slate-700 bg-blue-background capitalize'>
                                            {course.language}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='inline-flex items-center space-x-3 text-xs font-medium uppercase'>
                                    <div className='cursor-pointer rounded-md text-center transition-colors transition duration-150 text-orange-title leading-[2.5] laptop:leading-[2.3]'>add to cart</div>
                                    <div className="self-stretch py-2">
                                        <div className="h-full w-px bg-gray-separator"></div>
                                    </div>
                                    <div className='cursor-pointer rounded-md text-center transition-colors transition duration-150 text-orange-title leading-[2.5] laptop:leading-[2.3]'>enrol</div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 group-hover:invisible">
                            <div className=" h-[0.5px] w-full bg-gray-separator"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

MainCourses.propTypes = {
    courses: PropTypes.array,
}

export default MainCourses;