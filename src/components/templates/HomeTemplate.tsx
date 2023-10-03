
import { Card, Skeleton, Button } from 'components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { getMovieListThunk } from 'store/quanLyPhim'
import { generatePath, useNavigate } from 'react-router-dom'
import { PATH } from 'constant'
import { useQueryParams } from 'hooks'
export const HomeTemplate = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieListThunk())
    }, [dispatch])
    const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [queryParams, setQueryParams] = useQueryParams()
    const movieSearch = movieList?.filter(a => a.tenPhim.toLowerCase().includes(queryParams?.name?.toLowerCase()))
    if (isFetchingMovieList) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map((_, index) => {

                    return (
                        <Card key={index} className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                        </Card>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <form noValidate className="flex my-25 items-end mx-50 ">
                <input type="search" id="default-search" className="input-search" placeholder="Tìm kiếm phim"
                    required
                    value={inputValue || ""}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                    }}
                />
                <button type="button" className="btn-search"><i className="fa-solid fa-magnifying-glass"
                    onClick={() => {
                        setQueryParams({
                            name: inputValue || undefined,
                        })
                        // setsearchParams({
                        //     name: inputValue
                        // })
                    }}
                ></i></button>
            </form>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1">
                {
                    (movieSearch?.length? movieSearch : movieList)?.map((movie) => (
                    // movieList?.map(movie => (
                        <Card
                            key={movie.maPhim}
                            className="!mt-20"
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={movie.hinhAnh} />}
                        >
                            <Card.Meta className='!mb-10'
                                title={movie.tenPhim}
                                description={movie.moTa.substring(0, 40)}
                            />
                            <div className='flex justify-between'>
                                <Button className='btn-detail'
                                    onClick={() => {
                                        const path = generatePath(PATH.detail, { movieid: movie.maPhim })
                                        navigate(path)
                                        console.log('path', path)
                                    }}
                                >Chi tiết</Button>
                                {/* <Button className='btn-booking'>Mua vé</Button> */}
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
