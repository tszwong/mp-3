import { createBrowserRouter, Route, Routes, RouterProvider} from "react-router-dom";
// import Content from './components/Content.tsx';
import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import Education from './components/Education.tsx';
import Leadership from './components/Leadership.tsx';
import Projects from './components/Projects.tsx';
import Work from './components/Work.tsx';
import Volunteer from './components/Volunteer.tsx';
import './App.css';
import styled from "styled-components";


const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const ContentContainer = styled.div`
    width: 70%;
    background-color: darkgray;
    padding: 2vw;
    overflow-y: auto;
    flex: 1;
`;

const Root = () => {
    return (
        <>
            <Header />
            <PageContainer>
                <Navbar />
                <ContentContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/leadership" element={<Leadership />} />
                        <Route path="/volunteer" element={<Volunteer />} />
                    </Routes>
                </ContentContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
  {path: "*", Component: Root},
]);


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App