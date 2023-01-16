import { Suspense, lazy, memo } from "react";
import PublicRouting from "./routes/PublicRouting";
import PrivateRouting from "./routes/PrivateRouting";
import AuthenticateRouting from "./routes/AuthenticateRouting";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";

const Index = lazy(() => import("@pages/Index"));
const Product = lazy(() => import("@pages/products/Product"));
const Login = lazy(() => import("@pages/login/Login"));
const Register = lazy(() => import("@pages/register/Register"));
const Admin = lazy(() => import("@pages/dashboard/admin/Index"));
const Client = lazy(() => import("@pages/dashboard/clients/Index"));
const Products = lazy(() => import("@pages/dashboard/admin/products/Products"));
const Customers = lazy(() => import("@pages/dashboard/admin/customers/Customers"));


function App() {
<<<<<<< HEAD
  return (
    <Suspense
      fallback={
        <Spin
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          tip="Loading"
          size="large"
        />
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenticateRouting />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PublicRouting />}>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
          <Route element={<PrivateRouting allowedRole="Admin" />}>
            <Route path="/dashboard/admin" element={<Admin />} />
            <Route path="/dashboard/admin/customers" element={<Customers />} />
            <Route path="/dashboard/admin/products" element={<Products />} />
          </Route>
          <Route element={<PrivateRouting allowedRole="Customer" />}>
            <Route path="/dashboard/client" element={<Client />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
=======
	return (
		<Suspense
			fallback={
				<Spin
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)",
					}}
					tip="Loading"
					size="large"
				/>
			}
		>
			<Routes>
				<Route element={<AuthenticateRouting />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
				<Route element={<PublicRouting />}>
					<Route path="/" element={<Index />} />
					<Route path="/product" element={<Product />} />
					<Route path="/product/:id" element={<Product />} />
				</Route>
				<Route element={<PrivateRouting allowedRole="Admin" />}>
					<Route path="/dashboard/admin" element={<Admin />} />
					<Route path="/dashboard/admin/customers" element={<Customers />} />
					<Route path="/dashboard/admin/products" element={<Products />} />
				</Route>
				<Route element={<PrivateRouting allowedRole="Customer" />}>
					<Route path="/dashboard/client" element={<Client />} />
				</Route>
			</Routes>
		</Suspense>
	);
>>>>>>> 7b828f335f90d231b233ccf5a76ae8fc2cddb9d9
}

export default memo(App);
