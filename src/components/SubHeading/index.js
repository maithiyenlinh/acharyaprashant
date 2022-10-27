import {useEffect, useState, Fragment, useRef} from "react";
import {useQuery} from "react-query";
import {getData} from "../../api";
import {urlTag} from "../../constant";
import {formatData} from "../../utils";
import {Menu, Transition} from "@headlessui/react";
import {useRecoilValue} from "recoil";
import {languageState} from "../../recoil";
import Dropdown from "../DropDown";
import courses from '../../images/ic_courses.png';

const all = {
    'english': "All",
    'hindi': 'सभी',
}

const SubHeading = () => {
    const [parentTags, setParentTags] = useState(null);
    const [childrenTags, setChildrenTags] = useState(null);
    const language = useRecoilValue(languageState);
    const [currentTag, setCurrentTag] = useState(null);
    const [tag, setTag] = useState(all[language.symbol]);
    const { data } = useQuery(['tags'], () => getData(urlTag));
    const [isOpen, setIsOpen] = useState(false);
    const [isMainOpen, setIsMainOpen] = useState(false);
    const refContainer = useRef(null);
    const handleClickOutside = e => {
        if (refContainer.current && !refContainer.current.contains(e.target)) {
            setIsOpen(false);
            setIsMainOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen || isMainOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    }, [isOpen, isMainOpen]);
    useEffect(() => {
        if(data && data.data) {
            const { parent, children } = formatData(data.data);
            setParentTags(parent);
            setChildrenTags(children);
        }
    }, [data]);

    if (parentTags) {
        return (
            <div className='bg-white shadow'>
                <div className='mx-auto max-w-2xl select-none'>
                    <div className='h-12'>
                        <div className='flex h-full items-center justify-between'>
                            <div className='flex cursor-pointer items-center pl-4 laptop:pl-8'>
                               <div><img className="h-6 object-contain" src={courses} alt="content home" /></div>
                                <div className='ml-6 hidden w-[36rem] flex-grow tablet:block'>
                                    <div className='items-center rounded border border-gray-disabled shadow-sm'>
                                        <div className='relative'>
                                            <div className='relative flex w-full flex-row'>
                                                <div ref={refContainer} className='relative flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal'>
                                                    <Menu>
                                                        <Menu.Button onClick={() => setIsMainOpen(!isMainOpen)} className='flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal'>
                                                            <div className='text-xs font-medium text-gray-subtitle'>{tag}</div>
                                                            <div className="px-3 text-slate-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9"
                                                                     height="6" viewBox="0 0 9 6"
                                                                     className="fill-current">
                                                                    <path
                                                                        d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                                                                </svg>
                                                            </div>
                                                        </Menu.Button>
                                                        <Dropdown isOpen={isMainOpen}>
                                                            <Menu.Items className="absolute top-full z-10 mt-2 text-base text-gray-subtitle">
                                                                <div className='flex h-[60vh] min-w-0 items-stretch bg-white shadow-lg'>
                                                                    <div className='flex flex-col overflow-y-auto py-4'>
                                                                        <Menu.Item as='div' className='flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4 hover:rounded hover:bg-slate-100 hover:text-brand-600 laptop:min-w-[270px]'>
                                                                            <div className='whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base'>
                                                                                <button onClick={() => {
                                                                                    setTag(all[language.symbol]);
                                                                                    setIsMainOpen(false);
                                                                                }}>
                                                                                    {all[language.symbol]}
                                                                                </button>
                                                                            </div>
                                                                        </Menu.Item>
                                                                        {
                                                                            parentTags.map((parentTag) => (
                                                                                <Menu.Item
                                                                                    key={parentTag.tagId}
                                                                                    as='div'
                                                                                    className='flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4 hover:rounded hover:bg-slate-100 laptop:min-w-[270px]'
                                                                                    onClick={() => {
                                                                                        setTag(parentTag.name[language.symbol]);
                                                                                        setIsMainOpen(false);
                                                                                    }} onMouseEnter={() => {
                                                                                    if (parentTag.hasChildren) {
                                                                                        setIsOpen(true);
                                                                                        setCurrentTag(parentTag.tagId);
                                                                                    } else {
                                                                                        setIsOpen(false);
                                                                                        setCurrentTag(null);
                                                                                    }
                                                                                }} onMouseLeave={() => setIsOpen(false)}
                                                                                >
                                                                                    {({ active }) => (
                                                                                        <div className='flex items-center justify-between w-full'>
                                                                                            <div className='whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base'>
                                                                                                <span>{parentTag.name[language.symbol]}</span>
                                                                                            </div>
                                                                                            {
                                                                                                parentTag.hasChildren &&
                                                                                                <div>
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        width="7"
                                                                                                        height="11"
                                                                                                        viewBox="0 0 7 11"
                                                                                                        className="fill-current">
                                                                                                        <path
                                                                                                            fillRule="evenodd"
                                                                                                            d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"></path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            }
                                                                                        </div>

                                                                                    )}
                                                                                </Menu.Item>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>

                                                                <Dropdown isOpen={isOpen}>
                                                                    <div className='absolute top-0 left-full z-10 text-base text-gray-subtitle'>
                                                                        <div className='flex h-[60vh] min-w-0 items-stretch  bg-white shadow-lg'>
                                                                            <div className='flex flex-col overflow-y-auto py-4' onMouseEnter={() => setIsOpen(true)}>
                                                                                {
                                                                                    childrenTags[currentTag]?.map((childrenTag) => (
                                                                                        <div key={childrenTag.tagId} onClick={() => {
                                                                                            setTag(childrenTag.name[language.symbol]);
                                                                                            setIsOpen(false);
                                                                                            setIsMainOpen(false);
                                                                                        }}
                                                                                            className='flex min-w-[150px] cursor-pointer flex-row items-center justify-between py-1.5 px-4 hover:rounded hover:bg-slate-100 laptop:min-w-[270px]'
                                                                                        >
                                                                                            <div className='whitespace-nowrap pr-2 text-sm laptop:pr-6 laptop:text-base'>{childrenTag.name[language.symbol]}</div>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/*<div className='absolute h-full top-[-8px] overflow-y-scroll z-20 left-full mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' onMouseEnter={() => setIsOpen(true)}>*/}
                                                                    {/*    {*/}
                                                                    {/*        childrenTags[currentTag]?.map((childrenTag) => (*/}
                                                                    {/*            <button key={childrenTag.tagId} onClick={() => {*/}
                                                                    {/*                setTag(childrenTag.name[language.symbol]);*/}
                                                                    {/*                setIsOpen(false);*/}
                                                                    {/*                setIsMainOpen(false);*/}
                                                                    {/*            }}>*/}
                                                                    {/*                <span>{childrenTag.name[language.symbol]}</span>*/}
                                                                    {/*            </button>*/}
                                                                    {/*        ))*/}
                                                                    {/*    }*/}
                                                                    {/*</div>*/}
                                                                </Dropdown>
                                                            </Menu.Items>
                                                        </Dropdown>
                                                    </Menu>
                                                </div>
                                                <input type="search" className="h-9 w-full border-0 text-gray-title caret-brand-600 focus:ring-0" placeholder=" Search for courses" />
                                                <button
                                                    className="items-end rounded-r bg-primary-neutral fill-current py-1 px-2 text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
                                                         viewBox="0 0 17 16">
                                                        <path fillRule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-8'>
                                <div className="whitespace-nowrap py-4 text-sm">
                                    <div className="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-solid btn-sm bg-orange-300 px-2 capitalize text-white leading-[1.8]">login</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SubHeading;