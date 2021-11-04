import axios from '.';
export function getCommunities <T>() {
    return axios.get<T, T>('/communities');
}

export function getHomes<T>() {
    return axios.get<T, T>('/homes');
}

