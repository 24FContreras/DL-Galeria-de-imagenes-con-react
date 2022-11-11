import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React" />

      <main>
        <Card
          image="https://p.potaufeu.asahi.com/e9fc-p/picture/27043057/9491ce60ff3885a5eaaebf1f13df5df5.jpg"
          title="Gloria de Tohoku"
          description="Sendai Ikuei ganó su primer título nacional 5-13 contra Shimonoseki Kokusai, dándole al área de Tohoku su primer campeonato en el Koshien."
        />
        <Card
          image="https://static.chunichi.co.jp/image/article/size1/d/0/b/4/d0b4d4b2535315ff85053a91c74d8d0f_1.jpg"
          title="Duelo de Titanes"
          description="Yamada Haruto (Ohmi Koukou) lanzando contra Asano Shōgo (Takamatsu Shogyo), los mejores jugadores de su generación en su categoría."
        />
        <Card
          image="https://cdn.hk01.com/di/media/images/dw/20220818/637017991317557248429635.jpeg/f1bpoz2S2fbpkLtoXJva5Q94ld_Dl1gVgsGi5oLBouY"
          title="Por tí"
          description="Aikodai Meiden dedicando el partido a Katsuto Seto, compañero quien murió inesperadamente un mes antes del torneo."
        />
        <Card
          image="https://www.nikkansports.com/baseball/highschool/news/img/202208180000981-w500_2.jpg"
          title="Caballo Negro"
          description="Shimonoseki Kokusai dió la sorpresa del año, ganando en la última jugada y eliminando al equipo más exitoso y mejor rankeado de japón, Osaka Toin."
        />
        <Card
          image="https://webun.jp/images/item/7872000/7872387/eacbd811-a58a-497b-96ee-04be4bdf7fcc.jpg"
          title="Bienvenidos de vuelta!"
          description="El público volvió al estadio por primera vez desde el inicio de la pandemia, eliminando las restricciones para las escuelas y público general"
        />
        <Card
          image="https://www.nikkansports.com/baseball/highschool/news/img/202208080000076-w500_22.jpg"
          title="Ichifuna Soul"
          description="Shiritsu Funabashi preparándose para tocar Ichifuna Soul, canción de apoyo compuesta por un ex-trombonista de la banda, quien murió por cáncer a los 20 años."
        />
      </main>

      <Footer
        description="Aprende más sobre el torneo nacional de baseball escolar japonés (Koshien)"
        buttonText="Leer más"
      />
    </div>
  );
}

export default App;
