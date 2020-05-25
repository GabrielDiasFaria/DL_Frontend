import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import '../styles/style.css'
import api from '../../../service/api'

export default function SinglePostItem() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await api.get('articles')
            setArticles(response.data.data)
        }
        fetch()
    }, [])

    return (
        <section className="post-area">
            {
                articles.length > 0 ? (
                    articles.map(line => (
                        <div className="single-post-item">
                            <figure>
                                <img className="post-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/posts/p1.jpg`} alt=""></img>
                            </figure>
                            <h3>
                                <Link to={`/blogdetails/${line.id}`} className="">
                                    {line.name}
                                </Link>
                            </h3>
                            <p>{line.description}</p>
                            <Link to={`/blogdetails/${line.id}`} className="primary-btn text-uppercase mt-15">Continuar lendo</Link>
                            <div className="post-box">
                                <div className="d-flex">
                                    <div>
                                        <Link to={`/blogdetails/${line.id}`}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/author/a1.png`} alt=""></img>
                                        </Link>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-head">
                                            <Link to={`/blogdetails/${line.id}`}>{line.author}</Link>
                                        </div>
                                        <div className="meta-details">
                                            <ul>
                                                <li>
                                                    <Link to={`/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-calendar-full"></span>
                                                        0
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-picture"></span>
                                                        {line.category}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-bubble"></span>
                                                        0 Comentários
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                        <Link to="/blog" className="justify-content-between align-items-center d-flex">
                            <p>Não possui categoria cadastrada!</p>
                        </Link>
                    )
            }
        </section>
    )
}