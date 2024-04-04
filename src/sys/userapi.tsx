import axios from "axios";
import { getCookies } from "cookies-next";
import { url } from "@/data/config";
import { headers } from "next/headers";
export const UserInfo = async () => {
    let cookie = getCookies();

    return await axios.get(`${url}/v1/auth/info`, {
        headers: {
            Authorization: 'Bearer '+ cookie['token'],

        }
    }).then(async function (res: any) {
        return res

    })

}

export const TokenUser = async () => {
    let cookie = getCookies();

    return await axios.get(`${url}/v1/checkcode`, {
        headers: {
            Authorization: 'Bearer '+ cookie['token'],

        }
    }).then(async function (res: any) {
        return res

    })

}