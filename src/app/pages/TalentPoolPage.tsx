import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import {
  Award,
  BarChart3,
  Briefcase,
  Briefcase as BriefcaseIcon,
  Filter,
  Mail,
  MapPin,
  Search,
  Settings,
  Star,
  Users,
} from "lucide-react";

type SidebarItem = {
  name: string;
  href: string;
  icon: ReactNode;
};

type TalentStat = {
  label: string;
  value: string;
  color: string;
  bg: string;
};

type Talent = {
  name: string;
  role: string;
  location: string;
  experience: string;
  skills: string[];
  match: number;
  img: string;
  premium: boolean;
};

const sidebarItems: SidebarItem[] = [
  { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
  { name: "Analytics IA", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
];

const talentStats: TalentStat[] = [
  { label: "Total de Candidatas", value: "2.847", color: "text-[#3E0014]", bg: "bg-[#FEF7F9]" },
  { label: "Chances +90%", value: "486", color: "text-[#5B002C]", bg: "bg-[#FFFBFC]" },
  { label: "Novas esta semana", value: "124", color: "text-[#AC1634]", bg: "bg-[#FDF0F4]" },
  { label: "Favoritas", value: "38", color: "text-[#7A002B]", bg: "bg-[#FEF7F9]" },
];

const talents: Talent[] = [
  {
    name: "Carolina Alves",
    role: "Senior Data Scientist",
    location: "São Paulo, SP",
    experience: "8 anos",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    match: 98,
    img: "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
    premium: true,
  },
  {
    name: "Juliana Santos",
    role: "Machine Learning Engineer",
    location: "Rio de Janeiro, RJ",
    experience: "6 anos",
    skills: ["PyTorch", "Deep Learning", "NLP", "Docker"],
    match: 95,
    img: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
    premium: true,
  },
  {
    name: "Beatriz Lima",
    role: "Data Scientist",
    location: "Belo Horizonte, MG",
    experience: "4 anos",
    skills: ["R", "Statistics", "Data Viz", "Pandas"],
    match: 91,
    img: "https://images.unsplash.com/photo-1758874384556-cc2b9dcbb6e0?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
    premium: false,
  },
  {
    name: "Amanda Costa",
    role: "Analytics Engineer",
    location: "Curitiba, PR",
    experience: "5 anos",
    skills: ["SQL", "dbt", "Looker", "BigQuery"],
    match: 89,
    img: "https://images.unsplash.com/photo-1767875635163-57c7efa96e7f?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
    premium: false,
  },
];

export function TalentPoolPage() {
  return (
    <DashboardLayout
      userType="empresa"
      userName="TechNova Corp"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Banco de Talentos</h2>
            <p className="text-slate-500 mt-1">Explore candidatas qualificadas para suas vagas.</p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
              <Filter className="w-5 h-5" /> Filtros
            </button>
            <button className="flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
              <Search className="w-5 h-5" /> Buscar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {talentStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${stat.bg} rounded-2xl p-6 border border-[#FDF0F4] shadow-sm`}
            >
              <p className="text-slate-600 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#FDF0F4] shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={talent.img}
                      alt={talent.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FDF0F4] group-hover:border-[#AC1634] transition-colors"
                    />
                    {talent.premium && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-yellow-700 fill-yellow-700" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#3E0014] mb-1">{talent.name}</h3>
                    <p className="text-slate-600 font-medium mb-2">{talent.role}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {talent.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" /> {talent.experience}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-gradient-to-br from-[#5B002C] to-[#AC1634] text-white px-4 py-2 rounded-xl shadow-md">
                      <span className="text-2xl font-black">{talent.match}%</span>
                      <p className="text-xs uppercase font-bold opacity-90">Chance</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 font-semibold mb-2 uppercase">Skills principais</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#FEF7F9] text-[#5B002C] rounded-lg text-sm font-semibold border border-[#FDF0F4]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-[#FDF0F4]">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all active:scale-95">
                    <Mail className="w-4 h-4" /> Enviar mensagem
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 bg-white text-[#3E0014] hover:bg-slate-50 font-semibold px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95"
                    aria-label={`Ver reconhecimento de ${talent.name}`}
                  >
                    <Award className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
