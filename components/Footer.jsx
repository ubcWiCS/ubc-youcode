import React from 'react'
import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center; 
  margin-bottom: 1rem;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;


  
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
      <div className="w-4 h-4 md:w-10 md:h-10 w-12 h-12 relative">
        <Image  src="/assets/DivingUnicon.png" alt="YoucodeLogo" fill />
      </div>
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
  
  
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 0rem;

  

  @media (max-width: 767px) {
    /* Styles for screens smaller than 768px (e.g., mobile devices) */
    gap: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* Styles for screens between 768px and 1023px (e.g., tablets) */
    gap: 1.5rem;
  }

`

const FooterSocial = ({ direction, facebookLink, emailLink, instagramLink, linkedinLink, Logolink, LogoImage }) => {
  return (
    <FooterSocialContainer direction={direction} id="contact">
        {Logolink && LogoImage && (
        <Link href={Logolink}>
          <div className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 w-12 h-12 relative  hover:scale-110 transition duration-500">
            <Image src={LogoImage} alt="Flag" fill  />
          </div>
        </Link>
        )}
        {facebookLink && (
          <Link href={facebookLink}>
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 w-12 h-12 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Facebook.png" alt="Facebook" fill/>
            </div>
          </Link>
        )}
        {emailLink && (
          <Link href={emailLink}>
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 w-12 h-12 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Mail.png" alt="Mail" fill />
            </div>
          </Link>
        )}
        {instagramLink && (
          <Link href={instagramLink}>
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 w-12 h-12 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Instagram.png" alt="Instagram" fill />
            </div>
          </Link>
        )}
        {linkedinLink && (
          <Link href={linkedinLink}>
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 w-12 h-12 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Linkedin.png" alt="LinkedIn" fill />
            </div>
          </Link>
        )}
    </FooterSocialContainer>
  );
}

export default Footer