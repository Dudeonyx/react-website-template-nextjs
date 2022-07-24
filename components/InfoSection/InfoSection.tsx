import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  BtnWrap,
  TopLine,
} from './InfoSectionElements';

type Props = {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headLine: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
};

const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headLine,
  buttonLabel,
  imgStart,
  img,
  alt,
  description,
  dark,
  primary,
  darkText,
}: Props) => {
  return (
    <>
      <InfoContainer $lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow $imgStart={imgStart}>
            <Column $col={1}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading $lightText={lightText}>{headLine}</Heading>
                <Subtitle $darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    $as={Link}
                    $big={false}
                    $primary={primary}
                    $fontBig={false}
                    $dark={dark}
                    to="home"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column>
            <Column $col={2}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
