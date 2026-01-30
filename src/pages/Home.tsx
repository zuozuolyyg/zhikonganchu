
import { Hero } from '@/components/home/Hero';
import { FEATURES, STATS, PRODUCTS } from '@/data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 bg-primary-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{stat.value}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 dark:text-white mb-4">为什么选择江苏智安油气安全科技？</h2>
            <p className="text-lg text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
              针对石化储罐安全监测痛点，我们提供从底层感知到上层决策的全栈式解决方案。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-primary-900/50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 dark:bg-primary-800 text-primary-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-800 dark:text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro/About Preview */}
      <section className="py-24 bg-gray-50 dark:bg-primary-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
                <img 
                    src="/images/about_preview.png" 
                    alt="Engineers at work" 
                    className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                />
                <div className="absolute bottom-8 -right-8 bg-white dark:bg-primary-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 hidden md:block">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-secondary">10+</div>
                        <div className="text-sm text-gray-800 dark:text-gray-300">
                            国家发明专利<br/>技术领跑行业
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="text-secondary font-semibold mb-2 uppercase tracking-wider">关于我们</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                源自高校科研团队<br/>专注本质安全技术
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                江苏智安油气安全科技是由江苏海洋大学科研团队创立的创新型科技企业。我们深耕防爆监测领域，攻克了"有源传感器在易燃易爆环境下的安全隐患"这一行业难题。
              </p>
              <ul className="space-y-4 mb-8">
                {['江苏省老旧装置更新改造推荐技术', '本质安全型无源感知技术首创者', '3篇高水平SCI论文支撑'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
                        <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                        {item}
                    </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                了解更多企业故事 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好升级您的储罐安全系统了吗？</h2>
            <p className="text-xl text-blue-100 mb-10">
                立即联系我们的专家团队，获取定制化的储罐安全监测方案，提升本质安全水平。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    获取报价
                </Link>
                <Link to="/products" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                    查看产品参数
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
