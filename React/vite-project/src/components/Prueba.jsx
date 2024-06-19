export function Prueba({ nombre, apellido }) {
  const products = [
    {
      title: "Col",
      id: 1,
      description:
        "Es una planta comestible de la familia de las Brasicáceas, y una herbácea bienal.",
    },
    {
      title: "Ajo",
      id: 2,
      description:
        "El ajo es una especie tradicionalmente clasificada dentro de la familia de las liliáceas.",
    },
    {
      title: "Manzana",
      id: 3,
      description:
        "La manzana o poma​es la fruta comestible de la especie Malus domestica, el manzano común.",
    },
  ];

  return (
    <>
      <h1>Prueba</h1>
      <p>{`${nombre} ${apellido}`}</p>

      {products.map((producto, i) => {
        return (
          <div class="Cuadrilla">
            <div class="colorCuadroAgua">
              <div key={producto.id}>
                <h2>Title:{producto.title}</h2>
                <p>{producto.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
