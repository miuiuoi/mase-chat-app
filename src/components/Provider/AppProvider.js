import React, { useState, createContext} from 'react';
import useFirestore from '../../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');
    
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

    const selectedRoom = React.useMemo(
        () => rooms.find((room) => room.id === selectedRoomId) || {},
        [rooms, selectedRoomId]
      );
    
      const usersCondition = React.useMemo(() => {
        return {
          fieldName: 'uid',
          operator: 'in',
          compareValue: selectedRoom.members,
        };
      }, [selectedRoom.members]);
    
      const members = useFirestore('users', usersCondition);

      console.log({members});
      
    

    return (
        <AppContext.Provider 
        value={{
          rooms, 
          members,
          isAddRoomVisible,
          setIsAddRoomVisible, 
          selectedRoomId, 
          setSelectedRoomId, 
          selectedRoom,
          isInviteMemberVisible, 
          setIsInviteMemberVisible
          }}>
            {children}
        </AppContext.Provider>
    );
}