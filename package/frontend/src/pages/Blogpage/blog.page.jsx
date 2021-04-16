import React from 'react';
import "./blog.style.css"

function BlogPage(props) {
    return (
        <div>
            <section className="page-heading">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Our Blog</h1>
                    <p>You can feel free to use our template for any purpose of your websites. Thank you. Template re-distribution is <strong>not allowed</strong> in any download site.</p>
                </div>
            </div>
        </div>
    </section>


    <section className="blog-page">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="https://cdn.tgdd.vn/Files/2020/06/10/1262114/vivo-v19-neo-va-oppo-reno3_800x450.jpg" alt=""></img>
                        <div className="date">26 Oct 2020</div>
                        <div className="down-content">
                            <h4>Title</h4>
                            <span>Branding / Admin</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae distinctio, maxime saepe laudantium consequatur aut minima laboriosam aliquid quos nisi odit voluptatem reprehenderit! Ipsam hic iste vitae quae sunt.</p>
                            <div className="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="https://fptshop.com.vn/uploads/images/tin-tuc/72237/Originals/So-sanh-macbook-15-inch-va-macbook-13-inch-khong-chi-la-kich-co-man-hinh-3.jpg" alt=""></img>
                        <div className="date">21 Oct 2020</div>
                        <div className="down-content">
                            <h4>Title</h4>
                            <span>Branding / Admin</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi alias iusto laboriosam quos repellendus voluptate nemo! Eligendi, repellendus, dolorem molestias facilis, expedita reprehenderit consequatur cum minus dolor fuga recusandae.</p>
                            <div className="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="https://cdn.tgdd.vn/Files/2018/11/13/1131076/2018-ipad-pro-in-hand1_800x450.jpg" alt=""></img>
                        <div className="date">11 Oct 2020</div>
                        <div className="down-content">
                            <h4>Title</h4>
                            <span>Lorem</span>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis consequuntur iure dolorum deleniti fugit excepturi porro aspernatur. Dignissimos saepe rerum est qui, tempore minus, natus consequatur a suscipit esse facilis.</p>
                            <div className="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="https://www.xtmobile.vn/vnt_upload/news/08_2019/dien-thoai-iphone-2020-xtmobile.jpg" alt=""></img>
                        <div className="date">03 Oct 2020</div>
                        <div className="down-content">
                            <h4>Title</h4>
                            <span>IPhone</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia perspiciatis ipsa animi, dignissimos hic voluptate voluptatum consectetur odio non tenetur, asperiores dolorum in commodi officiis iusto? Quibusdam, mollitia suscipit.</p>
                            <div className="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default BlogPage;