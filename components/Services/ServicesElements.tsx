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
text-5xl
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

justify-center
px-6

`;

export const ServicesCard = tw.div`
bg-white
m-2
rounded-3xl
sm:w-[33%]
w-full
p-4
flex
flex-col

`;

export const ServicesIcon = tw.img`

h-40

`;

export const ServicesH2 = tw.h2`
font-bold
text-center

`;

export const ServicesP = tw.p`
text-center
`;
