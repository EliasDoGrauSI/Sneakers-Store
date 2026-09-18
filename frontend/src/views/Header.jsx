export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <span className="header__logo">QUADRA</span>

        <nav className="header__nav">
          <a href="#colecao">Tênis</a>
          <a href="#marcas">Marcas</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a href="#colecao" className="btn btn-primary header__cta">
          Ver coleção
        </a>
      </div>
    </header>
  );
}
