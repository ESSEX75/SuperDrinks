import React from 'react';
import { Root, MainBackground } from './styles';
import { HomePage } from './components';
import { Product } from './components/Product';
import { IProductList } from './types';
import barberryLemonade from '../../assets/images/barberryLemonade.png';

const superJuice: IProductList = {
    title: 'Super.Juice',
    description: `
      Super Juice - это настоящий прорыв в барной индустрии. 
      Основой Super Juice являются натуральные концентрированные соки, 
      экстракты и эликсиры, что позволяет производить создавать яркие нестандартные вкусы`,
    advantages: [
        'Высокая концентрация',
        'Сочный вкус с кислинкой',
        'Низкий кост ваших напитков',
        'Эксклюзивный ассортимент',
    ],
    recipes: [
        {
            id: 1,
            image: barberryLemonade,
            title: '1Barberry lemonade',
            description: 'Все ингредиенты смешать в бокале со льдом. Украсить слайдом апельсина и веточкой мяты. ',
            gram: 'Super Juice Биаро, барбарис 30мл, содовая вода 180мл, лед 70гр',
            alt: '1Barberry lemonade',
        },
        {
            id: 2,
            image: barberryLemonade,
            title: '2Barberry lemonade',
            description: 'Все ингредиенты смешать в бокале со льдом. Украсить слайдом апельсина и веточкой мяты. ',
            gram: 'Super Juice Биаро, барбарис 30мл, содовая вода 180мл, лед 70гр',
            alt: '1Barberry lemonade',
        },
        {
            id: 3,
            image: barberryLemonade,
            title: '3Barberry lemonade',
            description: 'Все ингредиенты смешать в бокале со льдом. Украсить слайдом апельсина и веточкой мяты. ',
            gram: 'Super Juice Биаро, барбарис 30мл, содовая вода 180мл, лед 70гр',
            alt: '1Barberry lemonade',
        },
    ],
};

const Main = () => {
    return (
        <MainBackground>
            <Root>
                <HomePage />
                <Product productList={superJuice} />
            </Root>
        </MainBackground>
    );
};

export default Main;
