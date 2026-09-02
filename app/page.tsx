'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const nav = [['About', '#about'], ['Focus Areas', '#focus'], ['Selected Work', '#work'], ['Journey', '#journey']];
const areas = [
  ['01', '환경영향평가 및 사후관리 제도 연구', '평가 체계의 신뢰성을 높이고, 사후환경영향조사 결과가 실질적으로 환류되는 방안을 연구합니다.'],
  ['02', '생물다양성 및 서식지 보전', '개발사업과 도시 환경스트레스가 야생생물 서식적합도와 개체군에 미치는 영향을 분석합니다.'],
  ['03', '공간분석 및 경관생태 모델링', 'GIS와 정보이론 기반 경관지수로 토지이용·토지피복 변화를 읽고 생태계 서비스 가치를 평가합니다.'],
  ['04', '친환경 계획과 기후변화 적응', '비도시지역 관리와 재생에너지 생태 영향, 기후적응을 잇는 정책 대안을 모색합니다.'],
];
const projects = [
  ['01', '환경영향평가 사후환경영향조사 개선 및 환류체계 구축 연구', '사후환경영향조사가 단순 모니터링에 머물지 않도록 제도 분석과 현장 이행 실태 진단을 통해 단계별 환류 모델을 설계했습니다.', '사후환경영향조사 제도 분석 · 정책 제언'],
  ['02', '개발사업에 따른 야생생물 서식적합도 및 도시 생태 영향 분석', '고라니·삵 서식적합도 모델링과 도심 참새 현장 조사를 연결해 서식지 파편화와 도시 환경스트레스의 영향을 분석했습니다.', 'MaxEnt · 현장 생태조사 · 생물다양성 평가'],
  ['03', '비도시지역 친환경적 관리 및 토지환경 평가 개선 연구', '세종시 등 급변 지역의 토지피복 변화를 정보이론 경관지수로 분석해 환경 중심 성장관리의 근거를 마련했습니다.', 'GIS 공간분석 · 경관지수 · 토지이용 정책'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main id="top">
    <a className="skip" href="#content">본문으로 건너뛰기</a>
    <header className="header">
      <a className="wordmark" href="#top" aria-label="정슬기 포트폴리오 첫 화면">JEONG SEULGI<span>.</span></a>
      <nav className="nav" aria-label="주요 메뉴">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-contact" href="#contact">Contact</a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}<span className="sr-only">메뉴 {menuOpen ? '닫기' : '열기'}</span></button>
      {menuOpen && <nav id="mobile-menu" className="mobile-menu" aria-label="모바일 메뉴">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
    </header>

    <section className="band hero" id="content">
      <div className="content hero-content">
        <p className="eyebrow">Research portfolio / 2026</p>
        <h1>생태 데이터에서<br />실효성 있는 정책까지.</h1>
        <div className="hero-bottom"><p className="lead">정슬기 · 생태환경 및 환경영향평가 제도 연구원<br />과학적 공간분석과 생태 데이터로 지속가능한 국토 이용을 설계합니다.</p><a className="primary-cta" href="#contact">연구 협업 문의 <ArrowUpRight size={16} /></a></div>
      </div>
    </section>

    <section className="band" id="about"><div className="content split"><p className="eyebrow">01 / About</p><div><h2>개발과 보전 사이의<br /><span>더 나은 기준을 찾습니다.</span></h2><p className="body">한국환경연구원(KEI)에서 환경영향평가 및 사후환경영향조사 제도 개선과 생태환경 정책 연구를 수행하고 있습니다. 조경학·생태조경학 전문성을 토대로 개발사업이 서식지와 생물다양성에 미치는 영향을 규명하고, 공간분석과 결합해 실질적인 저감 방안과 제도 개선안을 도출합니다.</p></div></div></section>

    <section className="band band-stripe" id="focus"><div className="content"><p className="eyebrow">02 / Focus areas</p><h2 className="section-title">관찰을 분석으로,<br />분석을 <span>정책으로.</span></h2><div className="area-list">{areas.map(([n,title,body]) => <article className="area" key={n}><p className="meta">{n}</p><h3>{title}</h3><p className="body">{body}</p></article>)}</div></div></section>

    <section className="band" id="work"><div className="content"><p className="eyebrow">03 / Selected work</p><h2 className="section-title">연구의 질문을<br /><span>현장의 변화로.</span></h2><div className="project-list">{projects.map(([n,title,body,skill]) => <article className="project" key={n}><div><p className="meta">Project {n}</p><h3>{title}</h3></div><div><p className="body">{body}</p><p className="skill">{skill}</p><p className="placeholder">성과 수치 및 원문 링크: [입력 필요]</p></div></article>)}</div></div></section>

    <section className="band" id="skills"><div className="content split"><p className="eyebrow">04 / Skills</p><div><h2>Evidence<br /><span>into action.</span></h2><div className="skill-list"><p><b>Policy research</b> 환경영향평가 제도·지침 · 생물다양성 정책</p><p><b>Spatial analysis</b> ArcGIS · QGIS · FRAGSTATS · MaxEnt</p><p><b>Research practice</b> 정책보고서 · 학술논문 · 현장 생태조사</p></div></div></div></section>

    <section className="band" id="journey"><div className="content"><p className="eyebrow">05 / Experience & education</p><div className="journey"><article><p className="meta">Experience</p><h3>한국환경연구원(KEI)</h3><p className="body">연구원 · 2016.03 – 현재<br />환경영향평가 및 환경정책 연구</p></article><article><p className="meta">Education</p><h3>서울대학교 대학원</h3><p className="body">협동과정 조경학 박사과정 수료 · 2025<br />생태조경학 석사 · 조경학 학사</p></article></div><details><summary>06 / Career vision <span>열기</span></summary><p className="body">국토 개발과 자연환경 보전의 균형을 위해 데이터 기반 생태 분석과 현실성 있는 환경영향평가 제도를 고도화합니다. 학술적 연구 성과를 현장 규제와 실무 지침으로 연결하는 환경 정책·생태 전문가를 지향합니다.</p></details><details><summary>Selected publications & reports <span>열기</span></summary><p className="body">환경영향평가 토지환경 분야의 토지이용 평가항목 고찰 연구 (2021)<br />도시의 환경스트레스가 참새의 번식수행 전략과 개체군 최적상태에 미치는 영향 (2020)<br />환경영향평가 사후환경영향조사 개선 및 환류체계 구축방안 연구 (KEI, 2021)<br />탄소중립 이행을 위한 해상풍력발전의 생태환경적 쟁점 및 개선방향 (KEI 포커스, 2021)</p></details></div></section>

    <section className="band contact" id="contact"><div className="content"><p className="eyebrow">07 / Contact</p><h2>더 나은 환경을 위한<br /><span>대화를 기다립니다.</span></h2><a className="email" href="mailto:j.seulgi106@gmail.com">j.seulgi106@gmail.com <ArrowUpRight size={18} /></a><p className="body">한국환경연구원 (KEI)<br />LinkedIn · ResearchGate · Google Scholar · ORCID: [입력 필요]</p><footer><span>© 2026 Jeong Seulgi</span><a href="#top">Back to top</a></footer></div></section>
  </main>;
}
