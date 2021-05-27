import React from 'react';
import styled, { css } from 'styled-components';
import LikeIcon from '../../../theme/LikeIcon';
import UserAvatar from '../../../theme/UserAvatar';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import { LoggedPageContext } from '../../wrappers/LoggedPage';
import MoreIcon from './icons/MoreIcon';
import MessageIcon from './icons/MessageIcon';
import DirectIcon from './icons/DirectIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const PostComboStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  width: 100%;
  margin-top: 32px;
  & > img {
    width: 100%;
  }
`;
const HeaderPost = styled.nav`
  padding: 50px 0;
  width: 85%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 35%;
    display: flex;
    justify-content: space-evenly;
  }
  & > div * {
    margin-left: 20px;
  }
  & > div > p {
    font-weight: 500;
  }
`;
const IconsPost = styled.nav`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 80px;
  flex-direction: row;
  & > * {
    height: 100%;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
  }
  & > div > button {
    padding: 0;
    width: 32px;
  }
  & > div p {
    font-weight: 500;
  }
`;
const DescriptionPost = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  width: 85%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  & > div {
    position: relative;
  }
  & > div img {
    height: 32px;
    width: 32px;
    border: 2px solid ${({ theme }) => theme.colors.background.main.color};
  }
  & > div img:first-child(1) {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
  }
  & > div img:nth-child(2) {
    z-index: 6;
    top: 0;
    left: -30px;
    position: absolute;
  }
  & > div img:nth-child(3) {
    z-index: 5;
    top: 0;
    left: -15px;
    position: absolute;
  }
  & > p {
    ${breakpointsMedia({
    xs: css`
        width: 50%;
      `,
    md: css`
        width: initial;
      `,
  })}
  }
  & button:disabled {
    padding: 6px 12px;
  }
`;

export default function PostCombo() {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <PostComboStyle>
      <HeaderPost>
        <div>
          <UserAvatar size="medium" />
          <Text tag="p" variant="paragraph1" color="tertiary.main">
            {webLogged.profile.user.username}
          </Text>
        </div>
        <MoreIcon />
      </HeaderPost>
      <img
        src="https://i.ytimg.com/vi/aEtm69mLK6w/hqdefault.jpg"
        alt="post face"
      />
      <IconsPost>
        <div>
          <LikeIcon />
          <Text tag="p" variant="paragraph1" color="tertiary.main">
            5.2k
          </Text>
          <MessageIcon />
          <Text tag="p" variant="paragraph1" color="tertiary.main">
            1.2k
          </Text>
          <DirectIcon />
        </div>
        <BookmarkIcon />
      </IconsPost>
      <DescriptionPost>
        <div>
          <UserAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKybvXmdnFY15zYfKKEHh1DxA0USfX8vw85Eu6f34E1rDIciMTjX5PQsOaa61HIXIzuY&usqp=CAU"
            size="small"
          />
          <UserAvatar
            src="https://ocdn.eu/images/pulscms/Mjc7MDA_/e2340fc4d1c27ba063115973a477ef87.jpeg"
            size="small"
          />
          <UserAvatar
            src="https://extra.globo.com/incoming/24287426-475-b4d/w976h550-PROP/ronaldinho-gaucho-2.jpg"
            size="small"
          />
        </div>
        <Text tag="p" variant="paragraph1" color="tertiary.main">
          So excited to play this new ...
        </Text>
        <Button variant="tertiary.light" disabled>
          <Text tag="span" variant="paragraph1" color="tertiary.main">
            Mais
          </Text>
        </Button>
      </DescriptionPost>
    </PostComboStyle>
  );
}
