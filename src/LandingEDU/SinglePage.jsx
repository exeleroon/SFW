/** @format */
import React from 'react'
import './style.css'
import take from '../img/people-are-talking/take.png'

const SinglePage = () => {
    return (
        <>
            <header className='header'>
                <nav className='content-container navbar'>
                    <a className='logo-container' href='#'>
                        
                        <p className='logo-container__logo-text'>SFW</p>
                    </a>
                    <button className='button button-buy-now'>Buy Now</button>
                    <button className='menu-button'>
                        <img className='menu-button__image' src='./img/logo/menu-closed-icon.png' alt='menu-icon' />
                    </button>
                    <menu className='menu'>
                        <li className='menu-item menu-item--active'>
                            <a className='menu-item-link' href='#'>
                                Overview
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-item-link' href='#'>
                                About Fork
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-item-link' href='#'>
                                Buying Options
                            </a>
                        </li>
                        <li className='menu-item'>
                            <a className='menu-item-link' href='#'>
                                Support
                            </a>
                        </li>
                    </menu>
                </nav>
                <section className='forkApp-section'>
                    <div className='content-container'>
                        <h1 className='forkApp-section__title'>SFW</h1>
                        <p className='forkApp-section__text'>A real gamechanger in the world of web-development</p>
                        <p className='forkApp-section__ver'>v. 2.8 For Mac and Windows</p>
                    </div>
                </section>
            </header>
            <section className='revolutionary-editor-section'>
                <div className='revolutionary-editor-section-btn'>
                    <button className='revolutionary-editor-section-btn__download'>Get Started Now</button>
                </div>
                <div className='rev-editor-content'>
                    {/* <p className='rev-edit-content_text-unlim-30'>Unlimited 30-Days Trial Period</p> */}
                    <h3 className='mainColor rev-edit-content_text-h3'>Revolutionary editor</h3>
                    <p className='rev-edit-content_text-content'>
                        Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet vulputate dignissim. Sed id metus id quam auctor
                        molestie eget ut augue.
                    </p>

                    <div className='rev-editor-btns'>
                        <button className='rev-editor-btns-btn'>
                            {/* <svg className='octicon octicon-eye' height='16' viewBox='0 0 16 16' version='1.1' width='16' aria-hidden='true'>
                                <path
                                    fill-rule='evenodd'
                                    d='M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z'
                                ></path>
                            </svg> */}
                            Watch
                        </button>
                        <a className='rev-editor-btns__counter'>1,397</a>
                        <button className='rev-editor-btns-btn'>
                            <svg className='octicon octicon-star-fill mr-1' height='16' viewBox='0 0 16 16' version='1.1' width='16' aria-hidden='true'>
                                <path
                                    fill-rule='evenodd'
                                    d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z'
                                ></path>
                            </svg>
                            Star
                        </button>
                        <a className='rev-editor-btns__counter'>21,038</a>
                        <div className='last-el-btn'>
                            <button className='rev-editor-btns-btn'>
                                <svg
                                    className='octicon octicon-git-branch text-gray'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    version='1.1'
                                    width='16'
                                    aria-hidden='true'
                                >
                                    <path
                                        fill-rule='evenodd'
                                        d='M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z'
                                    ></path>
                                </svg>
                                Fork{' '}
                            </button>
                            <a className='rev-editor-btns__counter'>4,391</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='here-is-what-you-get'>
                <div className='sections-here-is'>
                    <div className='here-is-right-block-text'>
                        <h4 className='h3-here-is-what-you-get'>Here is what you get</h4>
                    </div>
                    <div className='here-is-right-block-image'></div>
                    <div className='here-is-left-block'>
                        <div className='here-is-left-block__box'>
                            {' '}
                            <img src='./img/here-is-what-u-get/img-4.png' alt='img1' />
                            <div className='here-is-left-block__content'>
                                <h3 className='here-is-left-block__heading'>Creatred to Make The Web Better</h3>
                                <p className='here-is-left-block__text'>
                                    Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet vulputate dignissim. Sed id metus id quam
                                    auctor molestie eget ut augue.{' '}
                                </p>
                            </div>
                        </div>
                        <div className='here-is-left-block__box'>
                            {' '}
                            <img src='./img/here-is-what-u-get/img-3.png' alt='img2' />
                            <div className='here-is-left-block__content'>
                                <h3 className='here-is-left-block__heading'>Incredibly Powerful Tool</h3>
                                <p className='here-is-left-block__text'>
                                    Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur
                                    dapibus iaculis mi gravida luctus. Aliquam erat volutpat.{' '}
                                </p>
                            </div>
                        </div>
                        <div className='here-is-left-block__box'>
                            {' '}
                            <img src='./img/here-is-what-u-get/img-2.png' alt='img3' />
                            <div className='here-is-left-block__content'>
                                <h3 className='here-is-left-block__heading'>Experimental Stuff</h3>
                                <p className='here-is-left-block__text'>
                                    Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur
                                    dapibus iaculis mi gravida luctus. Aliquam erat volutpat.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='talking-section'>
                <div className='content-container content-container__flex'>
                    <h2 className='section-title mainColor' style={{marginTop:0}}>People Are Talking About SFW</h2>
                    <div className='brands-container'>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/smashing-magazine-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et
                                pulvinar venenatis.
                            </p>
                        </div>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/codrops-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                Donec euismod dolor ut ultricies consequat. Vivamus urna ipsum, rhoncus molestie neque ac, mollis eleifend nibh.
                            </p>
                        </div>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/w-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                In efficitur in velit et tempus. Duis nec odio dapibus, suscipit erat fringilla, imperdiet nibh. Morbi tempus auctor
                                felis ac vehicula.
                            </p>
                        </div>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/pixel-buddha-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et
                                pulvinar venenatis.
                            </p>
                        </div>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/creative-bloq-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                Praesent ut eros tristique, malesuada lectus vel, lobortis massa. Nulla faucibus lorem id arcu consequat faucibus.
                            </p>
                        </div>
                        <div className='brand-item'>
                            <div className='brand-item__img-container'>
                                <img className='brand-item__img' src='./img/people-are-talking/ntw-logo.png' alt='brand' />
                            </div>
                            <p className='brand-item__text'>
                                Fusce pharetra erat id odio blandit, nec pharetra eros venenatis. Pellentesque porttitor cursus massa et vestibulum.
                            </p>
                        </div>
                    </div>
                    <p className='talking-section__footer-text'>
                        Duis lobortis arcu sed arcu tincidunt feugiat. Nulla nisi mauris, facilisis vitae aliquet id, imperdiet quis nibh. Donec eget
                        elit eu libero tincidunt consequat nec elementum orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus.
                    </p>
                    <div className='talking-section__line'></div>
                </div>
            </section>
            <section className='fork-subscription-pricing-section'>
                <img src={take} alt="" />
                <h4 style={{marginTop: 0, paddingBottom: 0}} className='section-title margin'>SFW Education Pricing</h4>
                <div className='prices-container'>
                    <div className='prices-container__packages'>
                        <ul className='proposList'>
                            <li className='prices-container__head'>Basic Access</li>
                            <li className='prices-container__price'>
                                <span className='dollarSign'>$</span>29
                            </li>
                            <li className='prices-container__perMonth'>per month</li>
                            <li className='prices-container__options'>Personal License </li>
                            <li>
                                <button className='prices-container__purchaseBtn plusMargin'>purchase</button>
                            </li>
                        </ul>
                    </div>

                    <div className='prices-container__packages'>
                        <ul className='proposList'>
                            <li className='prices-container__head'>Private Access</li>
                            <li className='prices-container__price'>
                                <span className='dollarSign'>$</span>59
                            </li>
                            <li className='prices-container__perMonth'>per month</li>
                            <li className='prices-container__options'>
                                Professional License <br /> Email Support
                            </li>
                            <li>
                                <button className='prices-container__purchaseBtn'>purchase</button>
                            </li>
                        </ul>
                    </div>

                    <div className='prices-container__choosed'>
                        <ul className='proposList'>
                            <li className='prices-container__choosed__head'>Full Access</li>
                            <li className='prices-container__choosed__price'>
                                <span className='dollarSign'>&#36;</span>99
                            </li>
                            <li className='prices-container__perMonth'>per month</li>
                            <li className='prices-container__options'>
                                1-12 Team Members <br /> Phone Support
                            </li>
                            <li>
                                <button className='prices-container__choosed__purchaseBtn'>purchase</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default SinglePage
