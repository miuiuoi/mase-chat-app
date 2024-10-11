import React, { useState, createContext} from 'react';
import useFirestore from '../../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    
    // Destructure children
    const {
        user: { uid },
      } = React.useContext(AuthContext);  

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid]);


    /**
     * {
     *      name: 'room name'
     *      description: 'mo ta'
     *      members: [uid1,uid2,...]
     * }
     */
    const rooms = useFirestore('rooms', roomsCondition);

    return (
        <AppContext.Provider value={{rooms, isAddRoomVisible,setIsAddRoomVisible}}>
            {children}
        </AppContext.Provider>
    );
}