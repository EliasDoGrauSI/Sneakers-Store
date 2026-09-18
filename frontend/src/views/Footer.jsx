export default function Footer() {
  return (
    <footer id="sobre" className="footer">
      <div className="wrap footer__inner">
        <div>
          <span className="footer__logo">QUADRA</span>
          <p>Tênis de basquete pra quem joga na rua, não só assiste.</p>
        </div>

        <nav className="footer__links">
          <a href="#colecao">Tênis</a>
          <a href="#marcas">Marcas</a>
          <a href="#colecao">Lançamentos</a>
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} QUADRA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
