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
                <SubHeading />
                <div>
                    <h1>{mainContent.title}</h1>
                    <div className='flex'>
                        <div className='aspect-[16/9] w-full basis-1/2'>
                            <div className='relative h-full w-full overflow-hidden rounded'>
                                <img className="h-full w-full object-cover"
                                     src={`${mainContent.thumbnail.domain}/${mainContent.thumbnail.basePath}/${mainContent.thumbnail.qualities[0]}/${mainContent.thumbnail.key}`}
                                     alt="Thumbnail" />
                            </div>
                            {/*<div*/}
                            {/*    className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>*/}
                            {/*<img className="absolute right-1 bottom-1 object-contain logo-height-lg svelte-cz7db6"*/}
                            {/*     src={signature} alt="AP Name Logo" />*/}
                        </div>
                        <div className='basis-1/2'>
                            <h2>{mainContent?.subtitle}</h2>
                            <p>{mainContent.description}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-y-4'>
                    {
                        courses.map((course) => (
                            <div key={course.id} className='basis-1/4'>
                                <p>{course.id}</p>
                                <h3>{course.title}</h3>
                                <p>{course.subtitle}</p>
                                <p>{conversTime(course.courseHours)}</p>
                                <p><span>Contribution:</span> <span>{course.amount}</span></p>
                                <p>{course.language}</p>
                            </div>
                        ))
                    }
                </div>
                <h3>other helpful ourses</h3>
                <div className='flex flex-wrap'>
                    {
                        relatedContent.map((content) => (
                            <div key={content.id} className='flex'>
                                <div className='basis-1/2'>
                                    <div className='relative h-full w-full overflow-hidden rounded'>
                                        <img className="h-full w-full object-cover"
                                             src={`${content.thumbnail.domain}/${content.thumbnail.basePath}/${content.thumbnail.qualities[0]}/${content.thumbnail.key}`}
                                             alt="Thumbnail" />
                                    </div>
                                    {/*<div*/}
                                    {/*    className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>*/}
                                    {/*<img className="absolute right-1 bottom-1 object-contain logo-height-lg svelte-cz7db6"*/}
                                    {/*     src={signature} alt="AP Name Logo" />*/}
                                </div>
                                <div className='basis-1/2'>
                                    <h2>{content?.title}</h2>
                                    <p>{content.subtitle}</p>
                                    {
                                        content.contentType === "CourseSeries" && <p><span>{content.coursesCount}</span> {content.coursesCount > 1 ? "courses" : "course"}</p>
                                    }
                                    {
                                        content.contentType === "Course" && <>
                                            <p>{conversTime(content.courseHours)}</p>
                                            <p><span>Contribution:</span> <span>{content.amount}</span></p>
                                            <p>{content.language}</p>
                                        </>
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className='flex'>
                    <div className='basis-1/3'></div>
                    <div className='basis-2/3'>
                        {
                            faq.map((item, index) => (
                                <Disclosure as="div" key={index}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button>
                                                <span>{item.question}</span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel>
                                                {parse(item.answer)}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;