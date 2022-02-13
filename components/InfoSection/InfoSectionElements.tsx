import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const InfoContainer = tw.div<{ lightBg?: boolean }>`
text-black
${({ lightBg }) => (lightBg ? 'bg-[#f9f9f9]' : 'bg-[#010606]')}
py-24
md:p-0
`;

export const InfoWrapper = tw.div`
grid
z-10
h-[860px]
w-full
max-w-6xl
mx-auto
px-6
justify-center
`;

export const InfoRow = tw.div<{ imgStart?: boolean }>`
grid
auto-cols-fr
items-center
${({ imgStart }) =>
  imgStart
    ? "md:[--area:'col2_col1'] [--area:'col1'_'col2']"
    : "md:[--area:'col1_col2'] [--area:'col1_col1'_'col2_col2']"}
[grid-template-areas:var(--area)]
`;

export const Column = tw.div`
    mb-4
    py-0
    px-4
    ${({ col }: { col: 1 | 2 }) => (col === 2 ? '[grid-area:col2]' : '[grid-area:col1]')}
`;
// export const Column2 = tw.div`
//     mb-4
//     px-0
//     py-4
//     [grid-area: col2]
// `;

export const TextWrapper = tw.div`
    max-w-[540px]
    pt-0
    pb-[60px]
`;

export const TopLine = tw.div`
text-green-500
text-base
leading-4
font-bold
tracking-[1.4px]
uppercase
mb-4
`;

export const Heading = tw.h1`
mb-6
xs:text-5xl
leading-[1.1]
font-semibold
${({ lightText }: { lightText?: boolean }) => (lightText ? 'text-[#f7f8fa]' : 'text-[#010606]')}
text-[32px]
`;

export const Subtitle = tw.p`
max-w-[440px]
mb-[35px]
text-lg
leading-6
${({ darkText }: { darkText?: boolean }) => (darkText ? 'text-[#010606]' : 'text-white')}
`;
export const BtnWrap = tw.div`
    flex
    justify-start
`;

export const ImgWrap = tw.div`
max-w-[555px]
h-full
`;
export const Img = tw.img`
    w-full
    m-0
    mb-[10px]
    pr-0
`;
