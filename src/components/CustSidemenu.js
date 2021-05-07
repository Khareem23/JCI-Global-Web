import React from 'react';
import { Link } from 'react-router-dom';
import { LogOutAuthAction, ShowLoading} from '../redux/actions/authaction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const CustSidemenu = (props) => {
    const { logoutuser, isLoading, } = props;
    const history = useHistory();
    
    const handleLogout = e => {
        e.preventDefault();
        logoutuser(history);
    };

    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                    <div className="col-md-3 col-xl-3"><div className="card no-shadow rm-border bg-transparent text-right"><img src="assets/images/logo-inverse.jpeg" alt="" width={225} height={100} /><div className="widget-chart-content" /></div></div>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 32, marginLeft: 32}}>
                        <li className="app-sidebar__heading">Modules</li>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/sendmoney">
                            <i className="metismenu-icon pe-7s-way" />Send Money
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/transactionhistory">
                            <i className="metismenu-icon pe-7s-way" />Transaction History
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/beneficiaries">
                            <i className="metismenu-icon pe-7s-way" />Benficiaries
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <Link to="/myaccount">
                            <i className="metismenu-icon pe-7s-way" />My Accounts
                        </Link>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        </div>
                    </div>
                    <li style={{margin: 16}}>
                        <a href="" onClick={handleLogout} >
                            <i className="metismenu-icon pe-7s-way" />Log Out
                        </a>
                    </li>
                    <div className="progress-bar-xs progress" style={{marginLeft: -23, marginRight: -23}}>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustSidemenu);
