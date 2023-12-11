"use client"
import React from 'react';
import Search from "./Search";
import Stories from "./Stories";
import Pagination from "./Pagination";
import AppProvider from './Context API/AppProvider';


const Page = () => {
  return (
    <AppProvider>
      <>
        <h1> Welcome to Harish Tech News</h1>
        <Search />
        <Pagination />
        <Stories />
      </>
    </AppProvider>
  );
};

export default Page;