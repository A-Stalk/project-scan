import './App.css';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Layout from './layout/Layout';
import Main from './layout/Main/Main';

function App() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}

export default App;
