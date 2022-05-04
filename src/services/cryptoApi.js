import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
	'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPID_API_HOST,
	'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_RAPID_API_KEY,
};

const baseUrl =  process.env.REACT_APP_CRYPTO_RAPID_BASE_URL;

const createRequest = url => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getCryptos: builder.query({
			query: () => createRequest('/coins'),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
