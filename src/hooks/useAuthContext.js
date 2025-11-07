import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    return authContext;
};