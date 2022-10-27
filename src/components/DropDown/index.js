import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen, children }) => {
    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
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
