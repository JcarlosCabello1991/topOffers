const Clusters = () => {

  return(
    <>
      <div className='clustersColumn'>
          <div className='clustersRow'>
           <div className='imageClusterContainer'><a href='#destacadas' style={{width:'100%'}}><img src='../destacados.png' alt='anastasia' className='clusterImage'/></a><span className="ofDestacadas" style={{position:'absolute', marginTop:'8rem'}}>Ofertas destacadas</span></div> 
            <div className='imageClusterContainer'><a href='#loreal' style={{width:'100%'}}><img src='../loreal.png' alt='loreal'  className='clusterImage'/></a></div>
          </div>        
          <div className='clustersRow'>
            <div className='imageClusterContainer'><a href='#maybelline' style={{width:'100%'}}><img src='../maybelline.png' alt='maybelline'  className='clusterImage'/></a></div>
            <div className='imageClusterContainer'><a href='#anastasia' style={{width:'100%'}}><img src='../anastasia.png' alt='anastasia'  className='clusterImage'/></a></div>
          </div>  
          <div className='clustersRow'>
          <div className='imageClusterContainer'><a href='#dior' style={{width:'100%'}}><img src='../dior.png' alt='anastasia'  className='clusterImage'/></a></div>
          <div className='imageClusterContainer'><a href='#nyx' style={{width:'100%'}}><img src='../nyx.png' alt='anastasia'  className='clusterImage'/></a></div>
          </div>
        </div>  
    </>
  )
};

export default Clusters;