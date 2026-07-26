import logo from '../assets/logo.png';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orbit" aria-hidden="true" />
      <img className="hero-logo" src={logo} alt="畅研" />
      <h1 id="hero-title" className="hero-title">
        材料科学可视化工具集
      </h1>
      <p className="hero-subtitle">一站式探索晶体结构、相图与材料计算</p>
    </section>
  );
}
