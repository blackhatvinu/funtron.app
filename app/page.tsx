'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  CircleDollarSign,
  Dice5,
  Flame,
  Gamepad2,
  Gift,
  Menu,
  ShieldCheck,
  Trophy,
  Wallet,
  X,
  Zap,
} from 'lucide-react'

const games = [
  { name: 'Crash Rocket', category: 'Instant', multiplier: '2.14x', color: 'from-cyan-400 to-blue-600', icon: '🚀' },
  { name: 'Mines', category: 'Originals', multiplier: '1.86x', color: 'from-rose-400 to-purple-600', icon: '💣' },
  { name: 'Dice Duel', category: 'Table', multiplier: '3.20x', color: 'from-amber-300 to-orange-600', icon: '🎲' },
  { name: 'Wheel', category: 'Live', multiplier: '5.00x', color: 'from-fuchsia-400 to-pink-600', icon: '🎡' },
]

const liveBets = [
  ['0x7A...91C2', 'Crash Rocket', '0.42 TRX', '+0.90 TRX'],
  ['0xD4...0B84', 'Dice Duel', '12.00 TRX', '+22.80 TRX'],
  ['0x2F...A6E1', 'Mines', '2.50 TRX', '+4.65 TRX'],
]

export default function Page() {
  const [walletOpen, setWalletOpen] = useState(false)
  const [connected, setConnected] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function connectWallet() {
    setConnected(true)
    setWalletOpen(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#090b14] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(36,114,255,.22),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(237,38,116,.1),transparent_30%)]" />
      <div className="relative z-10">
        <div className="border-b border-white/10 bg-[#12162a] px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[.16em] text-cyan-300">
          <Zap className="mr-1 inline size-3" /> Provably fair gaming • Instant withdrawals • TRON network
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="TetherPlay home">
            <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_22px_rgba(34,211,238,.35)]"><Dice5 className="size-6" /></div>
            <span className="text-xl font-black tracking-tight">TETHER<span className="text-cyan-400">PLAY</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/65 md:flex">
            <a href="#games" className="transition hover:text-white">Games</a><a href="#live" className="transition hover:text-white">Live bets</a><a href="#rewards" className="transition hover:text-white">Rewards</a><a href="#fair" className="transition hover:text-white">Provably fair</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setWalletOpen(true)} className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold transition hover:border-cyan-400/60 hover:bg-cyan-400/10 sm:block">
              <Wallet className="mr-2 inline size-4 text-cyan-300" /> {connected ? '0x4b...7f2A' : 'Connect wallet'}
            </button>
            <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-white/10 p-2.5 md:hidden">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </header>
        {menuOpen && <div className="mx-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#15192b] p-4 text-sm font-semibold md:hidden"><a href="#games">Games</a><a href="#live">Live bets</a><a href="#rewards">Rewards</a><button onClick={() => setWalletOpen(true)} className="rounded-xl bg-cyan-400 px-4 py-3 text-black">Connect wallet</button></div>}

        <section id="top" className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-24 lg:pt-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-200"><span className="size-2 animate-pulse rounded-full bg-emerald-400" /> 12,841 players online</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-7xl">PLAY SMART.<br /><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">WIN LOUD.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">The fast, fair, community-powered gaming arena on TRON. Jump into instant games, stack rewards, and play with confidence.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#games" className="rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-black text-[#061018] shadow-[0_0_28px_rgba(34,211,238,.28)] transition hover:bg-cyan-300">Explore games <ArrowUpRight className="ml-2 inline size-4" /></a><button onClick={() => setWalletOpen(true)} className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold hover:bg-white/10">Start playing</button></div>
            <div className="mt-10 flex gap-8 text-sm"><div><p className="text-2xl font-black">$4.8M+</p><p className="text-white/40">Paid to players</p></div><div><p className="text-2xl font-black">99.9%</p><p className="text-white/40">Fairness score</p></div><div><p className="text-2xl font-black">24/7</p><p className="text-white/40">On-chain play</p></div></div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] rounded-[2rem] border border-white/10 bg-[#111526]/90 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-white/40">Live multiplier</p><p className="mt-1 text-3xl font-black text-cyan-300">2.84x</p></div><div className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">LIVE</div></div>
            <div className="relative grid h-56 place-items-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,.24),transparent_45%),linear-gradient(145deg,#151f48,#171126)]"><div className="absolute bottom-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" /><div className="absolute bottom-7 left-1/2 h-40 w-px origin-bottom -rotate-[28deg] bg-gradient-to-t from-cyan-300 to-transparent" /><div className="text-center"><Flame className="mx-auto size-12 text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,.8)]" /><p className="mt-2 text-xs font-bold uppercase tracking-[.25em] text-white/45">rocket is flying</p></div></div>
            <div className="mt-4 flex gap-2"><div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p className="text-[10px] uppercase text-white/40">Your bet</p><p className="font-bold">0.00 TRX</p></div><button className="rounded-xl bg-cyan-400 px-5 text-sm font-black text-black">Place bet</button></div>
          </div>
        </section>

        <section id="games" className="mx-auto max-w-7xl px-4 py-12 sm:px-8"><div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Choose your game</p><h2 className="mt-2 text-3xl font-black tracking-tight">Popular right now</h2></div><a href="#games" className="text-sm font-bold text-white/45 hover:text-white">View all <ArrowUpRight className="inline size-4" /></a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{games.map((game) => <button key={game.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111526] p-5 text-left transition hover:-translate-y-1 hover:border-cyan-300/50"><div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 transition group-hover:opacity-20`} /><div className="relative flex items-start justify-between"><div className="grid size-14 place-items-center rounded-2xl bg-white/10 text-3xl">{game.icon}</div><span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white/50">{game.category}</span></div><h3 className="relative mt-6 text-lg font-black">{game.name}</h3><p className="relative mt-1 text-sm text-white/40">Last win <span className="font-bold text-emerald-300">{game.multiplier}</span></p></button>)}</div></section>

        <section id="live" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1.1fr]"><div><div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-rose-300"><span className="size-2 rounded-full bg-rose-400" /> Live activity</div><h2 className="text-3xl font-black">The house is<br /><span className="text-white/40">always moving.</span></h2><p className="mt-4 max-w-md text-sm leading-6 text-white/50">Watch bets land in real time, verify every result on-chain, and find your edge.</p><div className="mt-7 flex gap-3"><div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p className="text-xs text-white/40">Total bets today</p><p className="mt-1 text-xl font-black">184,209</p></div><div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p className="text-xs text-white/40">Biggest win</p><p className="mt-1 text-xl font-black text-emerald-300">+8,420 TRX</p></div></div></div><div className="rounded-2xl border border-white/10 bg-[#111526] p-5"><div className="mb-4 flex justify-between text-xs font-bold uppercase tracking-widest text-white/35"><span>Player</span><span>Bet / Win</span></div>{liveBets.map(([player, game, bet, win]) => <div key={player} className="flex items-center justify-between border-t border-white/8 py-4"><div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 text-xs font-black">{player.slice(2,4)}</div><div><p className="text-sm font-bold">{player}</p><p className="text-xs text-white/40">{game}</p></div></div><div className="text-right"><p className="text-xs text-white/45">{bet}</p><p className="text-sm font-black text-emerald-300">{win}</p></div></div>)}</div></section>

        <section id="rewards" className="mx-4 mb-12 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-fuchsia-400/10 px-6 py-10 sm:mx-auto sm:max-w-7xl sm:px-12"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><div className="mb-3 flex items-center gap-2 text-cyan-300"><Gift className="size-5" /><span className="text-xs font-bold uppercase tracking-[.2em]">Player rewards</span></div><h2 className="text-3xl font-black">Your play should pay you back.</h2><p className="mt-2 text-sm text-white/50">Earn XP, unlock levels, and claim weekly drops.</p></div><button onClick={() => setWalletOpen(true)} className="rounded-xl bg-white px-6 py-3.5 text-sm font-black text-[#0b1020]">Claim your rewards <ArrowUpRight className="ml-2 inline size-4" /></button></div></section>

        <footer id="fair" className="border-t border-white/10 px-4 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/35 sm:flex-row"><p>© 2026 TetherPlay. Built for the TRON community.</p><div className="flex gap-5"><span><ShieldCheck className="mr-1 inline size-3" /> Provably fair</span><span>18+ Play responsibly</span><span>Terms & Privacy</span></div></div></footer>
      </div>
      {walletOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"><div role="dialog" aria-modal="true" aria-labelledby="wallet-title" className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#15192b] p-6 shadow-2xl"><div className="flex items-center justify-between"><div><h2 id="wallet-title" className="text-xl font-black">Connect wallet</h2><p className="mt-1 text-sm text-white/45">Choose a wallet to start playing.</p></div><button aria-label="Close" onClick={() => setWalletOpen(false)} className="rounded-lg p-2 hover:bg-white/10"><X /></button></div><div className="mt-6 flex flex-col gap-3"><button onClick={connectWallet} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-left font-bold hover:border-cyan-400/50"><span><Wallet className="mr-3 inline text-cyan-300" /> TronLink</span><ArrowUpRight className="size-4 text-white/40" /></button><button onClick={connectWallet} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-left font-bold hover:border-cyan-400/50"><span><CircleDollarSign className="mr-3 inline text-purple-300" /> WalletConnect</span><ArrowUpRight className="size-4 text-white/40" /></button></div><p className="mt-5 text-center text-[11px] leading-5 text-white/30">By connecting, you agree to our terms. Never share your private keys.</p></div></div>}
    </main>
  )
}

export const dynamic = 'force-static'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _keepIcons = [Gamepad2, Trophy]
