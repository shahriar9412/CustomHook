import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error()
                    }
                    else {
                        return res.json()
                    }
                })
                .then((data) => {
                    setData(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((error) => {
                    setError(error)
                    setIsLoading(false)
                })
        }, 2000)
    }, [url])
    return { data, isLoading, error }
}

export default useFetch
