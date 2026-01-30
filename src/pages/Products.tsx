
import { PRODUCTS } from '@/data/content';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Products() {
  return (
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-primary-950">
      <div className="bg-gradient-to-br from-gray-50 to-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pdf_extracted/page_2_img_in_image_box_271_281_735_518.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">核心产品与技术</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                结合仿生力学、机器视觉与数字孪生技术，重新定义储罐安全监测标准。
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {PRODUCTS.map((product, index) => (
          <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
            
            <div className="lg:w-1/2 w-full space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                    旗舰产品
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{product.title}</h2>
                <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                    {product.summary}
                </p>
                
                <div className="bg-white dark:bg-primary-900 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">技术规格</h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {product.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-800 dark:text-gray-400">
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                                    <Check size={12} />
                                </span>
                                {spec}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-primary-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                    索取详细参数手册 <ArrowRight size={20} />
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
