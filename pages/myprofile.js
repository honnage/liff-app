import { useEffect, useState } from "react";
import Head from "next/head";

export default function Myprofile() {
  const [profile, setProfile] = useState({});
  
  useEffect(async () => {
    const litt = (await import("@line/liff")).default;
    await litt.ready;
    const profile = await liff.getProfile();
    setProfile(profile);
  }, [profile.userId]);

  return (
    <section>
      <head>My Profile</head>
      <h1>Profile</h1>
      <div>UserId: {profile.userId}</div>
      <div>Name: {profile.dis}</div>
    </section>
  );
}
