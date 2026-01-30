
import { Check, User, Award, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">坚若磐石的安全守护</h1>
          <p className="text-xl text-gray-800 dark:text-gray-400 max-w-3xl mx-auto">
            江苏智安油气安全科技致力于通过全球首创仿生力学无源感知技术，解决石化储罐安全监测的世界级难题，为国家能源安全保驾护航。
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
                 <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-2xl"></div>
                 <img src="/images/about_section.png" alt="技术团队" className="relative rounded-2xl shadow-xl w-full" />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">源自高校，服务产业</h2>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
                    江苏智安油气安全科技是江苏海洋大学科研团队创立的高新技术企业。针对石化储罐浮盘易倾斜、卡盘、沉船等安全隐患，团队历经数年攻关，成功研发出全球首创的"仿生力学驱动本质安全型无源感知技术"。
                </p>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
                    我们打破了国外技术垄断，不仅解决了有源传感器在防爆区使用的安全难题，更将监测精度提升至毫米级。目前，公司已拥有9项核心专利授权，发表3篇高水平论文（其中1篇发表于《中国特种设备安全》，2篇国际SCI论文），技术成果获得2024年第十二届中国澳门国际创新发明展金奖。
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-primary-900 rounded-lg">
                        <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                        <div className="text-sm text-gray-700">核心专利</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-primary-900 rounded-lg">
                        <div className="text-3xl font-bold text-primary-600 mb-1">3</div>
                        <div className="text-sm text-gray-700">SCI 论文</div>
                    </div>
                </div>
            </div>
        </div>



        {/* Values Section */}
        <div className="bg-primary-50 dark:bg-primary-900/30 rounded-3xl p-12 mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">我们的核心价值</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "本质安全", icon: Award, desc: "坚持无源感知路线，从源头消除安全隐患" },
                    { title: "技术驱动", icon: BookOpen, desc: "依托高校科研背景，持续突破行业技术瓶颈" },
                    { title: "客户至上", icon: User, desc: "以解决客户痛点为己任，提供全生命周期服务" }
                ].map((item, i) => (
                    <div key={i} className="text-center p-6 bg-white dark:bg-primary-800 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-primary-700 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                        <p className="text-gray-800 dark:text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
