import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const profiles = [
  {
    img: '/assets/team/Sandra.jpg',
    name: 'Sandra Radic',
    emoji: '☀️ ',
    color: '#01DACC',
    title: 'Founder & Co-Lead',
    social: "https://www.linkedin.com/in/sandraradic/"
  },
  {
    img: '/assets/team/Arden.jpg',
    name: 'Arden Choi',
    emoji: '🫵 ',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/ardenchoi/"
  },
  {
    img: '/assets/team/Tara.jpg',
    name: 'Tara Ubovic',
    emoji: '🐸',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/tara-ubovic/"
  },
  {
    img: '/assets/team/Moira.jpg',
    name: 'Moira Renata',
    emoji: '🏝️',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/moira-renata/"
  },
  {
    img: '/assets/team/Karan.jpg',
    name: 'Karan Chick',
    emoji: '🦦',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/karan-chick/"
  },
  {
    img: '/assets/team/Katie.jpg',
    name: 'Katie Kathiresan',
    emoji: '✨',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/katiekathiresan/"
  },
  {
    img: '/assets/team/Tanya.jpg',
    name: 'Tanya',
    emoji: '🫧',
    color: '#01DACC',
    title: 'Website Team Lead',
    social: "https://www.linkedin.com/in/tanya-75a03a254/"
  },
  
  {
    img: '/assets/Logo.png',
    name: 'Grace Co',
    emoji: '🤪',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/grace--co/"
  },

  {
    img: '/assets/team/Carina.jpg',
    name: 'Carina Tze',
    emoji: '🫶🏻',
    color: '#01DACC',
    title: 'Workshop + swag committee',
    social: "https://www.linkedin.com/in/carinactze/"
  },
  {
    img: '/assets/team/Hannah.jpg',
    name: 'Hannah Meaney',
    emoji: '🤭',
    color: '#01DACC',
    title: 'Workshop + Social Media',
    social: "https://www.linkedin.com/in/hannahmeaney/"
  },
  {
    img: '/assets/team/Megan.jpg',
    name: '🐳',
    emoji: 'WICS',
    color: '#01DACC',
    title: 'Website Team',
    social: "https://www.linkedin.com/in/hannahmeaney/"
  },
  {
    img: '/assets/team/Sarah.jpg',
    name: 'Sarah Wong',
    emoji: '🥰 ',
    color: '#01DACC',
    title: 'Workshop + Swag ',
    social: "https://www.linkedin.com/in/sarah-ashley-wong/"
  },
  {
    img: '/assets/team/Victoria.jpg',
    name: 'Victoria Farkas',
    emoji: '🥸 ',
    color: '#01DACC',
    title: 'Workshop + Swag',
    social: "https://www.linkedin.com/in/victoria-farkas-617262262/"
  },
  {
    img: '/assets/team/Pantea.jpeg',
    name: 'Pantea Ghoroori',
    emoji: '🦋 ',
    color: '#01DACC',
    title: 'Swag Committee',
    social: "https://www.linkedin.com/in/pantea-ghoroori-4a3a66227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },

  {
    img: '/assets/team/ChohyeonKim.png',
    name: 'Chohyeon Kim',
    emoji: '👻 ',
    color: '#01DACC',
    title: 'Website Team',
    social: "https://www.linkedin.com/in/chohyeon-k-586614230/"
  },
  
  {
    img: '/assets/team/Yeojun-Han.jpg',
    name: 'Yeojun Han',
    emoji: '🧸',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/yeojun/"
  },

  {
    img: '/assets/team/Kaitlin.png',
    name: 'Kaitlin Khu',
    emoji: '😽',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/kaitlinkhu/"
  },

  {
    img: '/assets/team/Selin-Uz.jpeg',
    name: 'Selin Uz',
    emoji: '🕺',
    color: '#01DACC',
    title: 'Website Team',
    social: ""
  },
  {
    img: '/assets/team/zelalem.png',
    name: 'Zelalem Araya',
    emoji: '❣️',
    color: '#01DACC',
    title: 'Workshop',
    social: "https://www.linkedin.com/in/zelalem-araya/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Shannon Aurelia',
    emoji: '🩰',
    color: '#01DACC',
    title: 'Workshop',
    social: "https://www.linkedin.com/in/shannon-aurelia-s/"
  },
  {
    img: '/assets/team/angelique.jpeg',
    name: 'Angelique Clara Hanzell',
    emoji: '🐇',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/angeliqueclara/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Alizah Irfan',
    emoji: '🐤',
    color: '#01DACC',
    title: 'Marketing',
    social: ""
  },
  {
    img: '/assets/team/prajna.png',
    name: 'Prajna Nayak',
    emoji: '🍉',
    color: '#01DACC',
    title: 'Website + Swag',
    social: "https://www.linkedin.com/in/prajna-nayak-807b1a247/"
  },
  {
    img: '/assets/team/olivia.jpeg',
    name: 'Olivia Lam',
    emoji: '🦖',
    color: '#01DACC',
    title: 'Website',
    social: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BywYhXZUiRuSGfAKJulF3aw%3D%3D"
  },
  {
    img: '/assets/team/fatima.jpeg',
    name: 'Fatima Yahya',
    emoji: '👀',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/fatima-yahya-27ba43112/"
  },
  {
    img: '/assets/team/tetiksha.png',
    name: 'Tetiksha Jain',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/tetiksha-jain/"
  },
  {
    img: '/assets/team/iris.jpeg',
    name: 'Iris Caglayan',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Events',
    social: "https://www.linkedin.com/in/iriscaglayan/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Khammy Saychaleun',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Marketing + Website',
    social: "https://www.linkedin.com/in/khammy-saychaleun-26290817b/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Sonja Deng',
    emoji: '🦭',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/sonja-deng-0a5a79289/"
  },


  
  
];


const page = () => {
  return (
    <div className='flex items-center justify-center mt-20 p-4 md:p-20 '>
        <div className=""></div>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {profiles.map((profile) => (
                    <div className=" h-auto max-w-full rounded-lg relative" key={profile.name} style={{ flexShrink: 0 }}>
                    <Link href={profile.social} >
                    <img class="h-auto max-w-full rounded-lg" src={profile.img} alt=""/>
                    </Link>
                    </div>
                ))}

        </div>
    </div>
  )
}

export default page