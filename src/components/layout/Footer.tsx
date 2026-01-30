
import { COMPANY_INFO, NAV_LINKS } from '@/data/content';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-md flex items-center justify-center text-white">
                    <ShieldCheck size={18} />
                </div>
                <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">快速导航</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">核心技术</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">本质安全型无源感知</li>
              <li className="text-gray-400 text-sm">数字孪生智能诊断</li>
              <li className="text-gray-400 text-sm">仿生力学传感器</li>
              <li className="text-gray-400 text-sm">石化储罐全生命周期监测</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-white">隐私政策</Link>
            <Link to="#" className="hover:text-white">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
