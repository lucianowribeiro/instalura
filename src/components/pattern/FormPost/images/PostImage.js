import { Lottie } from '@crello/react-lottie';
import React from 'react';
import styled from 'styled-components';
import LoadingAnimation from '../../../../theme/animations/LoadingAnimation.json';

const PostStyle = styled.figure`
  width: 100%;
  height: 50%;
  text-align: center;
  margin: 0;
  & > img {
    height: 100%;
    width: 100%;
  }
`;
const DefaultStyle = styled.figure`
  background-color: #d5d5d5;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export default function PostImage({ filter, image, setImage }) {
  if (image.have) {
    return (
      <PostStyle>
        {filter.submit ? (
          <img
            className={`filter-${filter.type}`}
            src={image.url}
            alt="post figure"
          />
        ) : (
          <img
            onLoad={() => {
              setImage({
                have: true,
                loading: false,
                ready: true,
                url: image.url,
              });
            }}
            onError={() => {
              setImage({
                have: false,
                loading: false,
                ready: false,
                url: image.url,
              });
            }}
            src={image.url}
            alt="post figure"
          />
        )}
      </PostStyle>
    );
  }
  if ((!image.have && image.loading)) {
    return (
      <DefaultStyle>
        <Lottie
          width="400px"
          height="400px"
          config={{ animationData: LoadingAnimation, loop: true, autoplay: true }}
        />
      </DefaultStyle>
    );
  }
  if (!image.have && !image.loading) {
    return (
      <DefaultStyle>
        <svg
          width="184"
          height="184"
          viewBox="0 0 184 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.3333 30.6666C34.0991 30.6666 30.6666 34.0991 30.6666 38.3333V145.667C30.6666 149.901 34.0991 153.333 38.3333 153.333H145.667C149.901 153.333 153.333 149.901 153.333 145.667V38.3333C153.333 34.0991 149.901 30.6666 145.667 30.6666H38.3333ZM15.3333 38.3333C15.3333 25.6307 25.6307 15.3333 38.3333 15.3333H145.667C158.369 15.3333 168.667 25.6307 168.667 38.3333V145.667C168.667 158.369 158.369 168.667 145.667 168.667H38.3333C25.6307 168.667 15.3333 158.369 15.3333 145.667V38.3333Z"
              fill="#181F22"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.1667 61.3333C63.0496 61.3333 61.3333 63.0496 61.3333 65.1667C61.3333 67.2838 63.0496 69 65.1667 69C67.2838 69 69 67.2838 69 65.1667C69 63.0496 67.2838 61.3333 65.1667 61.3333ZM46 65.1667C46 54.5812 54.5812 46 65.1667 46C75.7521 46 84.3333 54.5812 84.3333 65.1667C84.3333 75.7521 75.7521 84.3333 65.1667 84.3333C54.5812 84.3333 46 75.7521 46 65.1667Z"
              fill="#181F22"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M117.246 71.2455C120.24 68.2515 125.094 68.2515 128.088 71.2455L166.421 109.579C169.415 112.573 169.415 117.427 166.421 120.421C163.427 123.415 158.573 123.415 155.579 120.421L122.667 87.509L43.7546 166.421C40.7605 169.415 35.9063 169.415 32.9123 166.421C29.9182 163.427 29.9182 158.573 32.9123 155.579L117.246 71.2455Z"
              fill="#181F22"
            />
          </g>
        </svg>
      </DefaultStyle>
    );
  }
}
