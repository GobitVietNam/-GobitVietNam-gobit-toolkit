/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 13:39:24
 * @modify date 2021-04-09 13:39:24
 * @desc [description]
 */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import { ImageProps } from "./types";

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image: React.FC<ImageProps> = ({ src, alt, ...otherProps }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = (imgRef.current as unknown) as HTMLImageElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      });
    }, observerOptions);
    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <Wrapper ref={imgRef} {...otherProps}>
      {isLoaded ? <StyledImage src={src} alt={alt} /> : <Placeholder />}
    </Wrapper>
  );
};

export default Image;
