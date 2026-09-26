import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { triggerSaleCelebration } from '../ui/Confetti';
import { Zap, Terminal, Server, Bot, CheckCircle2, Sparkles, Lock, ArrowRight } from 'lucide-react';

export const ThunderCircuitUnlock: React.FC = () => {
  const { unlockOffer } = useSale();
  const [activeNodes, setActiveNodes] = useState<number[]>([1]); // Node 1 active by default
  const [isCharging, setIsCharging] = useState(false);

  const nodes = [
    {
      id: 1,
      title: 'DSA Matrix Core',
      icon: Terminal,
      color: 'from-amber-400 to-orange-500',
      desc: 'First Principles Algorithms & Trees',
      code: 'struct TreeNode { int val; };'
    },
    {
      id: 2,
      title: 'Distributed System Node',
      icon: Server,
      color: 'from-blue-400 to-indigo-500',
      desc: 'High-Concurrency Kafka & Redis',
      code: 'await redis.setex("surge", 86400, 0.40);'
    },
    {
      id: 3,
      title: 'GenAI Agent Neural Net',
      icon: Bot,
      color: 'from-purple-400 to-cyan-400',
      desc: 'Autonomous Multi-Agent Swarms',
      code: 'agent.orchestrate({ mode: "THUNDER_SURGE" });'
    }
  ];

  const handleToggleNode = (id: number) => {
    if (activeNodes.includes(id)) return;

    const newNodes = [...activeNodes, id];
    setActiveNodes(newNodes);

    if (newNodes.length === 3) {
      setIsCharging(true);
      setTimeout(() => {
        setIsCharging(false);
        unlockOffer();
        triggerSaleCelebration();
      }, 600);
    }
  };

  const handleQuickUnlock = () => {
    setActiveNodes([1, 2, 3]);
    setIsCharging(true);
    setTimeout(() => {
      setIsCharging(false);
      unlockOffer();
      triggerSaleCelebration();
    }, 400);
  };

  const chargePercentage = Math.round((activeNodes.length / 3) * 100);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Circuit Energy Bar */}
      <div className="w-full mb-6">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="flex items-center gap-1.5 text-amber-300">
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            THUNDER OVERDRIVE CIRCUIT CHARGE
          </span>
          <span className="text-indigo-300 font-bold">{chargePercentage}% UNLOCKED</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-800/80 border border-slate-700/60 overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-400 transition-all duration-500 shadow-lg shadow-cyan-500/50"
            style={{ width: `${chargePercentage}%` }}
          />
        </div>
      </div>

      {/* Nodes Interactive Grid */}
      <p className="text-xs text-slate-300 mb-4 text-center">
        ⚡ Click each tech module to connect the Strike Overdrive Grid & unlock <span className="text-amber-300 font-bold">40% OFF</span>:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
        {nodes.map((node) => {
          const isNodeActive = activeNodes.includes(node.id);
          const IconComponent = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => handleToggleNode(node.id)}
              className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden group cursor-pointer ${
                isNodeActive
                  ? 'bg-slate-900/90 border-indigo-500/60 shadow-lg shadow-indigo-950/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    isNodeActive
                      ? `bg-gradient-to-br ${node.color} text-black font-bold shadow-md`
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                {isNodeActive ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                )}
              </div>

              <h4 className="font-semibold text-sm text-slate-100 mb-1">{node.title}</h4>
              <p className="text-[11px] text-slate-400 mb-2 leading-tight">{node.desc}</p>

              <div className="p-1.5 rounded bg-slate-950 border border-slate-800/80 font-mono text-[10px] text-indigo-300 truncate">
                {node.code}
              </div>

              {!isNodeActive && (
                <div className="mt-2 text-[10px] text-amber-400/90 font-mono flex items-center gap-1 font-semibold">
                  <span>Click to sync</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
        <button
          onClick={handleQuickUnlock}
          disabled={isCharging}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-indigo-600 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{isCharging ? 'Synthesizing Grant...' : 'Instant 1-Click Code Unlock'}</span>
        </button>
      </div>
    </div>
  );
};
