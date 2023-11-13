import React from "react";
import ProfileCard from "../components/card/ProfileCard.js";
import ProfileData from "../data/ProfileData";

export default function Profile(props) {
  return (
    <div style={{ alignItems: "center" }}>
      <h1 style={{ textAlign: "center", color: "white" }} className="profile-title">
        Profile
      </h1>
      {ProfileData.map((profile, index) => (
        <ProfileCard
          key={index}
          nama={profile.nama}
          nim={profile.nim}
          imageSrc={profile.imageSrc}
        />
      ))}
    </div>
  );
}