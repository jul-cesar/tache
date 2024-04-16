import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import PersistLogin from "./utils/PersistLogin";
import { privateRoutes, publicRoutes } from "./models/routes";
import { UiContextProvider } from "./context/ui";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/auth";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import TasksPage from "./pages/TasksPage";
import AsignedPage from "./pages/AsignedPage";

function App() {
  return (
    <UiContextProvider>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster richColors />

          <Routes>
            <Route element={<PersistLogin />}>
              <Route element={<ProtectedRoute />}>
                <Route path={privateRoutes.TASKS} element={<TasksPage />} />
                <Route
                  path={privateRoutes.ASIGNEDTASKS}
                  element={<AsignedPage />}
                />
              </Route>
            </Route>
            <Route path={publicRoutes.LOGIN} element={<Login />} />
            <Route path={publicRoutes.REGISTER} element={<Register />} />
            <Route path={publicRoutes.PROFILE} element={<Profile />} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </UiContextProvider>
  );
}

export default App;
