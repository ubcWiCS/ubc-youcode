import React from 'react'
import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterSocial
      direction="row"
      facebookLink="https://www.facebook.com/yourpage"
      emailLink="https://www.email.com/yourpage"
      instagramLink="https://www.instagram.com/yourpage"
      linkedinLink="https://www.linkedin.com/yourpage"
      Logolink="https://ubcwics.com/"
      LogoImage="/assets/WicsLogo.png"
      />
      <Image className= "mx-12" src="/assets/DivingUnicon.png" alt="YoucodeLogo" width={100} height={100} />
      <FooterSocial
      direction="row-reverse"
      facebookLink="https://www.facebook.com/yourpage"
      emailLink="https://www.email.com/yourpage"
      instagramLink="https://www.instagram.com/yourpage"
      linkedinLink="https://www.linkedin.com/yourpage"
      Logolink="https://ubcwics.com/"
      LogoImage="/assets/WidsLogo.png"
      />
    </StyledFooter>
  )
}

const FooterSocialContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: flex-start;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 2rem;
`;

const FooterSocial = ({ direction, facebookLink, emailLink, instagramLink, linkedinLink, Logolink, LogoImage }) => {
  return (
    <FooterSocialContainer direction={direction} >
        {Logolink && LogoImage && (
        <Link href={Logolink}>
            <Image src={LogoImage} alt="Flag" width={100} height={100} />
        </Link>
        )}
        {facebookLink && (
          <Link href={facebookLink}>
            <Image src="/assets/Facebook.png" alt="Facebook" width={100} height={100} />
          </Link>
        )}
        {emailLink && (
          <Link href={emailLink}>
            <Image src="/assets/Mail.png" alt="Mail" width={100} height={100} />
          </Link>
        )}
        {instagramLink && (
          <Link href={instagramLink}>
            <Image src="/assets/Instagram.png" alt="Instagram" width={100} height={100} />
          </Link>
        )}
        {linkedinLink && (
          <Link href={linkedinLink}>
            <Image src="/assets/Linkedin.png" alt="LinkedIn" width={100} height={100} />
          </Link>
        )}
    </FooterSocialContainer>
  );
}

export default Footer