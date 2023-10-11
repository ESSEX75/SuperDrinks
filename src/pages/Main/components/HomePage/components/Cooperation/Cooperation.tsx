import React from 'react';
import {
    Root,
    TitleWrapper,
    InformationWrapper,
    IconWrapper,
    PhoneWrapper,
    MapWrapper,
    AddressWrapper,
} from './styles';
import { Typography, Link } from '../../../../../../components';
import { YMaps, Placemark, Map } from '@pbe/react-yandex-maps';

const Cooperation = () => {
    return (
        <YMaps>
            <Root>
                <InformationWrapper>
                    <TitleWrapper>
                        <Typography
                            tag="h3"
                            variant="bold"
                            sizeStyles="subTitle"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Сотрудничество
                        </Typography>
                        <Typography
                            tag="p"
                            variant="regular"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Свяжитесь с нами любым удобным способом
                        </Typography>
                    </TitleWrapper>
                    <PhoneWrapper>
                        <IconWrapper>
                            <Link variant="telegramLink" href="#" />
                            <Link variant="whatsappLink" href="#" />
                            <Link variant="mailLink" href="#" />
                        </IconWrapper>
                        <Typography
                            tag="p"
                            variant="bold"
                            sizeStyles="subTitle"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            +7 (922) 145-54-08
                        </Typography>
                    </PhoneWrapper>
                    <AddressWrapper>
                        <Typography
                            tag="p"
                            variant="regular"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            г. Екатеринбург, ул. Вайнера, 10, офис 404
                        </Typography>
                    </AddressWrapper>
                </InformationWrapper>
                <MapWrapper>
                    <Map defaultState={{ center: [56.836332, 60.594178], zoom: 14 }} width="100%" height="100%">
                        <Placemark defaultGeometry={[56.836332, 60.594178]} />
                    </Map>
                </MapWrapper>
            </Root>
        </YMaps>
    );
};

export default Cooperation;
