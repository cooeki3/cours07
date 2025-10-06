import contenu from "./../_data/contenu.json";


const SacPage1 = async ({params}) => {
    const {sacsId} = await params;
    return (
        <div>
            <h1>{contenu[0].titre}</h1>
        </div>
    );
}