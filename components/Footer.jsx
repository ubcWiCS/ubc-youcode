import React from 'react'
import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between; 
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
      facebookLink="https://www.facebook.com/ubcwics"
      emailLink="mailto:ubcwics@gmail.com"
      instagramLink="https://www.instagram.com/ubcwics"
      linkedinLink="https://www.linkedin.com/company/ubcwics/"
      Logolink="https://ubcwics.com/"
      LogoImage="/assets/WicsLogo.png"
      />
      <div className="flex flex-row gap-2 sm:gap-5 md:gap-7">
        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 relative">
          <Link href="mailto:ubcyoucode@gmail.com">
            <Image src="/assets/Mail.png" alt="email" fill  />
          </Link>
        </div>
        <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative">
          <Link href="https://www.tiktok.com/@youcode.ubc">
            <Image src="/assets/tiktok.png" alt="tiktok" fill  />
          </Link>
        </div>
        <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative">
          <Image  src="/assets/youCodeIcon.png" alt="youCodeIcon" fill />
        </div>
        <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative">
          <Link href="https://www.linkedin.com/company/youcode-ubc/">
            <Image src="/assets/linkedin.png" alt="linkedin" fill  />
          </Link>
        </div>
        <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative">
          <Link href="https://www.instagram.com/youcode.ubc/">
            <Image src="/assets/Instagram.png" alt="insta" fill  />
          </Link>
        </div>
      </div>
      <FooterSocial
      direction="row-reverse"
      facebookLink="https://www.facebook.com/widsubc/"
      emailLink="mailto:widsubc@gmail.com"
      instagramLink="https://www.instagram.com/widsubc"
      linkedinLink="https://www.linkedin.com/company/widsubc/"
      Logolink="https://ubcyoucode.com/#contact"
      LogoImage="/assets/WidsLogo.png"
      />
    </StyledFooter>
  )
}

const FooterSocialContainer = styled.div`
  display: flex;
  
  
  flex-direction: ${(props) => props.direction || 'row'};
  gap: 2rem;
  justify-content: space-between;

  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 0rem;

  

  @media (max-width: 767px) {
    /* Styles for screens smaller than 768px (e.g., mobile devices) */
    gap: 0.6rem;
    margin-right: 1rem;
  margin-left: 1rem;
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
          <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative  hover:scale-110 transition duration-500">
            <Image src={LogoImage} alt="Flag" fill  />
          </div>
        </Link>
        )}
        {facebookLink && (
          <Link href={facebookLink}>
            <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/facebook.png" alt="Facebook" fill/>
            </div>
          </Link>
        )}
        {emailLink && (
          <Link href={emailLink}>
            <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Mail.png" alt="Mail" fill />
            </div>
          </Link>
        )}
        {instagramLink && (
          <Link href={instagramLink}>
            <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/Instagram.png" alt="Instagram" fill />
            </div>
          </Link>
        )}
        {linkedinLink && (
          <Link href={linkedinLink}>
            <div className="w-3 h-3 sm:w-4 sm:h-4  md:w-6 md:h-6 lg:w-10 lg:h-10 relative  hover:scale-110 transition duration-500">
            <Image src="/assets/linkedin.png" alt="LinkedIn" fill />
            </div>
          </Link>
        )}
    </FooterSocialContainer>
  );
}

export default Footer