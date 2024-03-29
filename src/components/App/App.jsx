import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../Pages/Home/Home'));
const NotFound = lazy(() => import('../../Pages/NotFound/NotFound'));
const Video = lazy(() => import('../../Pages/Video/Video'));
const AllTests = lazy(() => import('../../Pages/AllTests/AllTests'));
const Tests = lazy(() => import('../../Pages/Tests/Tests'));
const MainPage = lazy(() => import('../../Pages/MainPage/MainPage'));
// const Description = lazy(() => import('../Modal/Modal'));
const AnsweredQuestions = lazy(() =>
  import('../../Pages/AnsweredQuestions/AnsweredQuestions')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="page" element={<Home />} />
        <Route path="tests" element={<Tests />} />
        <Route path="video" element={<Video />} />

        <Route path="AnsweredQuestions" element={<AnsweredQuestions />} />
        <Route path="alltests" element={<AllTests />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
