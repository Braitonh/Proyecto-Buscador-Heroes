import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { DcScreem } from '../components/dc/DcScreem';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container mt-2'>
            <Routes>
                <Route exact path='/marvel' element = { <MarvelScreen/> } />
                <Route exact path='/hero/:heroeId' element = { <HeroScreen/> } />
                <Route exact path='/dc' element = { <DcScreem/> } />
                <Route exact path='/search' element = { <SearchScreen/> } />
                <Route path='/' element={ <Navigate to='/marvel'/> } />
                
            </Routes>
        </div>


    </>
  )
}
