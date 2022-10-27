
import {Transition} from "@headlessui/react";
import PropTypes from "prop-types";
import {Fragment, useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getData} from "../../api";
import {urlTag} from "../../constant";
import {formatData} from "../../utils";


const nav = ['video courses', 'his books', 'ap circle', 'contact us', 'donate'];
const more = ['prashant advait foundation', 'vedant mahotsav', 'gita course', 'talks with acharya prashant', 'ghar ghar upanishad', 'about achrya prashant', 'media and public interaction']

const Popup = ({ isOpen, setIsOpen, tags }) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <div className='relative z-10' onClick={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-end h-full">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className='flex items-start justify-end h-full'>
                                <div className="m-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-center text-slate-700 opacity-90 transition transition-all duration-150 hover:text-brand-700 hover:opacity-100 hover:shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"
                                         className="fill-current">
                                        <path fillRule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414Z"></path>
                                    </svg>
                                </div>
                                <div className='h-full overflow-y-auto bg-white pt-8 tablet:w-[35vw] laptop:w-[25vw]'>
                                    <div className='flex h-full flex-col justify-between'>
                                        <div className='text-left capitalize'>
                                            <div className='hidden px-6 text-brand-600 hover:text-brand-800 tablet:block'>
                                                <a href='/en/login?page=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3' className='flex items-center text-orange-300'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                                         viewBox="0 0 36 36" fill="none" className="fill-current">
                                                        <path
                                                            d="M18.009 35.5c2.39 0 4.641-.46 6.755-1.378a17.93 17.93 0 0 0 5.584-3.792 17.833 17.833 0 0 0 3.783-5.575c.913-2.108 1.369-4.362 1.369-6.764 0-2.39-.46-4.641-1.378-6.755a18.04 18.04 0 0 0-3.792-5.593 17.603 17.603 0 0 0-5.584-3.783C22.632.953 20.381.5 17.991.5c-2.39 0-4.638.453-6.746 1.36a17.738 17.738 0 0 0-5.584 3.783 17.836 17.836 0 0 0-3.792 5.593C.956 13.35.5 15.601.5 17.991c0 2.402.46 4.656 1.378 6.764A17.96 17.96 0 0 0 5.67 30.33a17.96 17.96 0 0 0 5.575 3.792c2.108.919 4.362 1.378 6.764 1.378Zm-.01-2c-2.15 0-4.162-.4-6.039-1.201a15.575 15.575 0 0 1-4.945-3.33 15.43 15.43 0 0 1-3.323-4.943C2.897 22.151 2.5 20.14 2.5 17.99c0-2.148.397-4.16 1.192-6.036a15.43 15.43 0 0 1 3.323-4.942 15.47 15.47 0 0 1 4.935-3.32c1.87-.795 3.88-1.192 6.03-1.192 2.15 0 4.164.397 6.04 1.192a15.441 15.441 0 0 1 4.945 3.32 15.565 15.565 0 0 1 3.333 4.942c.801 1.876 1.202 3.888 1.202 6.036.013 2.149-.381 4.16-1.183 6.036a15.645 15.645 0 0 1-3.323 4.942 15.432 15.432 0 0 1-4.945 3.33C22.166 33.1 20.15 33.5 18 33.5Zm11.485-4.287-.055-.216c-.312-.84-.984-1.657-2.017-2.45-1.033-.792-2.354-1.444-3.963-1.954-1.61-.51-3.428-.766-5.458-.766-2.018 0-3.828.256-5.431.766-1.603.51-2.921 1.162-3.954 1.954-1.033.793-1.717 1.604-2.054 2.432l-.054.234a15.305 15.305 0 0 0 3.63 2.55 20.744 20.744 0 0 0 4.143 1.602c1.387.367 2.627.55 3.72.55 1.105 0 2.348-.183 3.729-.55a20.922 20.922 0 0 0 4.125-1.594 15.239 15.239 0 0 0 3.639-2.558ZM17.99 20.981c1.105.012 2.099-.264 2.981-.828.883-.565 1.585-1.333 2.108-2.306.522-.973.783-2.072.783-3.297 0-1.152-.26-2.206-.783-3.16a6.284 6.284 0 0 0-2.117-2.298 5.346 5.346 0 0 0-2.972-.864c-1.08 0-2.066.288-2.954.864a6.284 6.284 0 0 0-2.117 2.297c-.522.955-.783 2.009-.783 3.161 0 1.225.264 2.318.792 3.279.529.96 1.231 1.723 2.108 2.288.876.564 1.861.852 2.954.864Z"></path>
                                                    </svg>
                                                    <div className='ml-3 text-sm font-semibold capitalize'>
                                                        <span>login</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className='mt-1 mb-1 flex flex-col px-2 text-sm font-medium text-gray-subtitle tab:px-3'>
                                                {
                                                    nav.map((item) => (
                                                        <a key={item} href='#' className='block rounded-md py-2 px-3 hover:text-slate-900 hover:bg-gray-background'>{item}</a>
                                                    ))
                                                }
                                            </div>
                                            <div className="mx-6 mt-5 mb-3 border-t border-gray-300"></div>
                                            <div className="mb-1 px-5 text-xs font-bold text-gray-subtitle tablet:px-6 uppercase">more</div>
                                            {
                                                more.map((item) => (
                                                    <a key={item} href='#' className='mx-3 block rounded-md py-2 px-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tablet:px-3'>{item}</a>
                                                ))
                                            }
                                            <div className="mx-6 mt-5 mb-3 border-t border-gray-300"></div>
                                            <div className="mb-1 px-5 text-xs font-bold text-gray-subtitle tablet:px-6 uppercase">explore categories</div>
                                            {
                                                tags?.map((tag) => (
                                                    <a key={tag.tagId} href='#' className='mx-3 block rounded-md py-2 px-2 text-sm font-medium text-gray-subtitle hover:bg-gray-background hover:text-slate-900 tablet:px-3'>{tag.name['english']}</a>
                                                ))
                                            }
                                            <div className="mx-6 my-1 border-t border-gray-300"></div>
                                            <div className="px-2 text-sm font-medium text-gray-subtitle tab:px-3">
                                                <a href="#" className="block rounded-md py-2 px-3 hover:bg-gray-background hover:text-slate-900 tab:mb-4">technical support</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Transition.Child>
                    </div>
                </div>
            </div>
        </Transition>
    )
}

Popup.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    setIsOpen: PropTypes.func,
    tags: PropTypes.array,
};

export default Popup;