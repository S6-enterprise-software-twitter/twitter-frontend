import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getAll } from "../../service/UserService";
import {getToken, decodeJWT} from "../../service/Auth";
import './Searchbar.css';

function Searchbar() {
    const history = useHistory();
    const token = getToken();
    const [users, setUsers] = useState();
    const [filteredUsers, setFilteredUsers] = useState();
    function searchOnChange(event) {

        // Filter the users and put them in a new array (filteredUsers)
        const term = event.target.value.toLowerCase()
        console.log(users)
        let searchResult = users.filter(user => {
            var decodedJWT = decodeJWT(token);
            var myid = decodedJWT["sub"];
            // if(myid == user.id){
            //     return null;  
            // }
            // else{
            //     return user.firstname.toLowerCase().includes(term);
            // }

            if(myid != user.id){
                return user.firstname.toLowerCase().includes(term);
            } 
        })
        setFilteredUsers(searchResult);

        // If input is empty, clear the array. Otherwise the users will still show up and cover up the page
        if (event.target.value == "") {
            setFilteredUsers([]);
        }
    }

    function findFollowedUsers() {
        // Get alle the people this user follows bij ID - http://localhost:8082//follower/followings

        // Put them in an Array

        // Have a list with all users

        // Add an extra column with "Followed : true or false",

        // In render, if user.follower.followed dan ontvolg anders als text volg.
    }

    function goToUserProfile(user) {
        console.log(user)
        // history.push(`/user/${user.id}`);
        window.location.href = `/user/${user.id}`;
        // window.location.href = `/user/${user.username}`;
    }

    const getAllUsers = async () => {
        await getAll().then(result => {
            console.log("Result of me call", result);
            setUsers(result);
        })
    }

    useEffect(() => {
        getAll().then(data => {
            setUsers(data);
        });
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <div className="searchbar">
            <input type="text" placeholder="Zoek een persoon of locatie" onChange={(e) => searchOnChange(e)} />
            <div className="search-dropdown-content">
                <ul>
                    {filteredUsers && filteredUsers.map(user => (
                        <li onClick={() => goToUserProfile(user)}>
                            <a>{user.firstname} {user.lastname}</a>
                            {/* <p>@{user.username}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Searchbar;