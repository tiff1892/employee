import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerForm from "./component/Pages/Admin/CustomerForm";

// import RootAdmin from "./component/RootLayout/RootAdmin"
// import CustomerForm from "./component/Pages/Admin/CustomerForm";
// import TicketTable from "./component/UI/Table/TicketTable";
// import CreateTicket from "./component/Pages/Customer/CreateTicket";
// import Home from "./component/Pages/Customer/Home";
import Login from "./component/Pages/Login/Login";
import AdminRoot from "./component/RootLayout/AdminRoot";
import AdminDashboard from "./component/Pages/Admin/AdminDashboard";
import AccountForm from "./component/Pages/Admin/AccountForm";
import CustomerRoot from "./component/RootLayout/RootCustomer";

import CreateTicket from "./component/Pages/Customer/CreateTicket";

import Test from "./component/Templates/Test";
import Testing from "./component/Testing";
import TicketTable from "./component/Pages/Admin/Table/TicketTable";
import AdminTicket from "./component/Pages/Admin/AdminTicket";
import AdminRoles from "./component/Pages/Admin/AdminRoles";

import EmployeeTicket from "./component/Pages/Employee/EmployeeTicket";
import EmployeeNotifications from "./component/Pages/Employee/EmployeeNotifications";
import RootEmployee from "./component/RootLayout/RootEmployee";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/test", element: <Test /> },
  { path: "/testing", element: <Testing /> },
  { path: "/ticket", element: <TicketTable /> },
  {
    path: "customer",
    element: <CustomerRoot />,
    children: [{ path: "createTicket", element: <CreateTicket /> }],
  },
  {
    path: "admin",
    element: <AdminRoot />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "accounts", element: <AccountForm /> },
      { path: "roles", element: <AdminRoles /> },
      { path: "tickets", element: <AdminTicket /> },
    ],
  },
  {
    path: "employee",
    element: <RootEmployee />,
    children: [
      { path: "employeeticket", element: <EmployeeTicket /> },
      { path: "employeenotif", element: <EmployeeNotifications /> },
    ],
  },

  // { path: '/',  },
  // { path: 'test2', element: <Test />},
  // {
  //   path: 'customer',
  //   children: [
  //     { path: 'home', element: <Home/> },
  //     { path: 'createTicket', element: <><CreateTicket/></> },
  //   ]
  // },

  // { path: '/ticket/createTicket', element: <Testing/> },
  // {
  //   path: 'admin',
  //   element: <RootAdmin /> ,
  //   children:[
  //     { path: 'customerForm', element:<CustomerForm/> },
  //     { path: 'tickets', element: <TicketTable /> },
  //   ]
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
