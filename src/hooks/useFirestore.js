import  { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';

const useFirestore = (collectionName, condition) => {
    const [users, setUsers] = useState([]);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const userCollectionRef = collection(db, collectionName); // Sử dụng tên collection từ tham số

        // Tạo truy vấn với điều kiện (nếu có)
        let q = query(userCollectionRef, orderBy('createdAt'));

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                setDocuments([]);
                return;
            }
            // Thêm điều kiện vào truy vấn
            q = query(q, where(condition.fieldName, condition.operator, condition.compareValue));
        }

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setUsers(documents); // Lưu dữ liệu vào state
            setDocuments(documents)
        });

        // Hủy đăng ký khi component bị hủy
        return () => unsubscribe();
    }, [collectionName, condition]);

    return documents ; // Trả về dữ liệu cần thiết
}

export default useFirestore;