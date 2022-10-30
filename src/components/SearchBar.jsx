import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches, setDate } from '../redux/matchAction'
function SearchBar() {
    const dispatch = useDispatch();
    const date = useSelector((state) => state.date)
    return (
        <div style={{ margin: "20px" }}>
            <input type="date" value={date} 
                onChange={(e) => {
                    const value = e.target.value;
                    dispatch(setDate(value))
                }} style={{
                    border: "none", outline: "none", padding: "8px", width: "200px", borderRadius: "6px",
                    fontSize: "14px", boxShadow: "0px 2px 8px #666", marginRight: "10px",backgroundColor:"#e9ecef"
                }} />
            <button onClick={() => dispatch(fetchMatches(date))}
                style={{
                    border: "none", outline: "none", padding: "8px", borderRadius: "6px",
                    fontSize: "14px", boxShadow: "0px 2px 8px #666", color: "#495057"
                }}>Search Matches</button>
        </div>
    )
}

export default SearchBar