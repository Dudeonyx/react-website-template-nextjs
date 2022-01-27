import tw from 'tailwind-styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import React from 'react';

export const SideBarContainer = tw.aside<{ $showSideBar: boolean }>`
${(props) => (props.$showSideBar ? 'flex' : 'invisible')}
transition-all
${(props) => (props.$showSideBar ? ' translate-y-0' : '-translate-y-full')}
fixed
h-full
w-full
bg-black
md:hidden
px-8
flex-col
justify-start
items-center
inset-0
z-50
`;

export const CloseIconContainer = tw.div`
    w-full
    flex
    justify-end
    items-center
    h-20
`;
export const CloseIcon = tw(FaTimes)`
text-3xl
text-white
cursor-pointer
`;
console.log(FaTimes);

export const SideBarLinkContainer = tw.ul`
flex
w-full
flex-col
justify-around
items-center
flex-initial
h-1/2

`;
export const SideBarLinkItem = tw.li`

w-full
flex
justify-center
items-center
text-white
text-2xl
text-center
h-full
`;

export const SideBarLink = tw(LinkS)`
    cursor-pointer
    hover:scale-105
    transition-all
    
`;
// export const SideBarNextLink = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithRef<typeof Link>
// >(({ children, ...props }, ref) => (
//   <Link {...props} passHref>
//     <SideBarLink ref={ref}>{children}</SideBarLink>
//   </Link>
// ));

// SideBarNextLink.displayName = 'SideBarNextLink';

export const SideBarSignInContainer = tw.div`
    w-full
    flex
    justify-center
    items-center
    justify-self-center
    mb-20
    flex-initial
    h-1/4
`;

export const SideBarSignInButton = tw.button`
px-10
py-4
rounded-[36px]
text-2xl
transition-all
bg-green-500
text-white
hover:bg-white
hover:text-black
hover:shadow-sm
hover:shadow-slate-300
hover:scale-105
`;
