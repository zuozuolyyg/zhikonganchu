
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
         {/* Fallback gradient if image missing, or image with overlay */}
         <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50/50 to-white z-10" />
         <img 
            src="/images/new_hero_image.png" 
            onError={(e) => {
                e.currentTarget.src = ""; // Clear source
                e.currentTarget.className = "hidden"; // Hide image
                // The parent div's background color will show
            }}
            alt="石化储罐浮盘安全监测技术" 
            className="w-full h-full object-cover opacity-60"
         />
         {/* Animated Grid Background */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
            </span>
            全球首创本质安全型无源感知技术
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            石化储罐浮盘<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              安全监测护航者
            </span>
          </h1>
          
          <p className="text-xl text-gray-800 mb-10 leading-relaxed max-w-2xl border-l-4 border-primary-500 pl-6">
            基于全球首创仿生力学无源感知技术，140个监测点位全覆盖，响应时间缩短至30秒，
            为全国20万座储罐提供本质安全监测保障，构筑千亿级石化储运市场安全防线。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2">
              探索核心技术
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/contact" className="group bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2">
              预约演示
              <ChevronRight className="text-gray-600 group-hover:text-gray-800 transition-colors" />
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-300 pt-8">
            <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">99.7%</div>
                <div className="text-sm text-gray-600">监测准确率</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">±1mm</div>
                <div className="text-sm text-gray-600">测量精度</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">200,000+</div>
                <div className="text-sm text-gray-600">全国储罐数量</div>
            </div>
            <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">9项</div>
                <div className="text-sm text-gray-600">核心专利授权</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative 3D Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
    </div>
  );
}
