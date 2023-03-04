const Dior = ({diorProds})=>{

  return (
    <>
      <h2 className='subtitle' id='dior'>Dior</h2>
        <p style={{width:'85%'}}>En esta sección te mostramos los productos destacados en oferta de la sección de maquillaje de Dior, pero si buscas una marca en concreto tienes nuestra sección inicial que te mostrará sus productos.</p>
          <div className='productsCardsContainer'>
          {
            diorProds.map((product, index) => {
              return(
                <div className='productCard' key={index}>
                  <a href={`${product.LINK}`} target='_blank' rel="noreferrer"><img src={`${product.IMAGEN}`} alt={`${product.IMAGEN}`} className='image'/></a>
                  <div className='infoProduct'>
                    <a href={`${product.LINK}`} className='title' target='_blank' rel="noreferrer"><span><strong>{product.TITULO.substring(0, 40)}...</strong></span></a>                
                    <div className='rebajado1'><a href={`${product.LINK}`} target='_blank' rel="noreferrer"><span>Amazon: {product.PVP}€ / </span><span style={{textDecoration:'line-through', color:'red'}}>{product.PVPR}€</span></a></div> 
                  </div> 
                </div>            
              )
            })
          }          
        </div>        
    </>
  )
};

export default Dior;