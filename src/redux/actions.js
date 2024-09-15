// api lardan bayrak ve ilke corona verisini alacak ve slice ye aktaracak asenkron thunk aksiyonu yazalım

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../constants/index";



export const getData = createAsyncThunk('countryData', async (isoCode) => {
    // apiisteğinde kullanılacak parametreyibelirle

    const params = { q: isoCode };




    //  corona bilgilerini alacağımızapi isteğini ayarla
    const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, { params, headers });

    //ülke detaylarnı alacağımız api  isteğini ayarla

    const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`)
    // her iki api isteğini senkron bir paralel bir şekilde gonder
    const responses = await Promise.all([req1, req2])

    // covid bilgilerindeki region nesnesini covid nesnesi içerisine dağıt

    const covid = {
        ...responses[0].data.data[0],
        ...responses[0].data.data[0].region,
    };

    //gereksiz değerlerikaldır
    delete covid.region
    delete covid.cities
    console.log("aaa", responses[0].data.data[0]);
    console.log("bbb", covid);

    //payloadı return edecegiz

    return {
        covid,
        country: responses[1].data[0],
    };
});