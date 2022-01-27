import tw from 'tailwind-styled-components';

interface Props {}

export const HeroContainer = tw.div`
h-[800px] -z-50 flex justify-center items-center`;

export const HeroBgContainer = tw.div`
-z-[45] h-full w-full absolute
`;

export const HeroVideoBg = tw.video`
h-full w-full object-cover -z-40
`;
