import signature from "../../../images/ic_apsignature_hindi.png";
import {conversTime} from "../../../utils";
import PropTypes from "prop-types";

const Thumbnail = ({ link }) => {
    return (
        <div className="relative h-full w-full overflow-hidden rounded">
            <img className="h-full w-full object-cover" src={link} alt="Thumbnail" />
            <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
            <img className="absolute right-1 bottom-1 object-contain h-[31px] tablet:h-[26px]" src={signature} alt="AP Name Logo" />
        </div>
    )
}

Thumbnail.propTypes = {
    link: PropTypes.string,
}

const ThumbnailWrapper = ({ link }) => {
    return (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div className="absolute inset-0 mx-2 border border-t border-white">
                <Thumbnail link={link}/>
            </div>
            <div className="absolute inset-0 top-1 mx-1 border border-t border-white">
                <Thumbnail link={link}/>
            </div>
            <div className="absolute inset-0 top-2 border border-t border-white">
                <Thumbnail link={link}/>
            </div>
        </div>
    )
}

ThumbnailWrapper.propTypes = {
    link: PropTypes.string,
}

const RelatedCourses = ({ courses }) => {
    return (
        <div className='grid grid-cols-1 tablet:grid-cols-2 tablet:gap-y-4 laptop:gap-x-8 laptop:px-4 desk:grid-cols-3'>
            {
                courses.map((content) => (
                    <div key={content.id} className='group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow'>
                        {
                            content.contentType === "CourseSeries"
                                ? <div className='flex flex-row items-start'>
                                    <div className='flex w-1/3 flex-shrink-0 flex-col items-start space-y-1'>
                                        <div className='w-full'>
                                            <ThumbnailWrapper link={`${content.thumbnail.domain}/${content.thumbnail.basePath}/${content.thumbnail.qualities[0]}/${content.thumbnail.key}`}/>
                                        </div>
                                        <div className="rounded py-px px-1.5 text-xs text-slate-700 bg-green-background capitalize">series</div>
                                    </div>
                                    <div className='ml-4 flex flex-shrink flex-col'>
                                        <div className='text-lg font-medium text-gray-title'>{content?.title}</div>
                                        <div className='text-sm leading-normal text-gray-subtitle laptop:text-base'>{content.subtitle}</div>
                                        <div className='text-sm text-gray-subtitle'>{content.coursesCount} {content.coursesCount > 1 ? "courses" : "course"}</div>
                                    </div>
                                </div>
                                :
                                <div className='flex flex-row items-start space-x-4'>
                                    <div className='w-1/3 flex-shrink-0'>
                                        <Thumbnail link={`${content.thumbnail.domain}/${content.thumbnail.basePath}/${content.thumbnail.qualities[0]}/${content.thumbnail.key}`}/>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <div className='flex w-full flex-col text-left'>
                                            <div>
                                                <div className='text-lg font-medium leading-normal text-gray-title'>{content?.title}</div>
                                                <div className='text-sm leading-normal text-gray-subtitle laptop:text-base'>{content.subtitle}</div>
                                                <div className='pt-1 text-xs text-gray-subtitle laptop:text-sm'>{conversTime(content.courseHours)}</div>
                                                <div className='pt-1 text-xs text-gray-subtitle laptop:text-sm'>
                                                    <span>contribution: ₹</span>
                                                    <span>{content.amount}</span>
                                                </div>
                                            </div>
                                            <div className='mt-2 flex flex-wrap text-xs'>
                                                <div className='mr-1'>
                                                    <div className='rounded py-px px-1.5 text-xs text-slate-700 bg-blue-background capitalize'>{content.language}</div>
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
                                </div>
                        }
                        <div className="pt-2 group-hover:invisible tablet:pr-4">
                            <div className="h-[0.5px] w-full bg-gray-separator"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

RelatedCourses.propTypes = {
    courses: PropTypes.array,
}

export default RelatedCourses;