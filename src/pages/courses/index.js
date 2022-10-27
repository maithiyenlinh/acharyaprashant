import {useQuery, useQueries} from "react-query";
import {useEffect, useState} from "react";
import axios from "axios";
import signature from '../../images/ic_apsignature_hindi.png';
import {Disclosure} from "@headlessui/react";
import parse from 'html-react-parser';
import {getData} from "../../api";
import {urlCourse, urlFAQ} from "../../constant";
import {conversTime} from "../../utils";
import SubHeading from "../../components/SubHeading";
import FAQ from "./conponent/FAQ";
import RelatedCourses from "./conponent/RelatedCourses";
import MainCourses from "./conponent/MainCourses";
import Sticky from 'react-sticky-el';

const Courses = () => {

    const [courses, setCourses] = useState(null);
    const [mainContent, setMainContent] = useState(null);
    const [relatedContent, setRelatedContent] = useState(null);
    const [faq, setFAQ] = useState(null);
    const [{ data: coursesData }, { data: faqData}] = useQueries([
        {
            queryKey: ['course'],
            queryFn: () => getData(urlCourse),
        },
        {
            queryKey: ['faq'],
            queryFn: () => getData(urlFAQ),
        },
    ]);
    useEffect(() => {
        if (coursesData && coursesData.data) {
            setCourses(coursesData.data?.courses);
            setMainContent(coursesData.data.details);
            setRelatedContent(coursesData.data.relatedContent);
        }
        if (faqData && faqData.data) {
            setFAQ(faqData.data);
        }
    }, [coursesData, faqData]);
    if (mainContent && faq) {
        return (
            <div>
                <div className='hidden px-4 pt-4 tablet:block laptop:px-8'>
                    <div className='flex w-full flex-wrap items-baseline justify-start text-gray-subtitle'>
                        <div className="mr-1 text-sm cursor-pointer hover:text-brand-600 capitalize">home</div>
                        <div className="mr-1 px-1 text-gray-subtitle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11"
                                 className="fill-current">
                                <path fillRule="evenodd" d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"></path>
                            </svg>
                        </div>
                        <div className="mr-1 text-sm font-medium">संतवाणी</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center px-4 py-2 tablet:py-4 tablet:pt-4 laptop:px-8">
                        <div
                            className="-ml-4 cursor-pointer rounded fill-current p-4 text-brand-600 hover:text-brand-400 tablet:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                                <path fillRule="evenodd" d="M7.244 12.249a.888.888 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.888.888 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212Z"></path>
                            </svg>
                        </div>
                        <div className="text-lg font-semibold text-gray-title tablet:text-xl laptop:text-2xl">{mainContent.title}</div>
                    </div>
                    <div className='px-4 laptop:px-8'>
                        <div className='flex flex-col tablet:flex-row tablet:items-start'>
                            <div className='w-full shrink-0 tablet:w-2/5'>
                                <div className='aspect-[16/9] w-full'>
                                    <div className='relative h-full w-full overflow-hidden rounded'>
                                        <img className="h-full w-full object-cover"
                                             src={`${mainContent.thumbnail.domain}/${mainContent.thumbnail.basePath}/${mainContent.thumbnail.qualities[0]}/${mainContent.thumbnail.key}`}
                                             alt="Thumbnail" />
                                        <div
                                            className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
                                        <img className="absolute right-1 bottom-1 object-contain h-[38px] laptop:h-[52px] "
                                             src={signature} alt="AP Name Logo" />
                                    </div>
                                </div>
                                <div className='hidden pt-4 tablet:block'>
                                    <div className='flex flex-col items-center tablet:items-start'>
                                        <div className="pb-3 text-sm font-medium text-gray-title tablet:pb-1">Share this series <span className="invisible tablet:visible">:</span></div>
                                        <div className="flex w-full justify-center space-x-4 tablet:justify-start text-gray-subtitle">
                                            <div><a href="https://wa.me/?text=undefined%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3" data-action="share/whatsapp/share" target="_blank" className='hover:text-orange-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                                                     viewBox="0 0 31 31" className="fill-current">
                                                    <path fillRule="evenodd" d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm.98 4.577a9.708 9.708 0 0 0-8.417 14.5L6.71 24.615l5.1-1.413.292.143a9.708 9.708 0 0 0 13.84-8.745c0-5.284-4.178-9.523-9.462-9.523Zm.026 1.807c4.178 0 7.742 3.256 7.742 7.803 0 4.424-3.564 8.049-7.926 8.11-2.52 0-4.424-1.352-4.424-1.352l-3.01.799.737-2.95c-.083-.131-1.229-1.986-1.229-4.3 0-4.424 3.625-8.11 8.11-8.11Zm-2.944 3.413-.092.002h-.492l-.052.003c-.132.015-.347.09-.562.304-1.352 1.352-.799 3.257.184 4.486.184.245 1.413 2.457 4.055 3.624 1.966.86 2.396.738 2.95.615.675-.062 1.35-.615 1.658-1.167.061-.185.369-.984.123-1.106l-2.15-1.045-.062-.038c-.164-.095-.328-.119-.491.1l-.738.983-.066.043c-.15.092-.272.126-.487.018-.921-.491-2.212-1.044-3.317-2.888-.062-.245.061-.368.184-.491l.553-.86.042-.053c.063-.105.01-.21-.042-.316l-.737-1.782-.047-.111c-.138-.303-.276-.324-.414-.321Z"></path>
                                                </svg>
                                            </a></div>
                                            <div><a className='hover:text-orange-icon' href="http://twitter.com/share?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0Aundefined&amp;hashtags=AcharyaPrashant,courses,wisdom,spirituality" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                                                     viewBox="0 0 31 31" className="fill-current">
                                                    <path fillRule="evenodd" d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm4.223 8.2c-2.17 0-3.93 1.667-3.93 3.724 0 .273.03.54.09.796-3.221-.198-6.078-1.66-8.025-3.865a3.468 3.468 0 0 0-.541 1.86c0 1.31.733 2.457 1.83 3.095a3.974 3.974 0 0 1-1.83-.47v.083c0 1.81 1.398 3.309 3.227 3.583a4.022 4.022 0 0 1-1.873.118c.493 1.464 1.94 2.525 3.684 2.525a8.351 8.351 0 0 1-4.912 1.573c-.32 0-.634-.017-.943-.051a11.5 11.5 0 0 0 6.048 1.696c6.133 0 11.105-4.71 11.105-10.52v-.158l.001-.105v-.242a6.335 6.335 0 0 0 1.913-1.896 6.898 6.898 0 0 1-2.202.572 3.55 3.55 0 0 0 1.673-2.033 6.399 6.399 0 0 1-2.44.898A4.024 4.024 0 0 0 19.722 8.7Z"></path>
                                                </svg>
                                            </a></div>
                                            <div>
                                                <div className='hover:text-orange-icon'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" className="fill-current">
                                                        <path d="M16 .5C7.44.5.5 7.244.5 15.563c0 7.46 5.588 13.64 12.915 14.836V18.705h-3.74v-4.208h3.74v-3.103c0-3.6 2.263-5.562 5.568-5.562 1.583 0 2.944.114 3.339.165V9.76l-2.293.001c-1.797 0-2.143.83-2.143 2.048v2.686h4.288l-.56 4.208h-3.728V30.5c7.668-.907 13.614-7.243 13.614-14.942C31.5 7.244 24.56.5 16 .5Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div><a className='hover:text-orange-icon' href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" className="fill-current">
                                                    <path fillRule="evenodd" d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm-4.868 11.036h-3.59V23.5h3.59V11.536Zm9.93-.335c-1.579 0-2.775.574-3.421 1.46v-1.125h-3.59V23.5h3.59v-6.533c0-1.699.91-2.464 2.225-2.464 1.149 0 2.082.694 2.082 2.177v6.82h3.59v-7.346c0-3.23-2.058-4.953-4.475-4.953ZM8.839 6.175A2.176 2.176 0 0 0 6.684 8.33c0 1.173.981 2.154 2.154 2.154a2.176 2.176 0 0 0 2.153-2.154 2.176 2.176 0 0 0-2.153-2.154Z"></path>
                                                </svg>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col self-stretch pt-4 text-sm tablet:pl-4 tablet:pt-0 laptop:text-lg'>
                                <div className="text-lg font-medium text-gray-title laptop:text-xl">{mainContent?.subtitle}</div>
                                <div className='text-justify text-base text-gray-subtitle tablet:pr-4'>
                                    <div className='hidden tablet:block'>{mainContent.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 laptop:px-8'>
                    <div>
                        <div className='mt-8 text-lg font-medium tablet:mt-12 tablet:text-xl laptop:mt-16 capitalize'>
                            courses ({courses.length})
                        </div>
                        <div className="mt-1 h-[0.5px] w-full bg-gray-separator tablet:mt-2"></div>
                    </div>
                </div>
                <MainCourses courses={courses} />
                <div className='px-4 laptop:px-8'>
                    <div>
                        <div className='mt-8 text-lg font-medium tablet:mt-12 tablet:text-xl laptop:mt-16 capitalize'>
                            other helpful courses
                        </div>
                        <div className="mt-1 h-[0.5px] w-full bg-gray-separator tablet:mt-2"></div>
                    </div>
                </div>
                <RelatedCourses courses={relatedContent} />
                <FAQ faq={faq}/>
            </div>
        )
    }
}

export default Courses;