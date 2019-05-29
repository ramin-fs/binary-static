import React       from 'react';
import PaymentLogo from '../_common/components/payment_logo.jsx';
import {
    TabContainer,
    TabContent,
    TabContentContainer,
    TabsSubtabs }        from '../_common/components/tabs.jsx';

const AffiliateIbLanding = () => (
    <React.Fragment>
        <section id='page_top' className='hero'>
            <div className='container full-height gr-padding-20'>
                <div className='gr-row full-height'>
                    <div className='gr-10 gr-centered center-text align-self-center'>
                        <p className='hero-header'>Build a rewarding and long-term business relationship with an industry pioneer</p>
                        <button>Become our partner</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='statistics'>
            <div className='container gr-row full-height gr-row-align-middle center-text gr-padding-20'>
                <article className='gr-3'>
                    <h1>40K+</h1>
                    <h3>Partners</h3>
                </article>
                <article className='gr-3'>
                    <h1>$12M+</h1>
                    <h3>Partner earnings</h3>
                </article>
                <article className='gr-3'>
                    <h1>150+</h1>
                    <h3>Countries</h3>
                </article>
                <article className='gr-3'>
                    <h1>1M+</h1>
                    <h3>Clients</h3>
                </article>
            </div>
        </section>
        <section className='type-of-partner primary-bg-color'>
            <div className='container center-text gr-padding-30'>
                <h2>The types of partnerships we offer</h2>
                <p className='color-white'> Depending on what you do, you can apply as our Affiliate or Introducing Broker,
                    or both. More new clients from you means higher potential commissions.
                </p>
                <div className='has-tabs'>
                    <ul className='gr-row'>
                        <li className='gr-6'><a href='#affiliate'>Affiliate</a></li>
                        <li className='gr-6'><a href='#ib'>Introducing Broker (IB)</a></li>
                    </ul>
                    <div id='affiliate'>
                        <div className='gr-12 white-bg-color'>
                            <p className='gr-padding-20 no-margin'> Earn up to 35% in commission by referring new clients to trade on our premier
                                platforms for binary options. All commissions are credited into your account
                                by the 15th of every month.
                            </p>
                            <h3 className='secondary-color'>Commision structure</h3>
                            <TabContainer className='gr-padding-30 gr-parent full-width gr-11 gr-centered' theme='light'>
                                <TabsSubtabs
                                    id='commission_structure'
                                    className='gr-padding-20 gr-parent tab-selector-wrapper'
                                    items={[
                                        { id: 'revenue',   text: it.L('Revenue Share') },
                                        { id: 'turnover', text: it.L('Turnover') },
                                        { id: 'cpa',      text: it.L('CPA (EU Only)') },
                                        { id: 'commission_structure_selector', className: 'tab-selector' },
                                    ]}
                                />
                                <div className='tab-content'>
                                    <TabContentContainer>
                                        <TabContent id='revenue' className='selectedTab'>
                                            <p>Hello from revenue</p>
                                        </TabContent>
                                        <TabContent id='turnover'>
                                            <p>Hello from turnover</p>
                                        </TabContent>
                                        <TabContent id='cpa'>
                                            <p>Hello from cpa</p>
                                        </TabContent>
                                    </TabContentContainer>
                                </div>
                            </TabContainer>
                        </div>
                    </div>
                    <div id='ib'>
                        content of tab 2
                    </div>
                </div>
            </div>
        </section>
        <section className='how-it-works'>
            <div className='container center-text gr-padding-20'>
                <h2>How it works</h2>
                <div className='gr-row'>
                    <div className='gr-4'>
                        <h3>Sign up</h3>
                        <p>
                            Choose your preferred programme,
                            complete the application form,
                            and receive your affiliate link upon approval
                        </p>
                    </div>
                    <div className='gr-4'>
                        <h3>Introduce Binary.com</h3>
                        <p>
                            Spread the word to your audience.
                            Use your unique referral link and our
                            tried-and-tested referral tools to drive
                            traffic to Binary.com.
                        </p>
                    </div>
                    <div className='gr-4'>
                        <h3>Earn</h3>
                        <p>
                            Refer new clients to us.
                            Receive commissions based
                            on your chosen partnership
                            programme.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='who-apply'>
            <div className='container gr-padding-20 white-bg-color'>
                <h2 className='center-text'>Who can apply as a Binary.com partner</h2>
                <div className='gr-row'>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Webmaster</h4>
                        <p>Runs and manages a website that promotes Forex or binary options</p>
                    </div>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Trading guru</h4>
                        <p> Nurtures a community of potential and existing online
                            traders through insights and mentorship
                        </p>
                    </div>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Webinar speaker</h4>
                        <p>Conducts trading discussions and interactive sessions online with trading enthusiasts</p>
                    </div>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Web and software developer</h4>
                        <p>Builds trading applications and interfaces using the Binary.com API</p>
                    </div>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Social media admin</h4>
                        <p>Manages a social media page dedicated to online trading</p>
                    </div>
                    <div className='gr-6 gr-12-m gr-padding-30 gr-child'>
                        <h4>Blogger and vlogger</h4>
                        <p>Maintains a page or video channel about online trading</p>
                    </div>
                    <button className='gr-centered'>Join our global network of partners now</button>
                </div>
            </div>
        </section>
        <section className='why-partner primary-bg-color'>
            <div className='container center-text full-height gr-padding-30'>
                <h2 className='center-text color-white'>Why partner with us</h2>
                <div className='gr-row gr-padding-20'>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/commission.svg' alt='Generous commissions' className='gr-centered' />
                        <h4 className='secondary-color'>Generous commissions</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/conversion.svg' alt='High conversions' className='gr-centered' />
                        <h4 className='secondary-color'>High conversions</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/payment.svg' alt='On-time payments' className='gr-centered' />
                        <h4 className='secondary-color'>On-time payments</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/no-hidden-fees.svg' alt='No hidden fees' className='gr-centered' />
                        <h4 className='secondary-color'>No hidden fees</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/contact.svg' alt='Customer-centric partnership' className='gr-centered' />
                        <h4 className='secondary-color'>Customer-centric partnership</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/diversify-income.svg' alt='Multiple income opportunities' className='gr-centered' />
                        <h4 className='secondary-color'>Multiple income opportunities</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/marketing.svg' alt='Advanced referral tools' className='gr-centered' />
                        <h4 className='secondary-color'>Advanced referral tools</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/support-faq.svg' alt='International support' className='gr-centered' />
                        <h4 className='secondary-color'>International support</h4>
                    </div>
                    <div className='gr-4 gr-padding-10'>
                        <img src='/images/pages/affiliates_ib_landing/icons/globe.svg' alt='Multilingual platforms' className='gr-centered' />
                        <h4 className='secondary-color'>Multilingual platforms</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className='faq'>
            <div className='container center-text'>
                <h2 className='faq-header'>Frequently Asked Questions</h2>

                <div className='gr-row'>
                    <div className='gr-4 faq-item' id='faq-item-1'>
                        <p className='faq-item-header secondary-color'>Affiliate</p>

                        <ul className='faq-item-content'>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/marketing-dark.svg' alt='General' />
                                <a className='faq-item-content-text'>General</a>
                            </li>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/account-dark.svg' alt='Account Management' />
                                <a className='faq-item-content-text'>Account Management</a>
                            </li>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/general-faq-dark.svg' alt='Referral Tools' />
                                <a className='faq-item-content-text'>Referral Tools</a>
                            </li>
                        </ul>
                    </div>
                    <div className='gr-4 faq-item' id='faq-item-2'>
                        <p className='faq-item-header secondary-color'>Introducing Broker</p>

                        <ul className='faq-item-content'>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/marketing-dark.svg' alt='General' />
                                <a className='faq-item-content-text'>General</a>
                            </li>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/account-dark.svg' alt='Account Management' />
                                <a className='faq-item-content-text'>Account Management</a>
                            </li>
                            <li>
                                <img className='faq-item-content-image' src='/images/pages/affiliates_ib_landing/icons/general-faq-dark.svg' alt='Referral Tools' />
                                <a className='faq-item-content-text'>Referral Tools</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className='faq-message'>For further assistance, email us at <a href='mailto:affiliates@binary.com'>affiliates@binary.com</a></p>
            </div>
        </section>
        <section className='payment-method white-bg-color'>
            <div className='container center-text full-height gr-padding-30'>
                <h2>Receive your earnings through your favourite payment method</h2>
                <div className='gr-row gr-row-align-center'>
                    <PaymentLogo />
                </div>
            </div>
        </section>
    </React.Fragment>
);

export default AffiliateIbLanding;
