import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Users from "./users/Users";
import Projects from "./projects/Projects";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";
import Success from "./Sucess";
import UserDetails from "./users/UserDetails";
import NotFound from "./auth/NotFound";
import React from "react";
import Login from "./auth/Login";
import { AuthProvider } from "./auth/Auth";
import Logout from "./auth/Logout";
import PrivateRoute from "./auth/PrivateRoute";
const LazyAbout = React.lazy(() => import("./about/About"));

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<ProjectOne />} />
          <Route path="projectone" element={<ProjectOne />} />
          <Route path="projecttwo" element={<ProjectTwo />} />
        </Route>
        <Route path="/success" element={<Success />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
