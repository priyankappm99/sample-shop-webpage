import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../components/Home';
import ProductList from '../../components/ProductList';
import Cart from '../../components/cart/Cart';
import TopBar from '../../components/topBar/TopBar';
import Footer from '../../components/footer/Footer';

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
  const products = [
    { id: '1', imageUrl: 'photoframe1.jpg', name: 'Product 1', price: 10 },
    { id: '2', imageUrl: 'photoframe1.jpg', name: 'Product 2', price: 20 },
    { id: '3', imageUrl: 'photoframe1.jpg', name: 'Product 3', price: 30 },
    { id: '4', imageUrl: 'photoframe1.jpg', name: 'Product 4', price: 30 },
     { id: '5', imageUrl: 'photoframe1.jpg', name: 'Product 5', price: 30 },
     { id: '6', imageUrl: 'photoframe1.jpg', name: 'Product 6', price: 30 },
    // Add more products as needed
  ];
  return (
    <Router>
      <div className="app" ref={contentRef}>
      <TopBar/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/cart" element={<Cart />} />
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
