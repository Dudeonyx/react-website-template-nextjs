import tw from 'tailwind-styled-components';
import { HiMenu } from 'react-icons/hi';

export const Nav = tw.nav`
h-20 
bg-black
sticky 
z-[12]
flex
items-center
justify-center
top-0`;

export const NavContainer = tw.div`
h-20 max-w-6xl flex justify-between items-center w-full px-8
`;

export function Logo({ children }: { children: string }) {
  return (
    <div>
      <p className="text-white text-2xl font-bold">
        <a className="cursor-pointer hover:shadow-sm shadow-white">{children}</a>
      </p>
    </div>
  );
}

export const NavLinksContainer = tw.ul`
hidden md:flex justify-between items-center h-full w-full max-w-md
`;

export const NavLink = tw.li`
text-white
flex
items-center
justify-center
text-xl
px-3
first:cursor-pointer
h-full
hover:border-y-2
border-b-green-500
border-t-transparent
rounded-b-sm
`;

export const SignInButtonContainer = tw.div`
hidden md:block text-black text-xl
`;

export const SignInButton = tw.button`
px-5 py-2 rounded-3xl bg-green-500 transition-all hover:bg-white
`;

export const SideBarMenuContainer = tw.div`
h-full
flex
md:hidden
justify-center
items-center
`;

export const SideBarMenu = tw(HiMenu)`

text-white
cursor-pointer
text-4xl
`;
