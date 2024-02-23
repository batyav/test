'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/play_1.png'
import FeaturesElement from '@/public/images/play_1.png'
import FeaturesBg_2 from '@/public/images/play_2.png'
import FeaturesElement_2 from '@/public/images/play_2.png'
import FeaturesBg_3 from '@/public/images/play_3.png'
import FeaturesElement_3 from '@/public/images/play_3.png'
import FeaturesBg_4 from '@/public/images/play_4.png'
import FeaturesElement_4 from '@/public/images/play_4.png'
import FeaturesBg_5 from '@/public/images/play_5.png'
import FeaturesElement_5 from '@/public/images/play_5.png'
import FeaturesBg_6 from '@/public/images/play_6.png'
import FeaturesElement_6 from '@/public/images/play_6.png'
import FeaturesBg_7 from '@/public/images/play_7.png'
import FeaturesElement_7 from '@/public/images/play_7.png'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative ">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-white-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-white-200 transform -translate-y-2/3"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-8 md:pt-">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Who are the mechanized mythos?</h1>
            <p className="text-xl text-gray-600">Mechanized myths are a modern reinterpretation of ancient legends and mythology through the prism of high technology. </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Mechanized mythos</h3>
                <p className="text-xl text-gray-600">In this context, mythical creatures and deities are represented as mechanized structures that combine historical heritage and futuristic design.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg active:active-gradient' : 'bg-gray-200 border-transparent'}`}
href="#0"
onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐑𝐞𝐝 𝐒𝐞𝐧𝐭𝐢𝐧𝐞𝐥</div>
                    <div className="text-gray-600">The Red Sentinel stands guard over the ancient Martian foundries, a relic from a long-forgotten war. Built for protection, its presence alone deters would-be invaders.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐀𝐪𝐮𝐚 𝐑𝐞𝐚𝐩𝐞𝐫 </div>
                    <div className="text-gray-600">Emerging from the depths of Europa's subterranean oceans, the Aqua Reaper is a testament to engineering melded with extraterrestrial life. </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐆𝐨𝐥𝐝𝐞𝐧 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 </div>
                    <div className="text-gray-600">Forged in the heart of a dying star, the Golden Guardian was created by a long-lost civilization to safeguard the knowledge of the universe. Its frame is indestructible</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐈𝐧𝐟𝐞𝐫𝐧𝐨 𝐖𝐫𝐚𝐢𝐭𝐡</div>
                    <div className="text-gray-600">The Inferno Wraith was once a fearsome warrior in intergalactic conflicts. Now, it roams the wastelands of desolate planets, bound by its programming to seek out and challenge the strongest opponents.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(5); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐏𝐡𝐚𝐧𝐭𝐨𝐦 𝐁𝐞𝐫𝐬𝐞𝐫𝐤𝐞𝐫</div>
                    <div className="text-gray-600">The Phantom Berserker was engineered in secret by a rogue AI, designed for stealth and sabotage. It can slip undetected into enemy lines, causing chaos with its mere presence.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 6 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(6); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐍𝐢𝐠𝐡𝐭 𝐇𝐮𝐧𝐭𝐞𝐫</div>
                    <div className="text-gray-600">Built to survive the harshest conditions of dark space, the Night Hunter uses its enhanced sensors to track down spacefaring threats. It is the unseen guardian that keeps hostile forces at bay.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 7 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(7); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">𝐒𝐢𝐥𝐯𝐞𝐫 𝐒𝐞𝐞𝐤𝐞𝐫</div>
                    <div className="text-gray-600">The Silver Seeker is an exploration unit, designed to traverse the great expanse of space in search of new life and possibilities. It embodies the hope and curiosity of its creators.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  </div>
                </a>
                
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                      <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_2} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_2} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_3} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_3} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 4 */}
                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_4} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_4} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 5 */}
                  <Transition
                    show={tab === 5}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_5} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_5} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 6}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_6} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_6} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 7}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg_7} style={{ width: '600px', height: '462px' }} alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement_7} width={700} height="55" alt="Element" style={{ top: '0%' }} />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}