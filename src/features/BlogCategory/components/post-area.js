import React from 'react';
import { Link } from 'react-router-dom'

export default function PostArea({ articles }) {
    return (
        <section className="post-area">
            <div className="row">
                {
                    articles.length > 0 ? (
                        articles.map(line => (
                            <div className="col-lg-6 col-md-6">
                                <div className="single-post-item short">
                                    <figure>
                                        <img className="post-img img-fluid" src={`${process.env.PUBLIC_URL}/assets/img/category/c1.jpg`} alt=""></img>
                                    </figure>
                                    <h3>
                                        <Link to={`/blogdetails/${line.id}`}>{line.name}</Link>
                                    </h3>
                                    <p>{line.description}</p>
                                    <Link to={`/blogdetails/${line.id}`} className="primary-btn text-uppercase mt-15">Continuar Lendo</Link>
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
													            13th Oct, 2018
												            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={`/blogdetails/${line.id}`}>
                                                                <span className="lnr lnr-bubble"></span>
													            0
												            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                            <a href="/blog" className="justify-content-between align-items-center d-flex">
                                <p>Não possui artigos na categoria!</p>
                            </a>
                        )
                }
            </div>
        </section>
    )
}