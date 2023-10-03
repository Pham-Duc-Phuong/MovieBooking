import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs'
type queryParams = Record<string, string>;
type setQueryParams = (name: Record<string, string>) => void
export const useQueryParams = ():[queryParams, setQueryParams] => {
    const [searchParams, setsearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = Object.fromEntries(searchParams)
    const setQueryParams = (name: Record<string, string>) => {
        const qsStringly = qs.stringify(name, {
            addQueryPrefix: true,
        })
        navigate(location.pathname + qsStringly)
    }
    return [queryParams, setQueryParams]
}