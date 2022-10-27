import {Disclosure, Transition} from "@headlessui/react";
import parse from "html-react-parser";
import PropTypes from "prop-types";


const FAQ = ({ faq }) => {
    return (
        <div className='bg-gradient-to-b from-slate-50 px-4 py-16 tablet:px-4 laptop:px-20'>
            <div className='tablet:flex'>
                <div className='pb-10 tablet:w-1/3 tablet:pb-0'>
                    <div className='text-lg font-semibold text-gray-title'>FAQs</div>
                    <div className='pt-1'>
                        <p>Can’t find the answer you’re looking for? Reach out to our <a target="_blank" className='text-link' href="#"><span>support</span></a> team</p>
                    </div>
                </div>
                <div className='w-full tablet:pl-24'>
                    {
                        faq.map((item, index) => (
                            <>
                                <Disclosure as='div' key={index}>
                                    {
                                        ({ open }) => (
                                            <>
                                                <Disclosure.Button className='flex items-center justify-between tablet:cursor-pointer w-full'>
                                                    <div className='pr-2 font-semibold text-gray-subtitle'>{item.question}</div>
                                                    <div className='h-3 w-3 text-slate-400 hover:text-slate-800'>
                                                        { open ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" className="fill-current">
                                                                <path fillRule="evenodd" d="M10.207 6.207a1 1 0 0 1-1.414 0L5.5 2.914 2.207 6.207A1 1 0 0 1 .793 4.793l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z"></path>
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" className="fill-current">
                                                                <path fillRule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                            </svg>
                                                        }
                                                    </div>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter="transition-max-height ease-in-out duration-1000 overflow-hidden"
                                                    enterFrom="max-h-0"
                                                    enterTo="max-h-[1000px]"
                                                    leave="transition-max-height ease-in-out duration-1000 overflow-hidden"
                                                    leaveFrom="max-h-[1000px]"
                                                    leaveTo="max-h-0"
                                                >
                                                    <Disclosure.Panel className='w-full'>
                                                        <div className='tablet:text-md pt-1 pr-4 leading-normal text-gray-subtitle tablet:pr-8'>
                                                            {parse(item.answer)}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )
                                    }
                                </Disclosure>
                                {index !== faq.length - 1 && <div className="my-4 h-[0.5px] justify-start bg-gray-separator"></div>}
                            </>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

FAQ.propTypes = {
    faq: PropTypes.array,
}

export default FAQ