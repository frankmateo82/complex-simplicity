import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
  label: string;
}

export function ServiceIcon({ Icon, label }: ServiceIconProps) {
  return (
    <div className="group flex flex-col items-center animate-float cursor-pointer">
      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-3 
                    backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10">
        <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-sm uppercase tracking-wider text-gray-300 group-hover:text-white 
                     transition-colors duration-300">{label}</span>
    </div>
  );
}