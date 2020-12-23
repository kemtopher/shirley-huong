import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

export default class DeluxeMarket extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Deluxe Market' />
          <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Exhibition'
                className='top'
                text="Hui OY and I created Deluxe Market, an exhibition which took place at Paragraph Gallery on February 2020. The show reimagines the Asian American supermarket as a space for examining cross-cultural identity and ideas of beauty. Asian American supermarkets were a place where we nourished our long lost Asian identities; a place where dreams and desires lie in neat multiples, and aspirations are stamped into the names of the markets themselves."
              />
            </div>
            <div className='col-12 col-md-6'>
              <Description
                title='Creative Direction'
                className={window.innerWidth > 767 ? 'top' : ''}
                text='Hui OY, Shirley Huong'
              />
              <Description
                title='Time'
                text='02/2020'
              />
              <Description
                title='Production'
                className='before-pic'
                text="Hui OY, Shirley Huong, <br/>Trenna Sharpe, Danielle Juncal, Nicole Liao"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img className='gd' src='../../assets/DeluxeMarket/1.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/2.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/3.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/4.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/5.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/6.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/7.JPG'/>
              <img className='gd' src='../../assets/DeluxeMarket/9.JPG'/>
              <img className='gd last' src='../../assets/DeluxeMarket/8.JPG'/>
            </div>
          </div>
        </div>
        <DetailFooter prev={{href: 'tuft & needle'}} next={{href: 'standard'}}/>
      </div>
    )
  }
}
