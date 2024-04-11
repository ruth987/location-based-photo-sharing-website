"use client"
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import {  Search } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full justify-between flex p-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="w-1/4 flex">
        <Image
          src="/trie2.png"
          alt="trie logo image"
          width={40}
          height={30}
        />
        <h1 className="text-3xl text-gray-800 pl-3">
          <span className="font-semibold text-gray-950">T</span>rie
        </h1>
      </div>
      <div className="">
        <div className="relative flex">
          <Input type="search" placeholder="Search" className="w-full pr-10" />
          <Search color="gray" size={24} className="absolute right-2 top-2" />
        </div>
      </div>


    </div>
  );
};
