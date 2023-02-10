import Navbar from '../../components/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured';
import FeaturedProperties from '../../components/FeaturedProperties';
import MailList from '../../components/MailList';
import Footer from '../../components/Footer';
import styles from '../../styles';
type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={`${styles.flexCenter} flex-col gap-8 mt-12`}>
        <Featured />
        <h1 className="w-5xl text-lg">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
