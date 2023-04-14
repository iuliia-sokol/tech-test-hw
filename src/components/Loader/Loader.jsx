import { LoaderOverlay, LoaderWrapper, PicWrapper } from './Loader.styled';

import message from '../../images/message-min.png';
import like from '../../images/like-min.png';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrapper>
        <PicWrapper>
          <img src={message} alt="message" loading="lazy" />
          <img src={like} alt="like" loading="lazy" />
        </PicWrapper>
      </LoaderWrapper>
    </LoaderOverlay>
  );
};
