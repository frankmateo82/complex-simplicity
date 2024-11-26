import React from 'react';
import { Brain, Code, Gamepad2, ChevronDown } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';

export function HeroContent() {
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
      <div className="space-y-6 mb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          <span className="text-white">Where</span>
          <br />
          <span className="inline-block bg-white text-black px-4 transform -skew-x-12">
            Innovation
          </span>
          <br />
          <span className="text-white">Meets Reality</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Crafting immersive digital experiences through Unreal Engine, 
          artificial intelligence, and cutting-edge web development.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <ServiceIcon Icon={Gamepad2} label="Unreal Engine" />
        <ServiceIcon Icon={Brain} label="AI/LLMs" />
        <ServiceIcon Icon={Code} label="Web Development" />
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
      </div>
    </div>
  );
}