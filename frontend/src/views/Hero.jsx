import SneakerMark from './SneakerMark';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <h1>
            Feito pra quem
            <br />
            joga no asfalto
          </h1>
          <p>
            Tênis pensados pra corte de 90 graus, salto de rebote e jogo de
            rua. Sem enfeite — só grip, resposta e resistência pra rodada
            inteira.
          </p>
          <div className="hero__actions">
            <a href="#colecao" className="btn btn-primary">
              Explorar tênis
            </a>
            <a href="#sobre" className="btn btn-outline">
              Como testamos
            </a>
          </div>
        </div>

        <div className="hero__art">
          <SneakerMark />
        </div>
      </div>
    </section>
  );
}
