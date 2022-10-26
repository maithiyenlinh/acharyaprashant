import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen, children }) => {
    return (
        <Transition
            show={isOpen}
            as={Fragment}
            enter="transition-max-height ease-in-out duration-1000 overflow-hidden"
            enterFrom="max-h-0"
            enterTo="max-h-[1000px]"
            leave="transition-max-height ease-in-out duration-1000 overflow-hidden"
            leaveFrom="max-h-[1000px]"
            leaveTo="max-h-0"
        >
            {children}
        </Transition>
    );
};

Dropdown.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
};

export default Dropdown;
