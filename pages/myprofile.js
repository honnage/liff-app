import { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'

export default function Myprofile () {
  const [profile, setProfile] = useState({})

  const getProfile = useCallback(async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    const profile = await liff.getProfile()
    setProfile(profile)
  }, [profile.userId]);

  useEffect(() => {
    getProfile();
  },);

 

  return (
    <section>
      <Head>My Profile</Head>
      <h1>Profile</h1>
      <div>UserId: {profile.userId}</div>
      <div>Name: {profile.displayName}</div>
      <div>Status: {profile.statusMessage}</div>
      <div>{profile.pictureUrl}</div>
    </section>
  )
}