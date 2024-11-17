import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string
}

interface IPropsListProducts {
    arrItems : ItemProduct[]
}

export const ListProducts : FC<IPropsListProducts>= ({arrItems}) => {
    return (
        <div
        className=" p-1 m-3 border rounded d-grid gap-2"
        style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyItems: "center",
            alignItems: "center"
        }}
        >
            {
                arrItems.map((element, i) => (
                    <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.imagen} />
                        <Card.Body>
                            <Card.Title>{element.nombre}</Card.Title>
                            <Card.Text>${element.precio}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
