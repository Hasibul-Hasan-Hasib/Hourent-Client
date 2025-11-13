import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import {
    getAllProperties,
    getPropertyById,
    createProperty,
    deleteProperty
} from '@/api/properties';

export const useProperties = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['properties'],
        queryFn: () => getAllProperties(axiosPublic),
    });
};

export const useProperty = (id) => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['property', id],
        queryFn: () => getPropertyById(axiosPublic, id),
        enabled: !!id,
    });
};

export const useCreateProperty = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => createProperty(axiosSecure, data),
        onSuccess: () => {
            queryClient.invalidateQueries(['properties']);
        },
    });
};

export const useDeleteProperty = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteProperty(axiosSecure, id),
        onSuccess: () => {
            queryClient.invalidateQueries(['properties']);
        },
    });
};
