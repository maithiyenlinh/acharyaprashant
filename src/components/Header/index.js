
import logo from '../../images/ic_aplogo.png'
import phone from '../../images/phone.svg';
import EN from '../../images/EN.svg';
import HI from '../../images/HI.svg';
import {BOOK_PATH, CONTRIBUTE_PATH, COURSE_PATH, HOME_PATH} from "../../constant/route";
import {useLocation, useNavigate} from "react-router";
import {useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {languageState} from "../../recoil";
import {useRecoilState} from "recoil";

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
    'english': EN,
    'hindi': HI,
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
    const [language, setLanguage] = useRecoilState(languageState);
    return (
        <div className='bg-orange-400'>
            <div className='max-w-screen-2xl mx-auto flex justify-between'>
                <div className='flex'>
                    <div>
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
                <div className='flex'>
                    <div>
                        <Menu>
                            <Menu.Button>
                                <img src={ICON_LANG[language]}/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {
                                        LANGUAGE.map((lang) => (
                                            <Menu.Item key={lang.name}>
                                                { ({active}) => (
                                                    <button onClick={() => setLanguage(lang.symbol)}>{lang.name}</button>
                                                )}
                                            </Menu.Item>
                                        ))
                                    }
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div>
                        <img src={phone} />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header;