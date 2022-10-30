import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function MatchesList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("searchBar ", state)
    const { matches, loading, error } = state;
    console.log("matches ", matches)

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "10px auto", gap: "20px" }}>
            {
                loading ? <h2 style={{ color: "#0ca678" }}>Loading...</h2> :
                    error ? <h2>{error}</h2> :
                        matches.results ?   
                            matches.results.map((matchObj) => {
                                return (
                                    <div key={matchObj.id} style={{ backgroundColor:"#ffc078",borderRadius:"6px", boxShadow: "0px 2px 8px #666" }}>
                                        <h2>{matchObj.away.name} V/S {matchObj.home.name} </h2>
                                        <div style={{ textAlign: "start", margin: " 10px 20px",letterSpacing:"1px",fontSize:"20px" }}><strong>Date :</strong>{new Date(`${matchObj.date}`).toLocaleString()}</div>
                                        <div style={{ textAlign: "start", margin: " 10px 20px",letterSpacing:"1px",fontSize:"20px" }}><strong>Match-Title :</strong>{matchObj.match_title}</div>
                                        <div style={{ textAlign: "start", margin: " 10px 20px",letterSpacing:"1px",fontSize:"20px" }}><strong>Result : </strong>{matchObj.result}</div>
                                        <div style={{ textAlign: "start", margin: " 10px 20px",letterSpacing:"1px",fontSize:"20px" }}><strong>Match Status : </strong>{matchObj.status}</div>
                                        <div style={{ textAlign: "start", margin: " 10px 20px",letterSpacing:"1px",fontSize:"20px" }}><strong>Match-Venue : </strong>{matchObj.venue}</div>

                                    </div>
                                )
                            }) : <h3 style={{ color: "#0ca678" }}> No Matches</h3>
            }
        </div>
    )
}

export default MatchesList







{/* <div key={quoteObj.id} style={{
    backgroundColor: "#e64980", color: "white", borderRadius: "6px",
    boxShadow: "0px 2px 8px #666",
    width: "50%", margin: "20px auto", padding: "10px", display: "flex",
    flexDirection: "column"
}}>
    <div style={{ fontSize: '20px' }}><strong style={{ color: "black" }}>Catagory :</strong> {quoteObj.category}</div>
    <div style={{ margin: "10px", fontSize: "20px" }}><strong style={{ color: "black" }}>Author :</strong> {quoteObj.author}</div>
    <div style={{ fontSize: '20px', letterSpacing: "1px" }}>"{quoteObj.text}"</div>
</div> */}