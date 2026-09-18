import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ArrowRight, MousePointerClick } from 'lucide-react';

const processes = [
  {
    title: 'Procure-to-Pay',
    abbr: 'P2P',
    color: 'from-enterprise-500 to-enterprise-700',
    stages: [
      { name: 'PR', full: 'Purchase Requisition', desc: 'Internal request to procurement to purchase a material or service.' },
      { name: 'RFQ', full: 'Request for Quotation', desc: 'Sent to vendors to compare prices and terms.' },
      { name: 'PO', full: 'Purchase Order', desc: 'Formal commitment to a vendor to supply goods or services at agreed terms.' },
      { name: 'GR', full: 'Goods Receipt', desc: 'Physical goods are received and recorded in the system against the PO.' },
      { name: 'IV', full: 'Invoice Verification', desc: 'Vendor invoice is checked against PO and goods receipt (3-way match).' },
      { name: 'Payment', full: 'Payment', desc: 'Payment is processed to the vendor via the FI automatic payment program.' },
    ],
  },
  {
    title: 'Order-to-Cash',
    abbr: 'O2C',
    color: 'from-teal-500 to-enterprise-600',
    stages: [
      { name: 'SO', full: 'Sales Order', desc: 'Customer order is recorded with agreed pricing and delivery terms.' },
      { name: 'DEL', full: 'Delivery', desc: 'A delivery document is created, specifying what to ship and where.' },
      { name: 'PK', full: 'Picking', desc: 'Goods are picked from the warehouse and packed for shipment.' },
      { name: 'PGI', full: 'Post Goods Issue', desc: 'Inventory is reduced and ownership transfers to the customer.' },
      { name: 'BILL', full: 'Billing', desc: 'A billing document is created and sent to the customer for payment.' },
      { name: 'ACC', full: 'Accounting', desc: 'Revenue is posted to the general ledger via SD-FI integration.' },
    ],
  },
];

export default function BusinessProcesses() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const proc = processes[activeProcess];

  return (
    <section id="processes" className="py-20 lg:py-32 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          label="Business Processes"
          title="End-to-end process flows"
          description="Two integrated business cycles spanning procurement, fulfillment, and financial accounting."
        />

        {/* Process selector */}
        <div className="flex justify-center gap-3 mb-12">
          {processes.map((p, i) => {
            const isActive = i === activeProcess;
            return (
              <button
                key={p.abbr}
                onClick={() => { setActiveProcess(i); setActiveStage(null); }}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-r ${p.color} text-white shadow-lg`
                    : 'bg-ink-50 dark:bg-ink-800/60 text-ink-500 dark:text-ink-400 border border-ink-200 dark:border-ink-700 hover:border-enterprise-300 dark:hover:border-enterprise-700'
                }`}
              >
                {p.abbr}
                <span className="hidden sm:inline ml-2 font-normal opacity-80">{p.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProcess}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-center text-sm text-ink-400 dark:text-ink-500 mb-8 flex items-center justify-center gap-1.5">
              <MousePointerClick size={14} className="text-enterprise-500" />
              Click a stage to see its description
            </p>

            {/* Desktop: Horizontal flow */}
            <div className="hidden sm:flex items-stretch gap-1">
              {proc.stages.map((stage, i) => {
                const isActive = activeStage === i;
                const isDimmed = activeStage !== null && !isActive;
                return (
                  <div key={stage.name} className="flex items-stretch flex-1">
                    <button
                      onClick={() => setActiveStage(isActive ? null : i)}
                      className={`flex-1 px-3 py-4 rounded-xl text-center transition-all duration-300 border ${
                        isActive
                          ? `bg-gradient-to-br ${proc.color} text-white border-transparent shadow-lg`
                          : isDimmed
                            ? 'bg-ink-50 dark:bg-ink-800/40 text-ink-300 dark:text-ink-600 border-transparent'
                            : 'bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-300 border-ink-200 dark:border-ink-700 hover:border-enterprise-300 dark:hover:border-enterprise-700'
                      }`}
                      data-cursor="explore"
                      aria-label={`${stage.full}: ${stage.desc}`}
                    >
                      <div className="text-sm font-bold mb-1">{stage.name}</div>
                      <div className={`text-[10px] leading-tight ${isActive ? 'opacity-90' : 'opacity-60'}`}>
                        {stage.full}
                      </div>
                    </button>
                    {i < proc.stages.length - 1 && (
                      <div className="flex items-center px-0.5">
                        <ArrowRight size={14} className={isDimmed ? 'text-ink-200 dark:text-ink-700' : 'text-enterprise-400 dark:text-enterprise-600'} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile: Vertical flow */}
            <div className="sm:hidden space-y-2">
              {proc.stages.map((stage, i) => {
                const isActive = activeStage === i;
                return (
                  <div key={stage.name}>
                    <button
                      onClick={() => setActiveStage(isActive ? null : i)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 border ${
                        isActive
                          ? `bg-gradient-to-r ${proc.color} text-white border-transparent shadow-md`
                          : 'bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-300 border-ink-200 dark:border-ink-700'
                      }`}
                      aria-label={`${stage.full}: ${stage.desc}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-ink-100 dark:bg-ink-700 text-ink-500'
                        }`}>
                          {i + 1}
                        </span>
                        <div>
                          <div className="text-sm font-bold">{stage.name}</div>
                          <div className={`text-xs ${isActive ? 'opacity-90' : 'opacity-60'}`}>{stage.full}</div>
                        </div>
                      </div>
                    </button>
                    {i < proc.stages.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight size={14} className="text-ink-300 dark:text-ink-600 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stage description */}
            <AnimatePresence mode="wait">
              {activeStage !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="bg-enterprise-50 dark:bg-ink-800/60 border border-enterprise-200 dark:border-ink-700 rounded-xl px-5 py-4 max-w-2xl mx-auto">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-sm font-bold text-enterprise-600 dark:text-enterprise-400">
                        {proc.stages[activeStage].full}
                      </span>
                    </div>
                    <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                      {proc.stages[activeStage].desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
