import { Header } from 'components';
import { AiOutlineHome, AiOutlineLike } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FiPieChart } from 'react-icons/fi';
import { BrowserRouter as Router } from 'react-router-dom';


const menuItems = [
  {
    url: '/',
    label: 'Início',
    icon: <AiOutlineHome />,
  },
  {
    url: '/cadastro',
    label: 'Cadastro Positivo',
    icon: <FiPieChart />,
  },
  {
    url: '/consulta',
    label: 'Sua Consulta',
    icon: <BsSearch />,
  },
  {
    url: '/vantagens',
    label: 'Vantagens',
    icon: <AiOutlineLike />,
  },
];

const Layout = ({ children }: any) => {
  return (
    <>
      <Router>
        <Header loggedIn menu={menuItems} />
        {children}

      </Router>
    </>);
};

export default Layout;
