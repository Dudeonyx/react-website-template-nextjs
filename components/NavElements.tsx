import tw from 'tailwind-styled-components';
import { HiMenu } from 'react-icons/hi';
import { Link as LinkS } from 'react-scroll';

export const Nav = tw.nav`
h-20 
bg-black
sticky 
z-[12]
flex
items-center
justify-center
-mb-20
top-0`;

export const NavContainer = tw.div`
h-20
max-w-6xl
flex
justify-between
items-center
w-full
px-8
`;

const LogoP = tw.p`text-white text-2xl font-bold`;
const LogoA = tw.a`cursor-pointer hover:shadow-sm shadow-white`;

export function Logo({ children }: { children: string }) {
  return (
    <div>
      <LogoP>
        <LogoA>{children}</LogoA>
      </LogoP>
    </div>
  );
}

export const NavLinksContainer = tw.ul`
hidden
md:flex
justify-between
items-center
h-full
w-full
max-w-md
first:pl-0
last:pr-0

`;

export const NavLinkItem = tw.li`
flex
items-center
justify-center
px-3
h-full
`;

export const NavLink = tw(LinkS)`
flex
text-white
items-center
justify-center
text-xl
first:cursor-pointer
h-full
hover:border-y-2
border-b-green-500
border-t-transparent
rounded-b-sm
`;

export const RedNavLink = tw(NavLinkItem)`
text-red-500
`;

export const SignInButtonContainer = tw.div`
hidden md:block text-black text-xl
`;
// const TG = (props: { gar: number }) => <div>{props.gar}</div>;
export const SignInButton = tw.a`
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
font
text-white
cursor-pointer
text-4xl
`;
