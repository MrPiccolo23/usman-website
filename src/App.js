// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
// import OrderProvider from './contexts/OrderProvider';
// import ContactScreen from './screens/ContactScreen';
// import ErrorScreen from './screens/ErrorScreen';
// import HomeScreen from './screens/HomeScreen';
// import OrderScreen from './screens/OrderScreen';
// import ProductDetailScreen from './screens/ProductDetailScreen';
// import ProductsScreen from './screens/ProductsScreen';
// import ServicesDetailScreen from './screens/ServicesDetailScreen';

// const App = () => {
//     return (
//         <BrowserRouter>
//             <OrderProvider>
//                 <Navbar />
//                 <Switch>
//                     <Route exact path="/" component={HomeScreen} />
//                     <Route exact path="/contact" component={ContactScreen} />
//                     <Route exact path="/products/" component={ProductsScreen} />
//                     <Route exact path="/services/:title" component={ServicesDetailScreen} />
//                     <Route exact path="/products/:title" component={ProductDetailScreen} />
//                     <Route exact path="/orders" component={OrderScreen} />
//                     <Route path="*" component={ErrorScreen} />
//                 </Switch>
//                 <Footer />
//             </OrderProvider>
//         </BrowserRouter>
//     );
// };
// export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import OrderProvider from './contexts/OrderProvider';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import ServicesDetailScreen from './screens/ServicesDetailScreen';
import ScrollToTop from '../src/components/Navbar/ScrollToTop'; // Import ScrollToTop

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop /> {/* Add ScrollToTop component here */}
            <OrderProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/contact" component={ContactScreen} />
                    <Route exact path="/products/" component={ProductsScreen} />
                    <Route exact path="/services/:title" component={ServicesDetailScreen} />
                    <Route exact path="/products/:title" component={ProductDetailScreen} />
                    <Route exact path="/orders" component={OrderScreen} />
                    <Route path="*" component={ErrorScreen} />
                </Switch>
                <Footer />
            </OrderProvider>
        </BrowserRouter>
    );
};

export default App;
