
import { Monitor, Shield, Zap, BarChart3, Globe, Database, Award, Users } from 'lucide-react';

export const COMPANY_INFO = {
  name: "江苏智安油气安全科技",
  fullName: "江苏智安油气安全科技有限公司",
  englishName: "JIANGSU ZHIAN OIL & GAS SAFETY TECHNOLOGY",
  tagline: "石化储罐浮盘安全监测护航者",
  description: "基于全球首创仿生力学驱动的本质安全型无源感知技术，提供国际领先的石化储罐安全监测解决方案。",
  projectLeader: "胡晓蒙",
  university: "江苏海洋大学",
  contact: {
    phone: "18642746271",
    email: "591291210@qq.com",
    address: "江苏省连云港市海州区苍梧路59号 (江苏海洋大学科技园)",
  }
};

export const NAV_LINKS = [
  { name: "首页", path: "/" },
  { name: "产品技术", path: "/products" },
  { name: "关于我们", path: "/about" },
  { name: "联系我们", path: "/contact" },
];

export const FEATURES = [
  {
    title: "仿生力学无源感知技术",
    description: "全球首创生物启发无源传感器，基于吸湿各向异性形变设计，响应时间从600s缩短至30s，0区防爆认证。",
    icon: Shield,
  },
  {
    title: "±1mm极致监测精度",
    description: "高精度仿生力学驱动传感器，140个监测点位全覆盖，实现毫米级液位与浮盘姿态监测，准确率高达99.7%。",
    icon: Zap,
  },
  {
    title: "4K光学感知阵列",
    description: "创新人孔一体化精密光学架构，基于光路模拟的非均匀杂散光抑制技术，减少85%反射杂光，IP68防护等级。",
    icon: Monitor,
  },
  {
    title: "AI数字孪生诊断",
    description: "基于YOLOv8深度学习的储罐全维度数字孪生智能诊断系统，2000+精标注样本组，实现预测性维护。",
    icon: BarChart3,
  }
];

export const STATS = [
  { value: "200,000+", label: "全国储罐数量" },
  { value: "99.7%", label: "监测准确率" },
  { value: "9项", label: "核心专利授权" },
  { value: "3篇", label: "权威论文发表" },
];

export const PRODUCTS = [
  {
    id: "passive-sensor",
    title: "本质安全型浮盘状态监测系统",
    summary: "全球首创仿生力学无源感知技术，生物启发设计，140个监测点位全覆盖，实现±1mm精度监测。",
    image: "/images/product_tech1.png",
    specs: [
      "传感器价格: 400-600元/件", 
      "测量精度: ±1mm", 
      "倾斜监测: ±1°",
      "安全等级: 0区无电",
      "防护等级: Ex d IIC T6 Gb"
    ],
  },
  {
    id: "complete-system",
    title: "完整监测系统解决方案",
    summary: "集成光学感知、AI诊断、数字孪生的全维度监测系统，提供储罐全生命周期安全保障。",
    image: "/images/product_tech2_new.png",
    specs: [
      "系统总价: 15万元/套", 
      "监测点位: 140个",
      "成像分辨率: ≥4K",
      "数据库: 2000+精标注样本",
      "检测时间: 1分钟完成"
    ],
  }
];


