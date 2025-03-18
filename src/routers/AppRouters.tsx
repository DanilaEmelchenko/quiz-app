import { HashRouter, Navigate, Route, Routes } from "react-router";
import { FormLayout } from "../layouts";
import { FormPage, StartPage, SucessPage } from "../pages";

export const enum Path {
  Start = "/",
  Form = "/form",
  Sucess = "sucess",
}

export const AppRouters = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<FormLayout />}>
          <Route path={Path.Start} element={<StartPage />} />
          <Route path={`${Path.Form}/:pageId`} element={<FormPage />} />
          <Route
            path={`${Path.Form}/${Path.Sucess}`}
            element={<SucessPage />}
          />
          <Route path="*" element={<Navigate to={Path.Start} replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
