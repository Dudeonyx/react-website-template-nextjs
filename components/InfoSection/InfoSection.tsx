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

type Props = {};

const InfoSection = (props: Props) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column col={1}>
              <TextWrapper>
                <TopLine>Toplines</TopLine>
                <Heading>Headings</Heading>
                <Subtitle>Subtitles</Subtitle>
                <BtnWrap>
                  <Button $as={Link} big={false} primary fontBig={false} dark={false} to="home">
                    Button
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column>
            <Column col={2}>
              <ImgWrap>
                <Img src=""></Img>
              </ImgWrap>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
