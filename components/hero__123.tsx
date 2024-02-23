import React, { useState, useEffect } from 'react';
import '../app/css/style.css'; // Убедитесь, что путь к CSS-файлу верный
// import CountdownTimer from '@/components/utils/countdown-timer'
import CountdownTimer from '@/components/utils/ct_timer'; // Adjust the import path based on your file structure




export default function Hero() {
  const targetDate = new Date('December 31, 2024 23:59:59');

  return (
    <section className="relative">

      <div className="video-background">
        <video autoPlay muted loop className="absolute z-0 w-full h-full object-cover">
        <source src="/videos/play.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Контент поверх видео */}
      <div className="content z-10 relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Геройский контент */}
        <div className="pt-32 pb-12 md:pt-72 md:pb-80">
          {/* Заголовок секции */}
          <div className="text-center pb-12 md:pb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">
              Get ready to explore the <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">$mythos</span> on the Base blockchain
            </h1>

            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-orange-600 hover:bg-red-900 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Trade and earn</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">To learn more</a>
                </div>

              </div>
            </div>

            <h2 className="text-5xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" ><CountdownTimer targetDate={targetDate} /></h2>
          </div>

        </div>
      </div>
    </section>
  );
}