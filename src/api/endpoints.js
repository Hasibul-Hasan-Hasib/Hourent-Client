export const endpoints = {
    properties: {
        all: "/properties",
        single: (id) => `/properties/${id}`,
    },
    auth: {
        login: "/auth/login",
        register: "/auth/register",
        me: "/auth/me",
    },
    bookings: {
        all: "/bookings",
        single: (id) => `/bookings/${id}`,
    },
};
