import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataMovie } from "../../store/action"

export default function PageGridComponent() {
    // const movies = movie.data.results
    const dataMovie = useSelector((state) => state.dataMovie)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getDataMovie("popular"))
    // }, [])

    return(
        <>
            {JSON.stringify(dataMovie?.data?.results)}
            {
                dataMovie?.data?.results.map(movie => {
                    return(
                        <div className="text-center">
                             <div className="col-md-4">
                                 <div class="card mx-auto" style={{"width": "20rem"}}>
                                     {movie.backdrop_path}
                                     <img src="" class="card-img-top" alt="..."/>
                                     <div class="card-body">
                                        <h5 class="card-title">{movie.original_title}</h5>
                                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" class="btn btn-primary">Go somewhere</a>
                                     </div>
                                 </div>
                             </div>
                         </div> 
                    )
                })
            }
        </>
    )

    // if(movie) {
    //     return (
    //         <>
    //             {JSON.stringify(movie.data.results)}
    //             {
    //                 movie.data.results.map(movie => {
    
    //                     return(
    //                         <div className="text-center mx-auto">
    //                              <div className="col-md-4">
    //                                  <div class="card mx-auto" style={{"width": "20rem"}}>
    //                                      <img src="..." class="card-img-top" alt="..."/>
    //                                      <div class="card-body">
    //                                          <h5 class="card-title">Card One</h5>
    //                                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                                          <a href="#" class="btn btn-primary">Go somewhere</a>
    //                                      </div>
    //                                  </div>
    //                              </div>
    //                          </div> 
    //                     )
    //                 })
    //             }
    //         </>
    //     )
    // }else {
    //     return(
    //         <>
    //             {JSON.stringify(movie.data.results)}
    //             <h1>LOading...</h1>
    //         </>
    //     )
    // }

    // if(dataMovie) {
    //     return(
    //         <>
    //             {/* {JSON.stringify(dataMovie)} */}
    //             {/* <h2>TEST</h2> */}
    //             {
    //                dataMovie.map(movie => {
    //                    return(
    //                     <div className="text-center mx-auto">
    //                     <div className="col-md-4">
    //                         <div class="card mx-auto" style={{"width": "20rem"}}>
    //                             <img src="..." class="card-img-top" alt="..."/>
    //                             <div class="card-body">
    //                                 <h5 class="card-title">Card One</h5>
    //                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                                 <a href="#" class="btn btn-primary">Go somewhere</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                    )
    //                }) 
    //             }
    //             {/* <div className="container mb-5">
    //                 <div className="row">
    //                     <div className="col-12 text-center my-5">
    //                         Preview
    //                     </div>
    //                     <div className="row text-center mx-auto">
    //                         <div className="col-md-4">
    //                             <div class="card mx-auto" style={{"width": "20rem"}}>
    //                                 <img src="..." class="card-img-top" alt="..."/>
    //                                 <div class="card-body">
    //                                     <h5 class="card-title">Card One</h5>
    //                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                                     <a href="#" class="btn btn-primary">Go somewhere</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div> */}
    //         </>
    //     )
    // }
    // else {

    //     return(
    //         <>
    //            {JSON.stringify(dataMovie)}
    //         </>
    //     )
    // }

    
}