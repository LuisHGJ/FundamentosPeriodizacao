import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Dumbbell,
  LineChart,
  Layers,
  Mail,
  Medal,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import logoAsset from "@/assets/logo.png";
import coachesAsset from "@/assets/treinadores.png";
import dylanAsset from "@/assets/dylan.jpg";
import leonardoAsset from "@/assets/Leonardo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundamentos da Periodização | Kaizen Powerlifting" },
      {
        name: "description",
        content:
          "Curso on-line de Fundamentos da Periodização com Leonardo Hermisdorf e Dylan Lopes. Monte programas de força que geram resultado real.",
      },
      { property: "og:title", content: "Fundamentos da Periodização | Kaizen Powerlifting" },
      {
        property: "og:description",
        content:
          "Aprenda a periodizar treinos de força do zero: modelos, volume, intensidade e progressão aplicados na prática.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA = "#oferta";

const modules = [
  {
    n: "Módulo 01",
    title: "Bases da Periodização",
    icon: Layers,
    items: [
      "Princípios do treinamento de força",
      "Volume, intensidade e densidade na prática",
      "Como ler e interpretar a carga de treino",
    ],
  },
  {
    n: "Módulo 02",
    title: "Modelos e Estruturas",
    icon: LineChart,
    items: [
      "Linear, ondulatório e em blocos",
      "Macro, meso e microciclos",
      "Escolha do modelo por perfil de atleta",
    ],
  },
  {
    n: "Módulo 03",
    title: "Aplicação e Pico de Forma",
    icon: Target,
    items: [
      "Peaking e taper para competição",
      "Ajustes de rota e gestão de fadiga",
      "Montagem de programa do início ao fim",
    ],
  },
];

const benefits = [
  { icon: Dumbbell, title: "Preço acessível", text: "Investimento baixo para um conteúdo de alto nível." },
  { icon: Zap, title: "100% online", text: "Assista de qualquer lugar." },
  { icon: ShieldCheck, title: "Quem ensina vive o esporte", text: "Treinadores com anos de experiência e resultados comprovados." },
  { icon: Trophy, title: "Recorde atrás de recorde", text: "Atletas formados por esses profissionais batendo recordes no Brasil e no mundo." },
];

const faqs = [
  {
    q: "Preciso ser treinador para fazer o curso?",
    a: "Não. O curso serve tanto para profissionais que montam treinos quanto para atletas que querem entender e conduzir a própria periodização.",
  },
  // {
  //   q: "As aulas são ao vivo ou gravadas?",
  //   a: "As aulas acontecem on-line, começando dia 06/09 às 10h, e ficam disponíveis para revisão depois.",
  // },
  {
    q: "Posso comprar apenas um módulo?",
    a: "Sim. O Módulo 1 sai por R$127,00 e os Módulos 2 e 3 por R$197,00 cada. Levando os três juntos, o valor total é R$442,00 com 15% de desconto.",
  },
  {
    q: "Serve para outros esportes além do powerlifting?",
    a: "Sim. Os fundamentos de periodização se aplicam a qualquer treinamento de força e podem ser adaptados ao seu contexto.",
  },
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const pixKey = "ebc5097d-52f2-4d5e-aaa3-6f65a49fc3e9";

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("Kaizen.powerlifting@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="stripes-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,oklch(0.55_0.22_27/0.35),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-0 text-center">
          <img
            src={logoAsset}
            alt="Kaizen Powerlifting"
            className="animate-rise mx-auto h-16 w-16 rounded-md object-contain"
          />

          <h1 className="animate-rise text-gradient-blood mt-5 text-5xl sm:text-7xl md:text-8xl">
            Fundamentos da
            <br />
            Periodização
          </h1>

          <p className="animate-rise mt-5 text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-base">
            Com Leonardo Hermisdorf e Dylan Lopes
          </p>

          <div className="animate-rise m-8 flex flex-wrap items-center justify-center gap-4">
            <div className="surface-card flex items-center gap-3 px-5 py-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold">06/09</span>
              <span className="h-4 w-px bg-border" />
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold">10h</span>
            </div>
            <div className="surface-card px-5 py-3 text-sm font-semibold">
              Módulo 1: <span className="text-primary">R$127,00</span>
              <span className="mx-2 text-border">|</span>3 módulos:{" "}
              <span className="text-primary">R$442,00</span>
            </div>
          </div>

          <div className="animate-rise mt-8">
            <a href={CTA} className="btn-blood animate-pulse-glow text-lg">
              Quero garantir minha vaga
            </a>
            <br />
          </div>

          <div className="relative mt-10">
            <img
              src={coachesAsset}
              alt="Leonardo Hermisdorf e Dylan Lopes, treinadores do curso"
              className="animate-drift mx-auto w-full max-w-3xl object-contain"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,var(--background))]" />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="relative -mt-10 px-5">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-6xl">
              Treinar forte não basta se não tiver um bom plano.
              <br style={{ marginBottom: "2px" }}/>
              <span className="text-primary">Treinar organizado</span> é o que vai alavancar seus resultados.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              No Fundamentos da Periodização vamos destrinchar os conceitos de o que é a periodização de treino e passar como nós da Kaizen Powerlifting pensamos ela.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="surface-card h-full p-4 transition-transform duration-300 hover:-translate-y-1.5">
                <b.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MÓDULOS */}
      {/* <section className="border-y border-border bg-card/40 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">O que você vai dominar</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Três módulos que levam você da teoria à planilha pronta.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.n} delay={i * 140}>
                <div className="surface-card group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-blood)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <m.icon className="h-8 w-8 text-primary" />
                  <p className="mt-5 text-xs font-bold tracking-[0.3em] text-primary uppercase">
                    {m.n}
                  </p>
                  <h3 className="mt-2 text-2xl">{m.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* TREINADORES */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Os professores do dia
            </p>
            <h2 className="mt-3 text-center text-3xl sm:text-5xl">
              Aulas com quem está no pódio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Profissionais que vivem o esporte de força no mais alto nível,
              como atleta e como treinador.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Dylan */}
            <Reveal>
              <div className="surface-card h-full p-4">
                <div className="stripes-bg mb-6 overflow-hidden rounded-lg border border-border">
                  <img
                    src={dylanAsset}
                    alt="Dylan Azeredo Lopes"
                    className="h-[700px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <h3 className="text-2xl text-primary">Dylan Azeredo Lopes</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Treinador de Powerlifting com experiência em competições nacionais e internacionais.
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Medalhista de ouro como treinador na IPF</span>
                  </li>
                  <li className="flex gap-3">
                    <Medal className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Mundial: Levantamento Terra, categoria Sub Júnior</span>
                  </li>
                  <li className="flex gap-3">
                    <Medal className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Sul-Americano: categorias Open, Júnior e Sub Júnior</span>
                  </li>
                  <li className="flex gap-3">
                    <Medal className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Brasileiro: categorias Open, Júnior e Sub Júnior</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  <span className="surface-card px-4 py-2">CREF 076438-G/RJ</span>
                </div>
              </div>
            </Reveal>

            {/* Leonardo */}
            <Reveal delay={140}>
              <div className="surface-card h-full p-4">
                <div className="stripes-bg mb-6 overflow-hidden rounded-lg border border-border">
                  <img
                    src={leonardoAsset}
                    alt="Leonardo Hermisdorf"
                    className="h-[700px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <h3 className="text-2xl text-primary">Leonardo Hermisdorf</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Atleta de Powerlifting de alto nível, Educador Físico e referência no cenário nacional da força.
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>7° do mundo em 2026</span>
                  </li>
                  <li className="flex gap-3">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>TOP 1 do Brasil em 2026</span>
                  </li>
                  <li className="flex gap-3">
                    <Medal className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Campeão Brasileiro de Powerlifting –93 kg</span>
                  </li>
                  <li className="flex gap-3">
                    <Dumbbell className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>800kg+ de total no Powerlifting</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  <span className="surface-card px-4 py-2">CREF 044721-G/MG</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="stripes-bg border-y border-border px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">Escolha seu acesso</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              • Módulo 1 por R$127,00 <br/>
              • Módulos 2 e 3 por R$197,00 cada <br/>
              • ou leve os 3 por R$442,00 com 15% OFF.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="surface-card flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <h3 className="text-2xl">Módulo 1</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bases da Periodização.
                </p>
                <p className="mt-8 font-display text-5xl">R$127,00</p>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  avulso
                </p>
                <div className="flex-1" />
                <a href="https://link.infinitepay.io/kaizenpwl/VC1D-qXgnCck4Q0-127,00" target="_blank" rel="noopener noreferrer" className="btn-blood mt-6 w-full text-sm py-2 whitespace-nowrap">
                  Comprar módulo 1
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="surface-card flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <h3 className="text-2xl">Pix</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Copie a chave e pague direto.
                </p>
                <p className="mt-8 font-display text-3xl break-all">{pixKey}</p>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  chave pix
                </p>
                <div className="flex-1" />
                <button onClick={copyPix} className="btn-blood mt-6 w-full text-sm py-2 whitespace-nowrap flex items-center justify-center gap-2">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copiado!" : "Copiar chave Pix"}
                </button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="surface-card flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1.5"
                style={{ boxShadow: "var(--glow-blood)" }}>
                <span className="mb-3 inline-block self-start rounded-full bg-[var(--gradient-blood)] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground uppercase">
                  15% OFF
                </span>
                <h3 className="text-2xl">3 módulos juntos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A formação completa em periodização.
                </p>
                <p className="mt-8 font-display text-5xl text-primary">R$442,00</p>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  economia de R$79,00
                </p>
                <div className="flex-1" />
                <a href="https://link.infinitepay.io/kaizenpwl/VC1D-6dUXh2UpkH-442,00" target="_blank" rel="noopener noreferrer" className="btn-blood animate-pulse-glow mt-6 w-full text-sm py-2 whitespace-nowrap">
                  Garantir os 3 módulos
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-3xl text-center">
              <Mail className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 text-2xl sm:text-3xl">Envie seu comprovante</h2>
              <p className="mt-3 text-muted-foreground">
                Após realizar o pagamento, envie o comprovante para o e-mail abaixo para
                confirmar sua vaga e receber o acesso ao curso:
              </p>
              <p className="mt-5 font-display text-xl break-all text-primary inline-flex items-center gap-3">
                Kaizen.powerlifting@gmail.com
                <button onClick={copyEmail} className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedEmail ? "Copiado!" : "Copiar"}
                </button>
              </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-5xl">Dúvidas frequentes</h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <div className="surface-card overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="stripes-bg border-t border-border px-5 py-24 text-center">
        <Reveal>
          <img
            src={logoAsset}
            alt="Kaizen Powerlifting"
            className="mx-auto h-14 w-14 rounded-md object-contain"
          />
          <h2 className="mt-8 text-3xl sm:text-5xl">
            Pare de treinar no escuro.
            <br />
            <span className="text-primary">Periodize.</span>
          </h2>
          <a href={CTA} className="btn-blood mt-8 text-lg">
            Quero minha vaga em 06/09
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs tracking-wider text-muted-foreground uppercase">
        Kaizen Powerlifting © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
