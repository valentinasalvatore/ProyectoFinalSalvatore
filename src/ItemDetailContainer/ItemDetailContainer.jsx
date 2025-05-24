import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then((res) => {
        if (res.exists()) {
          const data = res.data();
          setProducto({ id: res.id, ...data });
        } else {
          console.log("El producto no existe.");
        }
      })
      .catch((error) => console.log("Error al obtener producto:", error));
  }, [idItem]);

  return (
    <div>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
