"use client";
import GradientBox from "@/components/GradinetBox";
// import { CldVideoPlayer } from "next-cloudinary";
// import videoss from '@/components/video/a.mp4';


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col  text-blackish overflow-hidden ">
      <div className="flex w-full h-full  flex-col mt-20  p-2">
        <div className="title w-full text-[98px] pr-4 uppercase font_m font-bold leading-none text-right ">
          <h1>spaces</h1>
          <h1 className="w-full text-right">that</h1>
          <h1>Inspire</h1>
        </div>
        <div className="w-full border-b pb-20 border-gray-400 ">
          <p className="w-[340px] font_m mt-10 pl-4 text-[21px]">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </p>
        </div>
      </div>
      <div className="relative">
        {/* <CldVideoPlayer
          id="video"
          width="1920"
          height="1080"
          muted
          loop
          src={'https://download-video.akamaized.net/v3-1/playback/afdffe2e-c7a3-44d1-9e9e-0b8a3f408cc7/b6334b0b-5fb61b7a?__token__=st=1709287739~exp=1709302139~acl=%2Fv3-1%2Fplayback%2Fafdffe2e-c7a3-44d1-9e9e-0b8a3f408cc7%2Fb6334b0b-5fb61b7a%2A~hmac=6f639a5d9888f31581ab9e8d70706fcc1e3a97e4c3daf313fc7367d98f23281f&r=dXMtd2VzdDE%3D'}
        /> */}
      </div>
      <div className="">
        <GradientBox />
      </div>
    </main>
  );
}
