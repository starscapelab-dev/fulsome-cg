import Link from "next/link";
import Image from "next/image";

import { FOOTER_DATA, SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-[#030014] text-gray-200 border-t border-orange-500/20 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Fulsome CG Logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Fulsome CG
                </span>
                <span className="text-xs text-gray-400">
                  International VFX Academy
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India&apos;s premier job-based VFX training centre with AI integration. Transform your passion into a professional career.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-400/20 border border-orange-500/30 rounded-lg flex items-center justify-center hover:border-orange-500 hover:scale-110 transition-all"
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER_DATA.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-bold text-lg text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <li key={`${column.title}-${name}`}>
                    <Link
                      href={link}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Fulsome CG International VFX Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
