import React, { useState } from "react";
import { connect } from 'react-redux';
// import "../css-style.css";

const CountryAutocomplete = (props) => {
    const { setGender, placeholder } = props
    const [active, setActive] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [input, setInput] = useState("");
    
    const onChange = e => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
    
   
    const newFilteredSuggestions = suggestions !== undefined ? suggestions.filter(
        ({Name, StateName, CountryCode, StateCode, Id}) => Name !== null ? Name.toLowerCase().indexOf(input.toLowerCase()) > -1 : {}
        || StateCode !== null ? StateCode.toLowerCase().indexOf(input.toLowerCase()) > -1 : {}
        || StateName !== null ? StateName.toLowerCase().indexOf(input.toLowerCase()) > -1 : {}
        || CountryCode !== null ? CountryCode.toLowerCase().indexOf(input.toLowerCase()) > -1 : {}
    ) : []

    setActive(0);
    setFiltered(newFilteredSuggestions !== [] ? newFilteredSuggestions.slice(0, 11) : []);
    setIsShow(true);
    setInput(e.currentTarget.value)
  };
  
    const onClick = e => {
      setActive(0);
      setFiltered([]);
      setIsShow(false);
      var bal = e.currentTarget.innerText;
      const hh = bal.substring(0,3);
      setInput(hh);
      
    //   if(type === "to")
    //   {
        //  setflyingto(hh);
    //   } else if(type === "from")
    //   {
    //       setflyingfrom(hh);
    //   }
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) { // enter key
        // setActive(0);
        // setIsShow(false);
        // console.log(filtered[active].StateCode);
        // setInput(filtered[active].StateCode);
        }
        else if (e.keyCode === 38) { // up arrow
        return (active === 0) ? null : setActive(active - 1);
        }
        else if (e.keyCode === 40) { // down arrow
        return (active - 1 === filtered.length) ? null : setActive(active + 1);
        }
    };
    
    const renderAutocomplete = () => {
        if (isShow && input) {
          if (filtered.length) {
                  return (
                    <ul className="autocomplete addposition">
                      {filtered.map((suggestion, index) => {
                        let className;
                        if (index === active) {
                          className = "active";
                        }
                        return (
                          <li className={className} key={suggestion.Id} onClick={onClick}>
                            {suggestion.StateCode}
                            <br></br>
                            {suggestion.Name}, 
                            {suggestion.StateName}
                          </li>
                        );
                      })}
                    </ul>
                  );                
            //   }
            
          } else {
            // if(type === "from")
            // {
              return (
                <div className="no-autocomplete addposition2">
                  <em>No data yet or not found</em>
                </div>
              );
            // } else {
            //   return (
            //     <div className="no-autocomplete addposition">
            //       <em>No data yet or not found</em>
            //     </div>
            //   );
            // }
          }
        }
        return <></>;
    }
  
return (
    <>


{(() => {
    // if(page === "tourlist")
    // {
        return <div className="single-input-wrap style-two position-relative form-group col-sm-12">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={onChange}
                        style={{backgroundColor: 'white'}}
                        onKeyDown={onKeyDown}
                        value={input}
                    />
                </div>
    // } else {
    //    return <div className="single-input-wrap style-two position-relative form-group col-sm-4">
    //               <input
    //                   type="text"
    //                   placeholder={placeholder}
    //                   onChange={onChange}
    //                   style={{backgroundColor: 'white'}}
    //                   onKeyDown={onKeyDown}
    //                   value={input}
    //               />
    //           </div>
    // }
      })()}
       
      {renderAutocomplete()}
    </>
  );
}


const mapStateToProps = (state) => {
    return {
        // bookingliststate: state.bookingliststate,
        // isLoading: state.loadingstate.isLoading,
        // vendoruser: state.authstate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setflyingto: (input) => {
            //dispatch(SetToAction(input));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryAutocomplete);

