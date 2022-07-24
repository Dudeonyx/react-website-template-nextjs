import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const ServicesContainer = tw.div`
flex
flex-col
justify-center
items-center
min-h-screen
bg-black
    
`;

export const ServicesH1 = tw.h1`
text-4xl
font-bold
text-white
mb-6
`;
export const ServicesWrapper = tw.div`
flex
flex-col
sm:flex-row
sm:items-stretch
items-center
max-w-full
md:max-w-3xl
xl:max-w-4xl

justify-center
px-4
sm:-ml-2
-mt-2
sm:mt-0

`;

export const ServicesCard = tw.div`
bg-white
sm:ml-2
mt-2
sm:mt-0
rounded-3xl
sm:w-[33%]
w-full
p-4
flex
flex-col

`;

export const ServicesIcon = tw.img`

h-40
mb-3
`;

export const ServicesH2 = tw.h2`
font-bold
text-center
mb-3

`;

export const ServicesP = tw.p`
text-center
`;
