import React, { useState } from "react";
import { connect } from 'react-redux';

const StatesAutocomplete = (props) => {
    const { placeholder, passChildData } = props
    const [active, setActive] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [input, setInput] = useState("");
    
    const onChange = e => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
   
    const newFilteredSuggestions = suggestions !== undefined ? suggestions.filter(
        (data) => data !== null ? data.toLowerCase().indexOf(input.toLowerCase()) > -1 : {}        
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
      setInput(bal);
      passChildData(bal);
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
                    <ul className="autocomplete">
                      {filtered.map((suggestion, index) => {
                        let className;
                        if (index === active) {
                          className = "active";
                        }
                        return (
                          <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                          </li>
                        );
                      })}
                    </ul>
                  );                
            //   }
            
          } else {
              return (
                <div className="no-autocomplete">
                  <em>No data yet or not found</em>
                </div>
              );
          }
        }
        return <></>;
    }
  
return (
    <>


{(() => {
        return <div className="single-input-wrap style-two position-relative form-group col-sm-12">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={onChange}
                        className="mb-2 form-control"
                        style={{backgroundColor: 'white', marginLeft: -16, width: '100%'}}
                        onKeyDown={onKeyDown}
                        value={input}
                    />
                </div>
      })()}
       
      {renderAutocomplete()}
    </>
  );
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatesAutocomplete);

