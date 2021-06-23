import { googleCloudString, localhostString } from './Service.js';

export async function postTweet(post, token) {
  return await fetch(`${localhostString}/api/post`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(post)
  }).then(result => result.json())
    .then(result => {
      return result;
    })
}

export async function isFollowingUser(token, otherUserId) {
  return await fetch(`${localhostString}/api/follower/isfollowing`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token, 
    },
    body: JSON.stringify({
      FollowerId: otherUserId
    })
  }).then(response => response.json())
}

export async function followUser(token, otherUserId) {
  return await fetch(`${localhostString}/api/follower/follow`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token, 
    },
    body: JSON.stringify({
      FollowerId: otherUserId
    })
  }).then(response => response.json())
}

export async function unfollowUser(token, otherUserId) {
  return await fetch(`${localhostString}/api/follower/unfollow`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token, 
    },
    body: JSON.stringify({
      FollowerId: otherUserId
    })
  }).then(response => response.json())
}

export async function getThePeopleYouFollow(token) {
  return await fetch(`${localhostString}/api/follower/followings`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token, 
    }
  }).then(response => response.json())
}

export async function getThePeopleThatFollowYou(token) {
  return await fetch(`${localhostString}/api/follower/followers`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token, 
    }
  }).then(response => response.json())
}