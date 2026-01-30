
import { COMPANY_INFO } from '@/data/content';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">联系我们</h1>
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-12">
                    无论是产品咨询、技术合作还是商务洽谈，我们的团队随时为您提供专业支持。
                </p>

                <div className="space-y-8">
                    {[
                        { icon: Phone, label: "服务热线", value: COMPANY_INFO.contact.phone, sub: "周一至周五 9:00 - 18:00" },
                        { icon: Mail, label: "电子邮箱", value: COMPANY_INFO.contact.email, sub: "通常在24小时内回复" },
                        { icon: MapPin, label: "公司地址", value: COMPANY_INFO.contact.address, sub: "欢迎预约参观研发中心" },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-primary-800 text-primary-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.label}</h3>
                                <p className="text-xl font-medium text-primary-600 dark:text-blue-400 my-1">{item.value}</p>
                                <p className="text-sm text-gray-700">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-primary-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">在线留言</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">您的姓名</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-primary-950 border border-gray-200 dark:border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="请输入姓名" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">联系电话</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-primary-950 border border-gray-200 dark:border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="请输入手机号" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">企业名称</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-primary-950 border border-gray-200 dark:border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="请输入企业名称" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">需求描述</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-primary-950 border border-gray-200 dark:border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="请简要描述您的项目需求..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-secondary hover:bg-secondary-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2">
                        <Send size={18} /> 提交咨询
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
}
