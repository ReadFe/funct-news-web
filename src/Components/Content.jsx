import { useEffect, useState } from "react";
import Card from "./Card";
import { Container } from "react-bootstrap";

const Content = () => {
    const [data, setData] = useState([])
    const [search, SetSearch] = useState('')
    const [filter, setFilter] = useState([])

    useEffect(() => {
        console.log('get api')
        const getData = async () => {
            const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e171d2c395404c9cb49af54c89283081')
            const {articles} = await response.json()
            setData(articles);
            setFilter(articles);
          }

        getData()
    }, [search])

    useEffect(() => {
        const filteredData = data.filter(item => {
            return item.title.includes(search)
        })
        setFilter(filteredData)
    }, [search])


    return (
        <Container>
            <input type="text" className="w-100 my-5 p-3" onChange={e => SetSearch(e.target.value)} />
            <div className="row justify-content-around">
                <Card data={filter}/>
            </div>
        </Container>
    )
}

export default Content;