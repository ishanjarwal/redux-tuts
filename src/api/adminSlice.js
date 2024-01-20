import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => 'account',
            transformResponse: (res) => res.sort((a, b) => a.amount - b.amount),
            providesTags: ['account']
        }),
        addAccount: builder.mutation({
            query: (amount, id) => ({
                url: 'account',
                method: "POST",
                body: { id: id, amount: amount }
            }),
            invalidatesTags: ['account']
        }),
        delAccount: builder.mutation({
            query: (id) => ({
                url: `account/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['account']
        }),
        updateAccount: builder.mutation({
            query: ({ id, amount }) => ({
                url: `account/${id}`,
                method: "PATCH",
                body: { amount }
            }),
            invalidatesTags: ['account']
        }),
    })
})

export const { useGetAccountsQuery, useAddAccountMutation, useDelAccountMutation, useUpdateAccountMutation } = adminApi