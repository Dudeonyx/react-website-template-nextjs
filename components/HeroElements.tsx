import tw from 'tailwind-styled-components';

import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = tw.div`
h-[800px] z-10 flex justify-center items-center relative`;

export const HeroBgContainer = tw.div`
-z-[45] h-full w-full absolute inset-0
`;

export const HeroVideoBg = tw.video`
h-full w-full object-cover -z-40
`;

export const ArrowForward = tw(MdArrowForward)`
ml-2
text-xl
`;

export const ArrowRight = tw(MdKeyboardArrowRight)`
ml-2
text-xl
`;

export const HeroContent = tw.div`
z-20
text-white
max-w-7xl
absolute
px-2
py-6
flex
items-center
flex-col
`;
export const HeroH1 = tw.h1`
text-white
 text-center
 text-[32px]
 md:text-5xl
 my-4
`;
export const HeroP = tw.p`
text-white
max-w-[600px]
text-center
text-[18px]
md:text-2xl`;
export const HeroBtnWrapper = tw.div`
mt-8 flex items-center flex-col
`;
export const HeroBtn = tw.button`
flex
items-center
p-3
hover:px-4
justify-center
rounded-3xl
bg-green-500
transition-all
hover:bg-white
hover:text-black
hover:transition-shadow
hover:shadow
hover:shadow-slate-200
`;
