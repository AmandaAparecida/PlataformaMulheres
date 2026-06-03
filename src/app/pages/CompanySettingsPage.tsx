import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { BarChart3, Bell, Briefcase, Building2, Settings, Shield, Users } from "lucide-react";

type SidebarItem = {
  name: string;
  href: string;
  icon: ReactNode;
};

type CompanyProfileField = {
  id: string;
  label: string;
  type: "text" | "url";
  defaultValue: string;
};

type NotificationPreference = {
  label: string;
  description: string;
};

type SecurityAction = {
  label: string;
};

const sidebarItems: SidebarItem[] = [
  { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
  { name: "Analytics IA", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
];

const companyProfileFields: CompanyProfileField[] = [
  { id: "company-name", label: "Nome da Empresa", type: "text", defaultValue: "TechNova Corp" },
  { id: "company-sector", label: "Setor", type: "text", defaultValue: "Tecnologia" },
  { id: "company-website", label: "Website", type: "url", defaultValue: "https://technova.com.br" },
];

const notificationPreferences: NotificationPreference[] = [
  { label: "Novas candidaturas", description: "Notificar quando uma candidata se candidatar" },
  { label: "Chances de alta relevância", description: "Alertas de chances acima de 90%" },
  { label: "Atualizações de produto", description: "Novidades e melhorias da plataforma" },
];

const securityActions: SecurityAction[] = [
  { label: "Alterar senha" },
  { label: "Autenticação de dois fatores" },
  { label: "Gerenciar permissões de equipe" },
];

export function CompanySettingsPage() {
  return (
    <DashboardLayout
      userType="empresa"
      userName="TechNova Corp"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Configurações</h2>
          <p className="text-slate-500 mt-1">Gerencie as preferências da sua empresa.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Perfil da Empresa</h3>
                <p className="text-sm text-slate-500">Informações básicas e branding</p>
              </div>
            </div>

            <div className="space-y-4">
              {companyProfileFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-semibold text-slate-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    defaultValue={field.defaultValue}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Notificações</h3>
                <p className="text-sm text-slate-500">Gerencie como você recebe atualizações</p>
              </div>
            </div>

            <div className="space-y-4">
              {notificationPreferences.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 bg-[#FFFBFC] rounded-xl">
                  <div>
                    <h4 className="font-semibold text-[#3E0014]">{item.label}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" aria-label={item.label} />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#AC1634]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#AC1634]"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Privacidade e Segurança</h3>
                <p className="text-sm text-slate-500">Proteja seus dados e acesso</p>
              </div>
            </div>

            <div className="space-y-3">
              {securityActions.map((action) => (
                <button
                  key={action.label}
                  className="w-full text-left px-4 py-3 bg-[#FFFBFC] hover:bg-[#FEF7F9] rounded-xl text-[#3E0014] font-semibold transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-8 py-3 rounded-xl shadow-sm transition-all active:scale-95">
            Salvar alterações
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
