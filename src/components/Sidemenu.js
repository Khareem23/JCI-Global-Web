import React from 'react';
import { Link } from 'react-router-dom';
import { LogOutAuthAction, ShowLoading} from '../redux/actions/authaction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Sidemenu = (props) => {
    const { logoutuser, isLoading } = props;
    const history = useHistory();
    
    const handleLogout = e => {
        e.preventDefault();
        logoutuser(history);
    };

    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <div className="col-md-3 col-xl-3"><div className="card no-shadow rm-border bg-transparent text-right">
                        <img src="assets/images/logo-inverse.jpeg" alt="" width={225} height={100} />
                        <div className="widget-chart-content" /></div></div>

                    <li className="app-sidebar__heading text-danger">Modules</li>
                    <li style={{margin: 16}}>
                        <Link to="/dashboard">
                            <i className="metismenu-icon pe-7s-home" />Dashboard
                        </Link>
                    </li>

                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/transactions">
                            <i className="metismenu-icon pe-7s-cart" />Transactions
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    
                    <li style={{margin: 16}}>
                        <Link to="/users">
                            <i className="metismenu-icon pe-7s-users" />User & Verifications
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/charges">
                            <i className="metismenu-icon pe-7s-helm" />Charges Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/rates">
                            <i className="metismenu-icon pe-7s-tools" />Rates Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/promos">
                            <i className="metismenu-icon pe-7s-target" />Promo Management
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/accounts">
                            <i className="metismenu-icon pe-7s-cash" />Bank Accounts
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/ausreport">
                            <i className="metismenu-icon pe-7s-print" />Austrac Report
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link onClick={handleLogout}>
                            <i className="metismenu-icon pe-7s-back" />Log Out
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <div className="progress-bar-xs progress sidemenu" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    </ul>
                </div>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        isLoading: state.loadingstate.isLoading,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        logoutuser: (history) => {
            dispatch(ShowLoading(""));
            dispatch(LogOutAuthAction(history));
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);