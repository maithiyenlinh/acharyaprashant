
import logo from '../../images/ic_aplogo.png'
import phone from '../../images/phone.svg';
import {BOOK_PATH, CONTRIBUTE_PATH, COURSE_PATH, HOME_PATH} from "../../constant/route";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Menu, Transition, Listbox} from "@headlessui/react";
import {Fragment} from "react";
import {languageState} from "../../recoil";
import {useRecoilState} from "recoil";
import {Phone, EN, HI} from "../Icon";
import Popup from "../Popup";
import {useQuery} from "react-query";
import {getData} from "../../api";
import {urlTag} from "../../constant";
import {formatData} from "../../utils";

const NAVIGATION = [
    {
        name: 'home',
        url: HOME_PATH,
    },
    {
        name: 'video courses',
        url: COURSE_PATH,
    },
    {
        name: 'his books',
        url: BOOK_PATH,
    },
    {
        name: 'donate',
        url: CONTRIBUTE_PATH,
    },
];

const ICON_LANG = {
    'english': <EN />,
    'hindi': <HI />,
}

const LANGUAGE = [
    {
        name: 'English',
        symbol: 'english',
    },
    {
        name: 'हिन्दी',
        symbol: 'hindi',
    }
];

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [language, setLanguage] = useState(LANGUAGE[0]);
    const [isOpen, setIsOpen] = useState(false);
    const { data } = useQuery(['tags'], () => getData(urlTag));
    const [tags, setTags] = useState(null);
    useEffect(() => {
        if(data && data.data) {
            const { parent } = formatData(data.data);
            setTags(parent);
        }
    }, [data]);
    return (
        <>
            <div className='h-11 bg-orange-400'>
                <div className='mx-auto h-full max-w-2xl select-none text-white flex justify-between items-center'>
                    <div className='flex h-full pl-4 text-sm laptop:pl-8'>
                        <div className='self-center'>
                            <img className='mr-2 h-8 w-8 rounded-full' src={ logo } />
                        </div>
                        <div className='capitalize flex'>
                            {NAVIGATION.map((nav) => (
                                <div
                                    key={nav?.name}
                                    className={`flex cursor-pointer items-center px-4 text-white ${pathname === nav?.url && 'bg-orange-200'}`}
                                    onClick={() => {
                                        navigate(nav?.url);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {nav?.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex h-full content-center items-center justify-center tab:space-x-3 laptop:space-x-4 laptop:pr-8'>
                        <div className='inline-flex cursor-pointer items-center py-4 px-6 tablet:px-0'>
                            <div className='relative'>
                                <Listbox value={language} onChange={setLanguage}>
                                    <Listbox.Button className='flex inline-flex items-center space-x-1 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100'>
                                        {ICON_LANG[language.symbol]}
                                        <div className='pt-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" className="fill-current">
                                                <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                                            </svg>
                                        </div>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Listbox.Options className="flex flex-col items-start rounded-md bg-white py-1.5 absolute z-10 left-1/2 mt-2 -translate-x-1/2 transform whitespace-nowrap rounded-lg shadow-lg">
                                            {
                                                LANGUAGE.map((lang) => (
                                                    <Listbox.Option
                                                        key={lang.name}
                                                        className='uppercase w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 text-brand-600'
                                                        value={lang}
                                                    >
                                                        {({ selected }) => (
                                                            <span className={`${selected ? 'text-orange-300' : 'text-black'}`}>{lang.name}</span>
                                                        )}
                                                    </Listbox.Option>
                                                ))
                                            }
                                        </Listbox.Options>
                                    </Transition>
                                </Listbox>
                            </div>
                        </div>
                        <div className='text-white hover:cursor-pointer'>
                            <Phone />
                        </div>
                        <div className='inline-flex cursor-pointer items-center py-4 pl-6 pr-4 tablet:pl-0' onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 14 12"
                                 className="fill-current">
                                <path fillRule="evenodd" d="M13 10a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h12Zm0-5a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2h12Z"></path>
                            </svg>
                            <div className='hidden pl-2 laptop:block capitalize'>
                                menu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} tags={tags}/>
        </>

    )
}

export default Header;