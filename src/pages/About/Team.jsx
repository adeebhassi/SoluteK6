import React from 'react'
import Breadcrumb from "../../components/Breadcrumb";
import TeamSection from '../../components/About/MissionVision/Team';
import team1Image from '../../../src/assets/images/team-1.png';
import aboutImage from '../../../src/assets/images/about_img_1.png'
import FooterArea from '../../components/FooterArea';
export default function Team() {
  const breadcrumbLinks = [
      { label: "Home", path: "/" },
      { label: "Team" },
    ];
    const DeKoshurCraftsUSTeam = {
        imageSrc: team1Image,
        teamTitle: "De Koshur Crafts USA Team",
        teamSubtitle: "Bridging Tradition with Innovation in the USA",
        teamMembers: [
          "Susan Scheff (Executive Director)",
          "Michael Adams (E-Commerce Manager)",
          "Jennifer Carter (Retail Operations Manager)",
          "Angela Brown (Trade and Compliance Manager)",
          "Megan Smith (Consignment Coordinator)",
          "Rachel Morgan (Exhibition Coordinator)",
          "James Thompson (Subsidiary Development Lead)",
          "Susan Scheff (Franchise Manager)",
          "Emily Davis (Customer Relations Lead)",
          "Rachel Morgan (Events Coordinator)",
          "Roberts Smith (Technology Coordinator)"
        ]
      };
      
      const DeKoshurCraftsIndiaTeam = {
        imageSrc: aboutImage,
        teamTitle: "De Koshur Crafts India Team",
        teamSubtitle: "Crafting Excellence from Kashmir's Heart",
        teamMembers: [
          "Jasif Khan (Executive Director)",
          "Gowhar Dhar (Operations Manager)",
          "Dr Iqbal Khan (Marketing and Partnership Lead)",
          "Ijaz Misgar (Design Lead)",
          "Insha Bashir (Artisan Engagement Specialist)",
          "Masarat Khan (Vendor Partnership Coordinator)",
          "Suhail Ahmad Khan (Logistics and Coordinator)",
          "Sajjad Amin (Technology Coordinator)",
          "Fayaz Khan (Sustainability Lead)",
          "Ruqaya Zargar (Training Manager)"
        ]
      };
      
    return (
      <div>
        <Breadcrumb title="Team" links={breadcrumbLinks} />
        <TeamSection
        imageSrc={DeKoshurCraftsUSTeam.imageSrc}
        teamTitle={DeKoshurCraftsUSTeam.teamTitle}
        teamSubtitle={DeKoshurCraftsUSTeam.teamSubtitle}
        teamMembers={DeKoshurCraftsUSTeam.teamMembers}
      />
      <TeamSection
        imageSrc={DeKoshurCraftsIndiaTeam.imageSrc}
        teamTitle={DeKoshurCraftsIndiaTeam.teamTitle}
        teamSubtitle={DeKoshurCraftsIndiaTeam.teamSubtitle}
        teamMembers={DeKoshurCraftsIndiaTeam.teamMembers}
      />
      <FooterArea/>
      </div>

    );
}