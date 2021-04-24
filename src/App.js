import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Userdetails from './pages/Userdetails';
import Transactions from './pages/Transactions';
import TransactionDetails from './pages/TransactionDetails'
import Rates from './pages/Rates';
import RateDetails from './pages/RateDetails';
import Charges from './pages/Charges';
import ChargeDetails from './pages/ChargeDetails';
import Promo from './pages/Promo';
import AustracReport from './pages/AustracReport';
import SendMoney from './pages/SendMoney';
import TransactionHistory from './pages/TransactionHistory';
import Beneficiary from './pages/Beneficiary'
import NewBeneficiary from './pages/NewBeneficiary';
import MyAccount from './pages/MyAccount';

function App() {
  return (
     <Router>
        <Switch>

          <Route exact path='/'>
            <Register/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/login2'>
            <Login2/>
          </Route>

          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>

          <Route exact path='/users'>
            <Users/>
          </Route>

          <Route exact path='/userdetails'>
            <Userdetails/>
          </Route>

          <Route exact path='/transactions'>
            <Transactions/>
          </Route>

          <Route exact path='/transactiondetails'>
            <TransactionDetails/>
          </Route>

          <Route exact path='/rates'>
            <Rates/>
          </Route>

          <Route exact path='/ratedetails'>
            <RateDetails/>
          </Route>
          
          <Route exact path='/charges'>
            <Charges/>
          </Route>

          <Route exact path='/chargedetails'>
            <ChargeDetails/>
          </Route>

          <Route exact path='/promo'>
            <Promo/>
          </Route>

          <Route exact path='/ausreport'>
            <AustracReport/>
          </Route>
          
          <Route exact path='/sendmoney'>
            <SendMoney/>
          </Route>

          <Route exact path='/transactionhistory'>
            <TransactionHistory/>
          </Route>

          <Route exact path='/beneficiary'>
            <Beneficiary />
          </Route>

          <Route exact path='/addbeneficiary'>
            <NewBeneficiary />
          </Route>

          <Route exact path='/myaccount'>
            <MyAccount />
          </Route>
          
          {/* <Route exact path='/'>
            <Home/>
          </Route> */}

         
          {/* <Route
            exact
            path={`/paynow`}
            component={Paynow}
          /> */}
          
      </Switch>
    </Router>

 
  );
}

export default App;
