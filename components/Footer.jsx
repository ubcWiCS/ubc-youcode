import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const FooterContainer = styled.div`
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocial
      facebookLink="https://www.facebook.com/yourpage"
      emailLink="https://www.email.com/yourpage"
      instagramLink="https://www.instagram.com/yourpage"
      linkedinLink="https://www.linkedin.com/yourpage"
      flagLink="https://ubcwics.com/"
      flagImage="/assets/WicsFlag.png"
      rightOffset="350px"
      />
      <FooterSocial
      facebookLink="https://www.facebook.com/yourpage"
      emailLink="https://www.email.com/yourpage"
      instagramLink="https://www.instagram.com/yourpage"
      linkedinLink="https://www.linkedin.com/yourpage"
      flagLink="https://ubcwics.com/"
      flagImage="/assets/WidsFlag.png"
      rightOffset="50px"
      />
    </FooterContainer>
    
  )
}

const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  right: ${(props) => props.rightOffset || '0px'};
  bottom: 150px
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Flag = styled.div`
  width: 70px;
  height: 110px; 
`;


const FooterSocial = ({ facebookLink, emailLink, instagramLink, linkedinLink, flagLink, flagImage, rightOffset }) => {
  return (
    <FooterSocialContainer rightOffset={rightOffset}>
      <SocialGroup>
        {facebookLink && (
          <a href={facebookLink}>
            <Image src="/assets/facebook.png" alt="Facebook" width={70} height={70} />
          </a>
        )}

        {flagLink && flagImage && (
        <a href={flagLink}>
          <Flag>
            <Image src={flagImage} alt="Flag" width={60} height={180} />
          </Flag>
        </a>
      )}

        {emailLink && (
          <a href={emailLink}>
            <Image src="/assets/email.png" alt="Email" width={70} height={70} />
          </a>
        )}
      </SocialGroup>
      <SocialGroup>
        {instagramLink && (
          <a href={instagramLink}>
            <Image src="/assets/insta.png" alt="Instagram" width={70} height={70} />
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink}>
            <Image src="/assets/linkedin.png" alt="LinkedIn" width={70} height={70} />
          </a>
        )}
      </SocialGroup>
    </FooterSocialContainer>
  );
}


export default Footer