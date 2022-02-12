import tw from 'tailwind-styled-components';

interface ButtonProps {
  primary: boolean;
  big: boolean;
  dark: boolean;
  fontBig: boolean;
}

export const Button = tw.button<ButtonProps>`
    rounded-[50px]
    ${({ primary }) => (primary ? 'bg-[#01BF71]' : 'bg-[#010606]')}
    whitespace-nowrap
    ${({ big }) => (big ? 'py-[14px] px-12' : 'py-3 px-[30px]')}
    ${({ dark }) => (dark ? 'text-[#010606]' : 'text-[#fff]')}
    ${({ fontBig }) => (fontBig ? ' text-xl' : ' text-base')}
    border-none
    outline-none
    cursor-pointer
    flex
    justify-center
    items-center
    transition-all
    duration-200
    ${({ primary }) => (primary ? 'hover:bg-white' : 'hover:bg-[#01bf71]')}
`;
