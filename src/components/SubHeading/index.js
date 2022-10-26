import {useEffect, useState, Fragment, useRef} from "react";
import {useQuery} from "react-query";
import {getData} from "../../api";
import {urlTag} from "../../constant";
import {formatData} from "../../utils";
import {Menu, Transition} from "@headlessui/react";
import {useRecoilValue} from "recoil";
import {languageState} from "../../recoil";
import Dropdown from "../DropDown";

const all = {
    'english': "All",
    'hindi': 'सभी',
}

const SubHeading = () => {
    const [parentTags, setParentTags] = useState(null);
    const [childrenTags, setChildrenTags] = useState(null);
    const language = useRecoilValue(languageState);
    const [currentTag, setCurrentTag] = useState(null);
    const [tag, setTag] = useState(all[language]);
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
            <div ref={refContainer}>
                <Menu>
                    <Menu.Button onClick={() => setIsMainOpen(!isMainOpen)}>
                        {tag}
                    </Menu.Button>
                    <Dropdown isOpen={isMainOpen}>
                        <Menu.Items className="absolute z-10 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item as='div'>
                                <button onClick={() => {
                                    setCurrentTag(all[language]);
                                    setIsMainOpen(false);
                                }}>
                                    {all[language]}
                                </button>
                            </Menu.Item>
                            {
                                parentTags.map((parentTag) => (
                                    <Menu.Item key={parentTag.tagId} as={'div'}>
                                        {({ active }) => (
                                            <button onClick={() => {
                                                setCurrentTag(parentTag.name[language]);
                                                setIsMainOpen(false);
                                            }} onMouseEnter={() => {
                                                if (parentTag.hasChildren) {
                                                    setIsOpen(true);
                                                    setCurrentTag(parentTag.tagId);
                                                } else {
                                                    setIsOpen(false);
                                                    setCurrentTag(null);
                                                }
                                            }} onMouseLeave={() => setIsOpen(false)}>
                                                <span>{parentTag.name[language]}</span>
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))
                            }
                            <Dropdown isOpen={isOpen}>
                                <div className='absolute h-full top-[-8px] overflow-y-scroll z-20 left-full mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' onMouseEnter={() => setIsOpen(true)}>
                                    {
                                        childrenTags[currentTag]?.map((childrenTag) => (
                                            <button key={childrenTag.tagId} onClick={() => {
                                                setTag(childrenTag.name[language]);
                                                setIsOpen(false);
                                                setIsMainOpen(false);
                                            }}>
                                                <span>{childrenTag.name[language]}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </Dropdown>
                        </Menu.Items>
                    </Dropdown>
                </Menu>
            </div>
        );
    }
}

export default SubHeading;