import React from "react";
import Toggle from "./toggle";
import Image from "next/image";
import ghLogo from "@/public/github-mark.svg";
import googleLogo from '@/public/google-mark.svg'

const SettingsMain = () => {
  return (
    <div className="h-full bg-white text-fsblack">
      <div className="ui-container flex flex-col h-full w-full p-8">
        <div className="flex flex-col">
          <p className="text-xl">Neville Brody&apos;s</p>
          <h1 className="text-4xl font-bold">Personal Settings</h1>
        </div>

        <nav>
          <ul className="flex space-x-6 text-xl mt-16">
            <li>My account</li>
            <li className="font-bold">Integration</li>
            <li>Preferences</li>
          </ul>
        </nav>

        <section className="integrations mt-16 space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center">
              <Image src={googleLogo} width={0} className="w-10 h-10 mr-8"/>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Google</p>
                <span>
                  Integrate your Google Workspace ecosystem
                </span>
              </div>
            </div>
            <Toggle />
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center">
              <Image src={ghLogo} width={0} className="w-10 h-10 mr-8"/>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Github</p>
                <span>
                  Built for developers, integrate your Github account to your
                  workflow
                </span>
              </div>
            </div>
            <Toggle />
          </div>

        </section>
      </div>
    </div>
  );
};

export default SettingsMain;
