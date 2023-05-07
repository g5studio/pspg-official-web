
import { IBaseComponentProp } from '@shared/interfaces/base-component.interface';
import './style.scss';
import { ReactComponent as Logo } from 'assets/img/logo-light.svg';
import { useTranslation } from 'react-i18next';
import Button from '@shared/components/Button';

interface Props extends IBaseComponentProp { }

const Footer = (prop: Props) => {
    const { t } = useTranslation();
    return <footer
        data-testid='footer'
        className='bg-black-2 component-footer'
    >
        <section className='component-footer__container mx-auto d-flex flex-column justify-content-between'>
            <div>
                <Logo className='d-none d-sm-block' />
                <section className='d-flex flex-column flex-sm-row align-items-stretch justify-content-between mt-sm-14 pt-sm-0 pt-11_5 px-6 px-sm-0'>
                    <div>
                        <ul>
                            <li className='font-xs-xs font-sm-lg text-white d-flex flex-row align-items-center'>
                                <em className='icon-address me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.address')}
                            </li>
                            <li className='mt-3 font-xs-xs font-sm-lg text-white-1 d-flex flex-row align-items-center'>
                                <em className='icon-phone me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.phone')}
                            </li>
                            <li className='mt-3 font-xs-xs font-sm-lg text-white-1 d-flex flex-row align-items-center'>
                                <em className='icon-time me-3 me-sm-4 font-xs-md font-sm-lgx'></em>
                                {t('footer.worktime')}
                            </li>
                        </ul>
                        <span className='mt-15 mt-sm-10_5 text-white-1 text-bold font-xs-sm font-sm-md'>{t('footer.moreInfo')}</span>
                        <Button
                            onClick={() => { }}
                            isPrimary
                            classes='mt-sm-5 mt-3 font-xs-sm font-sm-lg py-2 py-sm-4 px-13_5 px-sm-12_5'
                        >
                            {t('footer.contactUs')}
                        </Button>
                    </div>
                    <div className='d-none d-sm-flex flex-row align-items-start'>
                        <ul className='component-footer__menu'>
                            <li className='text-orange-1 font-xl text-white-1 text-end'>{t('pages.trust.menu')}</li>
                            <li className='mt-4 font-xl text-white-1 text-end'>{t('pages.trust.enterprise')}</li>
                            <li className='mt-2_5 font-xl text-white-1 text-end'>{t('pages.trust.private')}</li>
                        </ul>
                        <ul className='component-footer__menu'>
                            <li className='text-orange-1 font-xl text-white-1 text-end'>{t('pages.esop.menu')}</li>
                            <li className='mt-4 font-xl text-white-1 text-end'>{t('pages.esop.introduction')}</li>
                        </ul>
                        <ul className='component-footer__menu'>
                            <li className='text-orange-1 font-xl text-white-1 text-end'>{t('pages.about.menu')}</li>
                            <li className='mt-4 font-xl text-white-1 text-end'>{t('pages.about.introduction')}</li>
                        </ul>
                        <ul className='component-footer__menu'>
                            <li className='text-orange-1 font-xl text-white-1 text-end'>{t('pages.services.menu')}</li>
                            <li className='mt-4 font-xl text-white-1 text-end'>{t('pages.services.insight')}</li>
                            <li className='mt-2_5 font-xl text-white-1 text-end'>{t('pages.services.ipo')}</li>
                            <li className='mt-2_5 font-xl text-white-1 text-end'>{t('pages.services.propagate')}</li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className='border-top-1 border-gray-1 d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between pt-4 component-footer__terms'>
                <span className='text-gray-1 font-xs-xs font-sm-md font-lg-lg mt-sm-0 mt-2_5'>Copyright © 2023 PS GROUP. All Rights Reserved</span>
                <ul className='d-flex flex-row align-items-center'>
                    <li className='pe-5 border-right-1 border-gray-1 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Privacy Policy</li>
                    <li className='px-5 border-right-1 border-gray-1 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Terms of Use</li>
                    <li className='ps-5 text-gray-1 font-xs-xs font-sm-md font-lg-lg cursor-pointer'>Cookie Policy</li>
                </ul>
            </section>
        </section>
    </footer>;
}

export default Footer;
