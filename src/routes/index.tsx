import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Code2,
  Database,
  Bot,
  Server,
  Mail,
  ArrowRight,
  Quote,
  Menu,
  X,
  CheckCircle2,
  Truck,
  Building2,
  TrendingUp,
  ShoppingBag,
  HeartPulse,
  Factory,
} from "lucide-react";
import heroBees from "@/assets/hero-bees.jpg";
import honeycombCell from "@/assets/honeycomb-cell.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soft IT — AI-решения и аналитика для бизнеса" },
      {
        name: "description",
        content:
          "Soft IT — разработка AI-ассистентов, RAG-систем и локальных LLM для крупного и среднего бизнеса в России и СНГ.",
      },
      { property: "og:title", content: "Soft IT — AI-решения для бизнеса" },
      {
        property: "og:description",
        content:
          "Превращаем данные в стратегический актив: сложная аналитика, RAG-системы, AI-ассистенты под ключ.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Примеры работ" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <img
        src="/favicon.png"
        alt="Soft IT"
        className="h-9 w-9"
      />
      <span className="font-bold text-lg tracking-tight text-foreground">Soft IT</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="hidden sm:inline-flex items-center rounded-full border border-primary/60 text-primary px-5 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Свяжитесь с нами
        </a>
        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-primary/60 text-primary px-5 py-2 text-sm font-medium"
            >
              Свяжитесь с нами
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingCard({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`glass-strong px-4 py-3 max-w-[240px] shadow-xl animate-fade-in-up ${className ?? ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 text-xs text-primary font-medium mb-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        AI Insight
      </div>
      <p className="text-sm text-foreground/90 leading-snug">{text}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBees}
          alt="Пчелы и соты — символ слаженной автоматизации"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* Left content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 text-xs text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI · Data · Automation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
            Оставьте нудную рутину <span className="text-primary">робопчелам</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Специализируемся на автономных AI ассистентах/агентах, локальных LLM и умных RAG системах для автоматизации бизнес-задач
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Свяжитесь с нами <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Наши услуги
            </a>
          </div>

          {/* Industry badges */}
          <div className="mt-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Нам доверяют
            </p>
            <div className="flex flex-wrap items-center gap-[14px]">
              {[
                { Icon: Truck, label: "Логистика" },
                { Icon: Building2, label: "Строительство" },
                { Icon: TrendingUp, label: "Финтех" },
                { Icon: ShoppingBag, label: "Ритейл" },
                { Icon: HeartPulse, label: "Медицина" },
                { Icon: Factory, label: "Производство" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border transition-colors hover:border-[rgba(0,212,200,0.5)]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(0,212,200,0.2)",
                    width: 136,
                    height: 102,
                  }}
                >
                  <Icon size={27} color="#00d4c8" />
                  <span className="font-medium text-white" style={{ fontSize: 12 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right floating callouts */}
        <div className="relative h-[480px] hidden lg:block">
          {/* Dotted connector lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 480"
            fill="none"
          >
            <path
              d="M 60 80 Q 180 100 280 60"
              stroke="oklch(0.82 0.15 195)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.5"
            />
            <path
              d="M 80 240 Q 200 230 320 220"
              stroke="oklch(0.82 0.15 195)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.5"
            />
            <path
              d="M 100 400 Q 200 380 300 380"
              stroke="oklch(0.82 0.15 195)"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.5"
            />
            <circle cx="60" cy="80" r="4" fill="oklch(0.82 0.15 195)" />
            <circle cx="80" cy="240" r="4" fill="oklch(0.82 0.15 195)" />
            <circle cx="100" cy="400" r="4" fill="oklch(0.82 0.15 195)" />
          </svg>

          <FloatingCard
            text="От данных к действию: умная автоматизация под ключ"
            className="absolute top-2 right-4 animate-float"
            delay={200}
          />
          <FloatingCard
            text="RAG-системы повышают точность ответов до 94%"
            className="absolute top-44 right-12 animate-float"
            delay={400}
          />
          <FloatingCard
            text="AI-агенты экономят до 60% операционного времени"
            className="absolute bottom-8 right-2 animate-float"
            delay={600}
          />
        </div>
      </div>

      {/* Bottom testimonial card */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="glass-strong p-5 max-w-md flex items-start gap-3 animate-fade-in-up">
          <Quote className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              «Soft IT интегрировал AI-ассистента в нашу службу поддержки — нагрузка на операторов
              упала почти вдвое за два месяца.»
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Алексей Морозов · CTO, FinTrust Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl mb-12 ${className ?? ""}`}>
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function createBeeSprite(squish: number) {
  const c = document.createElement("canvas");
  c.width = 80;
  c.height = 80;
  const ctx = c.getContext("2d")!;
  if (squish !== 1) {
    ctx.translate(40, 40);
    ctx.scale(1, squish);
    ctx.translate(-40, -40);
  }
  ctx.font = "52px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.filter = "drop-shadow(1px 2px 2px rgba(0,0,0,0.4))";
  ctx.fillText("🐝", 40, 40);
  return c;
}

type BeeConfig = {
  x: number;
  y: number;
  size: number;
  speed: number;
  amplitude: number;
  frequency: number;
  wingFrame: number;
  wingSpeed: number;
  t: number;
  baseY: number;
};

function BeesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sprite1 = createBeeSprite(1);
    const sprite2 = createBeeSprite(0.85);

    const isMobile = window.innerWidth < 768;
    const sizes = isMobile ? [0.3, 0.38] : [0.38, 0.45, 0.52, 0.35, 0.42];

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const h0 = Math.max(canvas.clientHeight, 200);
    const bees: BeeConfig[] = sizes.map((size, i) => {
      const baseY = 60 + Math.random() * Math.max(h0 - 120, 100);
      return {
        x: -100 - i * 180,
        y: baseY,
        baseY,
        size,
        speed: 10.0 + Math.random() * 10.0,
        amplitude: 40 + Math.random() * 40,
        frequency: 0.015 + Math.random() * 0.01,
        wingFrame: 0,
        wingSpeed: 6.25,
        t: Math.random() * 1000,
      };
    });

    let raf = 0;
    let frame = 0;
    const loop = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      frame++;

      for (const bee of bees) {
        bee.x += bee.speed;
        bee.t += 1;
        bee.y = bee.baseY + Math.sin(bee.frequency * bee.t) * bee.amplitude;

        const slope = bee.amplitude * bee.frequency * Math.cos(bee.frequency * bee.t);
        const angle = Math.atan(slope) * 0.5;

        const sprite = Math.floor(frame / 0.12) % 2 === 0 ? sprite1 : sprite2;

        ctx.save();
        ctx.globalAlpha = 0.82;
        ctx.translate(bee.x, bee.y);
        ctx.rotate(angle);
        const d = bee.size * 80;
        ctx.drawImage(sprite, -d / 2, -d / 2, d, d);
        ctx.restore();

        if (bee.x > w + 100) {
          bee.x = -100;
          bee.baseY = 60 + Math.random() * Math.max(h - 120, 100);
          bee.t = Math.random() * 1000;
        }
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

function About() {
  const stats = [
    { v: "50+", l: "проектов" },
    { v: "7", l: "лет опыта" },
    { v: "30+", l: "клиентов" },
    { v: "65%", l: "сокращение ручного труда" },
  ];
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated photorealistic bees on canvas */}
      <BeesCanvas />


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <SectionHeading eyebrow="О нас" title="О компании Soft IT" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soft IT — российская технологическая компания, которая помогает среднему и крупному
              B2B-бизнесу в России и СНГ строить инфраструктуру данных и внедрять искусственный
              интеллект там, где он действительно даёт измеримый результат.
            </p>
            <p>
              Мы проектируем и разрабатываем заказное ПО, развёртываем локальные LLM в периметре
              заказчика, создаём RAG-системы для корпоративных баз знаний и обучаем AI-ассистентов
              работать внутри ваших бизнес-процессов — от продаж до операционной поддержки.
            </p>
            <p>
              Наша команда — инженеры данных, ML-исследователи и продуктовые архитекторы с опытом в
              финансах, ритейле, промышленности и юридическом секторе.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.l} className="glass p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Code2,
      title: "Разработка ПО",
      desc: "Заказная разработка корпоративных продуктов, веб- и мобильных приложений под бизнес-задачи и SLA.",
    },
    {
      icon: Database,
      title: "RAG-системы",
      desc: "Интеллектуальные базы знаний с retrieval-augmented generation: точные ответы из ваших документов.",
    },
    {
      icon: Bot,
      title: "AI-ассистенты под ключ",
      desc: "Обученные на ваших данных ассистенты, интегрированные в CRM, поддержку и операционные процессы.",
    },
    {
      icon: Server,
      title: "Локальные AI-модели",
      desc: "Развёртывание LLM в инфраструктуре клиента — данные остаются внутри периметра, без облака.",
    },
  ];
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Услуги"
            title="Что мы делаем"
            subtitle="Полный цикл: от исследования данных до эксплуатации AI-систем в продакшене."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass p-7 h-full group hover:bg-white/10 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={22} />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Process() {
  const steps = [
    { n: "01", t: "Аудит и анализ", d: "Изучаем процессы, данные и инфраструктуру — находим точки для AI" },
    { n: "02", t: "Архитектура решения", d: "Проектируем систему: модель, стек, интеграции, периметр безопасности" },
    { n: "03", t: "Разработка и обучение", d: "Строим MVP, обучаем модель на ваших данных, настраиваем RAG или агентов" },
    { n: "04", t: "Интеграция и тесты", d: "Встраиваем в ваши системы, тестируем точность и нагрузку" },
    { n: "05", t: "Запуск и поддержка", d: "Разворачиваем в продакшн, мониторим, дообучаем по результатам" },
  ];
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desktop zigzag Y offsets (px)
  const offsets = [0, 52, 0, 52, 0];

  // Honeycomb wallpaper SVG (encoded) — section background only
  const honeycomb =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='32' viewBox='0 0 28 32'><polygon points='14,1 27,8 27,24 14,31 1,24 1,8' fill='none' stroke='%2300d4c8' stroke-width='0.6'/></svg>\")";

  return (
    <section id="process" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
      <style>{`
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes hexNumPulse {
          0%, 100% { text-shadow: 0 0 0 rgba(0,212,200,0); }
          50% { text-shadow: 0 0 20px rgba(0,212,200,1); }
        }
        .hex-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.35s ease;
        }
        .hex-card:hover {
          transform: translateY(-12px) scale(1.06) !important;
          filter: drop-shadow(0 0 18px rgba(0,212,200,0.6))
                  drop-shadow(0 0 40px rgba(0,212,200,0.25))
                  brightness(1.15);
          animation-play-state: paused;
        }
        .hex-card:hover .hex-num { animation: hexNumPulse 1.2s ease-in-out infinite; }
        .hex-card .hex-inner { transition: transform 0.35s ease; transform-origin: 50% 50%; }
        .hex-card:hover .hex-inner { transform: scale(0.955); }
        .hex-card .hex-glow { transition: opacity 0.35s ease; opacity: 0.3; }
        .hex-card:hover .hex-glow { opacity: 0.7; }
        .hex-card .hex-sheen-stop-a { transition: stop-opacity 0.5s ease; }
        .hex-card:hover .hex-sheen-stop-a { stop-opacity: 0.55; }
      `}</style>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: honeycomb, backgroundRepeat: "repeat", opacity: 0.03 }}
      />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            className="mb-6"
            eyebrow="Процесс"
            title="Этапы разработки и внедрения решений на базе AI"
          />
        </Reveal>

        {/* Desktop layout */}
        <div className="relative hidden md:block" style={{ height: 468, perspective: 1000 }}>
          {/* Connecting dashed line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1300 468"
            preserveAspectRatio="none"
          >
            <path
              d="M 130 195 Q 260 195, 325 221 T 520 247 Q 650 247, 715 221 T 910 195 Q 1040 195, 1105 221 T 1170 247"
              fill="none"
              stroke="#00d4c8"
              strokeWidth="2"
              strokeDasharray="8,5"
              opacity="0.5"
              style={{
                strokeDashoffset: visible ? 0 : 1600,
                strokeDasharray: visible ? "8,5" : "1600",
                transition: "stroke-dashoffset 2s ease-out, stroke-dasharray 2s ease-out",
              }}
            />
          </svg>

          <div className="relative flex justify-between items-start h-full">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="hex-card relative"
                style={{
                  width: 273,
                  height: 312,
                  marginTop: offsets[i],
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0) scale(1) rotateY(0deg)"
                    : "translateY(0) scale(0.7) rotateY(45deg)",
                  transition:
                    "opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease",
                  transitionDelay: `${i * 180}ms`,
                  animation: visible
                    ? `hexFloat 4s ease-in-out ${i * 0.8}s infinite`
                    : undefined,
                }}
              >
                <HexCard step={s} idx={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="hex-card"
              style={{
                width: 221,
                height: 255,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0) scale(1) rotateY(0deg)"
                  : "translateY(0) scale(0.7) rotateY(45deg)",
                transition:
                  "opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease",
                transitionDelay: `${i * 180}ms`,
                animation: visible
                  ? `hexFloat 4s ease-in-out ${i * 0.8}s infinite`
                  : undefined,
              }}
            >
              <HexCard step={s} idx={i} mobile />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HexCard({
  step,
  idx,
  mobile,
}: {
  step: { n: string; t: string; d: string };
  idx: number;
  mobile?: boolean;
}) {
  // Pointy-top hexagon, viewBox 100 x 115.47
  const pts = "50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87";
  const n = idx;
  void pts;
  void n;
  return (
    <div className="relative w-full h-full">
      <img
        src={honeycombCell}
        alt=""
        loading="lazy"
        width={1024}
        height={1024}
        className="hex-inner absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        style={{
          filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(0,212,200,0.18))",
        }}
        draggable={false}
      />
      {/* Dark teal inner overlay for text readability, clipped to hex shape */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: "polygon(50% 4%, 94% 28%, 94% 76%, 50% 100%, 6% 76%, 6% 28%)",
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(8,30,24,0.78) 0%, rgba(8,30,24,0.62) 55%, rgba(8,30,24,0.25) 85%, rgba(8,30,24,0) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="hex-glow absolute inset-0 pointer-events-none"
        style={{
          clipPath: "polygon(50% 4%, 94% 28%, 94% 76%, 50% 100%, 6% 76%, 6% 28%)",
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,200,0.25) 0%, rgba(0,212,200,0) 70%)",
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <div
          className="hex-num"
          style={{
            color: "#00d4c8",
            fontSize: mobile ? 39 : 47,
            fontWeight: 800,
            lineHeight: 1,
            textShadow: "0 0 20px rgba(0,212,200,0.8)",
          }}
        >
          {step.n}
        </div>
        <div
          className="text-white"
          style={{
            fontSize: mobile ? 16 : 17,
            fontWeight: 600,
            maxWidth: 182,
            marginTop: 10,
          }}
        >
          {step.t}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: mobile ? 13 : 14,
            maxWidth: 169,
            marginTop: 5,
            lineHeight: 1.4,
          }}
        >
          {step.d}
        </div>
      </div>
    </div>
  );
}

