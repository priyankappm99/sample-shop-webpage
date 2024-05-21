import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../components/Home';
import ProductList from '../../components/ProductList';
import Cart from '../../components/cart/Cart';
import TopBar from '../../components/topBar/TopBar';
import Footer from '../../components/footer/Footer';
import { PRODUCTS } from '../../constants/ProductsJson';
import ProductDetails from '../../components/ProductDetails';

// Define the props interface
interface DashBoardProps {
  
}

// Define the component
const DashBoard: React.FC<DashBoardProps> = ({  }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    if (!contentRef.current) return;

    const pdf = new jsPDF('p', 'mm', 'a4');

    html2canvas(contentRef.current, { scrollY: -window.scrollY }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('document.pdf');
    });
  };

  return (
    <Router>
      <div className="app" ref={contentRef}>
      <TopBar/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList products={PRODUCTS} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetails />} />

          </Routes>
        </main>
       < Footer/>
      </div>
      <div >
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
    </Router>
  );
};

export default DashBoard;
