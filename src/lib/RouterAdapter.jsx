import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const RouterContext = createContext(undefined);

// Map page names to routes
const pageToRoute = {
  'home': '/',
  'listings': '/listings',
  'property-details': '/property',
  'saved-properties': '/saved-properties',
  'become-seller': '/become-seller',
  'seller-dashboard': '/seller-dashboard',
  'admin-dashboard': '/admin-dashboard',
  'login': '/login',
  'signup': '/signup',
  'forgot-password': '/forgot-password',
  'add-listing': '/add-listing',
  'edit-listing': '/edit-listing',
};

// Map routes to page names
const routeToPage = {
  '/': 'home',
  '/listings': 'listings',
  '/property': 'property-details',
  '/property/:id': 'property-details',
  '/saved-properties': 'saved-properties',
  '/become-seller': 'become-seller',
  '/seller-dashboard': 'seller-dashboard',
  '/admin-dashboard': 'admin-dashboard',
  '/login': 'login',
  '/signup': 'signup',
  '/forgot-password': 'forgot-password',
  '/add-listing': 'add-listing',
  '/edit-listing': 'edit-listing',
  '/edit-listing/:id': 'edit-listing',
};

export function RouterAdapter({ children }) {
  const navigateRouter = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [pageData, setPageData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Determine current page from location
  const getCurrentPage = () => {
    const path = location.pathname;
    // Check for routes with params first
    if (path.startsWith('/property/') && params.id) {
      return 'property-details';
    }
    if (path.startsWith('/edit-listing/') && params.id) {
      return 'edit-listing';
    }
    // Check exact matches
    return routeToPage[path] || 'home';
  };

  const currentPage = getCurrentPage();

  // Update pageData when params change
  useEffect(() => {
    if (params.id) {
      setPageData({ id: parseInt(params.id) });
    } else {
      setPageData(null);
    }
  }, [params]);

  const navigate = (page, data) => {
    const route = pageToRoute[page];
    if (!route) return;

    setPageData(data || null);
    
    // Handle routes with params
    if (page === 'property-details' && data?.id) {
      navigateRouter(`/property/${data.id}`);
    } else if (page === 'edit-listing' && data?.id) {
      navigateRouter(`/edit-listing/${data.id}`);
    } else {
      navigateRouter(route);
    }
    
    window.scrollTo(0, 0);
  };

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    if (role === 'seller') {
      navigate('seller-dashboard');
    } else if (role === 'admin') {
      navigate('admin-dashboard');
    } else {
      navigate('home');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('home');
  };

  return (
    <RouterContext.Provider value={{ 
      currentPage, 
      navigate, 
      pageData,
      isAuthenticated,
      userRole,
      login,
      logout
    }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterAdapter');
  }
  return context;
}
