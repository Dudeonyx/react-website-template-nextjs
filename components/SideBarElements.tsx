import tw from 'tailwind-styled-components';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = tw.aside<{ showSideBar: boolean }>`
    ${(props) => (props.showSideBar ? 'flex' : 'hidden')}
    absolute
    h-full
    w-full
    bg-black
    md:hidden
    py-4
    px-4
    flex-col
    justify-between
    items-center
`;

export const CloseIconContainer = tw.div`
    w-full
    flex
    justify-end
    mr-3
`;
export const CloseIcon = tw(FaTimes)`
text-3xl
text-white
cursor-pointer
`;
