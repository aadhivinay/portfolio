import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Package, Landmark, ShoppingCart, ArrowRight } from 'lucide-react';

const modules = [
  {
    abbr: 'MM',
    full: 'Materials Management',
    desc: 'Procure-to-Pay, material and vendor master data, purchasing, goods receipt, and invoice verification.',
    icon: Package,
    tags: ['P2P', 'Material Master', 'Vendor Master', 'Purchase Requisition', 'RFQ', 'Purchase Order', 'Goods Receipt', 'Invoice Verification', 'Source List', 'Quota Arrangement', 'Outline Agreement', 'Scheduling Agreement', 'Consignment', 'Subcontracting'],
    flow: ['PR', 'RFQ', 'PO', 'GR', 'Invoice', 'Payment'],
    flowFull: ['Purchase Requisition', 'RFQ', 'Purchase Order', 'Goods Receipt', 'Invoice Verification', 'Payment'],
  },
  {
    abbr: 'FI',
    full: 'Financial Accounting',
    desc: 'Financial organization structure, vendor/customer invoices, accounting documents, and MM/SD integration.',
    icon: Landmark,
    tags: ['Financial Organization Structure', 'Vendor Invoices', 'Customer Invoices', 'Accounting Documents', 'MM-FI Integration', 'SD-FI Integration', 'Automatic Payment Program', 'Dunning'],
    flow: ['Vendor', 'Invoice', 'Accounting', 'Payment'],
    flowFull: ['Vendor Master', 'Invoice', 'Accounting Document', 'Payment'],
  },
  {
    abbr: 'SD',
    full: 'Sales & Distribution',
    desc: 'Order-to-Cash, customer and business partner concepts, sales orders, delivery, pricing, and billing.',
    icon: ShoppingCart,
    tags: ['O2C', 'Customer / Business Partner', 'Sales Orders', 'Delivery', 'Picking', 'Post Goods Issue', 'Billing', 'Pricing', 'Shipping Point', 'Item Category', 'Scheduling', 'Contracts / Outline Agreements'],
    flow: ['Sales Order', 'Delivery', 'Picking', 'PGI', 'Billing', 'Accounting'],
    flowFull: ['Sales Order', 'Delivery', 'Picking', 'Post Goods Issue', 'Billing', 'Accounting'],
  },
];

export default function SapExpertise() {
  const [activeModule, setActiveModule] = useState(0);
  const active = modules[activeModule];

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-ink-50 dark:bg-ink-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          label="Expertise"
          title="SAP Functional Expertise"
          description="Three core modules. One integrated business process mindset."
        />

        {/* Module selector tabs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 max-w-3xl mx-auto">
          {modules.map((mod, i) => {
            const isActive = i === activeModule;
            return (
              <button
                key={mod.abbr}
                onClick={() => setActiveModule(i)}
                className={`flex-1 group p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'bg-white dark:bg-ink-900 border-enterprise-300 dark:border-enterprise-700 shadow-card-hover'
                    : 'bg-white/50 dark:bg-ink-900/50 border-ink-200/60 dark:border-ink-800 hover:border-enterprise-200 dark:hover:border-enterprise-800'
                }`}
                data-cursor="explore"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isActive ? 'bg-enterprise-600 text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-400 dark:text-ink-500'
                  }`}>
                    <mod.icon size={20} strokeWidth={2} />
                  </div>
                  <span className={`text-2xl font-bold tracking-tight ${
                    isActive ? 'text-enterprise-600 dark:text-enterprise-400' : 'text-ink-400 dark:text-ink-600'
                  }`}>
                    {mod.abbr}
                  </span>
                </div>
                <p className={`text-xs font-medium leading-snug ${isActive ? 'text-ink-700 dark:text-ink-300' : 'text-ink-400 dark:text-ink-500'}`}>
                  {mod.full}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active module detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
              {/* Left: Description + tags */}
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl lg:text-6xl font-bold text-enterprise-600 dark:text-enterprise-400 tracking-tight">
                    {active.abbr}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 dark:text-white">{active.full}</h3>
                  </div>
                </div>
                <p className="text-ink-500 dark:text-ink-400 text-base leading-relaxed mb-6">
                  {active.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white dark:bg-ink-800 text-ink-600 dark:text-ink-400 text-xs sm:text-sm rounded-lg font-medium border border-ink-200 dark:border-ink-700 hover:border-enterprise-300 dark:hover:border-enterprise-700 transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Process flow */}
              <div className="bg-white dark:bg-ink-900 rounded-2xl p-6 sm:p-8 border border-ink-200 dark:border-ink-800 shadow-card">
                <p className="text-xs font-bold tracking-wider uppercase text-enterprise-600 dark:text-enterprise-400 mb-6">
                  Process Flow
                </p>
                <div className="space-y-3">
                  {active.flow.map((stage, i) => (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-enterprise-50 dark:bg-enterprise-900/30 border border-enterprise-200 dark:border-enterprise-800/50 flex items-center justify-center text-xs font-bold text-enterprise-600 dark:text-enterprise-400">
                          {i + 1}
                        </div>
                        <span className="text-sm font-semibold text-ink-700 dark:text-ink-300">
                          {active.flowFull[i]}
                        </span>
                      </div>
                      {i < active.flow.length - 1 && (
                        <ArrowRight size={14} className="text-enterprise-400 dark:text-enterprise-700 rotate-90" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
