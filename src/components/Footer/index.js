
import logo from '../../images/ic_aplogo.png';
import googleplay from '../../images/ic_googleplay.png';
import appstore from '../../images/ic_appstore.png'

const info = {
    'live event': ['vedant mahotsav', 'gita course', 'institutional sessions'],
    'wisdom content': ['wisdom courses', 'his book', 'ap circle'],
    'more': ['about achrya prashant', 'shar shar upanishad', 'media and public interaction', 'talk with achrya prashant'],
}

const Footer = () => {

    return (
        <div className='bg-slate-900 px-4 pb-7 tablet:px-0 tablet:pt-10 capitalize'>
            <div className='text-md flex w-full flex-col space-y-5 px-4 pt-8 tablet:flex-row tablet:justify-center tablet:space-x-4 tablet:space-y-0 tablet:pt-0 laptop:space-x-16'>
                {
                    Object.keys(info)?.map((field) => (
                        <div key={field}>
                            <div className='mb-[13px] font-semibold text-slate-100 uppercase'>{field}</div>
                            {
                                info[field].map((item) =>  <div key={item} className='mb-[10px] text-slate-300 hover:cursor-pointer hover:text-brand-700'>{item}</div>)
                            }
                        </div>
                    ) )
                }
                <div>
                    <div className='mb-[13px] font-semibold text-slate-100 uppercase'>social media</div>
                    <div className='mb-6 flex flex-col '>
                        <div className='mb-[10px] text-slate-300'>for english</div>
                        <div className="flex space-x-2">
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.youtube.com/c/AcharyaPrashant" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15"
                                     className="fill-current">
                                    <path
                                        d="M10.54-.001h.047l.365.002c.696.004 2.1.02 3.548.072l.512.02c1.535.066 3.032.177 3.705.365.899.247 1.608.97 1.85 1.888.407 1.514.432 4.512.433 5.078v.255c-.007.706-.056 3.531-.432 4.992a2.658 2.658 0 0 1-1.851 1.888c-1.42.381-6.516.433-7.88.44l-.183.001h-.491c-1.36-.008-6.446-.062-7.88-.459a2.659 2.659 0 0 1-1.851-1.888C.069 11.262.01 8.579 0 7.75v-.5c.01-.825.068-3.498.43-4.904C.675 1.43 1.402.687 2.283.44c.71-.19 2.34-.299 3.961-.36l.51-.018C8.11.018 9.393.005 10.048 0l.364-.002h.049ZM8.467 4.844a.448.448 0 0 0-.062.227v4.857a.448.448 0 0 0 .676.387l4.133-2.429a.448.448 0 0 0 0-.773L9.082 4.684a.448.448 0 0 0-.614.16Z"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://twitter.com/Prashant_Advait" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15"
                                     className="fill-current">
                                    <path fillRule="evenodd"
                                          d="M2.671 9.124a4.06 4.06 0 0 0 1.873-.118c-1.829-.274-3.227-1.774-3.227-3.583V5.34a3.974 3.974 0 0 0 1.83.47c-1.097-.637-1.83-1.785-1.83-3.094 0-.68.197-1.316.541-1.86C3.805 3.06 6.662 4.522 9.882 4.72a3.549 3.549 0 0 1-.09-.796C9.792 1.867 11.552.2 13.723.2c1.135 0 2.157.455 2.874 1.183a6.399 6.399 0 0 0 2.44-.898 3.55 3.55 0 0 1-1.672 2.033 6.898 6.898 0 0 0 2.202-.572 6.335 6.335 0 0 1-1.913 1.896v.082l-.001.424c0 5.81-4.972 10.519-11.105 10.519A11.5 11.5 0 0 1 .5 13.17c.31.034.624.051.943.051a8.35 8.35 0 0 0 4.912-1.573c-1.744 0-3.191-1.06-3.684-2.525Z"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.facebook.com/AdvaitAcharyaPrashant" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15"
                                     className="fill-current">
                                    <path
                                        d="M2.365 14.939V7.828H0V5.269h2.365V3.382C2.365 1.193 3.797 0 5.888 0 6.889 0 7.75.07 8 .1v2.29H6.55c-1.137 0-1.356.505-1.356 1.246v1.633h2.712l-.353 2.559h-2.36V15"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.instagram.com/acharya_prashant_paf/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                     className="fill-current">
                                    <path fillRule="evenodd"
                                          d="M7.993 0h.219l.56.002c.936.004 1.23.016 1.82.043.8.036 1.344.163 1.821.348.5.189.954.484 1.329.866.382.374.677.828.865 1.328.185.477.312 1.023.349 1.821.031.696.042.98.044 2.381v1.423a54.45 54.45 0 0 1-.021 1.825l-.007.176-.016.38c-.037.798-.163 1.343-.349 1.82a3.835 3.835 0 0 1-2.193 2.194c-.478.186-1.023.312-1.821.349l-.38.016-.265.01c-.386.012-.825.017-1.736.018H6.789a58.968 58.968 0 0 1-1.736-.018l-.265-.01-.38-.016c-.798-.037-1.344-.163-1.82-.349a3.675 3.675 0 0 1-1.33-.865 3.676 3.676 0 0 1-.864-1.328c-.186-.478-.312-1.023-.349-1.821a35.056 35.056 0 0 1-.043-1.82L0 8.211V6.789l.002-.56c.004-.936.016-1.23.043-1.821.036-.798.163-1.344.348-1.82.189-.501.484-.955.866-1.33A3.676 3.676 0 0 1 2.587.395C3.064.208 3.61.08 4.407.044 5 .019 5.294.007 6.23.003L6.789 0h.219ZM7.5 1.351h-.25l-.646.001a38.38 38.38 0 0 0-2.134.043c-.73.033-1.128.155-1.392.258-.326.12-.62.312-.863.561a2.32 2.32 0 0 0-.56.863c-.104.264-.226.661-.26 1.393-.029.653-.04.928-.042 2.134v1.793a38.33 38.33 0 0 0 .043 2.134c.033.732.155 1.129.258 1.393.12.326.312.62.561.863.242.249.537.44.863.56.264.103.661.226 1.392.259l.461.02.173.006c.32.01.674.014 1.318.016l.38.001H8.58a55.05 55.05 0 0 0 1.318-.017l.172-.006.461-.02c.732-.033 1.129-.156 1.393-.258a2.484 2.484 0 0 0 1.423-1.424c.103-.264.225-.661.259-1.393.03-.653.04-.928.043-2.134V6.603a51.957 51.957 0 0 0-.018-1.5l-.006-.172c-.005-.144-.012-.29-.02-.461-.033-.732-.155-1.129-.258-1.393a2.322 2.322 0 0 0-.56-.863 2.326 2.326 0 0 0-.863-.56c-.264-.103-.661-.226-1.393-.259-.653-.03-.929-.04-2.134-.043H7.5Zm0 2.298a3.852 3.852 0 1 1 0 7.703 3.852 3.852 0 0 1 0-7.703ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.004-2.404a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://en.wikipedia.org/wiki/Acharya_Prashant" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15"
                                     className="fill-current">
                                    <path
                                        d="M20 .517a.221.221 0 0 1-.221.222h-.618a.554.554 0 0 0-.513.347L13.008 15l-2.84-6.411L7.13 15 1.314 1.08a.554.554 0 0 0-.51-.34H.22C.099.74 0 .64 0 .516V0h5.025L5.01.523a.221.221 0 0 1-.22.217h-.841a.446.446 0 0 0-.412.61l4.082 10.387 2.065-4.5-2.61-6.158A.554.554 0 0 0 6.565.74h-.406c-.122 0-.22-.1-.22-.222V0h3.773v.517a.221.221 0 0 1-.221.222.446.446 0 0 0-.408.622l1.542 3.612L12.2 1.364a.446.446 0 0 0-.406-.625h-.59a.222.222 0 0 1-.221-.222V0h3.952v.517a.221.221 0 0 1-.22.222h-.658a.554.554 0 0 0-.502.321l-2.433 5.232 2.271 5.367 3.974-10.315a.446.446 0 0 0-.414-.605h-.982a.222.222 0 0 1-.221-.222V0H20v.517Z"></path>
                                </svg>
                            </a></div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div className='mb-[10px] text-slate-300'>for hindi</div>
                        <div className="flex space-x-2">
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.youtube.com/c/AcharyaPrashant" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15"
                                     className="fill-current">
                                    <path
                                        d="M10.54-.001h.047l.365.002c.696.004 2.1.02 3.548.072l.512.02c1.535.066 3.032.177 3.705.365.899.247 1.608.97 1.85 1.888.407 1.514.432 4.512.433 5.078v.255c-.007.706-.056 3.531-.432 4.992a2.658 2.658 0 0 1-1.851 1.888c-1.42.381-6.516.433-7.88.44l-.183.001h-.491c-1.36-.008-6.446-.062-7.88-.459a2.659 2.659 0 0 1-1.851-1.888C.069 11.262.01 8.579 0 7.75v-.5c.01-.825.068-3.498.43-4.904C.675 1.43 1.402.687 2.283.44c.71-.19 2.34-.299 3.961-.36l.51-.018C8.11.018 9.393.005 10.048 0l.364-.002h.049ZM8.467 4.844a.448.448 0 0 0-.062.227v4.857a.448.448 0 0 0 .676.387l4.133-2.429a.448.448 0 0 0 0-.773L9.082 4.684a.448.448 0 0 0-.614.16Z"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://twitter.com/Prashant_Advait" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15"
                                     className="fill-current">
                                    <path fillRule="evenodd"
                                          d="M2.671 9.124a4.06 4.06 0 0 0 1.873-.118c-1.829-.274-3.227-1.774-3.227-3.583V5.34a3.974 3.974 0 0 0 1.83.47c-1.097-.637-1.83-1.785-1.83-3.094 0-.68.197-1.316.541-1.86C3.805 3.06 6.662 4.522 9.882 4.72a3.549 3.549 0 0 1-.09-.796C9.792 1.867 11.552.2 13.723.2c1.135 0 2.157.455 2.874 1.183a6.399 6.399 0 0 0 2.44-.898 3.55 3.55 0 0 1-1.672 2.033 6.898 6.898 0 0 0 2.202-.572 6.335 6.335 0 0 1-1.913 1.896v.082l-.001.424c0 5.81-4.972 10.519-11.105 10.519A11.5 11.5 0 0 1 .5 13.17c.31.034.624.051.943.051a8.35 8.35 0 0 0 4.912-1.573c-1.744 0-3.191-1.06-3.684-2.525Z"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.facebook.com/AdvaitAcharyaPrashant" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15"
                                     className="fill-current">
                                    <path
                                        d="M2.365 14.939V7.828H0V5.269h2.365V3.382C2.365 1.193 3.797 0 5.888 0 6.889 0 7.75.07 8 .1v2.29H6.55c-1.137 0-1.356.505-1.356 1.246v1.633h2.712l-.353 2.559h-2.36V15"></path>
                                </svg>
                            </a></div>
                            <div className="text-slate-300 hover:text-brand-700"><a
                                href="https://www.instagram.com/acharya_prashant_paf/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                     className="fill-current">
                                    <path fillRule="evenodd"
                                          d="M7.993 0h.219l.56.002c.936.004 1.23.016 1.82.043.8.036 1.344.163 1.821.348.5.189.954.484 1.329.866.382.374.677.828.865 1.328.185.477.312 1.023.349 1.821.031.696.042.98.044 2.381v1.423a54.45 54.45 0 0 1-.021 1.825l-.007.176-.016.38c-.037.798-.163 1.343-.349 1.82a3.835 3.835 0 0 1-2.193 2.194c-.478.186-1.023.312-1.821.349l-.38.016-.265.01c-.386.012-.825.017-1.736.018H6.789a58.968 58.968 0 0 1-1.736-.018l-.265-.01-.38-.016c-.798-.037-1.344-.163-1.82-.349a3.675 3.675 0 0 1-1.33-.865 3.676 3.676 0 0 1-.864-1.328c-.186-.478-.312-1.023-.349-1.821a35.056 35.056 0 0 1-.043-1.82L0 8.211V6.789l.002-.56c.004-.936.016-1.23.043-1.821.036-.798.163-1.344.348-1.82.189-.501.484-.955.866-1.33A3.676 3.676 0 0 1 2.587.395C3.064.208 3.61.08 4.407.044 5 .019 5.294.007 6.23.003L6.789 0h.219ZM7.5 1.351h-.25l-.646.001a38.38 38.38 0 0 0-2.134.043c-.73.033-1.128.155-1.392.258-.326.12-.62.312-.863.561a2.32 2.32 0 0 0-.56.863c-.104.264-.226.661-.26 1.393-.029.653-.04.928-.042 2.134v1.793a38.33 38.33 0 0 0 .043 2.134c.033.732.155 1.129.258 1.393.12.326.312.62.561.863.242.249.537.44.863.56.264.103.661.226 1.392.259l.461.02.173.006c.32.01.674.014 1.318.016l.38.001H8.58a55.05 55.05 0 0 0 1.318-.017l.172-.006.461-.02c.732-.033 1.129-.156 1.393-.258a2.484 2.484 0 0 0 1.423-1.424c.103-.264.225-.661.259-1.393.03-.653.04-.928.043-2.134V6.603a51.957 51.957 0 0 0-.018-1.5l-.006-.172c-.005-.144-.012-.29-.02-.461-.033-.732-.155-1.129-.258-1.393a2.322 2.322 0 0 0-.56-.863 2.326 2.326 0 0 0-.863-.56c-.264-.103-.661-.226-1.393-.259-.653-.03-.929-.04-2.134-.043H7.5Zm0 2.298a3.852 3.852 0 1 1 0 7.703 3.852 3.852 0 0 1 0-7.703ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.004-2.404a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"></path>
                                </svg>
                            </a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-[13px] hidden font-semibold text-slate-100 tablet:block uppercase'>download app</div>
                    <div className='mb-5 hidden items-center tablet:flex'>
                        <img className="mr-2 h-6 w-6" src={logo} alt="Acharya Prashant" />
                        <div className='text-slate-100'>Acharya Prashant</div>
                    </div>
                    <div className='flex tablet:flex-col'>
                        <div className="mr-4 h-8 w-28 tablet:mr-0 tablet:mb-5 tablet:w-[114px]">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks">
                                <img src={googleplay} alt="Get it on Google Play" className="rounded-md border-[1.4px] border-slate-300" />
                            </a>
                        </div>
                        <div className="h-8 w-28 tablet:w-[114px]">
                            <a target="_blank" href="https://apps.apple.com/in/app/acharya-prashant/id1603611866">
                                <img src={appstore} alt="Download on the App Store" className="rounded-md border-[1.4px] border-slate-300" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pt-2 tablet:pt-0'>
                    <div className='mb-[13px] font-semibold text-slate-100 tablet:pb-0 uppercase'>contact us</div>
                    <div className='mb-[10px] flex items-center'>
                        <div className="pr-2 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" className="fill-current">
                                <g fill="none" fillRule="evenodd" stroke="#CBD5E1" strokeLinecap="round"
                                   strokeLinejoin="round"strokeWidth="1.5">
                                    <path d="m1 4 7.89 5.26a2 2 0 0 0 2.22 0L19 4"></path>
                                    <path
                                        d="M3 15h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"></path>
                                </g>
                            </svg>
                        </div>
                        <a href="mailto:support@advait.org.in">
                            <div className="text-slate-300 hover:text-brand-700 normal-case">support@advait.org.in</div>
                        </a>
                    </div>
                    <div className="mb-[13px] flex items-center">
                        <div className="pr-2 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" className="fill-current">
                                <g fill="none">
                                    <path stroke="#CBD5E1" strokeWidth="1.714" d="M8.609 1.51C4.349 1.711.987 5.25 1 9.506a7.932 7.932 0 0 0 .87 3.6L1.105 17.5l4.334-.87a7.977 7.977 0 0 0 3.438.833c4.354.066 7.984-3.383 8.12-7.726.145-4.655-3.705-8.45-8.387-8.228Z"></path>
                                    <path fill="#CBD5E1" d="m12.883 11.213-1.55-.444a.578.578 0 0 0-.572.15l-.378.385a.565.565 0 0 1-.614.13C9.036 11.138 7.494 9.77 7.1 9.085a.562.562 0 0 1 .045-.624l.33-.427a.575.575 0 0 0 .072-.585l-.652-1.471a.579.579 0 0 0-.903-.207c-.432.365-.945.92-1.008 1.534-.11 1.084.356 2.45 2.117 4.089 2.034 1.894 3.663 2.144 4.724 1.888.601-.145 1.082-.728 1.385-1.205a.576.576 0 0 0-.327-.864Z"></path>
                                </g>
                            </svg>
                        </div>
                        <a href="https://wa.me/+919643750710" target="_blank">
                            <div className="text-slate-300 hover:text-brand-700">+91 9650585100</div>
                        </a></div>
                    <div className="mb-5 flex items-center">
                        <div className="pr-2 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" className="fill-current">
                                <path fill="#CBD5E1" d="m15.697 11.323-2.976-.862a1.103 1.103 0 0 0-1.098.292l-.727.747a1.078 1.078 0 0 1-1.179.251c-1.408-.574-4.369-3.228-5.125-4.556a1.1 1.1 0 0 1 .086-1.21l.635-.83c.249-.324.301-.76.137-1.135L4.198 1.166a1.105 1.105 0 0 0-1.733-.4C1.635 1.474.649 2.55.529 3.742c-.211 2.101.683 4.75 4.064 7.932 3.907 3.675 7.035 4.16 9.072 3.663 1.155-.282 2.078-1.413 2.661-2.338a1.122 1.122 0 0 0-.63-1.676Z"></path>
                            </svg>
                        </div>
                        <a href="tel:+919650585100" className="flex">
                            <div className="text-slate-300 hover:text-brand-700">+91 9650585100</div>
                        </a>
                    </div>
                    <div className='flex w-1/2 cursor-pointer items-center justify-center rounded border border-white py-[5px] text-sm text-slate-100 hover:border-brand-700 hover:text-brand-700 tablet:w-10/12'>fill form to connect</div>
                </div>
            </div>
            <div className="mx-auto mt-6 mb-6 h-[0.5px] w-full bg-slate-400 tablet:mt-[62px] tablet:w-2/3"></div>
            <div className='flex-col text-xs tablet:mx-auto tablet:flex tablet:flex-row tablet:justify-center tablet:text-sm'>
                <div className='text-slate-300 tablet:pr-20'>Copyright © 2022 PrashantAdvait Foundation</div>
                <div className='flex space-x-2 pt-2 tablet:pt-0'>
                    <a href="/en/terms-and-conditions" className="cursor-pointer text-slate-300 hover:text-brand-700">Terms &amp; Conditions</a>
                    <div className="text-slate-300">|</div>
                    <a href="/en/privacy-policy" className="cursor-pointer text-slate-300 hover:text-brand-700">Privacy Policy</a>
                </div>
            </div>
            <div className="pb-14"></div>
        </div>
    )
}

export default Footer;