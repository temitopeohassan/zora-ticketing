import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';
import { ethers } from 'ethers';

const About = () => {
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto text-black'>
      <br />
      <div className=' mx-4'>
        <h2 className='font-semibold text-2xl'>ABOUT ZORA TICKETING</h2>
        <div className='py-4'>
          <h2 className='text-sm text-black'>
          Zora Ticketing is a ground-breaking Dapp for online ticket purchases that makes use of blockchain technology to provide safe, quick, and decentralized transactions. Zora Ticketing maintains the authenticity and uniqueness of each ticket by using Non-Fungible Tokens (NFTs) with auto-generated QR codes.
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-3 '>
          <div className='text-sm rounded p-4 bg-[#2db369] shadow-md'>
            <h1 className='bg-[#2db369] text-gray-50 w-10 h-10 text-center p-2 rounded-full mb-2  text-xl font-bold shadow-lg'>
              1
            </h1>
            <p>
            Users of Zora Ticketing may effortlessly browse and research a broad variety of events and buy tickets straight through the smart contract. Since every transaction is recorded on the blockchain, it is transparent and unchangeable. This reduces expenses and streamlines the ticketing process by doing away with the need for middlemen.
            </p>
          </div>
          <div className='text-sm rounded p-4 bg-[#2db369] shadow-md'>
            <h1 className='bg-[#2db369] text-gray-50 w-10 h-10 text-center p-2 rounded-full mb-2  text-xl font-bold shadow-lg'>
              2
            </h1>
            <p>
            Event planners may easily enter information about the event, such as ticket costs and the amount of tickets that are available. Zora Ticketing equips event managers with an intuitive user interface for managing their events, assuring precise tracking and effective ticket distribution.
            </p>
          </div>
          <div className='text-sm rounded p-4 bg-[#2db369] shadow-md'>
            <h1 className='bg-[#2db369] text-gray-50 w-10 h-10 text-center p-2 rounded-full mb-2 text-xl font-bold shadow-lg'>
              3
            </h1>
            <p>
            Additionally, Zora Ticketing interacts with ETH Explorer, enabling users to inspect the freshly printed NFT tickets and confirm their legitimacy. This improves the environment for ticketing's security and trust even more.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default About;
