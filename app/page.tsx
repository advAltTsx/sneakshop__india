"use client"

import NavBar from "@/components/Navbar";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Tabs } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  const tabs = [
    {
      title: "Sporty",
      value: "Sports",
      content: (
        <div className="w-full flex items-center justify-center h032 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          
                    <p className=" text-white">Sport Sneakers</p>
                  </div>
      ),
    },
    {
      title: "Runners",
      value: "Running",
      content: (
        <div className="w-full flex items-center justify-center h032 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          

                    <p className=" text-white">Runner Sneakers</p>
                  </div>
      ),
    },
    {
      title: "Casuals",
      value: "Casuals",
      content: (
        <div className="w-full flex items-center justify-center h032 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          
                    <p className=" text-white">Casual Sneakers</p>
                  </div>
      ),
    },
     
    
  ];
  const items = [
    {
      title: "Summer Time Sneakers",
      description: "Sneakers that are worn during summer seasons and with extreme comfort.",
      header: <Skeleton />,
    },
    {
      title: "Winter Time Sneakers",
      description: "Sneakers that are worn during winter seasons and with extreme comfort.",
      header: <Skeleton />,
    },
    
  ];
  const tagline = `Looking for the perfect blend of fashion and functionality? Look no further than our premium sneaker shop, where you'll discover an unparalleled range of stylish and comfortable footwear to suit your every need. From sporty and casual to sleek and trendy, our collection is designed to elevate your everyday style and keep you on the move in total comfort.
`;
  const words = [
    {
      text: "Kick",
    },
    {
      text: "with",
    },
    {
      text: "the",
    },
    {
      text: "Lowkey",
    },
    {
      text: "Rizz.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div data-aos='fade-down' className="h-auto py-24 px-6 w-full rounded-xl flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="mx-auto relative z-10  w-full md:pt-0">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                <TypewriterEffect words={words} />
              </h1>
              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Visit our store today and experience the ultimate in sneaker
                fashion. Your feet deserve the best - and {"we're"} here to make
                sure you step out in style, every time. Elevate your look.
                Elevate your comfort. Elevate your game - only at{" "}
                <span className="text-blue-500 font-bold dark:text-blue-500">
                  {" "}
                  Sneak Shop India
                </span>
                .
              </p>
              <div className="w-full flex items-center justify-center pt-8">
                <Drawer>
                  <DrawerTrigger>
                    {" "}
                    <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-blue-500 text-white transition duration-200 text-xs shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                      Read more
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-black border-0">
                    <div className="w-full h-auto p-8 flex">
                      <TextGenerateEffect words={tagline} />
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </p>
      </div>
      <div className="min-h-screen pb-24 h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div data-aos="fade-right" className="flex flex-col justify-center px-6">
          <span className=" text-center">
        <p className="text-white font-extrabold text-xl p-5">See our products</p>
        </span>
        <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
        
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    
    </div>
      </div>
      <div className="min-h-screen pb-24 h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div data-aos="fade-right" className="flex flex-col justify-center">
        <span className=" text-center">
        <p className="text-white font-extrabold text-xl p-5">Meet Different Breeds</p>
        </span>
        <Tabs tabs={tabs} />
    </div>
      </div>
      <div className="min-h-screen pb-24 h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col justify-center w-full px-4">
        <span className=" text-center">
        <p data-aos="fade-up" className="text-white font-extrabold text-xl p-5">FAQs</p>
        </span>
        <div className="flex w-full py-6 px-8 rounded-3xl bg-black/90 flex-col justify-center">
          
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem data-aos="fade-right" value="item-1">
        <AccordionTrigger>Refund Policy?</AccordionTrigger>
        <AccordionContent>
          Yeah.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem data-aos="fade-right" value="item-2">
        <AccordionTrigger>Ratings?</AccordionTrigger>
        <AccordionContent>
          Good.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem data-aos="fade-right" value="item-3">
        <AccordionTrigger>Origin country?</AccordionTrigger>
        <AccordionContent>
          India.  </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div>
      </div>
      <div className="h-24 w-full bg-black flex items-center justify-center text-center">
<p className=" font-extrabold text-sm text-white">©SneakShopIndia 2024 <br />Piyush Premanand</p>
      </div>
    </main>
  );
}
