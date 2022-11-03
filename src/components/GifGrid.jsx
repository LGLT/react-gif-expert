import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
    
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            { isLoading && <p>Cargando...</p>}
            {
                images.map((img) => (
                <GifItem 
                    key={img.id} 
                    {...img} //Esto manda todas las propiedades del obj como props
                />
                ))
            }
            </div>
        </>
    )
}
