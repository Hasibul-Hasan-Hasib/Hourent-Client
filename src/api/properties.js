import { endpoints } from "./endpoints";

// src/api/properties.js
export const getAllProperties = async (axiosPublic) => {
    try {
        const res = await axiosPublic.get(endpoints.properties.all);
        return res.data;
    } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
    }
};

export const getPropertyById = async (axiosPublic, id) => {
    try {
        const res = await axiosPublic.get(endpoints.properties.single(id));
        return res.data;
    } catch (error) {
        console.error("Error fetching property:", error);
        throw error;
    }
};

export const createProperty = async (axiosSecure, data) => {
    try {
        const res = await axiosSecure.post(endpoints.properties.all, data);
        return res.data;
    } catch (error) {
        console.error("Error creating property:", error);
        throw error;
    }
};

export const deleteProperty = async (axiosSecure, id) => {
    try {
        const res = await axiosSecure.delete(endpoints.properties.single(id));
        return res.data;
    } catch (error) {
        console.error("Error deleting property:", error);
        throw error;
    }
};
