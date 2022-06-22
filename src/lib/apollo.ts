import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pxa3yb2kav01yw9h6070h4/master',
    cache: new InMemoryCache()
})