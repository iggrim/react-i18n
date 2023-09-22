import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { NotFoundPage } from 'pages/NotFoundPage';
import { LangSwitcher } from "./components/LangSwitcher"
import { Suspense } from 'react';
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Загрузка...">
      <div className="nav">
        <Link to={'/'}>{t("Главная")}</Link>
        <Link to={'/about'}>{t("О сайте")}</Link>
      </div>
      
      <Routes>
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>

      <LangSwitcher/>

    </Suspense>

  );
}

export default App;
