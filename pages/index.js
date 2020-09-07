import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

export default function Home() {
  return (
    <div>
      <Head title="Home - DevSoutinho Site" />
      <Header />
      <a href="http://localhost:3000/api/graphql/"></a>
      <main>
        <Typography>
          Conteúdo unico de cada página
        </Typography>
      </main>
      <Footer />
    </div>
  );
}
