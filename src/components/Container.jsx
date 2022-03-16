// import React, { useState } from 'react'
// import About from './About'
// import Project from './Project'
// import Contact from './Contact'
// import Footer from './Footer'
// import Header from './Header'

// function Container() {
//     const [currentPage, setCurrentPage] = useState ('About')

//     const renderPage = () => {
//         if (currentPage === 'About') {
//             return (<About />)
//         }
//         if (currentPage === 'Project') {
//             return (<Project />)
//         }
//         return (<Contact />)
//     }
//     const handlePageChange = (page) => setCurrentPage(page)
//     return (
//     <div>
//         <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//     {renderPage()}
//     <Footer />
//     </div>
//     )
// }
// export default Container