function Cases() {
  const items = [
    {
      tag: "Юриспруденция",
      title: "RAG-система для юридической компании",
      desc: "Корпоративная база знаний на 200 000+ документов с цитированием источников и контролем доступа по ролям.",
    },
    {
      tag: "Банкинг",
      title: "AI-ассистент службы поддержки банка",
      desc: "Гибридный бот: классификация обращений, генерация ответов и эскалация — снизил нагрузку операторов на 45%.",
    },
    {
      tag: "Промышленность",
      title: "Локальная LLM на производстве",
      desc: "On-premise развёртывание модели для анализа технической документации и подсказок инженерам в офлайн-цехах.",
    },
  ];
  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Кейсы"
            title="Примеры работ"
            subtitle="Несколько проектов, которые показывают, как мы решаем задачи разной сложности."
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="glass p-7 h-full flex flex-col">
                <span className="inline-flex w-fit text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-medium">
                  {c.tag}
                </span>
                <h3 className="text-xl font-bold mt-4">{c.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed flex-1">{c.desc}</p>
                <button className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all">
                  Подробнее <ArrowRight size={14} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const items = [
    {
      quote:
        "Команда Soft IT глубоко погрузилась в наши процессы. RAG-система стала рабочим инструментом юристов уже через два месяца после старта.",
      name: "Ирина Соколова",
      title: "Операционный директор",
      company: "ЛексПро",
      color: "bg-rose-500",
      initial: "Л",
    },
    {
      quote:
        "Локальная LLM закрыла нашу боль с конфиденциальностью. Все данные остаются внутри контура, а скорость ответа выросла в три раза.",
      name: "Дмитрий Власов",
      title: "CTO",
      company: "ПромСистемы",
      color: "bg-sky-500",
      initial: "П",
    },
    {
      quote:
        "Чёткая методология, понятные сроки, прозрачная архитектура. С Soft IT работаем уже над вторым проектом и планируем третий.",
      name: "Анна Зеленцова",
      title: "CEO",
      company: "RetailEdge",
      color: "bg-emerald-500",
      initial: "R",
    },
  ];
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Отзывы"
            title="Отзывы клиентов"
            subtitle="Что говорят руководители компаний, с которыми мы работаем."
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <div className="glass p-7 h-full flex flex-col">
                <Quote className="text-primary mb-4" size={24} />
                <p className="text-foreground/90 leading-relaxed flex-1">«{r.quote}»</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`h-11 w-11 rounded-lg ${r.color} grid place-items-center text-white font-bold shrink-0`}
                  >
                    {r.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{r.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {r.title}, {r.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contacts" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Свяжитесь с нами"
            subtitle="Расскажите о задаче, мы вернёмся с предварительной оценкой и планом работ."
          />
          <div className="space-y-4 mt-4">
            <a
              href="mailto:info@softit.io"
              className="glass px-5 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors"
            >
              <Mail className="text-primary" size={20} />
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">info@softit.io</div>
              </div>
            </a>
            <div className="glass px-5 py-4">
              <div className="text-xs text-muted-foreground mb-1">Работаем</div>
              <div className="font-medium">Россия и СНГ · удалённо и on-site</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="glass-strong p-6 sm:p-8 space-y-4"
          >
            {(
              [
                { n: "name", l: "Имя", t: "text" },
                { n: "email", l: "Email", t: "email" },
                { n: "company", l: "Компания", t: "text" },
              ] as const
            ).map((f) => (
              <div key={f.n}>
                <label className="text-xs text-muted-foreground mb-1.5 block">{f.l}</label>
                <input
                  required
                  name={f.n}
                  type={f.t}
                  className="w-full bg-input/60 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />
              </div>
            ))}
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-input/60 border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Отправка..." : <><span>Отправить</span><ArrowRight size={16} /></>}
            </button>
            {sent && (
              <div className="flex items-center gap-2 text-sm text-primary animate-fade-in">
                <CheckCircle2 size={16} /> Спасибо! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            {error && (
              <div className="text-sm text-red-500 animate-fade-in">
                Не удалось отправить сообщение. Попробуйте позже или напишите на info@softit.io
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            AI-решения, которые работают в реальном бизнесе.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Навигация
          </div>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Контакты
          </div>
          <a
            href="mailto:info@softit.io"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            info@softit.io
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© 2025 Soft IT. Все права защищены.</span>
          <span>Сделано с заботой о данных.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Cases />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
