import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import MatchesList from './MatchesList';
function MatchContainer() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Cricket Match Fixture</h2>
            <hr />
            <SearchBar />
            <MatchesList />
        </div>
    )
}

export default MatchContainer