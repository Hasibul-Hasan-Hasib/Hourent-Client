import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Full application routes
import Error from '@/pages/404/Error';
import Layout from '@/layouts/Layout';
import Loader from '@/components/Loader/Loader';

// Pages
import Home from '@/pages/Home/Home';
import SignUp from '@/pages/Auth/SignUp';
import Login from '@/pages/Auth/Login';
import PropertyListing from '@/pages/Properties/PropertyListing';
import PropertyDetails from '@/pages/Properties/PropertyDetails';
import SavedProperties from '@/pages/SavedProperties/SavedProperties';
import SellerRequest from '@/pages/Seller/SellerRequest';
import SellerDashboard from '@/pages/Seller/SellerDashboard';
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import AddProperty from '@/pages/AddEditProperty/AddProperty';
import About from '@/pages/About/About';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/properties',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <PropertyListing />
          </Suspense>
        ),
      },
      {
        path: '/property/:id',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <PropertyDetails />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/saved-properties',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <SavedProperties />
          </Suspense>
        ),
      },
      {
        path: '/become-seller',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <SellerRequest />
          </Suspense>
        ),
      },
      {
        path: '/seller-dashboard',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <SellerDashboard />
          </Suspense>
        ),
      },
      {
        path: '/admin-dashboard',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <AdminDashboard />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/signup',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: '/add-listing',
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <AddProperty />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader></Loader>}>
        <Error />
      </Suspense>
    ),
  }
]);
