import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, Target, Users, Settings, MapPin, Clock, TrendingUp, BookmarkPlus, Sparkles, List, Send } from "lucide-react";
import { useState } from "react";

export function CandidateJobsPage() {
  const [viewMode, setViewMode] = useState<'recommended' | 'all' | 'applied'>('recommended');

  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const recommendedJobs = [
    {
      title: "Senior Frontend Engineer",
      company: "TechNova Corp",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 12.000 - R$ 18.000",
      match: 94,
      posted: "2 dias atrás",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Product Designer",
      company: "Design Studios",
      location: "São Paulo, SP",
      type: "PJ",
      salary: "R$ 8.000 - R$ 12.000",
      match: 89,
      posted: "1 semana atrás",
      tags: ["Figma", "UI/UX", "Design System"],
    },
    {
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 10.000 - R$ 16.000",
      match: 87,
      posted: "3 dias atrás",
      tags: ["Python", "ML", "TensorFlow"],
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Rio de Janeiro, RJ",
      type: "CLT",
      salary: "R$ 11.000 - R$ 15.000",
      match: 82,
      posted: "5 dias atrás",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  const allJobs = [
    ...recommendedJobs,
    {
      title: "Backend Engineer",
      company: "Startup Tech",
      location: "Remoto",
      type: "PJ",
      salary: "R$ 9.000 - R$ 14.000",
      match: 76,
      posted: "1 semana atrás",
      tags: ["Node.js", "MongoDB", "GraphQL"],
    },
    {
      title: "QA Engineer",
      company: "Software House",
      location: "Belo Horizonte, MG",
      type: "CLT",
      salary: "R$ 7.000 - R$ 10.000",
      match: 72,
      posted: "2 semanas atrás",
      tags: ["Selenium", "Cypress", "Automation"],
    },
    {
      title: "Mobile Developer",
      company: "App Factory",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 10.000 - R$ 15.000",
      match: 68,
      posted: "3 semanas atrás",
      tags: ["React Native", "iOS", "Android"],
    },
  ];

  const appliedJobs = [
    {
      title: "Senior Frontend Engineer",
      company: "TechNova Corp",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 12.000 - R$ 18.000",
      match: 94,
      posted: "2 dias atrás",
      tags: ["React", "TypeScript", "Tailwind"],
      appliedDate: "Há 1 dia",
      status: "Em análise",
    },
    {
      title: "Product Designer",
      company: "Design Studios",
      location: "São Paulo, SP",
      type: "PJ",
      salary: "R$ 8.000 - R$ 12.000",
      match: 89,
      posted: "1 semana atrás",
      tags: ["Figma", "UI/UX", "Design System"],
      appliedDate: "Há 3 dias",
      status: "Em análise",
    },
    {
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 10.000 - R$ 16.000",
      match: 87,
      posted: "3 dias atrás",
      tags: ["Python", "ML", "TensorFlow"],
      appliedDate: "Há 2 dias",
      status: "Visualizado",
    },
    {
      title: "Backend Engineer",
      company: "Startup Tech",
      location: "Remoto",
      type: "PJ",
      salary: "R$ 9.000 - R$ 14.000",
      match: 76,
      posted: "1 semana atrás",
      tags: ["Node.js", "MongoDB", "GraphQL"],
      appliedDate: "Há 5 dias",
      status: "Em análise",
    },
    {
      title: "Mobile Developer",
      company: "App Factory",
      location: "Remoto",
      type: "CLT",
      salary: "R$ 10.000 - R$ 15.000",
      match: 68,
      posted: "3 semanas atrás",
      tags: ["React Native", "iOS", "Android"],
      appliedDate: "Há 1 semana",
      status: "Não visualizado",
    },
    {
      title: "Full Stack Developer",
      company: "Tech Innovations",
      location: "São Paulo, SP",
      type: "CLT",
      salary: "R$ 10.000 - R$ 14.000",
      match: 81,
      posted: "1 mês atrás",
      tags: ["React", "Node.js", "PostgreSQL"],
      appliedDate: "Há 2 semanas",
      status: "Encerrada",
    },
    {
      title: "UX Researcher",
      company: "Digital Labs",
      location: "Remoto",
      type: "PJ",
      salary: "R$ 7.000 - R$ 10.000",
      match: 78,
      posted: "1 mês atrás",
      tags: ["UX Research", "User Testing", "Analytics"],
      appliedDate: "Há 3 semanas",
      status: "Encerrada",
    },
    {
      title: "DevOps Specialist",
      company: "CloudSystems",
      location: "Rio de Janeiro, RJ",
      type: "CLT",
      salary: "R$ 12.000 - R$ 16.000",
      match: 84,
      posted: "1 mês atrás",
      tags: ["AWS", "Terraform", "CI/CD"],
      appliedDate: "Há 1 mês",
      status: "Encerrada",
    },
  ];

  const jobs = viewMode === 'recommended' ? recommendedJobs : viewMode === 'applied' ? appliedJobs : allJobs;

  return (
    <DashboardLayout
      userType="candidata"
      userName="Marina Silva"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {viewMode === 'recommended' ? 'Vagas Recomendadas' : viewMode === 'applied' ? 'Minhas Candidaturas' : 'Todas as Vagas'}
            </h2>
            <p className="text-slate-500 mt-1">
              {viewMode === 'recommended'
                ? 'Oportunidades selecionadas pela IA com base no seu perfil.'
                : viewMode === 'applied'
                ? 'Acompanhe o status das vagas para as quais você se candidatou.'
                : 'Explore todas as vagas disponíveis na plataforma.'}
            </p>
          </div>

          <div className="flex gap-3">
            {/* Toggle View Mode */}
            <div className="flex p-1 bg-white rounded-xl shadow-sm border border-[#FDF0F4]">
              <button
                onClick={() => setViewMode('recommended')}
                className={`flex items-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${
                  viewMode === 'recommended'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Recomendadas
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`flex items-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${
                  viewMode === 'all'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <List className="w-4 h-4" />
                Todas
              </button>
              <button
                onClick={() => setViewMode('applied')}
                className={`flex items-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${
                  viewMode === 'applied'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <Send className="w-4 h-4" />
                Candidaturas
              </button>
            </div>

            <button className="flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
              Filtros
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: viewMode === 'recommended' ? 'Vagas Recomendadas' : viewMode === 'applied' ? 'Candidaturas Ativas' : 'Total de Vagas',
              value: viewMode === 'recommended' ? '24' : viewMode === 'applied' ? '5' : '31',
              color: 'text-[#3E0014]',
              icon: <Sparkles className="w-5 h-5" />,
            },
            {
              label: viewMode === 'applied' ? 'Candidaturas Encerradas' : 'Candidaturas Enviadas',
              value: viewMode === 'applied' ? '3' : '8',
              color: 'text-[#5B002C]',
              icon: <Send className="w-5 h-5" />,
            },
            {
              label: 'Match Médio',
              value: viewMode === 'recommended' ? '88%' : viewMode === 'applied' ? '85%' : '79%',
              color: 'text-[#AC1634]',
              icon: <Target className="w-5 h-5" />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-4 border border-[#FDF0F4] shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <div className="w-8 h-8 bg-[#FEF7F9] rounded-lg flex items-center justify-center text-[#AC1634]">
                  {stat.icon}
                </div>
              </div>
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job, idx) => {
            const isEncerrada = (job as any).status === 'Encerrada';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-6 border shadow-sm transition-all ${
                  isEncerrada
                    ? 'opacity-50 border-slate-200'
                    : 'border-[#FDF0F4] hover:shadow-md'
                }`}
              >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3E0014] mb-2">{job.title}</h3>
                  <p className="text-slate-600 font-semibold mb-3">{job.company}</p>

                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.posted}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#FEF7F9] text-[#5B002C] rounded-lg text-sm font-semibold border border-[#FDF0F4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg font-bold text-[#3E0014]">{job.salary}</p>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#5B002C] to-[#AC1634] text-white px-6 py-3 rounded-xl shadow-md mb-3">
                    <span className="text-3xl font-black">{job.match}%</span>
                    <p className="text-xs uppercase font-bold opacity-90">Match</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" /> Alto
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#FDF0F4]">
                {viewMode === 'applied' ? (
                  isEncerrada ? (
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400 font-medium">Processo encerrado</p>
                        <p className="text-sm text-slate-500 font-semibold">{(job as any).appliedDate}</p>
                      </div>
                      <div className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg border border-slate-200">
                        <p className="text-sm font-bold">Encerrada</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Candidatura enviada</p>
                        <p className="text-sm text-slate-700 font-semibold">{(job as any).appliedDate}</p>
                      </div>
                      <div className="px-4 py-2 bg-[#FEF7F9] text-[#AC1634] rounded-lg border border-[#AC1634]/20">
                        <p className="text-sm font-bold">{(job as any).status}</p>
                      </div>
                    </div>
                  )
                ) : (
                  <>
                    <button className="flex-1 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-6 py-3 rounded-xl shadow-sm transition-all active:scale-95">
                      Candidatar-se
                    </button>
                    <button className="bg-white text-[#3E0014] hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
