import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, BookOpen, HandHeart, Heart, Mail, MapPin, Menu, Sprout, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-fundacji.jpg.asset.json";
import logoAnimationAsset from "@/assets/animacja-logo.mp4.asset.json";
import libraryImage from "@/assets/biblioteka-w-sloncu.jpg";
import childImage from "@/assets/dziecko-wybiera-ksiazke.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bliżej Rozwoju — Książki bliżej dzieci" },
      { name: "description", content: "Fundacja wspierająca czytelnictwo dzieci i rozwój kulturalny w Polsce. Poznaj projekt Biblioteka w Słońcu." },
      { property: "og:title", content: "Bliżej Rozwoju — Książki bliżej dzieci" },
      { property: "og:description", content: "Małe biblioteczki, wielkie historie. Poznaj projekt Biblioteka w Słońcu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const nav = [
  ["O fundacji", "fundacja"], ["O projekcie", "projekt"], ["Dołącz do nas", "dolacz"],
  ["Zafunduj biblioteczkę", "zafunduj"], ["Wspieraj nas", "wspieraj"], ["Kontakt", "kontakt"],
] as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#start" className="flex items-center gap-3" aria-label="Bliżej Rozwoju — strona główna">
            <img src={logoAsset.url} alt="Logo fundacji" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-display text-lg font-semibold">Bliżej Rozwoju</span>
          </a>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Główna nawigacja">
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <button className="grid h-11 w-11 place-items-center rounded-md border border-foreground/15 xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-foreground/10 bg-background px-5 py-5 xl:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-foreground/10 py-3 font-medium">{label}</a>)}</nav>}
      </header>

      <section id="start" className="relative min-h-[94svh] pt-20">
        <img src={libraryImage} width={1600} height={1008} alt="Plenerowa biblioteczka pełna książek przy placu zabaw" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto flex min-h-[calc(94svh-5rem)] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-rise">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]"><span className="h-px w-10 bg-current" />Fundacja Bliżej Rozwoju</p>
            <h1 className="font-display text-5xl leading-[1.04] sm:text-7xl lg:text-8xl">Książki bliżej dzieci.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">Tworzymy miejsca, w których opowieści są zawsze pod ręką — przy placu zabaw, w parku, obok szkoły.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="warm" size="hero"><a href="#projekt">Poznaj projekt <ArrowRight /></a></Button>
              <Button asChild variant="paper" size="hero"><a href="#wspieraj">Wspieraj nas <Heart /></a></Button>
            </div>
          </div>
          <a href="#fundacja" className="absolute bottom-8 right-5 hidden items-center gap-2 text-sm font-bold lg:flex">Czytaj dalej <ArrowDown className="animate-bob" /></a>
        </div>
      </section>

      <section id="fundacja" className="section-pad bg-paper">
        <div className="page-number">01</div>
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div data-reveal className="reveal"><p className="chapter">O fundacji</p><h2 className="section-title">Rozwój zaczyna się od wyobraźni.</h2></div>
          <div data-reveal className="reveal lg:pt-14"><p className="lead">Wspieramy czytelnictwo i rozwój kulturalny w Polsce. Chcemy, by dobra książka była naturalną częścią codzienności każdego dziecka.</p><div className="mt-10 grid gap-5 sm:grid-cols-3"><div className="border-t border-foreground/25 pt-5"><BookOpen className="mb-5 text-primary"/><h3 className="font-display text-xl">Czytelnictwo</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Budujemy trwałą relację dzieci z książką.</p></div><div className="border-t border-foreground/25 pt-5"><Sprout className="mb-5 text-primary"/><h3 className="font-display text-xl">Rozwój</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Rozbudzamy ciekawość i samodzielność.</p></div><div className="border-t border-foreground/25 pt-5"><MapPin className="mb-5 text-primary"/><h3 className="font-display text-xl">Bliskość</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Działamy tam, gdzie dzieci spędzają czas.</p></div></div></div>
        </div>
      </section>

      <section id="projekt" className="section-pad bg-secondary">
        <div className="page-number">02</div>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div data-reveal className="reveal relative"><img src={childImage} loading="lazy" width={1008} height={1264} alt="Dziecko wybierające książkę z plenerowej biblioteczki" className="aspect-[4/5] w-full object-cover"/><div className="sun-badge"><span className="text-3xl">☀</span><span>Start za<br/><b>10 dni</b></span></div></div>
          <div data-reveal className="reveal"><p className="chapter">Pierwszy projekt</p><h2 className="section-title">Biblioteka<br/><em>w Słońcu</em></h2><p className="lead mt-7">Małe, drewniane biblioteczki z wyselekcjonowaną literaturą dla dzieci w wieku 2–15 lat.</p><div className="my-8 flex items-center gap-4 border-y border-foreground/15 py-5"><span className="font-display text-3xl text-primary">Weź</span><ArrowRight/><span className="font-display text-3xl text-primary">Przeczytaj</span><ArrowRight/><span className="font-display text-3xl text-primary">Oddaj</span></div><p className="leading-relaxed text-muted-foreground">Koncepcja Take&amp;Return, inspirowana ideą Little Free Library, pozwala swobodnie pożyczyć książkę i zwrócić ją do tej samej lub innej biblioteczki.</p></div>
        </div>
      </section>

      <section id="dolacz" className="section-pad bg-forest text-forest-foreground">
        <div className="page-number opacity-30">03</div>
        <div className="mx-auto max-w-7xl px-5 lg:px-10"><div data-reveal className="reveal max-w-3xl"><p className="chapter text-sage-light">Dołącz do nas</p><h2 className="section-title">Jedna biblioteczka.<br/>Setki nowych historii.</h2><p className="mt-7 max-w-2xl text-lg leading-relaxed text-forest-muted">Szukamy lokalnych społeczności, szkół, przedszkoli, opiekunów miejsc i wolontariuszy, którzy pomogą książkom docierać dalej.</p></div><div className="mt-14 grid gap-px bg-forest-line md:grid-cols-3">{[["01","Zgłoś miejsce","Plac zabaw, park, szkoła lub przedszkole."],["02","Zostań opiekunem","Dbaj o biblioteczkę i jej księgozbiór."],["03","Podaruj książki","Pomóż nam tworzyć mądre kolekcje."]].map(([n,t,d])=><div className="bg-forest p-7 lg:p-10" key={n}><span className="text-sm text-sage-light">{n}</span><h3 className="mt-12 font-display text-2xl">{t}</h3><p className="mt-3 text-forest-muted">{d}</p></div>)}</div></div>
      </section>

      <section id="zafunduj" className="section-pad bg-paper">
        <div className="page-number">04</div><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-10"><div data-reveal className="reveal"><p className="chapter">Zafunduj biblioteczkę</p><h2 className="section-title">Zostaw po sobie miejsce pełne opowieści.</h2></div><div data-reveal className="reveal lg:pt-16"><p className="lead">Sponsorzy, patroni i darczyńcy umożliwiają powstawanie kolejnych punktów na czytelniczej mapie Polski.</p><ul className="my-8 space-y-4">{["solidna drewniana biblioteczka","starannie wybrany księgozbiór","oznaczenie partnera projektu","opieka i uzupełnianie książek"].map(x=><li className="flex items-center gap-3" key={x}><span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-xs">✓</span>{x}</li>)}</ul><Button asChild variant="warm" size="hero"><a href="#kontakt">Porozmawiajmy <Mail /></a></Button></div></div>
      </section>

      <section id="wspieraj" className="section-pad relative bg-terracotta text-primary-foreground">
        <div className="page-number opacity-30">05</div><div className="mx-auto max-w-4xl px-5 text-center lg:px-10" data-reveal><HandHeart className="mx-auto mb-8 h-12 w-12"/><p className="chapter text-primary-foreground/75">Wspieraj nas</p><h2 className="section-title">Każde wsparcie otwiera kolejną książkę.</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">Możesz pomóc datkiem, książkami, patronatem albo udostępnieniem naszej idei.</p><Button asChild variant="paper" size="hero" className="mt-9"><a href="#kontakt">Chcę pomóc <ArrowRight /></a></Button></div>
      </section>

      <section id="kontakt" className="section-pad bg-background">
        <div className="page-number">06</div><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-24 lg:px-10"><div data-reveal className="reveal"><p className="chapter">Kontakt</p><h2 className="section-title">Zróbmy razem coś dobrego.</h2><p className="lead mt-7">Masz miejsce na biblioteczkę, chcesz zostać partnerem albo wesprzeć projekt? Napisz do nas.</p><p className="mt-8 border-l-2 border-primary pl-5 text-sm text-muted-foreground">Adres e-mail i numer telefonu wymagają uzupełnienia przed uruchomieniem strony.</p></div><form data-reveal className="reveal space-y-5" onSubmit={(e)=>{e.preventDefault();setSent(true)}}><label className="field-label">Imię i nazwisko<input required className="field" /></label><label className="field-label">E-mail<input required type="email" className="field" /></label><label className="field-label">W czym możemy pomóc?<select className="field"><option>Chcę zafundować biblioteczkę</option><option>Chcę zgłosić miejsce</option><option>Chcę zostać wolontariuszem</option><option>Inna sprawa</option></select></label><label className="field-label">Wiadomość<textarea required rows={4} className="field resize-none" /></label><Button type="submit" variant="warm" size="hero">Wyślij wiadomość <ArrowRight /></Button>{sent&&<p className="text-sm text-primary" role="status">Dziękujemy. Formularz jest gotowy wizualnie; wysyłka zostanie uruchomiona po dodaniu adresu kontaktowego.</p>}</form></div>
      </section>

      <section className="bg-paper py-20"><div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 text-center"><video className="h-64 w-64 rounded-full object-cover mix-blend-multiply" autoPlay muted loop playsInline poster={logoAsset.url}><source src={logoAnimationAsset.url} type="video/mp4"/></video><div><p className="font-display text-3xl">Bliżej Rozwoju</p><p className="mt-2 text-muted-foreground">Książki bliżej dzieci. Biblioteki bliżej codzienności.</p></div></div></section>
      <footer className="border-t border-foreground/10 bg-paper px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Fundacja Bliżej Rozwoju</p><p>Biblioteka w Słońcu · Polska</p></div></footer>
    </main>
  );
}